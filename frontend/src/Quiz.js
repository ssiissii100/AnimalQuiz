/* Importing the React library, the useState hook, and the axios library. */
import React, { useState } from 'react';
import axios from 'axios';

const Quiz = () => {
  /* Declaring the state variables. */
  const [category, setCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const categories = ['speed', 'weight', 'height', 'lifespan', 'length'];

  /**
   * When the user selects a category, the function will get 5 random animals from the category and set
   * the questions to those animals.
   * @param e - the event object
   */
  const handleSelect = (e) => {
    setCategory(e.target.value);
    axios.get(`http://localhost:5000/${e.target.value}`)
      .then(res => {
        const randomAnimals = res.data.sort(() => Math.random() - 0.5).slice(0, 5);
        setQuestions(randomAnimals);
      })
      .catch(err => console.log(err));
  }

/**
 * When the user submits an answer, prevent the default action, check if the answer is correct, and if
 * it is, add one to the score, then move on to the next question.
 * @param e - the event object
 */
  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = questions[currentQuestion][category];
    if (e.target.value === correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  }

 /* Returning the JSX that will be rendered to the screen. */
  return (
    <div>
      <form>
        <label>Select a category:</label>
        <select onChange={handleSelect}>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </form>
      {questions.length > 0 && (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>Which animal has the highest {category}?</p>
          {questions[currentQuestion].map((question, index) => (
            <div key={index}>
              <input type="radio" name={question.name} value={question[category]} onClick={handleSubmit} />
              <label>{question.name}</label>
            </div>
          ))}
        </div>
      )}
      {currentQuestion === 4 && <h2>Your score is: {score}/4</h2>}
    </div>
  );
};

/* Exporting the Quiz component so that it can be imported into another file. */
export default Quiz;