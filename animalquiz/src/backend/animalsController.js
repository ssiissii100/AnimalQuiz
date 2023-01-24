const Animal = require('./Animal');

exports.getSpeeds = (req, res, next) => {
  Animal.find({}, 'speed')
    .then(animals => res.json(animals))
    .catch(err => next(err));
};

exports.getWeights = (req, res, next) => {
  Animal.find({}, 'weight')
    .then(animals => res.json(animals))
    .catch(err => next(err));
};

exports.getHeights = (req, res, next) => {
  Animal.find({}, 'height')
    .then(animals => res.json(animals))
    .catch(err => next(err));
};

exports.getLifespans = (req, res, next) => {
  Animal.find({}, 'lifespan')
    .then(animals => res.json(animals))
    .catch(err => next(err));
};

exports.getLengths = (req, res, next) => {
  Animal.find({}, 'length')
    .then(animals => res.json(animals))
    .catch(err => next(err));
};