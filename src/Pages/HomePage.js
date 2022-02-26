import React from "react";
import SeasonalStats from "./SeasonalStats";
import SeasonalResults from "./SeasonalResults";
import Navbar from "../Components/Navbar";
import InfoContainer from "../Components/info";
const HomePage = () => {
  return (
    <div className="relative max-w-7xl mx-auto h-screen">
      <Navbar />
      <InfoContainer />
      <SeasonalResults />
    </div>
  );
};

export default HomePage;
