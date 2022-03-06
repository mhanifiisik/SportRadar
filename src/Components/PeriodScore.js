import React from "react";

const PeriodScore = (stats) => {
  const { match_status, status } = stats.data;
  return (
    <>
      {match_status === "ended" ? (
        <>
          <td>
            {stats.data.period_scores[0].home_score} :
            {stats.data.period_scores[0].away_score}
          </td>
          <td>
            {stats.data.period_scores[1].home_score} :
            {stats.data.period_scores[1].away_score}
          </td>
        </>
      ) : match_status === "not_started" ? (
        <>
          <td>-</td>
          <td>-</td>
        </>
      ) : status === "cancelled" ? (
        <>
          <td>Cancelled</td>
          <td>Cancelled</td>
        </>
      ) : (
        <>
          <td>Postponed</td>
          <td>Postponed</td>
        </>
      )}
    </>
  );
};

export default PeriodScore;
