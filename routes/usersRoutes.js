import express from "express";
const router = express.Router();
import {
  createUser,
  getAllUsers,
  getUserById
} from "../controllers/usersController.js"

router.get("/", getAllUsers)
router.get("/:id", getUserById);
router.post("/", createUser);

export default router;