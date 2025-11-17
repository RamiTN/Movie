
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Movie-app</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Mymovies">Mymovies</Link></li>
        <li><Link to="/Search">Find movies</Link></li>
        <li><Link to="/about">About</Link></li>
        

      </ul>
    </nav>
  );
}

export default Navbar;
