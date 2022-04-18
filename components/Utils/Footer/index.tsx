import React from "react";
import Wave from "react-wavify";
import Social from "./Social";
const Footer = () => {
  return (
    <>
      <footer className="bg-stone-900">
        <Wave
          className="bg-neutral-800 child:translate-y-1"
          fill="#1c1917"
          paused={false}
          options={{
            height: 30,
            amplitude: 30,
            speed: 0.15,
            points: 4,
          }}
        />

        <div className="flex justify-center py-4">
          <Social />
        </div>
        <p className="text-center text-gray-400 ">
          © Copyright 2022 Jack Sun | All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
