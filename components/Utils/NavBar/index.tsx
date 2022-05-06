import React from "react";
import Button from "@components/Button";
import Image from "next/image";
const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between bg-gray-900 text-primary h-14">
      <div className="flex">
        <Image src={"/logo.svg"} width={60} height={200} alt="Logo"/>

        <a
          className="mx-3 my-auto transition-colors duration-300 hover:text-red-500"
          href="."
        >
          Home
        </a>
        <a
          className="mx-3 my-auto transition-colors duration-300 hover:text-red-500"
          href="about"
        >
          About
        </a>
        <a
          className="mx-3 my-auto transition-colors duration-300 hover:text-red-500"
          href="projects"
        >
          Projects
        </a>
      </div>
      <div className="my-auto">
        <a href="contact">
          <Button content="Contact" type="primary"></Button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
