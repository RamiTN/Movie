import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Mymovies from "./Pages/Mymovies.jsx";
import Search from "./Pages/Search.jsx";
import Userdash from "./Pages/Userdash.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}

function AppInner() {
  const location = useLocation();
  const showNavFooter = location.pathname === "/Userdash";

  return (
    <>
      {showNavFooter && <Navbar />}
      <main>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/Userdash" element={<Userdash />} />
          <Route path="/about" element={<About />} />
          <Route path="/mymovies" element={<Mymovies />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      {showNavFooter && <Footer />}
    </>
  );
}

export default App;
