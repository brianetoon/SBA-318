const express = require("express");
const router = express.Router();
const recipes = require("../data/recipes");
const users = require("../data/users");
const comments = require("../data/comments");
const generateId = require("../utilities/generateId");
const findById = require("../utilities/findById");
const findIndex = require("../utilities/findIndex");
const handleError = require("../utilities/handleError");
const getComments = require("../utilities/getComments");
const getFormattedComments = require("../utilities/getFormattedComments");

router.route("/")
  // GET all recipes
  .get((req, res) => {
    console.log(`🚀 ${req.method} request for all recipes`);

    const recipesWithComments = recipes.map(recipe => {
      const recipeComments = getComments(comments, recipe.id);
      const formattedComments = getFormattedComments(recipeComments, users);

      return { ...recipe, comments: formattedComments }
    })

    res.json({ success: true, data: recipesWithComments});
  })

  // POST new recipe
  .post((req, res) => {
    console.log(`🚀 ${req.method} request for a new recipe`);

    const newRecipe = req.body;
    newRecipe.id = generateId();
    recipes.push(newRecipe);
    res.status(201).json({ success: true, data: newRecipe });
  });

router.route("/:id")
  // GET specific recipe
  .get((req, res) => {
    console.log(`🚀 ${req.method} request for recipe ID: ${req.params.id}`);

    const recipeId = parseInt(req.params.id);
    const recipe = findById(recipes, recipeId);

    if (!recipe) handleError(res, "Recipe not found");

    const recipeComments = getComments(comments, recipeId);
    const formattedComments = getFormattedComments(recipeComments, users)

    res.json({ success: true, data: { ...recipe, comments: formattedComments } });
  })

  // PATCH (update) specific recipe
  .patch((req, res) => {
    console.log(`🚀 ${req.method} request for recipe ID: ${req.params.id}`);

    const recipeId = parseInt(req.params.id);
    const recipe = findById(recipes, recipeId);
    if (!recipe) handleError(res, "Recipe not found");

    Object.assign(recipe, req.body); 
    res.json({ success: true, data: recipe });
  })
  
  // DELETE specific recipe
  .delete((req, res) => {
    console.log(`🚀 ${req.method} request for recipe ID: ${req.params.id}`);

    const recipeId = parseInt(req.params.id);
    const recipeIndex = findIndex(recipes, recipeId)
    if (recipeIndex === -1) handleError(res, "Recipe not found");
  
    const deletedRecipe = recipes.splice(recipeIndex, 1)[0];
    res.json({ success: true, data: deletedRecipe });
  });


router.route("/:id/comments")
  // POST new comment to a recipe
  .post((req, res) => {
    const { userId, content } = req.body;

    if (!content) handleError(res, "Comment was not provided");
    if (!userId) handleError(res, "User ID was not provided");

    const recipeId = parseInt(req.params.id);
    const recipe = findById(recipes, recipeId);

    if (!recipe) handleError(res, "Recipe not found");

    const newComment = {
      id: generateId(), 
      recipeId,
      userId,
      content,
      timestamp: new Date().toISOString(),
    };

    comments.push(newComment);
    res.status(201).json({ success: true, data: newComment });
  });

module.exports = router;
