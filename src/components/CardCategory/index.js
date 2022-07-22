import { Button, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";

const CardCategory = (props) => {
  return (
    <Card
      sx={{ maxWidth: 200, marginRight: 1, backgroundColor: "#FBFBFF", "&:hover": { cursor: "pointer" } }}
      onClick={() => (window.location.href = "http://youtube.com")}
    >
      <CardContent>
        <img src={props.src} width={180}></img>
        <Typography variant="h6">{props.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardCategory;
