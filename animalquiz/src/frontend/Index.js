import React, { useState } from 'react';
import axios from 'axios';
import Quiz from './Quiz';

const categories = ['speed', 'weight', 'height', 'lifespan', 'length'];

function App() {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [animals, setAnimals] = useState([]);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:8080/animals/${currentCategory}`)
      .then(res => setAnimals(res.data))
      .catch(err => console.log(err));
  }, [currentCategory]);

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
    setRound(1);
    setScore(0);
  }

  const handleAnswer = (answer) => {
    if (answer === animals[0][currentCategory]) {
      setScore(score + 1);
    }
    setAnimals(animals.slice(1));
    setRound(round + 1);
  }

  return (
    <div className="App">
      <h1>Animal Quiz</h1>
      <h2>Category: {currentCategory}</h2>
      <Quiz
        animals={animals}
        categories={categories}
        currentCategory={currentCategory}
        handleCategorySelect={handleCategorySelect}
        handleAnswer={handleAnswer}
        score={score}
        round={round}
      />
    </div>
  );
}

export default App;