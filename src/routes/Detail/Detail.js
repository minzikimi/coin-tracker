import { useParams } from "react-router-dom";
import useFetchCryptoData from "../../hooks/useFetchCryptoData";
import styles from "../Detail/Detail.module.css";
import Chart from "../../components/Chart";

function Detail() {
  const { id } = useParams();
  const { cryptoData: coinDetails, loading: loadingCoinDetails } = useFetchCryptoData(`coins/${id}`);
  const { cryptoData: tickerDetails, loading: loadingTickerDetails } = useFetchCryptoData(`tickers/${id}`);
  
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
    <div>
        <Chart coinId={id} />//it doesnt work 
      <h1>Detail Page for {coinDetails.name} ({coinDetails.symbol})</h1>
      <div className={styles.detailContainer}>
        <div className={styles.infoSection}>
            <h2>Coin Information:</h2>
            <p>Name: {coinDetails.name}</p>
            <p>Symbol:{coinDetails.symbol}</p>
            <p>Description: {coinDetails.description || "No description available"}</p>
        </div>
      
        <div className={styles.infoSection}>
            <h2>Ticker Information:</h2>
            <p>Rank: {tickerDetails.rank}</p>
            <p>Total Supply:{tickerDetails.total_supply}</p>
            <p>Price (USD):${parseFloat(tickerDetails.quotes?.USD?.price || 0).toFixed(2)}</p>
            <p>Market Cap: ${parseFloat(tickerDetails.quotes?.USD?.market_cap || 0).toLocaleString()}</p>
        </div>
        <button className={styles.addToWatchlistBtn}>Add to Watchlist</button>
      </div>
      
    </div>
  );
}

export default Detail;