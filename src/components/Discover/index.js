import logo from "../../logo.svg";
import "../../App.css";
import { useState } from "react";

import ResponsiveAppBar from "../MainNavBar";
import { display } from "@mui/system";
import SelectInput from "@mui/material/Select/SelectInput";
import MainItem from "../MainItem";
import { Box, Container, Grid, Stack } from "@mui/material";
import CardCategory from "../CardCategory";

const DiscoverPage = () => {
  const [myText, setMyText] = useState("Andika was here");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("Default");
  const categories = ["Handgun", "Assault Rifle", "Shotgun", "SMG"];
  const imageSources = ["images/glock.png", "images/ak47.jpg", "images/shotgun.webp"];
  const selectColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <Stack>
        <MainItem />
        <h1 className="roboto-condensed">Category</h1>
      </Stack>
    </div>
  );
};

export default DiscoverPage;
