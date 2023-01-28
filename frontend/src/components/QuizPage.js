import React, { useState, useEffect } from "react";

const QuizPage = ({ animals, selectedCategory, onCorrectAnswer }) => {
  const [selectedAnimals, setSelectedAnimals] = React.useState(null);
  const [AnimalsList, setAnimalsList] = useState(null);
  const [round, setRound] = useState(1);
  const [points, setPoints] = useState(0);
  const [weiter, setWeiter] = useState(false);
  const [Answered, setAnswered] = useState(false);
  const [Richtig, setRichtig] = useState("");
  const [disabled, setDisabled] = useState(false);

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
    console.log(AnimalsList);
    console.log(AnimalsList);
    console.log(selectedCategory);
    setDisabled(true);

    let highestLength = 0;
    let animalName = "";
    AnimalsList.forEach((item) => {
      if (highestLength < item[selectedCategory]) {
        highestLength = item[selectedCategory];
        animalName = item.name;
      }
    });
    console.log(highestLength, animalName);

    if (selectedAnimals === animalName) {
      setPoints(points + 1);
      setWeiter(true);
      setRichtig("Richtig");
      setAnswered(false);
    } else {
      setWeiter(true);
      setRichtig("Falsch");
      setAnswered(false);
    }
  };

  if (round > 5) {
    alert("Finished")();
  }

  return (
    <div>
      <h2>Round {round}/5</h2>
      <p>Select the animal with the highest {selectedCategory}</p>
      {AnimalsList === null ? <button onClick={start}>start</button> : " "}
      {AnimalsList?.map((animal, index) => (
        <div key={index}>
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
      <p>{Richtig}</p>

      {Answered ? <button onClick={handleSubmit}>Submit</button> : " "}
      {weiter ? <button onClick={getAnimals}>Weiter</button> : " "}
    </div>
  );
};

export default QuizPage;
