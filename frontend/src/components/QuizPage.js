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

  const handleAnswerSelected = (e) => {
    setSelectedAnimals(e.target.value);
    setAnswered(true);
  };

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
