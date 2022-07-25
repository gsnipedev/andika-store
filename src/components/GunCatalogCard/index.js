import { Button, Container, Rating, Stack, ThemeProvider, Typography, createTheme, Grid } from "@mui/material";
import { Box } from "@mui/system";
import "../../App.css";

const GunCatalogCard = (props) => {
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
    <Container disableGutters sx={{ backgroundColor: "#fff", padding: 2, borderRadius: 2 }}>
      <Grid container spacing={0} justifyContent="space-around" alignItems={"center"}>
        <Grid md={4}>
          <Stack direction={"row"} spacing={3} justifyContent="space-around">
            <Stack direction={"row"} spacing={3}>
              <Box component={"img"} src={props.src} Height={120} width={150} />
              <Stack spacing={1}>
                <Typography textAlign={"left"} fontWeight="bold">
                  <span className="roboto-condensed">{props.title}</span>
                </Typography>
                <Typography textAlign={"left"}>
                  <span>{props.desc}</span>
                </Typography>
                <Typography textAlign={"left"}>
                  <span>{props.price}</span>
                </Typography>
                <Rating value={3} />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid>
          <Stack spacing={2} justifyContent="center">
            <ThemeProvider theme={MyTheme}>
              <Button variant="contained" sx={{ color: "#fff" }}>
                Buy
              </Button>
              <Button variant="outlined">Add to Cart</Button>
            </ThemeProvider>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GunCatalogCard;
