const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: { type: String, required: true },
  speed: { type: Number, required: true },
  height: { type: Number, required: true },
  length: { type: Number, required: true },
  lifespan: { type: Number, required: true },
  weight: { type: Number, required: true }
});

module.exports = mongoose.model('Animal', animalSchema);