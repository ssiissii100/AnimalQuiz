const express = require('express');
const router = express.Router();
const animalsController = require('./animalsController');

// get all animals' speed
router.get('/speed', animalsController.getAnimalsSpeed);

// get all animals' weight
router.get('/weight', animalsController.getAnimalsWeight);

// get all animals' height
router.get('/height', animalsController.getAnimalsHeight);

// get all animals' lifespan
router.get('/lifespan', animalsController.getAnimalsLifespan);

// get all animals' length
router.get('/length', animalsController.getAnimalsLength);

module.exports = router;