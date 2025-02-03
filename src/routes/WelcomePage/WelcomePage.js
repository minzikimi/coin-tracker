import React, { useState, useEffect } from "react";
import styles from "./WelcomePage.module.css";
import { Link } from 'react-router-dom';
import horizontalLogo from "../../assets/vertical-logo.png"

const WelcomePage = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.welcomeContainer}>
      {!submitted ? (
        <>
          <img src={horizontalLogo} alt="logo" className="logo" />
          <h1 className={styles.heading}>Welcome!</h1>
          <p className={styles.subtext}>
            Your gateway to the future of finance. Secure, fast, and reliable cryptocurrency management.
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.inputField}
              required
            />
            <button type="submit" className={styles.ctaButton}>
              Get Started
            </button>
          </form>
          <div className={styles.cryptoAnimation}>💰</div>
        </>
      ) : (
        <>
          <div className={styles.appLogo}>
            {/* <h2 className={styles.appName}>Hyper Crypto</h2> */}
          </div>
          <h1 className={styles.heading}>Hello, {name}!</h1>
          <p className={styles.subtext}>
            Ready to explore the world of cryptocurrencies? Let's get started!
          </p>
          <Link to="/main">
            <button className={styles.ctaButton}>
              Go to Dashboard
            </button>
          </Link>
          <div className={styles.cryptoAnimation}>🚀</div>
        </>
      )}
    </div>
  );
};

export default WelcomePage;