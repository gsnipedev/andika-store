import { GitHub, Instagram } from "@mui/icons-material";
import { Box, Container, Grid, ThemeProvider, Typography, createTheme, Stack, IconButton } from "@mui/material";
import "../../App.css";

const MainFooter = () => {
  const MyTheme = createTheme({
    palette: {
      primary: {
        main: "#F4AFAB",
      },
      secondary: {
        main: "#fff",
        dark: "#EAEAEA",
      },
    },
  });
  return (
    <footer style={{ backgroundColor: "#F4AFAB", marginTop: 100, padding: 30 }}>
      <ThemeProvider theme={MyTheme}>
        <Container maxWidth="lg" disableGutters sx={{ paddingTop: 3, paddingBottom: 1 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <Stack spacing={2}>
                  <Typography color={"secondary.main"} fontWeight="bold">
                    <span className="roboto-condensed">Andika Wahyudi Pratama B</span>
                  </Typography>
                  <Typography color={"secondary.dark"} variant="subtitle2">
                    <span className="rubik">Medan, Sumatera Utara</span>
                  </Typography>
                </Stack>
              </Grid>

              <Grid xs={12} md={6}>
                <Stack spacing={2}>
                  <Typography color={"secondary.main"} fontWeight="bold">
                    <span className="roboto-condensed">About This Page</span>
                  </Typography>
                  <Typography color={"secondary.dark"} variant="subtitle2" textAlign={"left"}>
                    <span className="rubik">
                      Nothing.. yes, this is just my final exam for 2nd semester, nothing really matter here, just some
                      demo website i built with React JS technology Hope i get the best score XD XD
                    </span>
                  </Typography>

                  <Typography color={"secondary.main"} fontWeight="bold">
                    <span className="roboto-condensed">Keep in Touch</span>
                  </Typography>

                  <Stack direction={"row"} justifyContent="center">
                    <IconButton color="secondary" href="https://www.instagram.com/andika_wahyudi_/">
                      <Instagram />
                    </IconButton>

                    <IconButton color="secondary" href="https://github.com/gsnipedev">
                      <GitHub />
                    </IconButton>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </footer>
  );
};

export default MainFooter;
