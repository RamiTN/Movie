import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
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
  <Route path="/SignUp" element={<SignUp />} />
  <Route path="/SignIn" element={<SignIn />} />
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
