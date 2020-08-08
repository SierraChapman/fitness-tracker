// import dependencies
const express = require("express");
const mongoose = require("mongoose");

// create the app
const app = express();
const PORT = process.env.PORT || 8080;

// parse JSON in request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// send public file
app.use(express.static("./public"));

// connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// add routes
app.use(require("./controllers/html-routes.js"));
app.use(require("./controllers/api-routes.js"));

// listen
app.listen(PORT, () => {
  console.log("App now listening at http://localhost:" + PORT);
});