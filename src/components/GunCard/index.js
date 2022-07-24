import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";
import "../../App.css";

const GunCard = (props) => {
  return (
    <Grid item xs={6} md={4}>
      <Card
        sx={{
          borderRadius: 3,
          padding: 2,
          transition: "0.3s",
          ":hover": {
            cursor: "pointer",
            transform: "translate(0px, -15px)",
            boxShadow: "0px 15px 0px 0px rgba(244,175,171,0.75)",
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }} onClick={() => (window.location.href = props.desc)}>
          <img src={props.src} height={120}></img>
          <Typography variant="h3" color={"#F4AFAB"} fontSize={20}>
            <span className="roboto-condensed">{props.desc}</span>
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default GunCard;
