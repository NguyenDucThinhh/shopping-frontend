import { Box } from "@mui/material";
import Introduction from "@/modules/home/introduction";
import FullLayout from "@/layouts/FullLayout";
import { NextPageWithLayout } from "../_app";

const Journal: NextPageWithLayout = (props) => {
  return (
    <Box>
      <Introduction />
    </Box>
  );
};

export default Journal;

Journal.getLayout = (page) => {
  return <FullLayout>{page}</FullLayout>;
};
