/* Importing the React library, the useState hook, the axios library, and the Quiz component. */
import React, { useState } from 'react';
import axios from 'axios';
import Quiz from './Quiz';

/* Creating an array of strings that will be used to set the current category. */
const categories = ['speed', 'weight', 'height', 'lifespan', 'length'];

function App() {
  /* This is declaring the state variables that will be used in the app. */
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [animals, setAnimals] = useState([]);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  /* This is a React hook that is used to fetch data from the server. */
  useEffect(() => {
    axios.get(`http://localhost:8080/animals/${currentCategory}`)
      .then(res => setAnimals(res.data))
      .catch(err => console.log(err));
  }, [currentCategory]);

  /**
   * When the user clicks on a category, the current category is set to the category that was clicked,
   * the round is set to 1, and the score is set to 0
   * @param category - the category that was selected
   */
  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
    setRound(1);
    setScore(0);
  }

 /**
  * If the answer is correct, increase the score by 1 and remove the first item from the animals array
  * @param answer - the answer the user selected
  */
  const handleAnswer = (answer) => {
    if (answer === animals[0][currentCategory]) {
      setScore(score + 1);
    }
    setAnimals(animals.slice(1));
    setRound(round + 1);
  }

 /* Returning the JSX that will be rendered to the page. */
  return (
    <div>
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

/* Exporting the App component so that it can be imported into other files. */
export default App;