// routes/api/animals.js

const express = require('express');
const router = express.Router();

// Load Animal model
const Animal = require('../../models/Animal');


// @route GET api/animals
// @description Get all animals
// @access Public
router.get('/', (req, res) => {
  Animal.find()
    .then(animals => res.json(animals))
    .catch(err => res.status(404).json({ noanimalsfound: 'No Animals found' }));
});

router.get('/speed', (req, res) => {
  Animal.find({}, (err, animals) => {
    if (err) return res.json({ success: false, error: err });
    res.json({ success: true, data: animals });
  });
});

router.get('/weight', (req, res) => {
  Animal.find({}, 'weight', (err, animals) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(animals);
  });
});

router.get('/height', (req, res) => {
  Animal.find({}, 'height', (err, animals) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(animals);
  });
});

router.get('/lifespan', (req, res) => {
  Animal.find({}, 'lifespand', (err, animals) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(animals);
  });
});

router.get('/lenght', (req, res) => {
  Animal.find({}, 'lenght', (err, animals) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(animals);
  });
});


/*More fuctions

// @route GET api/animals
// @description add/save animal
// @access Public
router.post('/', (req, res) => {
  Animal.create(req.body)
    .then(animal => res.json({ msg: 'Animal added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this animal' }));
});

// @route GET api/animals/:id
// @description Update animal
// @access Public
router.put('/:id', (req, res) => {
  Animal.findByIdAndUpdate(req.params.id, req.body)
    .then(animal => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/animals/:id
// @description Delete animal by id
// @access Public
router.delete('/:id', (req, res) => {
  Animal.findByIdAndRemove(req.params.id, req.body)
    .then(animal => res.json({ mgs: 'Animal entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a animal' }));
});
*/
module.exports = router;