import React, { useState, useEffect } from "react";
import { getSeasons, getAllResults } from "../api";
import axios from "axios";
import ResultsTable from "../Components/ResultsTable";

const SeasonalResults = () => {
  const [data, setData] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("sr:season:67233");
  const [perPage, setPerPage] = useState(8);

  const makeApiCall = async () => {
    const seasons = await axios.get(getSeasons());
    const data = await axios.get(getAllResults(selectedSeason));
    setSeasons(seasons.data.seasons);
    setData(data.data.schedules);
  };

  useEffect(() => {
    makeApiCall();
  }, [selectedSeason]);
  console.log(data);
  return (
    <div className="grid overflow-x-auto place-items-center ">
      <div className="flex w-full flex-row justify-between items-center">
        <div className="">Seasonal Results</div>
        <div className="flex flex-row justify-center items-center gap-x-5">
          <select onChange={(e) => setSelectedSeason(e.target.value)}>
            {seasons.map((season) => (
              <option value={season.id}>{season.year}</option>
            ))}
          </select>
          <select onChange={(e) => setPerPage(e.target.value)}>
            {[8, 16, 24].map((number, index) => (
              <option key={index} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* table */}
      <table className="result-table  w-full text-center">
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
        {data.slice(0, perPage).map((result) => (
          <tbody>
            <ResultsTable props={result} />
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default SeasonalResults;
