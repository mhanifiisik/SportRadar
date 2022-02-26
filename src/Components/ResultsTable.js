import React from "react";

const ResultsTable = ({ props }) => {
  const { sport_event: info, sport_event_status: stats } = props;
  return (
    <tr className="border-b border-black">
      <td>{info.start_time.substring(0, 10)}</td>
      <td>{info.competitors[0].name}</td>
      <td>
        {stats.home_score} {stats.away_score}
      </td>
      <td>{info.competitors[1].name}</td>
      <td>
        {stats.period_scores[0].home_score} {stats.period_scores[0].away_score}
      </td>
      <td>
        {stats.period_scores[1].home_score} {stats.period_scores[1].away_score}
      </td>
      <td className="text-center">{info.venue.name}</td>
    </tr>
  );
};

export default ResultsTable;
