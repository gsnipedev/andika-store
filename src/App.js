import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/About";
import DiscoverPage from "./components/Discover";
import MainFooter from "./components/Footer";
import GunsPage from "./components/GunsPage";
import Home from "./components/Home";
import ResponsiveAppBar from "./components/MainNavBar";

function App() {
  const handgunData = ["Glock 22", "Colt M1911"];
  const handgunPrice = ["$699", "$799"];
  const handgunDesc = ["Lorem", "Ipsum"];
  const handgunImages = ["images/glock.png", "images/1911.png"];

  const assaultData = ["AK-47", "AR-15"];
  const assaultPrice = ["$799", "$899"];
  const assaultDesc = ["Lorem", "Ipsum"];
  const assaultImages = ["images/ak47.jpg", "images/ar15.png"];

  const shotgunData = ["Remington 870", "Benelli M1014"];
  const shotgunPrice = ["$599", "$699"];
  const shotgunDesc = ["Lorem", "Ipsum"];
  const shotgunImages = ["images/shotgun.webp", "images/benelli.png"];

  return (
    <div className="App">
      <ResponsiveAppBar pages={["Home", "Discover", "About"]} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="Discover" element={<DiscoverPage />}></Route>
          <Route path="Profile" element={<h1>Ini Profile</h1>}></Route>
          <Route
            path="Handguns"
            element={
              <GunsPage gunData={handgunData} gunPrice={handgunPrice} gunDesc={handgunDesc} images={handgunImages} />
            }
          ></Route>
          <Route
            path="Assault%20Rifles"
            element={
              <GunsPage gunData={assaultData} gunPrice={assaultPrice} gunDesc={assaultDesc} images={assaultImages} />
            }
          ></Route>
          <Route
            path="Shotguns"
            element={
              <GunsPage gunData={shotgunData} gunPrice={shotgunPrice} gunDesc={shotgunDesc} images={shotgunImages} />
            }
          ></Route>
          <Route path="About" element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
      <MainFooter />
    </div>
  );
}

export default App;
