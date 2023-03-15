import FullLayout from "@/layouts/FullLayout";
import Introduction from "@/modules/home/introduction";
import { Box } from "@mui/material";
import { NextPageWithLayout } from "../_app";

const JournalName: NextPageWithLayout = (props) => {
  return (
    <Box>
      <Introduction />
    </Box>
  );
};

export default JournalName;

JournalName.getLayout = (page) => {
  return <FullLayout>{page}</FullLayout>;
};
