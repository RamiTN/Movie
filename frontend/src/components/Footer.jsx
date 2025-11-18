
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div>
      <h3>Quick links</h3>
            <ul className="link">
        <li><Link to="/Userdash">Home</Link></li>
        <li><Link to="/Mymovies">Mymovies</Link></li>
        <li><Link to="/Search">Find movies</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      </div>
            <div>
      <p>© Copyrights provided all rights reserved 2025</p>
      </div>
      <div>
      <h3>Contact</h3>
      Tunis, Tunisia
    contact@gmail.com
    +216 xx xxx xxx
    </div>
    </footer>
  );
}

export default Footer;
