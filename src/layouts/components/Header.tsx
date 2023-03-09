import { Box, Container, Typography } from "@mui/material";
import Social from "./Social";

export default function Header() {
  const headerConfigs = [
    {
      id: 0,
      title: "Shop",
    },
    {
      id: 1,
      title: "Our Story",
    },
    {
      id: 2,
      title: "journal",
    },
    {
      id: 3,
      title: "Contact",
    },
  ];
  return (
    <Container
      sx={{
        display: "flex",
        alignItem: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h2" sx={{}}>
          Crosby
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {headerConfigs.map((item) => (
          <Typography
            variant="body1"
            key={item.id}
            sx={{ color: "text.primary", p: 2 }}
          >
            {item.title}
          </Typography>
        ))}
      </Box>
      <Social />
    </Container>
  );
}
