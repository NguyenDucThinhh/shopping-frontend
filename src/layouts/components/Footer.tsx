import { Link } from "@/components/primitives/Link";
import { Box, Container, Grid } from "@mui/material";
import Social from "./Social";

export default function Footer() {
  return (
    <Container sx={{ my: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link
              href={"/"}
              variant="h2"
              underline="none"
              sx={{ color: "text.primary" }}
            >
              Crosby
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Box sx={{ mb: 2 }}>
            <Link
              variant="body1"
              sx={{ color: "text.secondary" }}
              underline="hover"
              href={"/shop"}
            >
              Shop
            </Link>
          </Box>
          <Box sx={{ my: 2 }}>
            <Link
              variant="body1"
              sx={{ color: "text.secondary" }}
              underline="hover"
              href={"/our-story"}
            >
              Our Story
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Box sx={{ mb: 2 }}>
            <Link
              variant="body1"
              sx={{ color: "text.secondary" }}
              underline="hover"
              href={"/journal"}
            >
              Journal
            </Link>
          </Box>
          <Box sx={{ my: 2 }}>
            <Link
              variant="body1"
              sx={{ color: "text.secondary" }}
              underline="hover"
              href={"/contact-us"}
            >
              Contact
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Social />
      </Box>
    </Container>
  );
}
