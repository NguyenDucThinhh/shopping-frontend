import { Box, Button, Typography } from "@mui/material";
import homeIntroductionBg from "public/images/home/homeIntroductionBg.jpeg";

export default function Introduction() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${homeIntroductionBg.src})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          // transform: "translateX(-50%)",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box>
          <Typography variant="h1" sx={{ textAlign: "center" }}>
            Plants and Pots
          </Typography>
          <Typography variant="h1" sx={{ textAlign: "center" }}>
            For Your Home
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100vw" }}>
          <Button
            sx={{
              textAlign: "center",
              p: "20px 30px 20px 30px",
            }}
            variant="contained"
            color="secondary"
          >
            Shop Nows
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
