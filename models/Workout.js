const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // day is a date and is required
  day: {
    type: Date,
    required: true,
  },
  // exercises is an array of exercise ID's and is required
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
      required: true,
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;