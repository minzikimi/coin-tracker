import { Link } from "react-router-dom";
import "./MainPage.css";
import useFetchCryptoData from "../../hooks/useFetchCryptoData";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import ShinyText from './ShinyText';
import pepe from "../../assets/pepe-pepe-logo.svg";

function MainPage() {
  const { cryptoData: coins, loading } = useFetchCryptoData("tickers");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal () {
    setIsModalOpen(true);
  } 
  function closeModal () {
    setIsModalOpen(false);
  }


  return (
    <div>
      <div className="main-page-text">
      
        <h1>Your Crypto, Your Control: Track, Analyze, Succeed</h1>
        <p>Navigate the Crypto Landscape with Precision and Confidence</p>
        <img 
          src={pepe} 
          alt="pepe" 
          className="pepe" 
          style={{ width: '150px', height: 'auto' }} 
        />
      </div>

      <div className="button-wrapper">
      
        <button 
          className="openModalBtn"
          onClick={openModal}
        >
         <ShinyText text="Convert your seed today!" disabled={false} speed={3} className='custom-class' />
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
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
  );
}

export default MainPage;