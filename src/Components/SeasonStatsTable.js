import React from "react";

const SeasonStatsTable = ({ props }) => {
  const {
    competitor: teamInfo,
    rank,
    played,
    win,
    draw,
    loss,
    goals_for,
    goals_against,
    goals_diff: average,
    points,
  } = props;

  return (
    <tr className="border-b border-black">
      <td>{rank}</td>
      <td>{teamInfo.name}</td>
      <td>{played}</td>
      <td>{win}</td>
      <td>{draw}</td>
      <td>{loss}</td>
      <td>{goals_for}</td>
      <td>{goals_against}</td>
      <td>{average}</td>
      <td>{points}</td>
    </tr>
  );
};

export default SeasonStatsTable;
