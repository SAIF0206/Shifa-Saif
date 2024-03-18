import React from "react";
import Section from "./section";
import nikhaCard from "../assets/NikhaCard.png";
import receptionCard from "../assets/receptionCard.png";
const Schedule = () => {
  return (
    <Section>
      <div className="container">
        <div className="max-w-[50rem] mx-auto mb-6 lg:mb-20 md:text-center">
          <h2 className="h2 mb-6">إن شاء الله</h2>
          <h5 className="tagline mb-6  text-n-1/50">
            <em>
              There is nothing like marriage, for the two who love one another.
            </em>
          </h5>
        </div>
        <div className="relative">
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[30rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover md:object-right"
                  width={630}
                  alt="Nikha Card"
                  height={730}
                  src={nikhaCard}
                />
              </div>
            </div>
            <div className=" bg-n-7 rounded-3xl overflow-hidden min-h-[30rem]">
              <img
                className="w-full h-full object-cover md:object-right"
                width={630}
                alt="Nikha Card"
                height={730}
                src={receptionCard}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Schedule;
