import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FactsAboutMatch from "../Components/FactsAboutMatch";
import DetailLineUp from "../Components/DetailStats";

const PercantagesofMatch = ({ data }) => {
  function findPercantage(a, total) {
    if (a === 0 && total === 0) return 50;
    else return (a / total) * 100;
  }
  const HomeTeam = data?.statistics?.totals?.competitors[0]?.statistics;
  const AwayTeam = data?.statistics?.totals?.competitors[1]?.statistics;
  const EmptyArray = [];
  for (const [key, value] of Object.entries(HomeTeam)) {
    EmptyArray.push([key, [value, AwayTeam[key]]]);
  }
  const matchid = data?.sport_event?.id;
  return (
    <div className="max-w-2xl mx-auto mt-10  text-white">
      <Link to="/">
        <BiArrowBack className="mb-5" size={25} />
      </Link>
      <Tabs>
        <TabList>
          <Tab>STATS OF MATCH</Tab>
          <Tab>FUN FACTS</Tab>
          {/* <Tab>LINEUP</Tab> */}
        </TabList>

        <TabPanel>
          <div className="w-full h-full flex flex-col  items-center  mt-10  border  border-[#0055ff] p-5 rounded-l">
            <div className="w-full h-full flex flex-col items-center gap-y-2">
              {EmptyArray.length !== 0 ? (
                EmptyArray.map((stats, index) => {
                  const [statsName, [homeStats, awayStats]] = stats;
                  return (
                    <div
                      key={index}
                      className="w-full md:w-full flex flex-col justify-center  gap-y-1"
                    >
                      <div className="flex flex-row justify-between text-sm font-[550] tracking-wide">
                        <h2>
                          {homeStats}
                          {index === 0 ? "%" : ""}
                        </h2>
                        <h2 className="capitalize">
                          {statsName.split("_")[0]} {statsName.split("_")[1]}
                        </h2>
                        <h2>
                          {awayStats}
                          {index === 0 ? "%" : ""}
                        </h2>
                      </div>
                      <div className=" h-3 flex flex-row">
                        <div
                          style={{
                            width: `${findPercantage(
                              homeStats,
                              homeStats + awayStats
                            )}%`,
                          }}
                          className="bg-[#ff0046]  rounded-l"
                        ></div>
                        <div
                          style={{
                            width: `${findPercantage(
                              awayStats,
                              homeStats + awayStats
                            )}%`,
                          }}
                          className=" bg-[#eee] rounded-r"
                        ></div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <FactsAboutMatch id={matchid} />
        </TabPanel>
        {/* <TabPanel>
          <DetailLineUp id={matchid} />
        </TabPanel> */}
      </Tabs>
    </div>
  );
};

export default PercantagesofMatch;

/*



   
      
*/
