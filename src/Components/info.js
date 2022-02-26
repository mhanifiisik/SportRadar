import React from "react";
import image from "../128.png";
/*import HeadShake from "react-reveal/HeadShake";*/

const info = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center h-[200px]  bg-[#ffff] my-10  rounded">
      <h2 className="flex-1 text-2xl font-bold px-5 text-blue-600">
        Poland Profesional Football League
      </h2>
      <img src={image} alt="logo" className="w-1/3 h-full object-contain" />
    </div>
  );
};

export default info;
