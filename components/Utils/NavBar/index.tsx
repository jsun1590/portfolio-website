import React from "react";
import Button from "@components/Button";
import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between bg-gray-900 text-primary h-14">
      <div className="flex">
        <Image src={"/logo.svg"} width={60} height={200} alt="Logo" />
        <Link href="/">
          <a className="mx-3 my-auto transition-colors duration-300 hover:text-red-500">
            Home
          </a>
        </Link>

        <Link href="about">
          <a className="mx-3 my-auto transition-colors duration-300 hover:text-red-500">
            About
          </a>
        </Link>

        <Link href="projects">
          <a className="mx-3 my-auto transition-colors duration-300 hover:text-red-500">
            Projects
          </a>
        </Link>

        <Link href="blog">
          <a className="mx-3 my-auto transition-colors duration-300 hover:text-red-500">
            Blog
          </a>
        </Link>
      </div>

      <div className="my-auto">
        <Link href="contact">
          <a>
            <Button content="Contact" type="primary"></Button>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
