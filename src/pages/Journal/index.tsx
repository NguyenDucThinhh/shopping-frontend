import FullLayout from "@/layouts/FullLayout";
import Journals from "@/modules/journal/Journals";
import { Container } from "@mui/material";
import { NextPageWithLayout } from "../_app";

const Journal: NextPageWithLayout = (props) => {
  return (
    <>
      <Journals />
    </>
  );
};

export default Journal;

Journal.getLayout = (page) => {
  return <FullLayout>{page}</FullLayout>;
};
