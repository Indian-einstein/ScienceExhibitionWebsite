import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/NavBar";
import App from "./Components/App";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);
