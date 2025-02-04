import "./Footer.css";
import { Link } from "react-router-dom";
import facebookLogo from "../../assets/social-facebook-svgrepo-com.svg";
import instagramLogo from "../../assets/instagram-svgrepo-com.svg";
import xLogo from "../../assets/icons8-x-50.png";
import youtubeLogo from "../../assets/social-youtube-svgrepo-com.svg"
import linkedinLogo from "../../assets/social-linkedin-svgrepo-com.svg"



function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><Link to="/main">Home</Link></li>
            <li><Link to="/cryptocurrencies">Cryptocurrencies</Link></li>
            <li><Link to="/watchlist">Watchlist</Link></li>
            <li><Link to="/aboutus">About us</Link></li>
          </ul>
        </div>

        <div className="social-media">
          <a href="" target="_blank" rel="noopener noreferrer">
              <img 
                  src={xLogo} 
                  alt="xsocial" 
                  className="social-icon" 
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img 
                  src={instagramLogo} 
                  alt="Instagram" 
                  className="social-icon" 
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img 
                  src={facebookLogo} 
                  alt="Facebook" 
                  className="social-icon" 
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img 
                  src={youtubeLogo} 
                  alt="Youtube" 
                  className="social-icon" 
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img 
                  src={linkedinLogo} 
                  alt="Linkedin" 
                  className="social-icon" 
              />
            </a>
        </div>

        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Hyper Crypto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;