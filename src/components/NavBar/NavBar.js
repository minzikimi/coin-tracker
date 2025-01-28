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
                        <li><Link to="/main">Coin List</Link></li>
                        <li><Link to="/watchlist">Watch List</Link></li> 
                        
                    </ul>
                </div>
               
            </nav>
            <h1>Hello HYPER!</h1>
        </header>
      
    )
}

export default NavBar;