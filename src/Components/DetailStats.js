/*import React, { useState, useEffect } from "react";
import SoccerLineUp from "react-soccer-lineup";
import { getDetailedMatchLineUp } from "../api";
import axios from "axios";

const DetailStats = ({ id }) => {
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Home11, setHome11] = useState([]);
  const getData = async () => {
    setLoading(true);
    const lineupData = await axios.get(getDetailedMatchLineUp(id));
    setData2(lineupData.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const DefinePosition = (position) => {
    switch (position) {
      case "goalkeeper":
        return "gk";
      case "right_back":
        return "df";
      case "central_defender":
        return "df";
      case "left_back":
        return "df";
      case "right_winger":
        return "cam";
      case "central_midfielder":
        return "cam";
      case "left_winger":
        return "cam";
      case "striker":
        return "fw";
      case "fullback":
        return "df";
    }
  };
  //Home Team Starter  Players 11
  const FilteredHome11 = () => {
    const HomeStarterPlayers = data2.lineups.competitors[0].players.filter(
      (item) => item.starter === true
    );
    const gk = [];
    const df = [];
    const cam = [];
    const fw = [];
    HomeStarterPlayers.map((player) => {
      if (DefinePosition(player.position) === "gk") {
        gk.push(player);
      }
      if (DefinePosition(player.position) === "df") {
        df.push(player);
      }
      if (DefinePosition(player.position) === "cam") {
        cam.push(player);
      }
      if (DefinePosition(player.position) === "fw") {
        fw.push(player);
      }
    });
    return [gk, df, cam, fw];
  };
  const FilteredAway11 = () => {
    const AwayStarterPlayers = data2.lineups.competitors[1].players.filter(
      (item) => item.starter === true
    );
    const gk = [];
    const df = [];
    const cam = [];
    const fw = [];
    AwayStarterPlayers.map((player) => {
      if (DefinePosition(player.position) === "gk") {
        gk.push(player);
      }
      if (DefinePosition(player.position) === "df") {
        df.push(player);
      }
      if (DefinePosition(player.position) === "cam") {
        cam.push(player);
      }
      if (DefinePosition(player.position) === "fw") {
        fw.push(player);
      }
    });
    return [gk, df, cam, fw];
  };
  const rastgele = FilteredHome11()[1].forEach((player) => {
    return player.jersey_number;
  });
  console.log(rastgele);
  //Away Team Starter Player 11
  let homeTeam = {
    color: "red",
    squad: {
      cam: [
        FilteredHome11()[1].forEach((player) => {
          return player.jersey_number;
        }),
      ],
      df: [
        FilteredHome11()[1].map((player) => {
          return player.jersey_number;
        }),
      ],
      fw: [
        FilteredHome11()[3].map((player) => {
          return player.jersey_number;
        }),
      ],
      gk: [
        FilteredHome11()[0].map((player) => {
          return player.jersey_number;
        }),
      ],
    },
  };

  console.log("Ev Takımı", FilteredHome11());
  return (
    <div className="flex flex-col justify-center items-center gap-y-5 w-full border-black border">
      <SoccerLineUp size={"responsive"} pattern={"lines"} homeTeam={homeTeam} />
    </div>
  );
};

export default DetailStats;
*/