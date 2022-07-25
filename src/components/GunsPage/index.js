import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import GunCatalogCard from "../GunCatalogCard";

const GunsPage = (props) => {
  const datas = props.gunData;
  const prices = props.gunPrice;
  const descs = props.gunDesc;
  const images = props.images;
  return (
    <Container maxWidth="lg" sx={{ minHeight: "80vh", marginTop: 2 }}>
      <Stack spacing={2}>
        {datas.map((element, index) => (
          <GunCatalogCard title={element} desc={descs[index]} price={prices[index]} src={images[index]} />
        ))}
      </Stack>
    </Container>
  );
};

export default GunsPage;
