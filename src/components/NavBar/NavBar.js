import { Link } from "react-router-dom";
import "./NavBar.css"; 
import horizontalLogo from "../../assets/horizontal-logo.png"

function NavBar(){
    return (
        <header>
            <nav className="nav-bar">
                <div className="nav-content">
                    <Link to="/">
                        <img src={horizontalLogo} alt="logo" className="logo" />
                    </Link>
                    <ul className="nav-links">
                        <li><Link to="/main">Home</Link></li>
                        <li><Link to="/cryptocurrencies">Cryptocurrencies</Link></li>
                        <li><Link to="/watchlist">Watchlist</Link></li> 
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