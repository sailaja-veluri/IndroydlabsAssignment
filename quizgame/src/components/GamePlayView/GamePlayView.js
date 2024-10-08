import React, {useState} from "react";
import MobilePlayScreen from "./MobilePlayScreen";
import DesktopPlayScreen from "./DesktopPlayScreen";
import './GamePlayView.css';


function GamePlayView({ currentQuestion, players, onAnswerSubmit, nextQuestion ,feedback}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const isMobile = window.innerWidth < 768; // Simple check for mobile screens
  return (
    <div className="game-play-view">
      {isMobile ? <MobilePlayScreen
        currentQuestion={currentQuestion}
        onAnswerSubmit={onAnswerSubmit}
        feedback = {feedback}
      /> :
      <DesktopPlayScreen
        currentQuestion={currentQuestion}
        players={players}
        nextQuestion={nextQuestion}
      />}
    </div>
  );
}

export default GamePlayView;
