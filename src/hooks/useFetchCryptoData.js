import { useState, useEffect } from 'react';

//custom hook for fetching api
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
        if (Array.isArray(data)) {
            setCryptoData(data.slice(0, 100));
          } else {
            setCryptoData(data);
          }
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