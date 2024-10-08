import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './MobileView.css';


function MobileView({ onPlayerJoin }) {
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();  // Updated

  const handleSubmit = () => {
    if (playerName.trim()) {
      onPlayerJoin(playerName);
      localStorage.setItem("playerName", playerName);
      navigate("/play");  // Updated
    }
  };

  return (
    <div className="mobile-view">
      <h1>Join the Game</h1>
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Join Game</button>
    </div>
  );
}

export default MobileView;
