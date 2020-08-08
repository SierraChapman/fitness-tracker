const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  // exercise type must be "resistance" or "cardio" and is required
  type: {
    type: String,
    required: true,
    enum: ["resistance", "cardio"],
  },
  // exercise name can be any nonempty string
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  // duration cannot be negative
  duration: {
    type: Number,
    required: true,
    min: 0,
  },
  // distance, weight, reps, and sets are not required but cannot be negative
  distance: {
    type: Number,
    required: false,
    min: 0,
  },
  weight: {
    type: Number,
    required: false,
    min: 0,
  },
  reps: {
    type: Number,
    required: false,
    min: 0,
  },
  sets: {
    type: Number,
    required: false,
    min: 0,
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;