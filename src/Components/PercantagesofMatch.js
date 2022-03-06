import React, { useState } from "react";

const PercantagesofMatch = ({ data }) => {
  function findPercantage(a, total) {
    if (a === 0 && total === 0) return 50;
    else return (a / total) * 100;
  }
  const HomeTeam = data?.statistics?.totals?.competitors[0]?.statistics;
  const AwayTeam = data?.statistics?.totals?.competitors[1]?.statistics;
  const EmptyArray = [];
  for (const [key, value] of Object.entries(HomeTeam)) {
    EmptyArray.push([key, [value, AwayTeam[key]]]);
  }
  console.log(data);
  return (
    <div className="w-[650px] mx-auto mt-10">
      <div className="w-full h-32  flex flex-row justify-between  items-center px-5 k mb-5 bg-blue-600 rounded-l">
        <div className="p-5 border border-black">
          {data.sport_event.competitors[0].name}
        </div>
        <div className="p-3 flex flex-col justify-between item-center text-white">
          <div className="flex flex-row justify-center items-center gap-x-1 ">
            <h2 className="text-4xl">{data.sport_event_status.home_score}</h2>
            <h2 className="text-3xl">-</h2>
            <h2 className="text-4xl">{data.sport_event_status.away_score}</h2>
          </div>
        </div>
        <div className="p-5 border border-black">
          {data.sport_event.competitors[1].name}
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center border border-black p-5 rounded-l">
        <div className="w-full h-full flex flex-col items-center gap-y-2">
          {EmptyArray.length !== 0 ? (
            EmptyArray.map((stats, index) => {
              const [statsName, [homeStats, awayStats]] = stats;
              return (
                <div
                  key={index}
                  className="w-full flex flex-col justify-center gap-y-1"
                >
                  <div className="flex flex-row justify-between text-sm font-[550] tracking-wide">
                    <h2>
                      {homeStats}
                      {index === 0 ? "%" : ""}
                    </h2>
                    <h2 className="capitalize">
                      {statsName.split("_")[0]} {statsName.split("_")[1]}
                    </h2>
                    <h2>
                      {awayStats}
                      {index === 0 ? "%" : ""}
                    </h2>
                  </div>
                  <div className=" h-3 flex flex-row">
                    <div
                      style={{
                        width: `${findPercantage(
                          homeStats,
                          homeStats + awayStats
                        )}%`,
                      }}
                      className="bg-[#ff0046]  rounded-l"
                    ></div>
                    <div
                      style={{
                        width: `${findPercantage(
                          awayStats,
                          homeStats + awayStats
                        )}%`,
                      }}
                      className=" bg-blue-500 rounded-r"
                    ></div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PercantagesofMatch;

/*



   
      
*/
