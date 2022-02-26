import React, { useState, useEffect } from "react";
import { getSeasons, getAllResults } from "../api";
import axios from "axios";
import { Link } from "react-router-dom";
import ResultsTable from "../Components/ResultsTable";

const SeasonalResults = () => {
  const [data, setData] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("sr:season:67233");

  const makeApiCall = async () => {
    const seasons = await axios.get(getSeasons());
    const data = await axios.get(getAllResults(selectedSeason));
    setSeasons(seasons.data.seasons);
    setData(data.data.schedules);
  };

  useEffect(() => {
    makeApiCall();
  }, [selectedSeason]);
  return (
    <div className="grid place-items-center ">
      <div className="flex flex-row justify-between items-center gap-x-2">
        <div>Seasonal Results</div>
        <select onChange={(e) => setSelectedSeason(e.target.value)}>
          {seasons.map((season) => (
            <option value={season.id}>{season.year}</option>
          ))}
        </select>
      </div>

      {/* table */}
      <table className="w-full text-center bg-white border border-black">
        <thead className="bg-[#4739B6] text-white">
          <tr>
            {[
              "Date",
              "Home Team",
              "Result",
              "Away Team",
              "First Period",
              "Second Period",
              "Stadium",
            ].map((title) => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        {data.slice(0, 8).map((result) => (
          <tbody>
            <ResultsTable props={result} />
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default SeasonalResults;
