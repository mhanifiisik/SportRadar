import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetailedMatchLineUp, getDetailedMatchStats } from "../api";
import axios from "axios";
import PercantagesofMatch from "../Components/PercantagesofMatch";
import SoccerTable from "../Components/SoccerTable";
import FactsAboutMatch from "../Components/FactsAboutMatch";
import NoData from "../Components/NoData";
import { Navigate } from "react-router-dom";
import Error from "../Components/Error";

const MatchInfoPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const id = location.pathname.split("/")[2];
  const getData = async () => {
    setLoading(true);
    const data = await axios
      .get(getDetailedMatchStats(id))
      .then((res) => {
        if (res.status === 200) {
          //RESULT OK
          return res;
        } else {
          setError(true);
        }
      })
      .then((data) => setData(data.data));
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    <Navigate to="*" replace={true} />;
  }
  return (
    <div className="matchinfo relative w-full min-h-screen mx-auto overflow-hidden">
      {data.length !== 0 ? (
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
        <Error />
      )}
    </div>
  );
};

export default MatchInfoPage;
