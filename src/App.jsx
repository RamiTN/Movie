import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Mymovies from "./Pages/Mymovies.jsx";
import Search from "./Pages/Search.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Mymovies" element={<Mymovies />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
