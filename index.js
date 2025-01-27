const express = require("express");
const recipes = require("./routes/recipes");
const users = require("./routes/users");

const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.static("public")); // Serve static files

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
