import React from "react";
import Button from "@components/Buttons"
import Image from "next/image";
const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between bg-gray-900 text-primary h-14">
      <div className="flex">
        <Image src={"/logo_placeholder.png"} width={60} height={200} />

        <a
          className="mx-3 my-auto transition-colors duration-300 hover:text-red-500"
          href="#"
        >
          Home
        </a>
        <a
          className="mx-3 my-auto transition-colors duration-300 hover:text-red-500"
          href="#"
        >
          About
        </a>
        <a
          className="mx-3 my-auto transition-colors duration-300 hover:text-red-500"
          href="#"
        >
          Skills
        </a>
        <a
          className="mx-3 my-auto transition-colors duration-300 hover:text-red-500"
          href="#"
        >
          Projects
        </a>
      </div>
      <div className="my-auto">
        <Button content="Contact" type="primary"></Button>
      </div>
    </nav>
  );
};

export default NavBar;