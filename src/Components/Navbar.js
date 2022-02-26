import React from "react";

const Navbar = () => {
  return (
    <div className="relative w-full bg-[#D0CCED] border rounded">
      <div className="flex flex-row h-20 justify-start items-center gap-x-5">
        <h2>
          SPORT<span>RADAR</span>
        </h2>
        <nav className="flex flex-row justify-center items-center gap-x-2">
          <a>Home Page</a>
          <a>Season Stats</a>
          <a>Season Results</a>
          <a>Live Matches</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
