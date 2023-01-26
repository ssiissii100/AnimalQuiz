const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const animal = require('./models/animalModel');

app.use(cors());
// Connect Database
connectDB();

const port = process.env.PORT || 8082;


app.use(bodyParser.json());
app.get('/speed', (req, res) => {
    animal.find({}, (err, animals) => {
        if (err) return res.json({ success: false, error: err });
        res.json({ success: true, data: animals });
    });
});


app.listen(port, () => console.log(`Server running on port ${port}`));
