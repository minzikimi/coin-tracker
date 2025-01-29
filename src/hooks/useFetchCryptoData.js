// import { useState,useEffect } from "react";


// const baseURL ="https://api.coinpaprika.com/v1/";


// //custom hook for fetching api
// function useFetchCryptoData(endpoint){

//     const [loading, setLoading] = useState(true);
//     const [cryptoData, setCryptoData] = useState([]);

//     async function getCryptoData(){
//         try{
//             const response = await fetch(`${baseURL}${endpoint}`);
//             const json = await response.json();
            
//             setCryptoData(json.slice(0,100));//Display only 100 crypto currencies
//             setLoading(false);
//         }
//         catch(error){
//             console.error("error fetching data", error);
//             setLoading(false);
//         }
//     }

//     useEffect (()=> {getCryptoData()}
//     , [endpoint])

//     return {cryptoData,loading}
// }

// export default useFetchCryptoData;


import { useState, useEffect } from 'react';

function useFetchCryptoData(endpoint) {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCryptoData() {
      try {
        const response = await fetch(`https://api.coinpaprika.com/v1/${endpoint}`);
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        setCryptoData(data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCryptoData();
  }, [endpoint]);

  return { cryptoData, loading };
}

export default useFetchCryptoData;