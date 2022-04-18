import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Social = () => {

  return (
    <>
    <a
      href=""
      className="mx-2 rounded-[50%] shadow-circle shadow-white hover:shadow-yellow-300 transition-all hover:-translate-y-1"
    >
      <FontAwesomeIcon icon={faGithub} className="w-10 h-10 p-2 text-center text-white transition-colors hover:text-yellow-300" />
    </a>

  <a
  href=""
  className="mx-2 rounded-[50%] shadow-circle shadow-white hover:shadow-blue-500 transition-all hover:-translate-y-1"
  >
  <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10 p-2 text-center text-white transition-colors hover:text-blue-500" />
  </a>

  </>

  );
};

export default Social;
