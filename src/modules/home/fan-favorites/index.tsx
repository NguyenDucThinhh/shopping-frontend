import { Box, Button, Container, Grid, Typography } from "@mui/material";
const datas = [
  {
    id: 0,
    name: "Lil Guys",
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860310-J0DH20X4OZ15GU0F132J/image.jpg?format=1000w",
  },
  {
    id: 1,
    name: "Bigger Statements",
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860317-2IC2WZTLET6GDMDSJYH6/image.jpg?format=1000w",
  },
  {
    id: 2,
    name: "Low Maintenance",
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860323-VZFT6LGS791L47WIULXB/Ecomm_02_Lily_004.jpg?format=1000w",
  },
];

export default function FanFavorites() {
  return (
    <Box sx={{ height: "130vh" }}>
      <Typography
        sx={{ pt: 8, fontWeight: 400, textAlign: "center" }}
        variant="h1"
      >
        Fan Favorites
      </Typography>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {datas.map((item) => (
            <Grid key={item.id} item xs={12} sm={4}>
              <img
                src={item.imgUrl}
                width={"100%"}
                height={500}
                alt={`img ${item.name}`}
              />
              <Typography
                sx={{ textAlign: "center", fontWeight: 400 }}
                variant="h2"
              >
                {item.name}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    p: "20px 20px 20px 20px",
                    color: "text.primary",
                    bgcolor: "#a8a6a0",
                    borderRadius: 0,
                    width: 100,
                    mt: 2,
                  }}
                  variant="contained"
                >
                  Buy Now
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
