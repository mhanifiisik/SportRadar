import React from "react";
import { useNavigate } from "react-router-dom";
import PeriodScore from "../Components/PeriodScore";

const ResultsTable = ({ props }) => {
  const { sport_event: info, sport_event_status: stats } = props;
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => navigate(`/match/${info.id}`)}
      target="_blank"
      className="border-b border-black cursor-pointer"
    >
      <td>{info.start_time.substring(0, 10)}</td>
      <td
        className={`${
          stats.home_score > stats.away_score
            ? "bg-green-500"
            : stats.home_score < stats.away_score
            ? "bg-red-500"
            : stats.status === "postponed" || stats.status === "cancelled"
            ? "bg-purple-500"
            : stats.status === "not_started"
            ? ""
            : "bg-yellow-500"
        }`}
      >
        {info.competitors[0].name}
      </td>
      <td>
        {stats.match_status === "ended" ? (
          <>
            {stats.home_score} : {stats.away_score}
          </>
        ) : (
          <>-</>
        )}
      </td>
      <td
        className={`${
          stats.home_score < stats.away_score
            ? "bg-green-500"
            : stats.home_score > stats.away_score
            ? "bg-red-500"
            : stats.status === "postponed" || stats.status === "cancelled"
            ? "bg-purple-500"
            : stats.status === "not_started"
            ? ""
            : "bg-yellow-500"
        }`}
      >
        {info.competitors[1].name}
      </td>
      <PeriodScore data={stats} />
      <td>{info.venue.name}</td>
    </tr>
  );
};

export default ResultsTable;
