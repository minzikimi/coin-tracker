import style from "./Aboutus.css";

function Aboutus() {
    return (
        <div className="about-us-container">
            <h1 className="about-us-title">About Us</h1>
            <p className="about-us-paragraph">Welcome to Hyper Crypto, your gateway to navigating the crypto landscape with confidence!</p>
            
            <h2 className="about-us-subtitle">Our Features:</h2>
            <ul className="feature-list">
                <li className="feature-item"><span className="feature-highlight">Cryptocurrency Rankings:</span> Stay updated with real-time rankings of top cryptocurrencies.</li>
                <li className="feature-item"><span className="feature-highlight">Interactive Charts:</span> Visualize price trends and market movements with our dynamic charts.</li>
                <li className="feature-item"><span className="feature-highlight">Live Prices:</span> Get up-to-the-minute prices for a wide range of cryptocurrencies.</li>
                <li className="feature-item"><span className="feature-highlight">USD Converter:</span> Easily convert crypto values to USD and vice versa.</li>
                <li className="feature-item"><span className="feature-highlight">Personalized Watchlist:</span> Save and track your favorite coins, with the ability to add or remove at any time.</li>
            </ul>

            <h2 className="about-us-subtitle">Our Vision:</h2>
            <p className="about-us-paragraph">
                While Hyper Crypto starts as a simple app, we're committed to expanding our features and capabilities.
                Our goal is to empower users to navigate the complex world of cryptocurrencies with ease and confidence.
            </p>

            <h2 className="about-us-subtitle">Join Us on This Journey:</h2>
            <p className="about-us-paragraph">
                Whether you're a crypto novice or an experienced trader, Hyper Crypto is designed to be your reliable companion
                in the exciting world of digital currencies. Start exploring today and take control of your crypto journey!
            </p>
        </div>
    );
}

export default Aboutus;
