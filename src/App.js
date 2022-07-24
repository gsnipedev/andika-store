import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import DiscoverPage from "./components/Discover";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/MainNavBar";
import Home from "./components/Home";
import MainFooter from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar pages={["Home", "Discover", "About"]} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="Discover" element={<DiscoverPage />}></Route>
          <Route path="Profile" element={<h1>Ini Profile</h1>}></Route>
          <Route path="Assault%20Rifles" element={<h1>Ass</h1>}></Route>
        </Routes>
      </BrowserRouter>
      <MainFooter />
    </div>
  );
}

export default App;
