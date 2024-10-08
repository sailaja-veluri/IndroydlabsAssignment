import React ,{ useState } from "react";
import './DesktopPlayScreen.css';

function DesktopPlayScreen({ currentQuestion, players, nextQuestion,feedback}) {
    
 const updateTheQuestion = () => {
        if (feedback === 'Correct!') {
          nextQuestion();
        }
      };
      
  return (
    <div className="desktop-play-screen">
      <h2>Current Question: {currentQuestion.question}</h2>
      <div>
        {Object.entries(currentQuestion.options).map(([key, option]) => (
          <p key={key}>
            {key}: {option}
          </p>
        ))}
      </div>
      {feedback === "Correct!" && <p>Congragulations your answer is {feedback}</p>} {/* Display feedback */}
      {feedback === "Correct!" && {updateTheQuestion}} {/* Display feedback */}

      <h3>Players:</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default DesktopPlayScreen;

  