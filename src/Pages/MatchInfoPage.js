import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import { getDetailedMatchStats } from "../api";
import axios from "axios";
import Statscard from "../Components/statscard";
import { MdOutlineAccessTime, MdLocationOn } from "react-icons/md";

const MatchInfoPage = () => {
  const { state } = useLocation();
  const [data, setData] = useState([]);
  const [matchID, setMatchID] = useState("sr:sport_event:18363531");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const data = await axios.get(getDetailedMatchStats(matchID));
    setData(data.data);
    setLoading(false);
  };
  useEffect(() => {
    setMatchID(state);
    getData();
  }, []);
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div className="relative max-w-7xl mx-auto">
      <Navbar />
      <div className=" relative w-full  h-[calc(100vh-20rem)] mt-10 ">
        <div className="flex  text-xl md:text-3xl flex-row justify-center items-center gap-x-2 mb-10">
          <h2>{data.sport_event.competitors[0].name}</h2>
          <div className="flex flex-row gap-x-5 border border-black mx-5 p-5">
            <h2>{data.sport_event_status.home_score}</h2>
            <h2>{data.sport_event_status.away_score}</h2>
          </div>
          <h2>{data.sport_event.competitors[1].name}</h2>
        </div>
        <div className="flex flex-row justify-between pb-3">
          <p className="flex flex-row justify-center items-center gap-x-2">
            <MdOutlineAccessTime />
            {data.sport_event.start_time.substr(0, 10)}
          </p>
          <p className="flex flex-row-reverse justify-center items-center gap-x-2">
            <MdLocationOn />
            {data.sport_event.venue.name}
          </p>
        </div>
        <div className="w-full p-5 gap-x-5  flex flex-row justify-between items-center  border border-black">
          <Statscard data={data} value={0} />
          <Statscard data={data} value={1} />
        </div>
      </div>
    </div>
  );
};

export default MatchInfoPage;
