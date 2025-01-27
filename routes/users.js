const express = require("express");
const router = express.Router();
const users = require("../data/users");
const {
  findById,
  generateId,
  handleError
} = require("../utilities");

router.route("/")
  // GET all users
  .get((req, res) => {
    console.log(`🚀 ${req.method} request for all users`);
    res.json({ success: true, data: users });
  })

  // POST new user
  .post((req, res) => {
    console.log(`🚀 ${req.method} request for a new user`);

    const newUser = req.body;
    newUser.id = generateId();
    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });
  });

router.route("/:id")
  // GET specific user
  .get((req, res) => {
    console.log(`🚀 ${req.method} request for user ID: ${req.params.id}`);

    const userId = parseInt(req.params.id);
    const user = findById(users, userId);
    if (!user) handleError(res, "user not found");

    res.json({ success: true, data: user });
  });

module.exports = router;