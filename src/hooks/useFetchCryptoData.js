import { useState,useEffect } from "react";


const baseURL ="https://api.coinpaprika.com/v1/";


//custom hook for fetching api
function useFetchCryptoData(endpoint){

    const [loading, setLoading] = useState(true);
    const [cryptoData, setCryptoData] = useState([]);

    async function getCryptoData(){
        try{
            const response = await fetch(`${baseURL}${endpoint}`);
            const json = await response.json();
            
            setCryptoData(json.slice(0,100));//Display only 100 crypto currencies
            setLoading(false);
        }
        catch(error){
            console.error("error fetching data", error);
            setLoading(false);
        }
    }

    useEffect (()=> {getCryptoData()}
    , [endpoint])

    return {cryptoData,loading}
}

export default useFetchCryptoData;