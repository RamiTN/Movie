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
      <h1>Search for Movies</h1>
      <br />

      <form onSubmit={handleSearch} style={{display:"flex",justifyContent:"center"}}>
        
  


        <input
          list="keywords"
          className="inptmovie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Select a keyword"
          
        />
        <datalist id="keywords">
          {keywords.map((keyword) => (
            <option key={keyword} value={keyword} />
          ))}
        </datalist>
<button
  type="submit"
  style={{
    padding: "17px 10px", // keep vertical padding 0, reduce horizontal padding
    color: "white",
    backgroundColor: "transparent",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "10px", // keep the small height you liked
    borderRadius: "5px", // optional, keeps corners nice
    cursor: "pointer",
    border:"none",
  }}
>
  <svg
      xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="2em"
      height="2em"
    >
      <path
        fill="currentColor"
        d="M7.988 4.18a12.2 12.2 0 0 0-.67 2.32h5.364a12.2 12.2 0 0 0-.67-2.32c-.301-.733-.648-1.294-1.008-1.663C10.646 2.149 10.307 2 10 2s-.646.149-1.004.517c-.36.37-.706.93-1.008 1.663M7.89 2.281c-.314.426-.59.941-.828 1.518c-.32.78-.58 1.694-.762 2.701H2.804a8.02 8.02 0 0 1 5.087-4.219m5.046 1.518a7.2 7.2 0 0 0-.827-1.518A8.02 8.02 0 0 1 17.196 6.5h-3.497c-.182-1.007-.44-1.922-.762-2.7m4.665 3.7H13.85c.098.795.15 1.634.15 2.5s-.052 1.705-.15 2.5h3.752A8 8 0 0 0 18 10a8 8 0 0 0-.398-2.5m-3.903 6h3.497a8.02 8.02 0 0 1-5.086 4.219a7.2 7.2 0 0 0 .827-1.518c.321-.78.58-1.694.762-2.701m-4.137.44q.102-.215.182-.44h2.938a12.2 12.2 0 0 1-.67 2.32a8 8 0 0 1-.2.45a1.5 1.5 0 0 0-.251-.33zm.41-1.44h2.87c.102-.786.158-1.625.158-2.5s-.056-1.715-.158-2.5H7.158l-.037.3a4.5 4.5 0 0 1 2.852 4.7m-3.822-5l-.006.046A4.5 4.5 0 0 0 5.5 7.5zm-3.752 0H5.5a4.49 4.49 0 0 0-3.45 1.612c.061-.556.18-1.096.35-1.612m3.102 8c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 5.5 15.5m0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"
      ></path>
    </svg>
</button>


      </form>

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
