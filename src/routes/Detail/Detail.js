import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCoins } from "../../components/CoinContext/CoinContext";
import useFetchCryptoData from "../../hooks/useFetchCryptoData";
import styles from "../Detail/Detail.module.css";
import Chart from "../../components/Chart";
import { Link } from "react-router-dom";
import backSvg from "../../assets/back-svgrepo-com.svg";

function Detail() {
  const { id } = useParams();
  //use custom hook to fetch api with different end point
  const { cryptoData: coinDetails, loading: loadingCoinDetails } =
    useFetchCryptoData(`coins/${id}`);
  const { cryptoData: tickerDetails, loading: loadingTickerDetails } =
    useFetchCryptoData(`tickers/${id}`);

  //Add the data of tickerDetails to the useContext(CoinContext)
  const { setCoins, addToWatchlist } = useCoins();
  useEffect(() => {
    if (tickerDetails) {
      setCoins(tickerDetails);
    }
  }, [tickerDetails, setCoins]);

  //Show feedback message to users after adding coins
  const [message, setMessage] = useState("");
  const handleClick = () => {
    addToWatchlist(tickerDetails);
    setMessage("⭐ Added the coin!");
    setTimeout(() => setMessage(""), 1000);
  };

  console.log("Coin ID:", id);
  console.log("Coin Details:", coinDetails);
  console.log("Ticker Details:", tickerDetails);

  if (loadingCoinDetails || loadingTickerDetails) {
    return <strong>Loading...</strong>;
  }

  if (!coinDetails || !tickerDetails) {
    return <strong>Coin not found</strong>;
  }

  return (
    <div className={styles.detailPage}>
      <div className={styles.backButtonWrapper}>
        <Link to="/cryptocurrencies" className={styles.backButton}>
          <img src={backSvg}></img>
        </Link>
      </div>
      <div className={styles.detailImageWrapper}>
        <img 
          src={`https://static.coinpaprika.com/coin/${id}/logo.png`}
          alt={`${coinDetails.name} logo`}
          className={styles.logo}
        />
        <h1>{coinDetails.name} ({coinDetails.symbol})</h1>
      </div>
      
  
      
      <div className={styles.detailContainer}>
        <div className={styles.chartSection}>
          <Chart coinId={id} />
        </div>
        <div className={styles.infoSection}>
          <p>{coinDetails.description || "No description available"}</p>
          <p><span className={styles.infoTitle}>Rank : </span> {tickerDetails.rank}</p>
          <p><span className={styles.infoTitle}>Total Supply : </span> {tickerDetails.total_supply}</p>
          <p>
            <span className={styles.infoTitle}>Price (USD) : </span> $
            {parseFloat(tickerDetails.quotes?.USD?.price || 0).toFixed(2)}
          </p>
          <p>
            <span className={styles.infoTitle}>Market Cap : </span> $
            {parseFloat(tickerDetails.quotes?.USD?.market_cap || 0).toLocaleString()}
          </p>
          <button className={styles.addToWatchlistBtn} onClick={handleClick}>
            Add to Watchlist
          </button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Detail;
