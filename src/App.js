// import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import WelcomePage from './components/WelcomePage';
import MainPage from './components/MainPage';
import WatchList from './components/WatchList';





function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/watchlist" element={<WatchList/>}/>
      </Router>
    <NavBar />
    <MainPage />
  </div>
  )
}

export default App;