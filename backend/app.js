const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

app.use(cors());
// Connect Database
connectDB();

const port = process.env.PORT || 8082;


// Load Animal model
const Animal = require('./models/Animal');

app.get('/speed', (req, res) => {
    const collection = connectDB.db("animalquiz").collection("animals");
    // Find all animals and return their speed
    collection.find({}, { projection: { speed: 1 } }).toArray((err, animals) => {
      console.log(animals);
      client.close();
    });
});

app.get('/weight', (req, res) => {
  Animal.find({}, 'weight', (err, animals) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(animals);
  });
});

app.get('/height', (req, res) => {
  Animal.find({}, 'height', (err, animals) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(animals);
  });
});

app.get('/lifespan', (req, res) => {
  Animal.find({}, 'lifespand', (err, animals) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(animals);
  });
});

app.get('/lenght', (req, res) => {
  Animal.find({}, 'lenght', (err, animals) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(animals);
  });
});


/*More fuctions

// @route GET api/animals
// @description add/save animal
// @access Public
app.post('/', (req, res) => {
  Animal.create(req.body)
    .then(animal => res.json({ msg: 'Animal added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this animal' }));
});

// @route GET api/animals/:id
// @description Update animal
// @access Public
app.put('/:id', (req, res) => {
  Animal.findByIdAndUpdate(req.params.id, req.body)
    .then(animal => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/animals/:id
// @description Delete animal by id
// @access Public
app.delete('/:id', (req, res) => {
  Animal.findByIdAndRemove(req.params.id, req.body)
    .then(animal => res.json({ mgs: 'Animal entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a animal' }));
});
*/
app.listen(port, () => console.log(`Server running on port ${port}`));
