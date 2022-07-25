import "../../App.css";

import { Box, Container, Grid, Stack } from "@mui/material";
import GunCard from "../GunCard";
import MainItem from "../MainItem";

const DiscoverPage = () => {
  const imageSources = ["images/glock.png", "images/ak47.jpg", "images/shotgun.webp"];
  const gunName = ["Handguns", "Assault Rifles", "Shotguns"];
  return (
    <div>
      <Stack>
        <MainItem />
        <h1 className="roboto-condensed">More Product</h1>
        <Container maxWidth="lg" disableGutters sx={{ paddingLeft: 1, paddingRight: 1 }}>
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
