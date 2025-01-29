import {Link} from "react-router-dom";
import "./NavBar.css"; 
import horizontalLogo from "../../assets/horizontal-logo.png"

function NavBar(){
    return (
        <header>
            <nav className="nav-bar">
                <div className="nav-content">
                <img src={horizontalLogo} alt="logo" className="logo" />
                    <ul className="nav-links">
                        <li><Link to="/">Welcome</Link></li>
                        <li><Link to="/main">Cryptocurrencies</Link></li>
                        <li><Link to="/watchlist">Watch List</Link></li> 
                        
                    </ul>
                </div>
               
            </nav>
            <div className="text-container">
                <h2>Hello name!</h2>
            </div>
            
        </header>
      
    )
}

export default NavBar;