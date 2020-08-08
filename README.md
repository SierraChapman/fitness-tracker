# Fitness Tracker

## Description

This application allows users to add exercises to a their current workout or to a new workout and view information about their previous workouts. The data is stored in a MongoDB database and manipulated with the Mongoose library. The frontend was provided by Trilogy Education Services.

## Table of Contents

* [Installation](#installation)

* [Demonstration](#demonstration)

* [Code Highlights](#code-highlights)

* [Technologies Used](#technologies-used)

* [Deployed Link](#deployed-link)

* [Acknowledgements](#acknowledgements)

* [Questions](#questions)

## Installation

After downloading this repository, run the following command inside the repository to install the necessary dependencies:

```
npm install
```

To run the server locally, run the following command:

```
npm start
```

## Demonstration

Creating the first workout:

![Demonstration of creating a workout](readme-gifs/fitness-tracker-1.gif)

Adding more exercises to the first workout:

![Demonstration adding exercises to the existing workout](readme-gifs/fitness-tracker-2.gif)

Viewing the stats dashboard:

![Demonstration of the stats page](readme-gifs/fitness-tracker-3.gif)

## Code Highlights

To impose structure on the database, I created Mongoose schemas for exercises and workouts and a model for workouts. The following code snippet defines the workout schema. It includes a date and an array of exercises, which must adhere to the exercise schema (separately defined).

```javascript
const WorkoutSchema = new Schema({
  // day is a date and is required
  day: {
    type: Date,
    required: true,
  },
  // exercises is an array of exercise ID's and is required
  exercises: {
      type: [ExerciseSchema],
      required: true,
      default: []
    }
});
```

## Technologies Used

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [Heroku](https://www.heroku.com/)
* [MongoDB](https://www.mongodb.com/)
* [Node.js](https://nodejs.org/en/)
* [Node Package Manager (NPM)](https://www.npmjs.com/)
* [Express.js](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/)

## Deployed Link

* [See Live Site](https://fitness-tracker-sc.herokuapp.com/)

## Acknowledgements

* The frontend (the files within the public folder) and the seed file were provided by Trilogy Education Services, A 2U, Inc. I made some minor changes to the provided files.

## Questions

If you have any questions about the repo, open an issue or contact me directly at siechap@gmail.com. You can find more of my work at [SierraChapman](https://github.com/SierraChapman/).

