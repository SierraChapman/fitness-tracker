// import dependencies 
const express = require("express");

// create router
const router = express.Router();

// add routes
router.get("/", (req, res) => {
  res.sendFile("../public/index.html");
});

// GET /exercise serves exercise.html

// GET /stats serves stats.html

// export router
module.exports = router;