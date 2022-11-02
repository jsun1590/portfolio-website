import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faKeybase,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Social = () => {
  return (
    <section className="flex justify-center py-4">
      <a
        href="https://github.com/jsun1590/"
        className="mx-2 rounded-[50%] shadow-circle dark:shadow-white hover:!shadow-yellow-300 transition-all hover:-translate-y-1"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="transition-colors w-10 h-10 p-2 text-center dark:text-white hover:!text-yellow-300"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/jack-sun-a743b6220/"
        className="mx-2 rounded-[50%] shadow-circle dark:shadow-white hover:!shadow-blue-500 transition-all hover:-translate-y-1"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="transition-colors w-10 h-10 p-2 text-center dark:text-white hover:!text-blue-500"
        />
      </a>

      <a
        href="mailto:jsun1590@gmail.com"
        className="mx-2 rounded-[50%] shadow-circle dark:shadow-white hover:!shadow-emerald-400 transition-all hover:-translate-y-1"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="transition-colors w-10 h-10 p-2 text-center dark:text-white hover:!text-emerald-400"
        />
      </a>

      <a
        href="https://keybase.io/jsun1590"
        className="mx-2 rounded-[50%] shadow-circle dark:shadow-white hover:!shadow-orange-500 transition-all hover:-translate-y-1"
      >
        <FontAwesomeIcon
          icon={faKeybase}
          className="transition-colors w-10 h-10 p-2 text-center dark:text-white hover:!text-orange-500"
        />
      </a>
    </section>
  );
};

export default Social;
