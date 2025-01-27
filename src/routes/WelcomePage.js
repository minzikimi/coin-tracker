import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="welcome-container">
      <h1>Welcome to CoinTracker Pro</h1>
      <Link to="/main">
        <button>Enter</button>
      </Link>
    </div>
  );
}

export default WelcomePage;