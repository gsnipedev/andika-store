import {
  Button,
  AppBar,
  Box,
  Toolbar,
  Menu,
  Container,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { display } from "@mui/system";
import SelectInput from "@mui/material/Select/SelectInput";
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
    <div>
      <Typography variant="h4" sx={{ marginTop: 2 }}>
        <span className="roboto-condensed">Best Seller</span>
      </Typography>
      <Container maxWidth="lg" sx={{ marginTop: 2, backgroundColor: "#FBFBFF", borderRadius: 3 }} disableGutters>
        <Box
          sx={{
            display: { xs: "block", md: "flex", lg: "flex", xl: "flex" },
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
            <Typography sx={{ fontStyle: "italic", color: "#818D92", textAlign: "left" }}>
              <span>
                The Glock 22 Gen 4 is a full-size service pistol, shooting the 9x19mm pistol cartridge
                <br />
                (9mm Parabellum), a standard military round that's easy to find ammo for anywhere.
              </span>
            </Typography>
            <Stack direction={"row"} spacing={10} sx={{ marginTop: 4 }} className="roboto-condensed">
              <Stack>
                <p>Price</p>
                <span>$699</span>
              </Stack>
              <Stack>
                <p>Color</p>
                <span>$699</span>
              </Stack>
              <Stack>
                <p>Mag Size</p>
                <span>$699</span>
              </Stack>
            </Stack>
            <Stack direction={"row"}>
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
            <img src="images/glock.png" width={350}></img>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default MainItem;
