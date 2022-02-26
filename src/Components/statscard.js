import React from "react";

const statscard = ({ data, value }) => {
  return (
    <ul className="w-1/2 flex flex-col gap-y-2">
      <li>
        <span>Ball Possesion</span>
        <span>
          {data.statistics.totals.competitors[value].statistics.ball_possession}
        </span>
      </li>
      <li>
        <span>Total Shots</span>
        <span>
          {data.statistics.totals.competitors[value].statistics.shots_total}
        </span>
      </li>
      <li>
        <span>Shots on Target</span>
        <span>
          {data.statistics.totals.competitors[value].statistics.shots_on_target}
        </span>
      </li>
      <li>
        <span>Shots off Target</span>
        <span>
          {
            data.statistics.totals.competitors[value].statistics
              .shots_off_target
          }
        </span>
      </li>
      <li>
        <span>Shot Saved</span>
        <span>
          {data.statistics.totals.competitors[value].statistics.shots_saved}
        </span>
      </li>
      <li>
        <span>Yellow Cards</span>
        <span>
          {data.statistics.totals.competitors[value].statistics.yellow_cards}
        </span>
      </li>
      <li>
        <span>Red Cards</span>
        <span>
          {data.statistics.totals.competitors[value].statistics.red_cards}
        </span>
      </li>
      <li>
        <span>Corner Kicks</span>
        <span>
          {data.statistics.totals.competitors[value].statistics.corner_kicks}
        </span>
      </li>
      <li>
        <span>Offsides</span>
        <span>
          {data.statistics.totals.competitors[value].statistics.offsides}
        </span>
      </li>
      <li>
        <span>Fouls</span>
        <span>
          {data.statistics.totals.competitors[value].statistics.fouls}
        </span>
      </li>
      <li>
        <span>Throws in</span>
        <span>
          {data.statistics.totals.competitors[value].statistics.throw_ins}
        </span>
      </li>
    </ul>
  );
};

export default statscard;
