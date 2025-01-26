const express = require("express");
const recipes = require("./routes/recipes")

const app = express();
const port = 3000;


// Base Routes
app.get("/", (req, res) => {
  res.send("Welcome to Galactic Grub!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// API Routes
app.use("/api/recipes", recipes);

// Listen for requests...
app.listen(port, () => {
  console.log(`
    🪐 Welcome to the Galactic Grub API 🪐
    Listening for requests on port ${port}...
  `);
});