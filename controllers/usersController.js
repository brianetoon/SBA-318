import users from "../data/users.js"
import {
  findById,
  generateId
} from "../utilities/index.js"

export const getAllUsers = (req, res, next) => {
  console.log(`🚀 ${req.method} request for all users`);

  try {
    res.json({ success: true, data: users });
  } catch(error) {
    next(error);
  }
}

export const getUserById = (req, res, next) => {
  console.log(`🚀 ${req.method} request for user ID: ${req.params.id}`);

  const userId = parseInt(req.params.id);
  const user = findById(users, userId);
  if (!user) return next(new Error("User not found"));

  res.json({ success: true, data: user });
}

export const createUser = (req, res, next) => {
  console.log(`🚀 ${req.method} request for a new user`);

  try {
    const newUser = req.body;
    newUser.id = generateId();
    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });

  } catch(error) {
    next(error);
  }
}