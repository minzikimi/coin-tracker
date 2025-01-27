import {Link} from "react-router-dom";
import "./NavBar.css"; 

function NavBar(){
    return (
        <header>
            <nav className="nav-bar">
                <ul>
                    <li><Link to="/">Welcome</Link></li>
                    <li><Link to="/main">Coin List</Link></li>
                    <li><Link to="/watchlist">Watch List</Link></li> 
                </ul>
            </nav>
            <h1>Hello HYPER!</h1>
        </header>
      
    )
}

export default NavBar;