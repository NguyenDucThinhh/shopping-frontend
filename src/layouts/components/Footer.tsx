import { Link } from "@/components/primitives/Link";
import { Box, Container, Grid, Typography } from "@mui/material";
import Social from "./Social";

export default function Footer() {
  return (
    <Container sx={{ my: 4 }}>
      <Grid container>
        <Grid item xs={12} sm={8}>
          <Typography>Crosby</Typography>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Box>
            <Link underline="always" href={"/shop"}>
              Shop
            </Link>
          </Box>
          <Box>
            <Link underline="always" href={"/our-story"}>
              Our Story
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Box>
            <Link underline="always" href={"/journal"}>
              Journal
            </Link>
          </Box>
          <Box>
            <Link underline="always" href={"/contact-us"}>
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
