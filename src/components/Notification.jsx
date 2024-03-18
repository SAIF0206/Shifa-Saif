import React from "react";
import hands from "../assets/handsBG.jpeg";
const Notification = ({ className, title, date }) => {
  return (
    <div
      className={`${className || " "} flex items-center p-4 pr-6
  bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 `}
    >
      <img
        src={hands}
        width={100}
        height={62}
        alt="hands"
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex">
          {" "}
          <h6 className="flex font-semibold text-base">{date}</h6>
        </div>
      </div>
    </div>
  );
};

export default Notification;
