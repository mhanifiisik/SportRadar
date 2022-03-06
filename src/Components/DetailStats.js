import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SoccerLineUp from "react-soccer-lineup";
import { getDetailedMatchLineUp } from "../api";
import axios from "axios";

const DetailStats = ({ data }) => {
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const lineupData = await axios.get(
      getDetailedMatchLineUp(data.sport_event.id)
    );
    setData2(lineupData.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  /*

  //Home Team Starter  Players 11
  const Home11 = data2.lineups.competitors[0].players.filter(
    (item) => item.starter === true
  );
  const HomeGK = Home11.filter((item) => item.type === "goalkeeper");
  const HomeDF = Home11.filter((item) => item.type === "defender");
  const HomeCAM = Home11.filter((item) => item.type === "midfielder");
  const HomeFW = Home11.filter((item) => item.type === "forward");

  //Away Team Starter Player 11
  const Away11 = data2.lineups.competitors[1].players.filter(
    (item) => item.starter === true
  );
  const AwayGK = Away11.filter((item) => item.type === "goalkeeper");
  const AwayDF = Away11.filter((item) => item.type === "defender");
  const AwayCAM = Away11.filter((item) => item.type === "midfielder");
  const AwayFW = Away11.filter((item) => item.type === "forward");
  const deffensers = () => {
    const deffenser = HomeDF.map((player) => [player.name]);
    return deffenser;
  };
  console.log("Şuanda", deffensers());
  
  */
  let homeTeam = {
    color: "lightblue",
    squad: {
      gk: { number: 1 },

      df: [{ number: 2 }, { number: 4 }, { number: 5 }, { number: 3 }],
      cam: [
        { number: 2, name: "Hicham" },
        { player: { number: 8 } },
        { player: { number: 6 } },
        { player: { number: 10 } },
      ],
      fw: [{ number: 9 }, { number: 11 }],
    },
  };

  let awayTeam = {
    color: "red",
    squad: {
      cam: [{ number: 7 }, { number: 8 }, { number: 6 }, { number: 10 }],
      df: [
        { number: 2, name: "Hicham" },
        { number: 4 },
        { number: 5 },
        { number: 3 },
      ],
      fw: [{ number: 9 }, { number: 11 }],
      gk: { number: 1 },
    },
  };
  return (
    <div className="flex flex-col justify-center items-center gap-y-5 w-full border-black border">
      <Tabs className="w-full">
        <TabList>
          <Tab>STANDINGS</Tab>
          <Tab>TOP SCORES</Tab>
        </TabList>

        <TabPanel>sa</TabPanel>
        <TabPanel>
          <SoccerLineUp
            size={"responsive"}
            color={"lightseagreen"}
            pattern={"lines"}
            awayTeam={awayTeam}
            homeTeam={homeTeam}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DetailStats;
