import { useState } from "react";
import useFetchCryptoData from "../../hooks/useFetchCryptoData";
import "./Converter.css";

function Converter() {
    const { cryptoData: coins, loading } = useFetchCryptoData("tickers");
    
    const[seed,setSeed]=useState("");
    const [coinPrice, setCoinPrice]=useState("");
    const [coinName, setCoinName]=useState("");

    function onChange(e){
        setSeed(e.target.value);
    }

    function onSelect(e){
        setCoinPrice(coins[e.target.selectedIndex-1].quotes.USD.price);
        setCoinName(coins[e.target.selectedIndex-1].name);
        
    }

    return (
        <div>
            {/* <h2>Converter{loading ? "" : `(${coins.length})`}</h2> */}
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <> <div className="converter-wrapper">
                    <div>
                        <h2>Write your seed money</h2>
                        <form>
                            <label>Type:&nbsp;</label>
                            <input type="number" onChange={onChange} value={seed} />&nbsp;USD
                            <button className="remove-btn" type="button" onClick={() => setSeed("")}>Remove</button>
                        </form>
                        
                    </div>
                    <div>
                        <select onChange={onSelect}>
                            <option>Select a coin</option>
                            {coins.map(coin => (
                                <option key={coin.id} value={coin.id}>
                                    {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price.toFixed(2)} USD
                                </option>
                            ))}
                        </select>
                        <div>
                            //display result message 
                        {seed !== "" && coinPrice > 0 ? (
                        <h3>You can buy {(seed / coinPrice).toFixed(2)} amount of {coinName}</h3>) : null}
                           
                        </div>
                    </div>
                </div>
                    
                </>
            )}
        </div>
    );
}

export default Converter;