import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get('/animals/height')
      .then(res => setAnimals(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Animals</h2>
      <ul>
        {animals.map(animal => (
          <li key={animal._id}>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Animals;