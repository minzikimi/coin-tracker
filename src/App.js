// import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import WelcomePage from './routes/WelcomePage';
import MainPage from './routes/MainPage';
import WatchList from './routes/WatchList';





function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/watchlist" element={<WatchList/>}/>
      </Router>
    
  </div>
  )
}

export default App;