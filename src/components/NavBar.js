import {Link} from "react-router-dom";

function NavBar(){
    return (
        <nav>
            <ul>
            <li><Link to="/">Welcome</Link></li>
            <li><Link to="/main">Coin List</Link></li>
            <li><Link to="/watchlist">Watch List</Link></li> 
            </ul>
        </nav>
    )
}

export default NavBar;