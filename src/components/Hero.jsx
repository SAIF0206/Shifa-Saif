import Section from "./section";
import curve from "../assets/hero/curve.png";
import nikhaImage from "../assets/hero/couple.jpeg";
import heroBG from "../assets/hero/hero-background.jpg";
import { useState, useEffect, useRef } from "react";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import Notification from "./Notification";

function Hero() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`2024-04-20`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[6rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">﷽ </h1>{" "}
          <h1 className="h1 mb-6">
            Tying the knot💞 <br />
            <span className="inline-block relative">
              Saif Weds Shifa
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <h5 className="h5">
            {" "}
            {timerComponents.length ? (
              timerComponents
            ) : (
              <span>💞 Happily Married Ever After 💞</span>
            )}
          </h5>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div
            className="relative z-1 p-0.5 
          rounded-2xl bg-conic-gradient"
          >
            <div className="relative bg-n-8 rounded-[1rem]">
              <div
                className="h-[1.4rem] bg-n-10
              rounded-t-[0.9rem]"
              />
              <div className="rounded-b-[0.9rem] overflow-hidden lg:aspect-[1024/490]">
                <img
                  src={nikhaImage}
                  className="w-full"
                  width={1440}
                  height={1880}
                  alt="Nikah"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -left-[5.5rem] bottom-[13rem] w-[18rem] xl:flex"
                    title="Nikha"
                    date="20-April-2024"
                  />
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[6rem] w-[18rem] xl:flex"
                    title="Reception"
                    date="22-April-2024"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img src={heroBG} />
          </div>
          <BackgroundCircles />
        </div>
        <div className="relative z-10 mt-10 lg:block">
          <h5 className="tagline mb-6 text-center text-n-1/50">
            And We Created You In Pairs. <br />
            <em>Quran: 78:8</em>
          </h5>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
