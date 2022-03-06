import React, { useState, useEffect } from "react";
import axios from "axios";
import { getSeasonalStats, getSeasons } from "../api";
import SeasonStatsTable from "../Components/SeasonStatsTable";

const SeasonalStats = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await axios.get(getSeasonalStats("sr:season:84320"));
    setData(data.data.standings[0].groups[0].standings);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="overflow-x-auto">
      {data.length !== 0 ? (
        <>
          <p>Seasonal Stats</p>
          <table className="stats-table w-full text-center">
            <thead className="bg-[#4739B6] text-white">
              <tr>
                {[
                  "#",
                  "Team",
                  "Played",
                  "Victory",
                  "Draw",
                  "Loss",
                  "Goals",
                  "Goals against",
                  "Average",
                  "Points",
                ].map((title, index) => (
                  <th key={index}>{title}</th>
                ))}
              </tr>
            </thead>
            {data.map((teams) => (
              <tbody key={teams.competitor.id}>
                <SeasonStatsTable props={teams} />
              </tbody>
            ))}
          </table>
        </>
      ) : (
        <div className="loading-bar-container">
          <div className="loading-bar" />
        </div>
      )}
    </div>
  );
};

export default SeasonalStats;
