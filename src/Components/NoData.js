import React from "react";
import video from "../space.mp4";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const NoData = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10  text-white">
      <Link to="/">
        <BiArrowBack className="mb-5" size={25} color="white" />
      </Link>
      <div className="relative w-full flex flex-col justify-start   border border-[#0055ff]  rounded-l overflow-y-auto">
        <video
          className="w-full object-contain"
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop
          src={video}
        />
        <h2 className="absolute text-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          OOPS NO DATA
        </h2>
      </div>
    </div>
  );
};

export default NoData;
