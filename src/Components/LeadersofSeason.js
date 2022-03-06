import React, { useState, useEffect } from "react";
import axios from "axios";
import { getSeasonLeaders } from "../api";

const LeadersofSeason = () => {
  const [data, setData] = useState([]);
  const [selectedStats, setSelectedStats] = useState(1);

  const getData = async () => {
    const data = await axios.get(getSeasonLeaders());
    setData(data.data.lists[selectedStats].leaders);
  };
  useEffect(() => {
    getData();
  }, [selectedStats]);

  let lengthofData = data[0]?.players[0]?.competitors[0]?.datapoints?.length;
  let TableHeader = ["#", "Player Name", "Team", "Goals"];
  let TableHeader2 = ["#", "Player Name", "Team", "Assists"];
  let TableHeader3 = ["#", "Player Name", "Team", "Goals", "Assits"];
  return (
    <div className="overflow-x-auto">
      {data.length !== 0 ? (
        <>
          <div className="w-full flex flex-row justify-between">
            <p>Seasonal Stats</p>
            <select onChange={(e) => setSelectedStats(Number(e.target.value))}>
              <option value={1}>Goals</option>
              <option value={2}>Assits</option>
              <option value={0}>Points</option>
            </select>
          </div>

          <table className="stats-table w-full text-center">
            <thead className="bg-[#4739B6] text-white">
              <tr>
                {selectedStats === 0
                  ? TableHeader3.map((title, index) => (
                      <th key={index}>{title}</th>
                    ))
                  : selectedStats === 1
                  ? TableHeader.map((title, index) => (
                      <th key={index}>{title}</th>
                    ))
                  : TableHeader2.map((title, index) => (
                      <th key={index}>{title}</th>
                    ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 7).map((item) =>
                item.players.map((player, index) => (
                  <tr key={index + 30}>
                    <td>{item.rank}</td>
                    <td>
                      {player.name.split(",")[1]} {player.name.split(",")[0]}
                    </td>
                    <td>{player.competitors[0].name}</td>
                    <td>{player.competitors[0].datapoints[0].value}</td>
                    {lengthofData > 1 && (
                      <td>{player.competitors[0].datapoints[1]?.value}</td>
                    )}
                  </tr>
                ))
              )}
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

export default LeadersofSeason;
