import React from "react";
import Banner from "../../../Components/Banner";
import Features from "../../../Components/Features";
import BrowseUs from "../../../Components/BrowseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* Browse our menu  */}
      <BrowseUs></BrowseUs>
      {/* Feature section  */}
      <Features></Features>
    </div>
  );
};

export default Home;
