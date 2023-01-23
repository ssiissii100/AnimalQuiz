import React, { useState, useEffect } from 'react';
import mongoose from 'mongoose';

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("name");

  useEffect(() => {
    const animalSchema = new mongoose.Schema({
      name: String,
      speed: String,
      weight: String,
      height: String,
      lifespan: String,
      length: String
    });

    const Animal = mongoose.model('animals', animalSchema);

    Animal.find({},(err, animals) => {
      if (err) {
        console.error(err);
      } else {
        setAnimals(animals);
      }
    });
  }, []);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
       <h1>Animals</h1>
      <select onChange={handleChange}>
        <option value="name">Name</option>
        <option value="speed">Speed</option>
        <option value="weight">Weight</option>
        <option value="height">Height</option>
        <option value="lifespan">Lifespan</option>
        <option value="length">Length</option>
      </select>
      <ul>
        {animals.map((animal) => (
          <li key={animal._id}>
            <p>{selectedCategory}: {animal[selectedCategory]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Animals;