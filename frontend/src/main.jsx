import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import './assets/css/Navbar.css';
import './assets/css/Footer.css';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);