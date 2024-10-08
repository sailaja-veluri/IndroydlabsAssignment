import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MobileView from './components/MobileView/MobileView';
import DesktopView from './components/DesktopView/DesktopView';
import GamePlayView from './components/GamePlayView/GamePlayView';

import { questions } from "./questions";

function App() {
  const [players, setPlayers] = useState([]); // Track joined players
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Question index
  const [answers, setAnswers] = useState({}); // Track player answers
  const [feedback, setFeedback] = useState("");


  const handlePlayerJoin = (playerName) => {
    setPlayers([...players, playerName]);
  };


  const onAnswerSubmit = (playerName,selectedAnswer) => {
    if (selectedAnswer) {
      if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        setFeedback("Correct!");
        if (currentQuestionIndex < questions.length-1) {
           setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }else {
          return <h2>Game Over! Thanks for playing!</h2>;

        }
      } else {
        setFeedback("Incorrect. The correct answer was " + questions[currentQuestionIndex].correctAnswer);
      }
      setAnswers({ ...answers, [playerName]: selectedAnswer });
    }
  };

  const nextQuestion = () => {
    if(currentQuestionIndex < questions.length-1) {
       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }else {
      return <h2>Game Over! Thanks for playing!</h2>;
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/join" exact element={<MobileView onPlayerJoin={handlePlayerJoin} />}/>
          <Route path="/" exact element = {<DesktopView players={players} />}/>
          <Route path="/play" element ={<GamePlayView
              currentQuestion={questions[currentQuestionIndex]}
              players={players}
              onAnswerSubmit={onAnswerSubmit}
              nextQuestion={nextQuestion}
              feedback={feedback}
            />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
