// import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CoinProvider } from "./components/CoinContext/CoinContext";
import NavBar from "../src/components/NavBar/NavBar";
import Footer from "../src/components/Footer/Footer";
import WelcomePage from "./routes/WelcomePage/WelcomePage";
import MainPage from './routes/MainPage/MainPage';
import WatchList from './routes/WatchList/WatchList';
import Detail from './routes/Detail/Detail'; 

function App() {
  return (
    <CoinProvider>
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </CoinProvider>
  );
}

export default App;