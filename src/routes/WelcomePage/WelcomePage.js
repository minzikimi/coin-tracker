import React, { useState } from "react";
import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className={styles.welcomeContainer}>
      {!submitted ? (
        <>
          <h1 className={styles.heading}>Welcome to Hyper Crypto</h1>
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
            <h2 className={styles.appName}>Hyper Crypto</h2>
          </div>
          <h1 className={styles.heading}>Welcome, {name}!</h1>
          <p className={styles.subtext}>
            Ready to explore the world of cryptocurrencies? Let’s get started!
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => alert("Redirecting to dashboard...")}
          >
            Go to Dashboard
          </button>
          <div className={styles.cryptoAnimation}>🚀</div>
        </>
      )}
    </div>
  );
};

export default WelcomePage;