import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetailedMatchStats } from "../api";
import axios from "axios";
import PercantagesofMatch from "../Components/PercantagesofMatch";
import SoccerTable from "../Components/SoccerTable";
import FactsAboutMatch from "../Components/FactsAboutMatch";
import NoData from "../Components/NoData";
import { useNavigate } from "react-router-dom";

const MatchInfoPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();

  const getData = async () => {
    try {
      setLoading(true);
      const data = await axios.get(getDetailedMatchStats(id));
      setData(data.data);
    } catch (error) {
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="matchinfo relative w-full min-h-screen mx-auto overflow-hidden">
      {data.length !== 0 && !loading ? (
        <>
          <SoccerTable data={data} />
          {data.sport_event_status.match_status === "ended" ? (
            <PercantagesofMatch data={data} />
          ) : data.sport_event_status.match_status === "not_started" ? (
            <NoData />
          ) : (
            <FactsAboutMatch id={id} />
          )}
          <></>
        </>
      ) : (
        <div className="loading-bar-container">
          <div className="loading-bar" />
        </div>
      )}
    </div>
  );
};

export default MatchInfoPage;
