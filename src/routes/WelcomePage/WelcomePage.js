import React from 'react';
import { Link } from 'react-router-dom';
import "../WelcomePage/WelcomePage.css";

function WelcomePage() {
  return (
    <div className="welcome-container">
      <h1>Welcome page will be rendered here</h1>
      <Link to="/main">
        <button className="enter-button">Enter</button>
      </Link>
    </div>
  );
}

export default WelcomePage;