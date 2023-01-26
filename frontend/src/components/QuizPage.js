import React from 'react';
import round  from "./Results"
import {handleNextRound} from './Quiz';

const QuizPage = ({ animals, selectedCategory, onCorrectAnswer }) => {
    const [selectedAnimals, setSelectedAnimals] = React.useState(null);

    if (!animals || !selectedCategory) {
        return <p>Select a category to start the quiz.</p>;
    }

    const handleAnswerSelected = (e) => {
        setSelectedAnimals(e.target.value);
    }

    const handleSubmit = () => {
        onCorrectAnswer(animals[0]);
    }

    return (
        <div>
            <h2>Round {round}</h2>
            <p>Select the animal with the highest {selectedCategory}</p>
            {animals.map((animal, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        value={animal.name}
                        checked={selectedAnimals === animal.name}
                        onChange={handleAnswerSelected}
                    />
                    <label>{animal.name} ({animal[selectedCategory]})</label>
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
            {/*<button onClick={handleNextRound}>Next Round</button>*/}
        </div>
    );
}

export default QuizPage;