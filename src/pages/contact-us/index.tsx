import { Box } from "@mui/material";
import Introduction from "@/modules/home/introduction";
import FullLayout from "@/layouts/FullLayout";
import { NextPageWithLayout } from "../_app";

const ContactUs: NextPageWithLayout = (props) => {
  return (
    <Box>
      <Introduction />
    </Box>
  );
};

export default ContactUs;

ContactUs.getLayout = (page) => {
  return <FullLayout>{page}</FullLayout>;
};
