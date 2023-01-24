const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const Animal = mongoose.model('Animals', { 
    name: String, 
    speed: Number,
    weight: Number,
    height: Number, 
    lifespan: Number, 
    length: Number, 
});

module.exports = { Animal };