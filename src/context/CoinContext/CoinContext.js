import { createContext, useState, useContext } from "react";

const CoinContext = createContext();

export function useCoins() {
  const context = useContext(CoinContext);
  if (!context) {
    throw new Error("useCoins must be used within the CoinProvider");
  }
  return context;
}

export function CoinProvider({ children }) {
  //Use two states to keep track of the list of coins and the watchlist
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (coin) => {
    setWatchlist((prevWatchlist) => {
      if (prevWatchlist.some((item) => item.id === coin.id)) {
        return prevWatchlist;
      }
      return [...prevWatchlist, coin];
    });
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((coin) => coin.id !== id)
    );
  };

  return (
    <CoinContext.Provider
      value={{
        coins,
        setCoins,
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
}
