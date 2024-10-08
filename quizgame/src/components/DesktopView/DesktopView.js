import React from "react";
import { QRCodeCanvas } from 'qrcode.react';
import './DesktopView.css';


function DesktopView({ players }) {
  const appUrl = `${window.location.origin}/join`;

  return (
    <div className="desktop-view">
      <h1>Quiz Game</h1>
      <QRCodeCanvas value={appUrl} />
      <h2>Players Joined:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default DesktopView;
