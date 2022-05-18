import React from "react";
import Wave from "react-wavify";
import Social from "./Social";
const Footer = () => {
  return (
    <footer className="bg-slate-200 dark:bg-stone-900">
      <Wave
        fill=""
        className="transition-colors bg-white dark:bg-neutral-800 child:translate-y-1 dark:child-2:fill-stone-900 child-2:fill-slate-200"
        paused={false}
        options={{
          height: 30,
          amplitude: 30,
          speed: 0.15,
          points: 4,
        }}
      />

      <Social />
      <p className="pb-4 text-center dark:text-gray-400">
        © Copyright 2022 Jack Sun | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
