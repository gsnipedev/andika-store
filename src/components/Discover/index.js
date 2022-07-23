import logo from "../../logo.svg";
import "../../App.css";
import { useState } from "react";

import ResponsiveAppBar from "../MainNavBar";
import { display } from "@mui/system";
import SelectInput from "@mui/material/Select/SelectInput";
import MainItem from "../MainItem";
import { Box, Container, Grid, Stack } from "@mui/material";
import CardCategory from "../CardCategory";
import GunCard from "../GunCard";

const DiscoverPage = () => {
  const [myText, setMyText] = useState("Andika was here");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("Default");
  const categories = ["Handgun", "Assault Rifle", "Shotgun", "SMG"];
  const imageSources = ["images/glock.png", "images/ak47.jpg", "images/shotgun.webp"];
  const gunName = ["Handguns", "Assault Rifles", "Shotguns"];
  const selectColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <Stack>
        <MainItem />
        <h1 className="roboto-condensed">More Product</h1>
        <Container maxWidth="lg" disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {imageSources.map((img, index) => (
                <GunCard src={img} desc={gunName[index]} />
              ))}
            </Grid>
          </Box>
        </Container>
      </Stack>
    </div>
  );
};

export default DiscoverPage;
