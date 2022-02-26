import React, { useState, useEffect } from "react";
import axios from "axios";
import { getSeasonalStats, getSeasons } from "../api";
import SeasonStatsTable from "../Components/SeasonStatsTable";

const SeasonalStats = () => {
  const [data, setData] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("sr:season:84320");

  const getData = async () => {
    const seasons = await axios.get(getSeasons());
    const data = await axios.get(getSeasonalStats(selectedSeason));
    setSeasons(seasons.data.seasons);
    setData(data.data.standings[0].groups[0].standings);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <p>Seasonal Stats</p>
      <select onChange={(e) => setSelectedSeason(e.target.value)}>
        {seasons.map((season) => (
          <option value={season.id}>{season.year}</option>
        ))}
      </select>
      {/* table */}
      <table className="w-full text-center bg-white border border-black">
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
            ].map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        {data.map((teams) => (
          <tbody>
            <SeasonStatsTable props={teams} />
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default SeasonalStats;
