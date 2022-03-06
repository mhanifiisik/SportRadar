import React, { useState, useEffect } from "react";
import { getSeasons, getAllResults } from "../api";
import axios from "axios";
import ResultsTable from "../Components/ResultsTable";
import { FcPrevious, FcNext } from "react-icons/fc";

const SeasonalResults = () => {
  const [data, setData] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("sr:season:84320");
  const [week, setWeek] = useState();
  const [selectedWeek, setSelectedWeek] = useState(1);

  /* fetching Data  */
  const makeApiCall = async () => {
    const seasons = await axios.get(getSeasons());
    const data = await axios.get(getAllResults(selectedSeason));
    setSeasons(seasons.data.seasons);
    setData(data.data.schedules);
    setWeek(
      data.data.schedules[data.data.schedules.length - 1].sport_event
        .sport_event_context.round.number
    );
  };

  useEffect(() => {
    makeApiCall();
  }, [selectedSeason]);

  /* Reverse Seasons */
  const ReversedSeasons = () => {
    const EmptyArray = [];
    Object.keys(seasons)
      .reverse()
      .map((index) => EmptyArray.push(seasons[index]));
    return EmptyArray;
  };

  const finder = () => {
    const date = new Date();
    const TodayWeek = data.find(
      (matches) =>
        matches.sport_event.start_time.substring(0, 10) ===
        date.toISOString().substring(0, 10)
    );
    return TodayWeek?.sport_event?.sport_event_context?.round?.number;
  };
  return (
    <div className="grid overflow-x-auto place-items-center ">
      {data.length !== 0 ? (
        <>
          <div className="flex w-full flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center gap-x-5">
              <h3>Regular Season - Week {selectedWeek}</h3>
              <div className="flex flex-row justify-between items-center gap-x-2">
                <span className="w-3 h-3 bg-green-500"></span>
                <span className="w-3 h-3 bg-yellow-500"></span>
                <span className="w-3 h-3 bg-red-500"></span>
                <span className="w-3 h-3 bg-purple-500"></span>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-5">
              <button
                className={`${
                  selectedWeek !== finder() &&
                  selectedSeason === "sr:season:84320"
                    ? "block"
                    : "hidden"
                }`}
                onClick={() => setSelectedWeek(finder())}
              >
                Go to Current Week
              </button>
              <button
                className={{ disabled: "cursor-not-allowed" }}
                disabled={selectedWeek === 1}
                onClick={() => setSelectedWeek(selectedWeek - 1)}
              >
                <FcPrevious>Prev</FcPrevious>
              </button>
              <h2>Week {selectedWeek}</h2>
              <button
                className={{ disabled: "cursor-not-allowed" }}
                disabled={selectedWeek === week}
                onClick={() => setSelectedWeek(selectedWeek + 1)}
              >
                <FcNext>Next</FcNext>
              </button>
              <select onChange={(e) => setSelectedSeason(e.target.value)}>
                {ReversedSeasons().map((season) => (
                  <option key={season.id} value={season.id}>
                    {season.year}
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
                ].map((title, index) => (
                  <th key={index}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data
                .filter(
                  (item) =>
                    item.sport_event.sport_event_context.round.number ===
                    selectedWeek
                )
                .map((result, index) => (
                  <ResultsTable key={index + 1} props={result} />
                ))}
            </tbody>
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

export default SeasonalResults;
