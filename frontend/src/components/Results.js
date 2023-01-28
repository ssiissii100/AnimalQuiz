import React from 'react';

const Results = ({ round, score, handleNewRound }) => {
    if (round !== 5) {
        return null;
    }

    return (
        <div>
            <h2>Quiz Results</h2>
            <p>You scored {score} points out of 5</p>
            <button onClick={handleNewRound}>Start a new round</button>
        </div>
    );
}

export default Results;