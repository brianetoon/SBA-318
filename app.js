import express from "express";
import recipesRoutes from "./routes/recipesRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import baseRoutes from "./routes/baseRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Base Routes
app.use("/", baseRoutes);

// API Routes
app.use("/api/recipes", recipesRoutes);
app.use("/api/users", usersRoutes);

// Error Handler Middleware
app.use(errorHandler);

// Start Server
app.listen(port, () => {
  console.log(`
    🪐 Welcome to the Galactic Grub API 🪐
    Listening for requests on port ${port}...
  `);
});
