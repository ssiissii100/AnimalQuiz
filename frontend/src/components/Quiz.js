import React, { useState } from "react";
import CategorySelection from "./CategorySelection";
import QuizPage from "./QuizPage";
import Result from "./Results";

const Quiz = () => {
  const [currentRound, setCurrentRound] = useState(1);
  const [userScore, setUserScore] = useState(0);
  const [animals, setAnimals] = useState(null);
  const [category, setCategory] = useState(null);
  const [correctAnimals, setCorrectAnimals] = useState(null);
  const [selectedAnimals, setSelectedAnimals] = useState(null);

  const handleNextRound = () => {
    setCurrentRound(currentRound + 1);
    // Fetch new set of animals for next round
    fetch(`http://localhost:5000${category}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data);
        setCorrectAnimals(data[0]);
      })
      .catch((error) => console.error(error));
  };

  const handleCategorySelection = (selectedCategory) => {
    setCategory(selectedCategory);
    // Fetch animals from backend based on selected category
    fetch(`http://localhost:5000/${selectedCategory}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data);
        setCorrectAnimals(data[0]);
      })
      .catch((error) => console.error(error));
  };

  const handleAnimalsSelection = (selectedAnimal) => {
    setSelectedAnimals(selectedAnimals);
    if (selectedAnimals === correctAnimals) {
      setUserScore(userScore + 1);
    }
  };

  const handleRestart = () => {
    setCurrentRound(1);
    setUserScore(0);
  };

  return (
    <div>
      {!category && (
        <CategorySelection handleCategorySelection={handleCategorySelection} />
      )}
      {category && (
        <QuizPage
          animals={animals}
          handleAnimalsSelection={handleAnimalsSelection}
          selectedCategory={category}
        />
      )}
      {currentRound > 5 && (
        <Result userScore={userScore} handleRestart={handleRestart} />
      )}
    </div>
  );
};

export default Quiz;
