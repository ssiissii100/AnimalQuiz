import mongoose from 'mongoose';
import data from './data.json';
const db = config.get('mongoURI');

mongoose.connect(db , { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    
    console.log('Connected to MongoDB');

    // Check if data already exists in the collection
    Animal.countDocuments({}, (err, count) => {
        if (err) {
        console.log(err);
        } else if (count === 0) {
        // If no data, insert data from data.json file
        Animal.insertMany(data, (error, docs) => {
            if (error) {
            console.log(error);
            } else {
            console.log(`Inserted ${docs.length} rows`);
            }
            db.close();
        });
        } else {
        console.log(`Data already exists in collection, count: ${count}`);
        db.close();
        }
    });
});

