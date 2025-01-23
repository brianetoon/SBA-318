const express = require("express");
const app = express();
const port = 3000;

// Route Handlers
app.get("/", (req, res) => {
  res.send("testing...");
});

// Listen for requests...
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});