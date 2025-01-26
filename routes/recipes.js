const express = require("express");
const router = express.Router();

// Mock data for testing
let recipes = [
  { id: 1, name: "Bantha Burger", ingredients: ["Bantha meat", "Spices"], steps: ["Grill meat", "Assemble burger"] },
  { id: 2, name: "Womp Rat Stew", ingredients: ["Womp rat", "Broth"], steps: ["Cook meat", "Simmer with broth"] },
];

router.route("/")

  // GET all recipes
  .get((req, res) => {
    console.log(`🚀 ${req.method} Request for all recipes`);
    res.json({ success: true, data: recipes });
  })

  // POST new recipe
  .post((req, res) => {
    console.log(`🚀 ${req.method} request for a new recipe`);
    const newRecipe = req.body;
    newRecipe.id = Math.floor(Math.random() * 1000000);
    recipes.push(newRecipe);
    res.status(201).json({ success: true, data: newRecipe });
  });

router.route("/:id")

  // GET specific recipe
  .get((req, res) => {
    console.log(`🚀 ${req.method} request for recipe ID: ${req.params.id}`);
    const recipe = recipes.find((recipe) => recipe.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).json({ success: false, message: "Recipe not found" });
    res.json({ success: true, data: recipe });
  })

  // PATCH (update) specific recipe
  .patch((req, res) => {
    console.log(`🚀 ${req.method} request for recipe ID: ${req.params.id}`);

    const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
    if (!recipe) {
      return res.status(404).json({ success: false, message: "Recipe not found" });
    }

    Object.assign(recipe, req.body); 
    res.json({ success: true, data: recipe });
  })

  // DELETE specific recipe
  .delete((req, res) => {
    console.log(`🚀 ${req.method} request for recipe ID: ${req.params.id}`);

    const recipeIndex = recipes.findIndex((recipe) => recipe.id === parseInt(req.params.id));
    if (recipeIndex === -1) {
      return res.status(404).json({ success: false, message: "Recipe not found" });
    }
  
    const deletedRecipe = recipes.splice(recipeIndex, 1)[0];
    res.json({ success: true, data: deletedRecipe });
  });

module.exports = router;
