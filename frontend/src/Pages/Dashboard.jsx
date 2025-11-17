import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = "784c2d7b";
    const BASE_URL = "https://www.omdbapi.com/";
    const searchTerms = ["Batman", "Superman", "Spider", "Avengers", "Star Wars"];
    
    const fetchMovies = async () => {
      try {
        const moviePromises = searchTerms.map(term =>
          fetch(`${BASE_URL}?apikey=${API_KEY}&s=${term}`).then(res => res.json())
        );
        const results = await Promise.all(moviePromises);
        const allMovies = results
          .filter(result => result.Response === "True" && result.Search)
          .flatMap(result => result.Search)
          .slice(0, 20);
        setMovies(allMovies);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMovies();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <button>
        <Link to="/">Logout</Link>
      </button>
      <h1>Welcome Back</h1>
      <h2 style={{ marginTop: "30px" }}>Popular Movies</h2>

      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "20px", marginTop: "20px" }}>
          {movies.map(movie => (
            <div key={movie.imdbID} style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                alt={movie.Title}
                style={{ width: "100%", borderRadius: "10px", height: "200px", objectFit: "cover" }}
              />
              <h4 style={{ fontSize: "14px", margin: "10px 0" }}>{movie.Title}</h4>
              <p style={{ fontSize: "12px" }}>Year: {movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}