import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import { Container, createTheme } from "@mui/material";
import "../../App.css";

const Home = () => {
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
    <div style={{ height: "85vh" }}>
      <ThemeProvider theme={MyTheme}>
        <Box
          sx={{ flexGrow: 1, marginTop: 0, justifyContent: "center", alignItems: "center" }}
          display="flex"
          height={"100%"}
          flexDirection="column"
        >
          <Typography variant="h2" fontWeight={"bold"} sx={{ color: "primary.main" }}>
            <span className="roboto-condensed">
              Do you need some <span style={{ color: "crimson" }}>gun</span>K?
            </span>
          </Typography>
          <center>
            <iframe
              src="https://giphy.com/embed/wkW0maGDN1eSc"
              width="369"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </center>
          <Button variant="contained" sx={{ marginTop: 2, color: "#fff" }} href="Discover">
            Come Here
          </Button>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Home;
