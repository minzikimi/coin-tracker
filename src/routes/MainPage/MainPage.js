import { useEffect, useState } from "react";
import Converter from "../../components/Converter/Converter";
import { Link } from "react-router-dom";
import { useCoins } from "../../components/CoinContext/CoinContext";
import "./MainPage.css";

function MainPage() {
  const [loading, setLoading] = useState(true);
  /* const [coins, setCoins] = useState([]); */
  const { coins, setCoins, addToWatchlist } = useCoins();


  const API_URL = "https://api.coinpaprika.com/v1/tickers";

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then(data => {
        setCoins(data.slice(0, 100));
        setLoading(false);
      })
      .catch(err => {

        setLoading(false);
      });
  }, [setCoins]);


  return (
    <div>
      <Converter />
      <div className="main-page-text">
        <h1>Your Crypto, Your Control: Track, Analyze, Succeed</h1>
        <p>Navigate the Crypto Landscape with Precision and Confidence</p>
      </div>

      <div className="button-wrapper">
        <button>Convert your coin!</button>
      </div>
      
     
      {loading ? (
        <strong>Loading...</strong>
      ) : ( 
        <div className="table-container">
          <table className="coin-table">
            <thead>
                <tr>
                  <th>Ranking</th>
                  <th>Add</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin) => (
                  <tr key={coin.id}>
                    <td>{coin.rank}</td>
                    <td><button onClick={()=> addToWatchlist(coin)}>Add to wathclist</button></td>
                    <td>
                      <Link to={`/main/${coin.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <img
                        src ={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                          alt={`${coin.name} icon`}
                          style={{ width: "20px", height: "20px", marginRight: "10px" }}
                        />
                        {coin.name} ({coin.symbol})
                      </Link>
                    </td>
                    <td>${parseFloat(coin.quotes.USD.price).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
          </table>
      </div>
        
      )}
    </div>
  );
}

export default MainPage;