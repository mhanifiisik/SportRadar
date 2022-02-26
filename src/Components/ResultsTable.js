import React from "react";
import { useNavigate } from "react-router-dom";

const ResultsTable = ({ props }) => {
  const { sport_event: info, sport_event_status: stats } = props;
  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate(`/${info.id}`, { state: info.id })}
      className="border-b border-black cursor-pointer"
    >
      <td>{info.start_time.substring(0, 10)}</td>
      <td
        className={`${
          stats.home_score > stats.away_score
            ? "bg-green-500"
            : stats.home_score < stats.away_score
            ? "bg-red-500"
            : "bg-yellow-500"
        }`}
      >
        {info.competitors[0].name}
      </td>
      <td>
        {stats.home_score} : {stats.away_score}
      </td>
      <td
        className={`${
          stats.home_score < stats.away_score
            ? "bg-green-500"
            : stats.home_score > stats.away_score
            ? "bg-red-500"
            : "bg-yellow-500"
        }`}
      >
        {info.competitors[1].name}
      </td>
      <td>
        {stats.period_scores[0].home_score} :{" "}
        {stats.period_scores[0].away_score}
      </td>
      <td>
        {stats.period_scores[1].home_score} :{" "}
        {stats.period_scores[1].away_score}
      </td>
      <td>{info.venue.name}</td>
    </tr>
  );
};

export default ResultsTable;
