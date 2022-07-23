import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import DiscoverPage from "./components/Discover";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/MainNavBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar pages={["Home", "Discover", "About"]} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="Discover" element={<DiscoverPage />}></Route>
          <Route path="Profile" element={<h1>Ini Profile</h1>}></Route>
        </Routes>
      </BrowserRouter>
      <footer style={{ bottom: 0, marginBottom: 20, color: "crimson", textDecoration: "underline" }}>
        <span>Made with love by Andika</span>
      </footer>
    </div>
  );
}

export default App;
