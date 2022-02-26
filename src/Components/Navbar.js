import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="relative w-full bg-[#4739B6] border rounded">
      <div className="flex flex-row h-20 justify-between items-center gap-x-5 px-5">
        <Link to="/" className="font-bold text-xl text-white">
          SPORT<span className="text-red-500">RADAR</span>
        </Link>
        <nav className="hidden md:flex text-white font-bold   flex-row justify-center items-center gap-x-5">
          <a>Home Page</a>
          <a>Season Stats</a>
          <a>Season Results</a>
          <a>Live Matches</a>
        </nav>
        <GiHamburgerMenu
          onClick={() => setisOpen(!isOpen)}
          className="md:hidden text-xl cursor-pointer text-white"
        />
      </div>
      {isOpen && (
        <nav className="flex text-white font-bold   flex-col justify-center items-center gap-y-5 py-5">
          <a>Home Page</a>
          <a>Season Stats</a>
          <a>Season Results</a>
          <a>Live Matches</a>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
