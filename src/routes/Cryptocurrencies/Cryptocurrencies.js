import React from 'react'
import useFetchCryptoData from '../../hooks/useFetchCryptoData';
import "./Cryptocurrencies.css";
import { Link } from 'react-router-dom';




const Cryptocurrencies = () => {
  const { cryptoData: coins, loading } = useFetchCryptoData('tickers');
  return (
    <div>
       <h2 style={{textAlign: 'center', color: 'white'}}>Add search bar here</h2>
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
                    <Link to={`/detail/${coin.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                      <img
                        src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
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
  )
}

export default Cryptocurrencies
