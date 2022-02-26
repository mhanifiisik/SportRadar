import React, { useState, useEffect } from "react";
import { getDetailedMatchStats } from "../api";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Teams = () => {
  const location = useLocation();
  const { fromID } = location.state;

  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    fetch(
      `soccer/trial/v4/en/sport_events/sr:sport_event:22926007/fun_facts.json?api_key=qvhee5wyv427b3ue7kgp9cvb`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div>{typeof fromID}</div>;
};

export default Teams;
