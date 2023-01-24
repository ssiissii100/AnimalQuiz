const express = require('express');
const router = express.Router();
const Animal = require('./Animal');


router.get('/animals', (req, res) => {
  Animal.find((err, animals) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(animals);
  });
});

router.get('/animals/speed', (req, res) => {
    Animal.find({}, (err, animals) => {
      if (err) return res.status(500).send(err);
      res.json(animals);
    });
});

router.get('/animals/length', (req, res) => {
    Animal.find({}, (err, animals) => {
      if (err) return res.status(500).send(err);
      res.json(animals);
    });
});
router.get('/animals/lifespan', (req, res) => {
    Animal.find({}, (err, animals) => {
      if (err) return res.status(500).send(err);
      res.json(animals);
    });
});
router.get('/animals/height', (req, res) => {
    Animal.find({}, (err, animals) => {
      if (err) return res.status(500).send(err);
      res.json(animals);
    });
});
router.get('/animals/weight', (req, res) => {
    Animal.find({}, (err, animals) => {
      if (err) return res.status(500).send(err);
      res.json(animals);
    });
});

module.exports = router;