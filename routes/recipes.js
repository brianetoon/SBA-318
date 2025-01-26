const express = require("express");
const router = express.Router();

// Define routes
router
  .route("/")
  .get((req, res) => {
    res.send("GET all recipes");
  })
  .post((req, res) => {
    res.send("POST new recipe");
  });

router
  .route("/:id")
  .get((req, res) => {
    res.send(`GET recipe with ID: ${req.params.id}`);
  })
  .patch((req, res) => {
    res.send(`PATCH - update recipe with ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`DELETE recipe with ID: ${req.params.id}`);
  });

// Export the router
module.exports = router;
