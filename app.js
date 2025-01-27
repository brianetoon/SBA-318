// const express = require("express");
// const recipes = require("./routes/recipes");
// const users = require("./routes/users");

import express from "express";
import recipes from "./routes/recipes.js";
import users from "./routes/users.js";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Base Routes
app.get("/", (req, res) => {
  res.send("Welcome to Galactic Grub!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// API Routes
app.use("/api/recipes", recipes);
app.use("/api/users", users);

// Start Server
app.listen(port, () => {
  console.log(`
    🪐 Welcome to the Galactic Grub API 🪐
    Listening for requests on port ${port}...
  `);
});
