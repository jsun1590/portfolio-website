import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faKeybase,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import BrandIcon from "@components/Utils/BrandIcon";

const Social = () => {
  return (
    <section className="flex justify-center py-4">
      <a
        href="https://github.com/jsun1590"
        className="mx-2 rounded-[50%] shadow-circle dark:shadow-white hover:!shadow-yellow-300 transition-transform hover:-translate-y-1"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="w-10 h-10 p-2 text-center dark:text-white hover:!text-yellow-300"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/jack-sun-a743b6220"
        className="mx-2 rounded-[50%] shadow-circle dark:shadow-white hover:!shadow-blue-500 transition-transform hover:-translate-y-1"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="w-10 h-10 p-2 text-center dark:text-white hover:!text-blue-500"
        />
      </a>

      <a
        href="mailto:jsun1590@gmail.com"
        className="mx-2 rounded-[50%] shadow-circle dark:shadow-white hover:!shadow-emerald-400 transition-transform hover:-translate-y-1"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="w-10 h-10 p-2 text-center dark:text-white hover:!text-emerald-400"
        />
      </a>

      <a
        href="https://keybase.io/jsun1590"
        className="mx-2 rounded-[50%] shadow-circle dark:shadow-white hover:!shadow-orange-500 transition-transform hover:-translate-y-1"
      >
        <FontAwesomeIcon
          icon={faKeybase}
          className="w-10 h-10 p-2 text-center dark:text-white hover:!text-orange-500"
        />
      </a>

      <a
        href="https://tryhackme.com/p/jsun1590"
        className="mx-2 rounded-[50%] shadow-circle dark:shadow-white hover:!shadow-red-500 transition-transform hover:-translate-y-1"
      >
        <BrandIcon
          icon={"siTryhackme"}
          dimensions={10}
          className="w-10 h-10 p-2 text-center dark:fill-white hover:!fill-red-500"
        />
      </a>

      <a
        href="https://app.hackthebox.com/profile/890352"
        className="mx-2 rounded-[50%] shadow-circle dark:shadow-white hover:!shadow-green-500 transition-transform hover:-translate-y-1"
      >
        <BrandIcon
          icon={"siHackthebox"}
          dimensions={10}
          className="w-10 h-10 p-2 text-center dark:fill-white hover:!fill-green-500"
        />
      </a>
    </section>
  );
};

export default Social;
