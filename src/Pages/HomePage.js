import React from "react";
import SeasonalStats from "./SeasonalStats";
import SeasonalResults from "./SeasonalResults";
import Navbar from "../Components/Navbar";
import InfoContainer from "../Components/info";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const HomePage = () => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <Navbar />
      <InfoContainer />
      <Tabs>
        <TabList>
          <Tab>EKSTRAKLASA 21/22</Tab>
          <Tab>PREVIOUS SEASONS RESULTS</Tab>
        </TabList>

        <TabPanel>
          <SeasonalStats />
        </TabPanel>
        <TabPanel className="overflow-x-hidden">
          <SeasonalResults />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HomePage;
