import FullLayout from "@/layouts/FullLayout";
import IntroductionShop from "@/modules/shop/IntroductionShop";
import Products from "@/modules/shop/Products";
import { Box } from "@mui/material";
import { NextPageWithLayout } from "../_app";

const Shop: NextPageWithLayout = (props) => {
  return (
    <>
      <IntroductionShop />
      <Box sx={{ mt: 4 }}>
        <Products />
      </Box>
    </>
  );
};

export default Shop;

Shop.getLayout = (page) => {
  return <FullLayout>{page}</FullLayout>;
};
