import React, { useState } from "react";
import './MobilePlayScreen.css';


function MobilePlayScreen({ currentQuestion, onAnswerSubmit,feedback}) {
  const playerName = localStorage.getItem("playerName");
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      onAnswerSubmit(playerName, selectedAnswer);
    }
  };

  return (
    <div className="mobile-play-screen">
      <h2>{currentQuestion.question}</h2>
      <div>
        {currentQuestion.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedAnswer === option}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
            {option}
          </div>
        ))}
      </div>
      <button onClick={handleSubmitAnswer}>Submit Answer</button>
      {feedback && <p>{feedback}</p>} {/* Display feedback */}

    </div>
  );
}

export default MobilePlayScreen;
