import { Box, Button, Container, createTheme, Stack, ThemeProvider, Typography } from "@mui/material";
import "../../App.css";

const MainItem = () => {
  const MyTheme = createTheme({
    palette: {
      primary: {
        main: "#F4AFAB",
      },
      secondary: {
        main: "#fff",
      },
    },
  });
  return (
    <div style={{ padding: 10 }}>
      <Typography variant="h4" sx={{ marginTop: 2 }}>
        <span className="roboto-condensed">Best Seller</span>
      </Typography>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: 2,
          backgroundColor: "#FBFBFF",
          borderRadius: 3,
        }}
        disableGutters
      >
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "flex", lg: "flex", xl: "flex" },
            border: 0,
            justifyContent: "space-around",
            maxWidth: 1,
            paddingTop: 6,
            paddingBottom: 6,
          }}
        >
          <div>
            <Typography sx={{ color: "#093A3E", fontSize: 50, fontWeight: "bold" }}>
              <span className="roboto-condensed">Glock 22</span>
            </Typography>
            <Typography
              sx={{
                fontStyle: "italic",
                color: "#818D92",
              }}
              align={"center"}
            >
              <span>
                The Glock 22 Gen 4 is a full-size service pistol, shooting the 9x19mm pistol cartridge
                <br />
                (9mm Parabellum), a standard military round that's easy to find ammo for anywhere.
              </span>
            </Typography>
            <Stack
              direction={"row"}
              spacing={10}
              sx={{ marginTop: 4 }}
              className="roboto-condensed"
              justifyContent={"center"}
            >
              <Stack>
                <p>Price</p>
                <span>$699</span>
              </Stack>
              <Stack>
                <p>Color</p>
                <span>
                  <Box height={20} width={20} sx={{ backgroundColor: "black" }} />
                </span>
              </Stack>
              <Stack>
                <p>Mag Size</p>
                <span className="rubik">17</span>
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent="center">
              <ThemeProvider theme={MyTheme}>
                <Button variant="contained" sx={{ marginTop: 5, color: "#fff" }}>
                  Buy Now
                </Button>
                <Button variant="outlined" sx={{ marginTop: 5, marginLeft: 1 }}>
                  Add to Cart
                </Button>
              </ThemeProvider>
            </Stack>
          </div>
          <div>
            <Box component={"img"} maxWidth={350} src="images/glock.png"></Box>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default MainItem;
