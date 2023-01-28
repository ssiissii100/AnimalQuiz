import React, { useState, useEffect } from "react";
import round from "./Results";
import { handleNextRound } from "./Quiz";

const QuizPage = ({ animals, selectedCategory, onCorrectAnswer }) => {
  const [selectedAnimals, setSelectedAnimals] = React.useState(null);

  const handleAnswerSelected = (e) => {
    setSelectedAnimals(e.target.value);
  };

  const handleSubmit = () => {
    // animals[selectedCategory];
  };

  return (
    <div>
      {/* <h2>Round {round}</h2> */}
      <p>Select the animal with the highest {selectedCategory}</p>
      {animals?.map((animal, index) => (
        <div key={index}>
          <input
            type="radio"
            value={animal.name}
            name="animals"
            onChange={handleAnswerSelected}
          />
          <label>{animal.name}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuizPage;
