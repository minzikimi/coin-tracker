// import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CoinProvider } from "./components/CoinContext/CoinContext";
import NavBar from "../src/components/NavBar/NavBar";
import Footer from "../src/components/Footer/Footer";
import WelcomePage from "./routes/WelcomePage/WelcomePage";
import MainPage from "./routes/MainPage/MainPage";
import WatchList from "./routes/WatchList/WatchList";
import Detail from "./routes/Detail/Detail"; 
import Aboutus from "./routes/Aboutus/Aboutus";
import Cryptocurrencies from "./routes/Cryptocurrencies/Cryptocurrencies";


function App() {
  const location = useLocation(); 

  const isWelcomePage = location.pathname === "/";

  return (
    <div className="app">
     {/* Render Footer only if not on WelcomePage */}
      {!isWelcomePage && <NavBar />}
      <CoinProvider> 
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      </CoinProvider> 
      {/* Render Footer only if not on WelcomePage */}
      {!isWelcomePage && <Footer />}
    </div>
  );
}

const AppWrapper = () => (

  <Router>
    <App />
  </Router>

);

export default AppWrapper;