import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Userdash() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = "784c2d7b";
    const searchTerms = ["Batman", "Superman", "Spider-Man", "Avengers", "Star Wars"];

    const fetchMovies = async () => {
      try {
        const moviePromises = searchTerms.map(term =>
          fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${term}&type=movie`)
            .then(res => {
              if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
              return res.json();
            })
        );

        const results = await Promise.all(moviePromises);

        const validResults = results
          .filter(result => result.Response === "True" && Array.isArray(result.Search))
          .flatMap(result => result.Search);

        const sortedMovies = validResults
          .sort((a, b) => b.Year - a.Year)
          .slice(0, 20);

        setMovies(sortedMovies);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
        setError("Failed to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Welcome Back!</h1>
      <h2 style={{ margin: "30px 0 20px", color: "#b1b1b1ff" }}>Popular Movies</h2>

      {loading && (
        <div style={{ textAlign: "center", padding: "40px", fontSize: "18px" }}>
          <p>Loading awesome movies for you...</p>
        </div>
      )}

      {error && (
        <div style={{ color: "red", textAlign: "center", padding: "20px", backgroundColor: "#ffebee", borderRadius: "8px" }}>
          <p><strong>Error:</strong> {error}</p>
        </div>
      )}

      {!loading && !error && movies.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "24px",
            marginTop: "20px",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
                backgroundColor: "white",
                cursor: "pointer",
              }}
              onClick={() => window.open(`https://www.imdb.com/title/${movie.imdbID}`, '_blank')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"}
                alt={`Poster for ${movie.Title}`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "270px",
                  objectFit: "cover",
                  backgroundColor: "#f0f0f0",
                }}
              />
              <div style={{ padding: "12px" }}>
                <h4
                  style={{
                    fontSize: "15px",
                    margin: "0 0 8px 0",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title={movie.Title}
                >
                  {movie.Title}
                </h4>
                <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                  {movie.Year}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && movies.length === 0 && (
        <p style={{ textAlign: "center", padding: "40px", color: "#666" }}>
          No movies found. Try again later!
        </p>
      )}

      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#c82333"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#dc3545"}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Logout
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Userdash;