import React from "react";
import logo from "../assets/SSlogo.png";
const Tagline = ({ className, tagLine }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={logo} alt="SS logo" />
      {tagLine}
    </div>
  );
};

export default Tagline;
