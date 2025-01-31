import { useCoins } from "../../components/CoinContext/CoinContext";

function WatchList(){
    const { watchlist, removeFromWatchlist } = useCoins();

    if (watchlist.length === 0){
        return <p>Your watchlist is empty. Please add some coins.</p>
    }

    return (
        <div>
    <h1>Watchlist of the coins you added</h1>;
    <ul>
        {watchlist.map((coin) => (
        <li key={coin.id}>
            <h2>{coin.name}</h2>
            <button onClick= { ()=> removeFromWatchlist(coin.id)}>Remove from your wathclist</button>
        </li>

    ))}
    </ul>
    </div>
    );
}

export default WatchList;