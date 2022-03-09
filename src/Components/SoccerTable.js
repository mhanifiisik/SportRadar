import React from "react";
import { BiTime, BiLocationPlus } from "react-icons/bi";

const SoccerTable = ({ data }) => {
  return (
    <div className="max-w-2xl text-[#c8cdcd] mx-auto pt-10 relative">
      <div className="w-full h-32  flex flex-row justify-between border border-[#0055ff] items-center md:px-5 mb-5  rounded-l">
        <div className="p-5 text-white ">
          {data.sport_event.competitors[0].name.split(" ").length < 3
            ? data.sport_event.competitors[0].name
            : data.sport_event.competitors[0].name.split(" ")[2]}
        </div>
        <div className="p-3 flex flex-col justify-between item-center text-white">
          <div className="flex flex-row justify-center items-center gap-x-1 ">
            <h2 className="text-base md:text-4xl">
              {data.sport_event_status.home_score}
            </h2>
            <h2 className="md:text-3xl">-</h2>
            <h2 className="md:text-4xl">
              {data.sport_event_status.away_score}
            </h2>
          </div>
        </div>
        <div className="p-5 text-white ">
          {data.sport_event.competitors[1].name.split(" ").length < 3
            ? data.sport_event.competitors[1].name
            : data.sport_event.competitors[1].name.split(" ")[2]}
        </div>
      </div>
      <div className="absolute bottom-0 flex flex-row justify-between w-full gap-x-2 px-6 py-1 text-[#c8cdcd] text-sm">
        <p className="flex flex-row justify-center items-center gap-1">
          <BiTime /> {data.sport_event.start_time.substring(0, 10)}
        </p>
        <p className="flex flex-row justify-center items-center gap-1">
          <BiLocationPlus />
          {data.sport_event.venue.name}
        </p>
      </div>
    </div>
  );
};

export default SoccerTable;
