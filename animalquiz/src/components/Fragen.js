import animals from "./../animals.json";
import { useState } from "react";

function Fragen({ kategorie }) {
  const [disable, setDisable] = useState(false);
  //   const [selectedCategory, setSelectedCategory] = useState("Speed");
  //   const [selectedAnimals, setSelectedAnimals] = useState([]);

  //   const handleSelect = (e, animal) => {
  //     if (e.target.checked) {
  //       setSelectedAnimals([...selectedAnimals, animal]);
  //     } else {
  //       setSelectedAnimals(selectedAnimals.filter((a) => a !== animal));
  //     }
  //   };

  //   const handleCategoryChange = (e) => {
  //     setSelectedCategory(e.target.value);
  //   };
  const numbers = Array.from({ length: 20 }, (_, i) => i);
  const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
  const uniqueNumbers = shuffledNumbers.slice(0, 5);
  console.log(uniqueNumbers);
  console.log(animals[0].kategorie);
  console.log(kategorie);

  const Answer = (e) => {
    setDisable(true);
    console.log(e.currentTarget.id);
    if (animals[0].kategorie > animals[uniqueNumbers[0]].name) {
    }
  };

  return (
    <div id="quiz">
      <button
        onClick={Answer}
        id={animals[uniqueNumbers[0]].name}
        disabled={disable}
      >
        {animals[uniqueNumbers[0]].name}
      </button>
      <br />
      <br />
      <button
        onClick={Answer}
        id={animals[uniqueNumbers[1]].name}
        disabled={disable}
      >
        {animals[uniqueNumbers[1]].name}
      </button>
      <br />
      <br />
      <button
        onClick={Answer}
        id={animals[uniqueNumbers[2]].name}
        disabled={disable}
      >
        {animals[uniqueNumbers[2]].name}
      </button>
      <br />
      <br />
      <button
        onClick={Answer}
        id={animals[uniqueNumbers[3]].name}
        disabled={disable}
      >
        {animals[uniqueNumbers[3]].name}
      </button>
      <br />
      <br />
      <button
        onClick={Answer}
        id={animals[uniqueNumbers[4]].name}
        disabled={disable}
      >
        {animals[uniqueNumbers[4]].name}
      </button>
    </div>
  );
}

export default Fragen;
