import { useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "784c2d7b";
  const keywords = ["love", "war", "life", "man", "star", "dark", "hero", "death", "city", "night"];

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&type=movie&page=1`);
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search.slice(0, 10)); // show only 10 movies
      } else {
        setMovies([]);
        setError("No movies found.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Search Movies</h1>
      <br />

      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          list="keywords"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Select a keyword"
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <datalist id="keywords">
          {keywords.map((keyword) => (
            <option key={keyword} value={keyword} />
          ))}
        </datalist>
        <button type="submit" style={{ padding: "10px 20px" }}>Search</button>
      </form>

      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {movies.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => window.open(`https://www.imdb.com/title/${movie.imdbID}`, "_blank")}
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"}
                alt={movie.Title}
                style={{ width: "100%", height: "270px", objectFit: "cover" }}
              />
              <div style={{ padding: "10px" }}>
                <h4 style={{ margin: 0, fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {movie.Title}
                </h4>
                <p style={{ margin: 0, fontSize: "12px", color: "#555" }}>{movie.Year}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
