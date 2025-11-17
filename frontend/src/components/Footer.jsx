
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>Copyrights provided all rights reserved 2025</p>
      <h3>Quick links</h3>
            <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Mymovies">Mymovies</Link></li>
        <li><Link to="/Search">Find movies</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <h3>Contact</h3>
      Tunis, Tunisia
    contact@gmail.com
    +216 94 477 211
    </footer>
  );
}

export default Footer;
