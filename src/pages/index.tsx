import { NextPageWithLayout } from "./_app";
import { Box } from "@mui/material";
import Introduction from "@/modules/home/Introduction";
import FullLayout from "@/layouts/FullLayout";

const Home: NextPageWithLayout = (props) => {
  return (
    <Box>
      <Introduction />
    </Box>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <FullLayout>{page}</FullLayout>;
};
