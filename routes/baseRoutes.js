import express from "express";
import recipes from "../data/recipes.js"; 

const router = express.Router();

// Home 
router.get("/", (req, res) => {
  res.redirect("/recipes");
});

// Recipes 
router.get("/recipes", (req, res) => {
  res.render("recipes", { recipes, title: "Recipes" });
});

// Create Recipe 
router.get("/recipes/create", (req, res) => {
  res.render("create-recipe", { title: "New Recipe" });
})

export default router;
