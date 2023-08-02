import { Box, Typography } from "@mui/material";

export default function IntroductionShop() {
  return (
    <Box>
      <Typography variant="h1" sx={{ textAlign: "center", mt: 6 }}>
        Our Plants
      </Typography>
      <Typography sx={{ textAlign: "center", mt: 4 }}>
        Lorem ipsum dolor sit amet Nullam vel ultricies metus, at tincidunt
        arcu.
      </Typography>
      <Typography sx={{ textAlign: "center", mt: 1 }}>
        Morbi vestibulum, ligula ut efficitur mollis, mi massa accumsan justo.
      </Typography>
    </Box>
  );
}
