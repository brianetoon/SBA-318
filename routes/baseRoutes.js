import express from "express";
import recipes from "../data/recipes.js"; 

const router = express.Router();

// Home 
router.get("/", (req, res) => {
  res.redirect("/recipes");
});

// Recipes 
router.get("/recipes", (req, res) => {
  res.render("recipes", { recipes });
});

// Create Recipe 
router.get("/recipes/create", (req, res) => {
  res.render("create-recipe");
})

export default router;
