import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);

  const API_URL="https://api.coinpaprika.com/v1/coins"

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then(data => {
        console.log(data);
        setCoins(data.slice(0,100));
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (error) return <div role="alert">Error: {error}</div>;

  return (
    <div className="app">
      <h1>Cryptocurrency Market Data</h1>
      {loading ? (
        <strong>Loading... </strong>
      ) : ( 
          <ul>
          {coins.map((coin)=>(
            <li>
              {coin.name} ({coin.symbol})
            </li>
          ))}
          </ul>
      )}
    </div>
  );
}

export default App;