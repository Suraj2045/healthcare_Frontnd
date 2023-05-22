import React from "react";
import Footer from "../../../components/Shared/Footer";
import ShopDetailsBanner from "./ShopDetailsBanner/ShopDetailsBanner";
import ShopDetailsDesc from "./ShopDetailsDesc/ShopDetailsDesc";
import { useLocation } from "react-router-dom";
import HomeThreeNavBar from "../../HomeThree/HomeThreeNavBar/HomeThreeNavBar";

const ShopDetails = () => {
  const { state } = useLocation();
  const { result } = state;
  console.log(result);
  return (
    <>
      <HomeThreeNavBar />
      <ShopDetailsBanner result={result} />
      <ShopDetailsDesc />
      <Footer />
    </>
  );
};

export default ShopDetails;
