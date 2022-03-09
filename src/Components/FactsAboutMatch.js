import React, { useState, useEffect } from "react";
import axios from "axios";
import { getFactsAboutMatch } from "../api";

const FactsAboutMatch = ({ id }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await axios.get(getFactsAboutMatch(id));
    setData(data.data.facts);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="max-w-2xl mx-auto mt-10  text-white">
      <div className="w-full h-full flex flex-col justify-start   border border-[#0055ff] p-5 rounded-l overflow-y-auto">
        {data.length !== 0 ? (
          data.slice(0, 15).map((fact, index) => (
            <p
              className=" flex justify-start border-b text-sm border-gray-700 py-2"
              key={index}
            >
              {fact.statement}
            </p>
          ))
        ) : (
          <div className="loading-bar-container">
            <div className="loading-bar" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FactsAboutMatch;
