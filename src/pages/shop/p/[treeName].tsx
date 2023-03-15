import FullLayout from "@/layouts/FullLayout";
import Introduction from "@/modules/home/introduction";
import { NextPageWithLayout } from "@/pages/_app";
import { Box } from "@mui/material";

const TreeName: NextPageWithLayout = (props) => {
  return (
    <Box>
      <Introduction />
    </Box>
  );
};

export default TreeName;

TreeName.getLayout = (page) => {
  return <FullLayout>{page}</FullLayout>;
};
