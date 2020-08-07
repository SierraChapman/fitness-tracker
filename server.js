// import dependencies
const express = require("express");

// create the app
const app = express();
const PORT = process.env.PORT || 8080;

// send public file
app.use(express.static("./public"));

// add routes
app.use(require("./controllers/html-routes.js"));
app.use(require("./controllers/api-routes.js"));

// listen
app.listen(PORT, () => {
  console.log("App now listening at http://localhost:" + PORT);
});