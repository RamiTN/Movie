import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>MovieNight</h1>

      <ul className="navul">
        <li className="navli"><Link to="/Userdash">Home</Link></li>
        <li className="navli"><Link to="/Mymovies">ToWatch</Link></li>
        <li className="navli"><Link to="/Search">Find movies</Link></li>
        <li className="navli"><Link to="/about">About</Link></li>
      </ul>
      <Link to="/" className="logout">
        <button className="logout-btn">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="3rem"
            height="1rem"
          >
            <path
              fill="white"
              d="M13 3h-2v10h2zm4.83 2.17l-1.42 1.42A6.92 6.92 0 0 1 19 12c0 3.87-3.13 7-7 7A6.995 6.995 0 0 1 7.58 6.58L6.17 5.17A8.93 8.93 0 0 0 3 12a9 9 0 0 0 18 0c0-2.74-1.23-5.18-3.17-6.83"
            ></path>
          </svg>
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
