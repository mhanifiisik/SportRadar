import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import DetailStats from "../Components/DetailStats";
import { useLocation } from "react-router-dom";
import { getDetailedMatchLineUp, getDetailedMatchStats } from "../api";
import axios from "axios";
import { MdOutlineAccessTime, MdLocationOn } from "react-icons/md";
import PercantagesofMatch from "../Components/PercantagesofMatch";

const MatchInfoPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = location.pathname.split("/")[2];

  const getData = async () => {
    setLoading(true);
    const data = await axios.get(getDetailedMatchStats(id));

    setData(data.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="relative max-w-7xl mx-auto">
      {data.length !== 0 && !loading ? (
        <>
          {data.sport_event_status.match_status === "ended" ? (
            <PercantagesofMatch data={data} />
          ) : data.sport_event_status.match_status === "postponed" ? (
            <p>ERTELENDI</p>
          ) : data.sport_event_status.match_status === "not_started" ? (
            <p>BASLAMADI</p>
          ) : (
            <p>ERROR</p>
          )}
          <></>
        </>
      ) : (
        //IF NO DATA LOADING SCREEN
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      )}
    </div>
  );
};

export default MatchInfoPage;
