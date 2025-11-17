import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn.jsx";        // correct if file is SignIn.jsx
import SignUp from "./Pages/SignUp.jsx";        // correct
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Mymovies from "./Pages/Mymovies.jsx";
import Search from "./Pages/Search.jsx";
import Userdash from "./Pages/Userdash.jsx"    // ← MUST be Userdash (capital D)
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/Userdash" element={<Userdash />} />   {/* lowercase url */}
        <Route path="/about" element={<About />} />
        <Route path="/mymovies" element={<Mymovies />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;