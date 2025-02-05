import React from "react";
import "./SearchResults.css";
import { Link } from "react-router-dom";

// Accepts the 'results' prop (an array of coin search results) from Cryptocurrencies .
const SearchResults = ({ results }) => {
  return (
    <div className="search-result-container">
      <div className="search-result-list">
        {results.map((coin) => (
          <div key={coin.id} className="search-result-item">
            <Link
              to={`/detail/${coin.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                alt={`${coin.name} icon`}
                style={{
                  width: "15px",
                  height: "15px",
                  marginRight: "10px",
                }}
              />
              {coin.name} ({coin.symbol})
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
