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
          <Typography
            variant="h1"
            sx={{ textAlign: "center", fontWeight: 500 }}
          >
            Plants and Pots
          </Typography>
          <Typography
            variant="h1"
            sx={{ textAlign: "center", fontWeight: 500 }}
          >
            For Your Home
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            mt: 4,
          }}
        >
          <Button
            sx={{
              textAlign: "center",
              p: "20px 30px 20px 30px",
              color: "text.primary",
              bgcolor: "#a8a6a0",
              borderRadius: 0,
              width: 180,
            }}
            variant="contained"
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
