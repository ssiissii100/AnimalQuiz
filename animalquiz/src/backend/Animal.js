/* The above code is creating a schema for the animal model. */

/* Importing the mongoose module. */
const mongoose = require('mongoose');

/* Creating a schema for the animal model. */
const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  lifespan: {
    type: Number,
    required: true,
  },   
  length: {
    type: Number,
    required: true,
  },
});


/* Exporting the model to be used in other files. */
module.exports = mongoose.model('Animal', animalSchema);