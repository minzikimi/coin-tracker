import { useEffect,useState } from "react";
import Converter from "../components/Converter";


function MainPage(){

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
      <div>
        <Converter />
        
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
    );}


    export default MainPage;