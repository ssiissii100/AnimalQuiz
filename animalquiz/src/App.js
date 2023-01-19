import React, { useState } from 'react';
import animals from './animals.json';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Speed");
  const [selectedAnimals, setSelectedAnimals] = useState([]);

  const handleSelect = (e, animal) => {
    if (e.target.checked) {
      setSelectedAnimals([...selectedAnimals, animal]);
    } else {
      setSelectedAnimals(selectedAnimals.filter(a => a !== animal));
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  return (
    <div>
      <h1>Animals by</h1>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="Speed">Speed</option>
        <option value="Weight">Weight</option>
        <option value="Height">Height</option>
        <option value="Lifespan">Lifespan</option>
        <option value="Length">Length</option>
      </select>
      <ul>
        {animals.animals.map((animal, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={e => handleSelect(e, animal)}
            />
            {animal.name}: {animal[selectedCategory]}
          </li>
        ))}
      </ul>
      <div>
        Selected Animals: {selectedAnimals.length > 0 ? selectedAnimals.map(a => a.name).join(", ") : "None"}
      </div>
    </div>
  );
}

export default App;