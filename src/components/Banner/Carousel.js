import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import useFetchCryptoData from '../../hooks/useFetchCryptoData';
import "./Carousel.css";
import { Link } from 'react-router-dom';

const Carousel = () => {
    const { cryptoData: coins, loading: loadingCoins, error: errorCoins } = useFetchCryptoData("tickers");
    const { cryptoData: globalData, loading: loadingGlobalData, error: errorGlobalData } = useFetchCryptoData("global");
    const [combinedData, setCombinedData] = useState([]);

    useEffect(() => {
        if (coins && globalData) {
            const combined = coins
                .filter((coin) => coin.rank && coin.rank <= 10)
                .map(coin => ({
                    ...coin,
                    market_cap_change_24h: globalData.market_cap_change_24h
                }));
            setCombinedData(combined);
        }
    }, [coins, globalData]);

    const handleDragStart = (e) => e.preventDefault();

    if (loadingCoins || loadingGlobalData) {
        return <strong>Loading...</strong>;
    }

    if (errorCoins || errorGlobalData) {
        return <strong>Error: {errorCoins?.message || errorGlobalData?.message}</strong>;
    }

    if (combinedData.length === 0) {
        return <strong>No data available</strong>;
    }

    const items = combinedData.map((coin) => (
        <Link to={`/detail/${coin.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div style={{ color:"white" }} key={coin.id} className="carousel-item">
            <img 
                src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                alt={coin.name || 'Coin'} 
                onDragStart={handleDragStart} 
                style={{ height: 100, marginBottom: 10 }}
            />
            <div>
                <span>{coin.symbol}</span>
                <span style={{ color: coin.market_cap_change_24h > 0 ? "green" : "red" }}>
                    {coin.market_cap_change_24h.toFixed(2)}% </span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 500, color:"white" }}>
                ${parseFloat(coin.quotes.USD.price).toFixed(2)}
            </div>
        </div></Link>
    ));

    const responsive = {
        0: { items: 2 },
        568: { items: 3 },
        768: { items: 4 },
        1024: { items: 5 },
        1280: { items: 6 }
    };

    return (
        <div className="carousel-wrapper">
            <h2 className="carousel-title">Trending Now</h2>
            <div className="carousel-container">
                <AliceCarousel
                    mouseTracking
                    infinite
                    autoPlayInterval={1000}
                    animationDuration={1500}
                    disableDotsControls
                    disableButtonsControls
                    responsive={responsive}
                    autoPlay
                    items={items}
                />
            </div>
        </div>
    );
};

export default Carousel;