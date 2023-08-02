import { Box, Container, Grid, Typography } from "@mui/material";

const data = [
  {
    name: "dsdsds",
    price: 2,
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097847322-4H2NM43YPYV7JMRBM7OK/Ecomm_05_Alocasia_008.jpg",
  },
  {
    name: "dsdsds",
    price: 2,
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097847322-4H2NM43YPYV7JMRBM7OK/Ecomm_05_Alocasia_008.jpg",
  },
  {
    name: "dsdsds",
    price: 2,
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097847322-4H2NM43YPYV7JMRBM7OK/Ecomm_05_Alocasia_008.jpg",
  },
  {
    name: "dsdsds",
    price: 2,
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097847322-4H2NM43YPYV7JMRBM7OK/Ecomm_05_Alocasia_008.jpg",
  },
  {
    name: "dsdsds",
    price: 2,
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097847322-4H2NM43YPYV7JMRBM7OK/Ecomm_05_Alocasia_008.jpg",
  },
  {
    name: "dsdsds",
    price: 2,
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097847322-4H2NM43YPYV7JMRBM7OK/Ecomm_05_Alocasia_008.jpg",
  },
  {
    name: "dsdsds",
    price: 2,
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097847322-4H2NM43YPYV7JMRBM7OK/Ecomm_05_Alocasia_008.jpg",
  },
  {
    name: "dsdsds",
    price: 2,
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097847322-4H2NM43YPYV7JMRBM7OK/Ecomm_05_Alocasia_008.jpg",
  },
];

interface ProductProps {
  imgUrl: string;
  name: string;
  price: number;
}

function Product(props: ProductProps) {
  const { imgUrl, name, price } = props;
  return (
    <Box sx={{ py: 2 }}>
      <Box
        sx={{
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            transition: "0.4s",
            "&:hover": {
              transform: "scale(4)",
            },
          }}
        >
          <img src={imgUrl} width="100%" height={300} />
        </Box>
      </Box>
      <Typography variant="body2" sx={{ textAlign: "center", mt: 1 }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center", mt: 1 }}>
        from ${price}
      </Typography>
    </Box>
  );
}

export default function Products() {
  return (
    <Container>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={12} sm={4} lg={3}>
            <Product imgUrl={item.imgUrl} name={item.name} price={item.price} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
