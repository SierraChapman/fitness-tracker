// import dependencies 
const express = require("express");
const db = require("../models");

// create router
const router = express.Router();

// add routes

/*
GET /api/workouts
for getting array of workout data
returns JSON array of workout objects
*/

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

/*
PUT /api/workouts/:id
for adding an exercise to a workout
accepts JSON
returns JSON
*/

router.put("/api/workouts/:id", (req, res) => {
  // define options for update
  const filter = { _id: req.params.id };
  const update = { $push: { exercises: req.body } };

  // new: true returns the updated workout object
  db.Workout.findOneAndUpdate(filter, update, {new: true })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

/*
POST /api/workouts
for creating a workout
accepts JSON
resturns JSON
*/

router.post("/api/workouts", (req, res) => {
  // determine day
  const day = Date.now();

  db.Workout.create({...req.body, day})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

/*
Routes needed:

GET /api/workouts/range
for getting workouts within a range
returns JSON

*/

// export router
module.exports = router;