// import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import Footer from "../src/components/Footer/Footer";
import WelcomePage from "./routes/WelcomePage/WelcomePage";
import MainPage from "./routes/MainPage/MainPage";
import WatchList from "./routes/WatchList/WatchList";
import Detail from "./routes/Detail/Detail"; 
import Aboutus from "./routes/Aboutus/Aboutus";

function App() {
  const location = useLocation(); 

  const isWelcomePage = location.pathname === "/";

  return (
    <div className="app">
     
      {!isWelcomePage && <NavBar />}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
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