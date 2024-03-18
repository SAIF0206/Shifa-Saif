import React from "react";
import Section from "./section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex justify-center items-center">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. Made with Love 🫶.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
