import React, { useState } from "react";
import useFetchCryptoData from "../../hooks/useFetchCryptoData";
import "./Cryptocurrencies.css";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResults from "../../components/SearchBar/SearchResults";

const Cryptocurrencies = () => {
  //use customhook to fetch api
  const { cryptoData: coins, loading } = useFetchCryptoData("tickers");
  //this is for searchbar
  const [results, setResults] = useState([]);

  return (
    <div>
      <div className="searchbar-container">
        <SearchBar coins={coins} setResults={setResults} />
        {results && results.length > 0 && <SearchResults results={results} />}
        </div>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div className="table-container">
          <table className="coin-table">
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <tr key={coin.id}>
                  <td>{coin.rank}</td>
                  <td>
                    <Link
                      to={`/detail/${coin.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img
                        src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                        alt={`${coin.name} icon`}
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "10px",
                        }}
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
};

export default Cryptocurrencies;
