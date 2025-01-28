// import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import WelcomePage from './routes/WelcomePage';
import MainPage from './routes/MainPage';
import Watchlist from './routes/Watchlist';
import Detail from './routes/Detail'; 

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;