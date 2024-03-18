import React from "react";
import Button from "./Button";
import Section from "./section";

function VideoCardBtn() {
  return (
    <Section className="overflow-hidden">
      <div className="container md:pb-10">
        <div className="flex justify-center mt-6">
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://youtu.be/9k_D_1ixFbg", "_blank");
            }}
            white
          >
            Wedding Card
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default VideoCardBtn;
