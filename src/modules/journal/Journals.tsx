import { Box, Grid, Typography } from "@mui/material";
import image1 from "public/images/journal/plant_2_optimized.gif";
import image2 from "public/images/journal/plant_1_optimized.gif";

interface JournalProps {
  item: {
    title: string;
    timestamp: string;
    author: string;
    imgUrl: string;
  };
}

const data = [
  {
    title: "Is It Flowers You’re After?",
    timestamp: "6/6/19",
    author: "Written By Guest User",
    imgUrl: image1.src,
  },
  {
    title: "Searching for Succulents?",
    timestamp: "6/3/19",
    author: "Written By Guest User",
    imgUrl: image2.src,
  },
];
function Journal(props: JournalProps) {
  const { item } = props;
  console.log("🚀 ~ file: Journals.tsx:30 ~ Journal ~ item:", item);
  return (
    <Box sx={{ my: 8 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <img src={item.imgUrl} width="70%" />
      </Box>
      <Typography sx={{ textAlign: "center", mt: 4 }} variant="body1">
        {item.timestamp}
      </Typography>
      <Typography sx={{ textAlign: "center", mt: 4 }} variant="h2">
        {item.title}
      </Typography>
      <Typography sx={{ textAlign: "center", mt: 4 }}>Read more</Typography>
    </Box>
  );
}

export default function Journals() {
  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid item xs={12} sm={6}>
          <Journal item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
