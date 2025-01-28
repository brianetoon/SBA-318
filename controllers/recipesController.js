import recipes from "../data/recipes.js";
import users from "../data/users.js";
import comments from "../data/comments.js";
import {
  findById,
  findIndex,
  generateId,
  getComments,
  getFormattedComments
} from "../utilities/index.js";

export const getAllRecipes = (req, res, next) => {
  console.log(`🚀 ${req.method} request for all recipes`);

  try {
    const recipesWithComments = recipes.map(recipe => {
      const recipeComments = getComments(comments, recipe.id);
      const formattedComments = getFormattedComments(recipeComments, users);
      return { ...recipe, comments: formattedComments }
    });
    res.json({ success: true, data: recipesWithComments});

  } catch (error) {
    next(error);
  }
}

export const createRecipe = (req, res, next) => {
  console.log(`🚀 ${req.method} request for a new recipe`);

  try {
    const newRecipe = req.body;
    newRecipe.id = generateId();
    recipes.push(newRecipe);
    res.status(201).json({ success: true, data: newRecipe });

  } catch(error) {
    next(error);
  }
}

export const getRecipeById = (req, res, next) => {
  console.log(`🚀 ${req.method} request for recipe ID: ${req.params.id}`);

  const recipeId = parseInt(req.params.id);
  const recipe = findById(recipes, recipeId);

   if (!recipe) return next(new Error("Recipe not found"));

  const recipeComments = getComments(comments, recipeId);
  const formattedComments = getFormattedComments(recipeComments, users)

  res.json({ success: true, data: { ...recipe, comments: formattedComments } });
}

export const updateRecipe = (req, res, next) => {
  console.log(`🚀 ${req.method} request for recipe ID: ${req.params.id}`);

  const recipeId = parseInt(req.params.id);
  const recipe = findById(recipes, recipeId);

  if (!recipe) return next(new Error("Recipe not found"));

  Object.assign(recipe, req.body); 
  res.json({ success: true, data: recipe });
}

export const deleteRecipe = (req, res, next) => {
  console.log(`🚀 ${req.method} request for recipe ID: ${req.params.id}`);

  const recipeId = parseInt(req.params.id);
  const recipeIndex = findIndex(recipes, recipeId);

  if (recipeIndex === -1) return next(new Error("Recipe not found"));

  const deletedRecipe = recipes.splice(recipeIndex, 1)[0];
  res.json({ success: true, data: deletedRecipe });
}

export const createComment = (req, res, next) => {
  const { userId, content } = req.body;

  if (!content) return next(new Error("Comment was not provided"));
  if (!userId) return next(new Error("User ID was not provided"));

  const recipeId = parseInt(req.params.id);
  const recipe = findById(recipes, recipeId);

  if (!recipe) return next(new Error("Recipe not found"));

  const newComment = {
    id: generateId(), 
    recipeId,
    userId,
    content,
    timestamp: new Date().toISOString(),
  };

  comments.push(newComment);
  res.status(201).json({ success: true, data: newComment });
}