import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <section className="flex justify-center py-4">
      <a
        href=""
        className="mx-2 rounded-[50%] shadow-circle dark:shadow-white hover:!shadow-yellow-300 transition-all hover:-translate-y-1"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="w-10 h-10 p-2 text-center transition-colors dark:text-white hover:!text-yellow-300"
        />
      </a>

      <a
        href=""
        className="mx-2 rounded-[50%] shadow-circle dark:shadow-white hover:!shadow-blue-500 transition-all hover:-translate-y-1"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="w-10 h-10 p-2 text-center transition-colors dark:text-white hover:!text-blue-500"
        />
      </a>
    </section>
  );
};

export default Social;
