import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
    const [animals, setAnimals] = useState([]);
    const [category, setCategory] = useState('speed');
    const [quizAnimals, setQuizAnimals] = useState([]);
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        axios.get('/animals')
            .then(res => setAnimals(res.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        setQuizAnimals(animals.sort(() => 0.5 - Math.random()).slice(0, 5));
    }, [animals, category]);

    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fastestAnimal = quizAnimals.sort((a, b) => a[category] - b[category]);
        if (answer === fastestAnimals[fastestAnimals.length - 1].name) {
            setResult('Correct!');
        } else {
            setResult('Wrong, the correct answer is ' + fastestAnimals[fastestAnimals.length - 1].name);
        }
    }

    return (
        <div>
            <form>
                <label>
                    Select category:
                    <select value={category} onChange={handleChange}>
                        <option value="speed">Speed</option>
                        <option value="weight">Weight</option>
                        <option value="height">Height</option>
                        <option value="lifespan">Lifespan</option>
                        <option value="length">Length</option>
                    </select>
                </label>
            </form>
            <p>Which animal is the fastest?</p>
            {quizAnimals.map(animal => (
                <div key={animal._id}>
                    <input type="radio" id={animal._id} name="answer" value={animal.name} onChange={(e) => setAnswer(e.target.value)} />
                    <label htmlFor={animal._id}>{animal.name}</label>
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
            <p>{result}</p>
        </div>
    );
}

export default Quiz;