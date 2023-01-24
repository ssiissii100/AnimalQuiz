const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const animalsRouter = require('./routes/animalsRouter');

const app = express();
const port = process.env.APP_PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://root:root@mongo:27017/animalquiz', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use('/animals', animalsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});