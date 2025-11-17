
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Movie-app</h1>
      <ul className="navul">
        <li className="navli"><Link to="/Userdash">Home</Link></li>
        <li className="navli"><Link to="/Mymovies">Mymovies</Link></li>
        <li className="navli"><Link to="/Search">Find movies</Link></li>
        <li className="navli"><Link to="/about">About</Link></li>
        

      </ul>
    </nav>
  );
}

export default Navbar;
