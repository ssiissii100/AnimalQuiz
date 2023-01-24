const express = require('express');
const router = express.Router();
const Animal = require('path/to/Animal');

router.get('/speed', (req, res) => {
  Animal.find({ category: 'speed' }, (err, animals) => {
    if (err) {
      res.send(err);
    } else {
      res.json(animals);
    }
  });
});

router.get('/weight', (req, res) => {
  Animal.find({ category: 'weight' }, (err, animals) => {
    if (err) {
      res.send(err);
    } else {
      res.json(animals);
    }
  });
});

router.get('/height', (req, res) => {
  Animal.find({ category: 'height' }, (err, animals) => {
    if (err) {
      res.send(err);
    } else {
      res.json(animals);
    }
  });
});

router.get('/lifespan', (req, res) => {
    Animal.find({ category: 'lifespan' }, (err, animals) => {
      if (err) {
        res.send(err);
      } else {
        res.json(animals);
      }
    });
  });

router.get('/length', (req, res) => {
Animal.find({ category: 'length' }, (err, animals) => {
    if (err) {
    res.send(err);
    } else {
    res.json(animals);
    }
});
});

module.exports = router;