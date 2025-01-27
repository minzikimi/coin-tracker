import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


const Welcome = () => {
  const [name, setName] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setUser(name.trim());
      localStorage.setItem('userName', name.trim());
      navigate('/coins');
    }
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to CoinTracker Pro</h1>
      <form onSubmit={handleSubmit} className="welcome-form">
        <label htmlFor="name">Please enter your name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
        <button type="submit">Start Tracking</button>
      </form>
    </div>
  );
};

export default Welcome;