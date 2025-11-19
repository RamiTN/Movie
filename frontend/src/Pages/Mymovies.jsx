import movieImg from "../assets/image/1917.jpeg"; 
import movieImg1 from "../assets/image/F&F TD.jpeg";
import movieImg2 from "../assets/image/AgeOFglas.jpeg"
import movieImg3 from "../assets/image/DownFaull.jpeg"

function Mymovies() {
  return (
    <div class="mymovies-container">
  <h1>Ready ro watch</h1>
  <div class="movies-grid">
<div class="movie-card">
  <div class="movie-image">
    <img src={movieImg} alt="movie1" />
  </div>
  <button className="movie-button"><a
    href="https://moviz-time.live/?p=41879" target="_blank"
    allowfullscreen>Watch
</a></button>
</div>
<div class="movie-card">
  <div class="movie-image">
    <img src={movieImg1}alt="movie2" />
  </div>
  <button className="movie-button"><a
    href="https://moviz-time.live/?p=87565" target="_blank"
    allowfullscreen>Watch
</a></button>
</div>

<div class="movie-card">
  <div class="movie-image">
    <img src={movieImg2} alt="movie3" />
  </div>
  <button className="movie-button"><a target="_blank"
    href="https://moviz-time.live/?p=108757" 
    allowfullscreen>Watch
</a></button>
</div>
    <div class="movie-card">
  <div class="movie-image">
    <img src={movieImg3} alt="movie3" />
  </div>
  <button className="movie-button"><a
    href="https://www.youtube.com/watch?v=ObYh02ve6sY" target="_blank"
    allowfullscreen>Watch
</a></button>
</div>
  </div>
</div>

  );
}

export default Mymovies;
