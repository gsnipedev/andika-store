import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import ResponsiveAppBar from "./components/MainNavBar";
import { display } from "@mui/system";
import SelectInput from "@mui/material/Select/SelectInput";
import MainItem from "./components/MainItem";
import { Box, Container, Stack } from "@mui/material";
import CardCategory from "./components/CardCategory";

function App() {
  const [myText, setMyText] = useState("Andika was here");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("Default");
  const categories = ["Handgun", "Assault Rifle", "Shotgun", "SMG"];
  const imageSources = ["images/glock.webp", "images/ak47.jpg", "images/shotgun.webp"];
  const selectColor = (e) => {
    setColor(e.target.value);
  };
  const page2 = <div>keren</div>;
  return (
    <div className="App">
      <ResponsiveAppBar pages={["Home", "Discover", "About"]} name="awdaf" />
      <Stack>
        <MainItem />
        <h1 className="roboto-condensed">Category</h1>
        <Container>
          <Box sx={{ display: { xs: "flex" } }}>
            {categories.map((title, index) => (
              <CardCategory title={title} src={imageSources[index]} />
            ))}
          </Box>
        </Container>
      </Stack>
    </div>
  );
}

export default App;
