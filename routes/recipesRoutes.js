import express from "express";
const router = express.Router();
import {
  createComment,
  createRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe
} from "../controllers/recipesController.js";

router.get("/", getAllRecipes);
router.post("/", createRecipe);
router.get("/:id", getRecipeById);
router.patch("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);
router.post("/:id/comments", createComment);

export default router;