import FullLayout from "@/layouts/FullLayout";
import FanFavorites from "@/modules/home/fan-favorites";
import GiftCard from "@/modules/home/gift-card";
import Introduction from "@/modules/home/introduction";
import RecommendSignUp from "@/modules/home/recommend-sign-up";
import TheJournal from "@/modules/home/the-journal";
import { Box } from "@mui/material";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = (props) => {
  return (
    <Box>
      <Introduction />
      <FanFavorites />
      {/* <Image
        src={home}
        alt="home"
        sizes="(max-width: 768px) 10vw, (max-width: 1200px) 5vw, 10vw"
      /> */}
      <TheJournal />
      <RecommendSignUp />
      <GiftCard />
    </Box>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <FullLayout>{page}</FullLayout>;
};
