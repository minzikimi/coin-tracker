import { useParams } from "react-router-dom";
import useFetchCryptoData from "../../hooks/useFetchCryptoData";

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
      <h1>Detail Page for {coinDetails.name} ({coinDetails.symbol})</h1>
      <div>
        <h2>Coin Information:</h2>
        <p><strong>Name:</strong> {coinDetails.name}</p>
        <p><strong>Symbol:</strong> {coinDetails.symbol}</p>
        <p><strong>Description:</strong> {coinDetails.description || "No description available"}</p>
      </div>
      <div>
        <h2>Ticker Information:</h2>
        <p><strong>Rank:</strong> {tickerDetails.rank}</p>
        <p><strong>Total Supply:</strong> {tickerDetails.total_supply}</p>
        <p><strong>Price (USD):</strong> ${parseFloat(tickerDetails.quotes?.USD?.price || 0).toFixed(2)}</p>
        <p><strong>Market Cap:</strong> ${parseFloat(tickerDetails.quotes?.USD?.market_cap || 0).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Detail;