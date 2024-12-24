import React from "react";
import Banner from "../../../Components/Banner";
import Features from "../../../Components/Features";
import BrowseUs from "../../../Components/BrowseUs";
import HealthyFoodSection from "../../../Components/HealthyFoodSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* Browse our menu  */}
      <BrowseUs></BrowseUs>
      {/* helathyfoodsection  */}
      <HealthyFoodSection></HealthyFoodSection>
      {/* Feature section  */}
      <Features></Features>
    </div>
  );
};

export default Home;
