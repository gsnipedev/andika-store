import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import { GitHub, Instagram } from "@mui/icons-material";
import "../../App.css";

const AboutPage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}
      disableGutters
    >
      <Grid container spacing={0}>
        <Grid xs={12} md={6} display="flex" justifyContent={"center"}>
          <Box component={"img"} src="images/ombotak.jpg" width={"100%"} border={"4px solid white"} />
        </Grid>
        <Grid
          xs={12}
          md={6}
          sx={{ backgroundColor: "#fff", padding: 2, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
        >
          <Stack spacing={1}>
            <Typography variant="h6">
              <span className="roboto-condensed">Halo Semuanya</span>
            </Typography>
            <Typography color={"#948B89"} textAlign="left">
              <span className="rubik">
                Jangan lupa bernafas semuanya, Web ini dibuat menggunakan Framework React JS.
                <br />
                -Andika
              </span>
            </Typography>
            <Typography color={"#948B89"} textAlign="left">
              <span className="rubik">Keep in touch.</span>
            </Typography>
            <Stack direction={"row"} alignItems="center">
              <IconButton href="https://github.com/gsnipedev">
                <GitHub />
              </IconButton>
              <span className="roboto-condensed">gsnipedev</span>
              <IconButton href="https://instagram.com/andika_wahyudi_">
                <Instagram />
              </IconButton>
              <span className="roboto-condensed">andika_wahyudi_</span>
            </Stack>
            <Typography color={"#948B89"} textAlign="left">
              <span className="rubik">Andika sign in out, bye bye.</span>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
