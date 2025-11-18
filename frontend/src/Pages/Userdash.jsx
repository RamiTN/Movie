import { useState, useEffect } from "react";

function Userdash() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "784c2d7b";

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const keywords = [
        "avengers",
        "batman",
        "spider",
        "matrix",
        "mission",
        "jurassic",
        "harry potter",
        "pirates",
        "transformers",
        "terminator",
      ];

      const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
          randomKeyword
        )}&type=movie&page=1`
      );

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();

      if (data.Response === "True" && data.Search?.length > 0) {
        const shuffled = data.Search.sort(() => Math.random() - 0.5);
        setMovies(shuffled.slice(0, 20));
      } else {
        setMovies([]);
        setError(data.Error || "No movies found. Try again.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load movies. Please try again later.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Welcome Back!</h1>
      <h2 style={{ margin: "30px 0 20px", color: "#b1b1b1" }}>Popular Movies</h2>

      {loading && (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <div
            style={{
              display: "inline-block",
              width: "40px",
              height: "40px",
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #4a4a4aff",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {error && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p style={{ color: "#dc3545" }}>{error}</p>
          <button
            onClick={fetchMovies}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              border: "none",
              backgroundColor: "transparent",
              color: "rgba(247, 247, 247, 1)",
              fontSize:"20px",
              marginTop:"10px"
            }}
          >
    <svg xmlns="http://www.w3.org/2000/svg" width={"3rem"} height={"5rem"} viewBox="0 0 512 512"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128"/><path fill="#000000" d="M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42Z"/></svg>
      
          </button>
        </div>
      )}

      {!loading && !error && movies.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
            gap: "24px",
            marginTop: "20px",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              style={{
                border: "1px solid #4b4b4bff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0,0,0,5)",
                transition: "transform 0.2s, box-shadow 0.2s",
                backgroundColor: "#4b4b4bff",
                cursor: "pointer",
              }}
              onClick={() => window.open(`https://www.imdb.com/title/${movie.imdbID}`, "_blank")}
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
  src={
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450/000/555?text=No+Poster"
  }
  alt={movie.Title}
  loading="lazy"
  style={{
    width: "100%",
    height: "270px",
    objectFit: movie.Poster !== "N/A" ? "cover" : "contain",
    backgroundColor: "#ffffffff",
  }}
/>

              <div className="movieTitle" style={{ padding: "12px" }}>
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
                <p 
                style={{ margin: 0, fontSize: "13px", color: "#ffffffff" }}>{movie.Year}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Userdash;
