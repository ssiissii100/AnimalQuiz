import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QuizPage = ({ animals, selectedCategory, points, setPoints }) => {
  const [selectedAnimals, setSelectedAnimals] = React.useState(null);
  const [AnimalsList, setAnimalsList] = useState(null);
  const [round, setRound] = useState(1);
  const [weiter, setWeiter] = useState(false);
  const [Answered, setAnswered] = useState(false);
  const [Richtig, setRichtig] = useState("");
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  /**
   * When the user clicks on an answer, the value of the answer is stored in the state variable
   * 'selectedAnimals' and the state variable 'answered' is set to true.
   * @param e - the event object
   */
  const handleAnswerSelected = (e) => {
    setSelectedAnimals(e.target.value);
    setAnswered(true);
  };
/**
 * It takes an array, makes a copy of it, then picks 5 random elements from the copy, and returns them
 * in a new array.
 * 
 * The reason we make a copy of the array is so that we can remove elements from it. If we didn't do
 * this, we'd end up with the same element being picked multiple times.
 * 
 * The reason we remove elements from the array is so that we don't pick the same element twice.
 * 
 * The reason we use a for loop is so that we can pick 5 elements.
 * 
 * The reason we use Math.random() is so that we can pick a random element.
 * 
 * The reason we use Math.floor() is so that we can get a whole number.
 * 
 * The reason we use splice() is so that we can remove an element from the array.
 * 
 * The reason we use push() is so that
 * @param arr - the array you want to pick from
 * @returns An array of 5 random elements from the original array.
 */

  const pickRandom = (arr) => {
    let randomArr = [...arr];
    let result = [];
    for (let i = 0; i < 5; i++) {
      let randomIndex = Math.floor(Math.random() * randomArr.length);
      result.push(randomArr[randomIndex]);
      randomArr.splice(randomIndex, 1);
    }
    return result;
  };

  /**
   * Const getAnimals = () => {
   *     setAnimalsList(pickRandom(animals));
   *     setWeiter(false);
   *     setRichtig("");
   *     setRound(round + 1);
   *     setDisabled(false);
   *     document.getElementsByClassName("Animals")[0].checked = false;
   *     document.getElementsByClassName("Animals")[1].checked = false;
   *     document.getElementsByClassName("Animals")[2].checked = false;
   *     document.getElementsByClassName("Animals")[3].checked = false;
   *     document.getElementsByClassName("Animals")[4].checked = false;
   *   };
   */
  const getAnimals = () => {
    setAnimalsList(pickRandom(animals));
    setWeiter(false);
    setRichtig("");
    setRound(round + 1);
    setDisabled(false);
    document.getElementsByClassName("Animals")[0].checked = false;
    document.getElementsByClassName("Animals")[1].checked = false;
    document.getElementsByClassName("Animals")[2].checked = false;
    document.getElementsByClassName("Animals")[3].checked = false;
    document.getElementsByClassName("Animals")[4].checked = false;
  };
  const start = () => {
    setAnimalsList(pickRandom(animals));
  };

  /**
   * The function compares the user's answer to the correct answer and then sets the state of the app
   * accordingly.
   */
  const handleSubmit = () => {
    setDisabled(true);

    let highestLength = 0;
    let animalName = "";
    AnimalsList.forEach((item) => {
      if (highestLength < item[selectedCategory]) {
        highestLength = item[selectedCategory];
        animalName = item.name;
      }
    });

    if (selectedAnimals === animalName) {
      setPoints(points + 1);
      setWeiter(true);
      setRichtig("Richtig!");
      setAnswered(false);
    } else {
      setWeiter(true);
      setRichtig("Falsch!");
      setAnswered(false);
    }
  };

  if (round > 5) {
    navigate("/test");
  }

  return (
    <div>
      <h2 id="quizRound">Round {round}/5</h2>
      <h3 id="explanationTitle">
        Select the animal with the highest {selectedCategory}
      </h3>
      {AnimalsList === null ? (
        <button onClick={start} id="startButton">
          start
        </button>
      ) : (
        " "
      )}
      {AnimalsList?.map((animal, index) => (
        <div key={index} id="radioButtons">
          <input
            className="Animals"
            type="radio"
            value={animal.name}
            name="animals"
            onChange={handleAnswerSelected}
            disabled={disabled}
          />
          <label>{animal.name}</label>
        </div>
      ))}

      {Richtig == "Richtig!" ? (
        <p id="correct" className="richtig">
          {Richtig}
        </p>
      ) : Richtig === "Falsch!" ? (
        <p id="false" className="richtig">
          {Richtig}
        </p>
      ) : (
        <p> &nbsp;</p>
      )}
      {Answered ? <button onClick={handleSubmit}>Submit</button> : " "}
      {weiter ? (
        <button onClick={getAnimals} id="WeiterButton">
          Weiter
        </button>
      ) : (
        " "
      )}
    </div>
  );
};

export default QuizPage;
