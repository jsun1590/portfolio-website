import Button from "@components/Utils/Button";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const NavBar = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const burgerMenuCallback = () => {
    setShowBurgerMenu((showBurgerMenu) => !showBurgerMenu);
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between bg-gray-900 transform-3d text-primary h-14">
      <div className="flex items-center">
        <Link href="/">
          <a className="ml-6 mr-3 h-9 min-w-fit">
            <Image src={"/logo/logo.svg"} width={36} height={36} alt="Logo" />
          </a>
        </Link>

        <div className="hidden sm:block">
          {links
            .filter(({ label }) => label !== "Contact")
            .map(({ href, label }) => (
              <Link key={label} href={href}>
                <a className="mx-3 duration-300 hover:text-red-500">{label}</a>
              </Link>
            ))}
        </div>
      </div>

      <div className="flex items-center">
        <DarkModeToggle />
        <Link href="/contact">
          <a className="hidden mx-6 sm:block">
            <Button content="Contact"></Button>
          </a>
        </Link>

        <FontAwesomeIcon
          icon={showBurgerMenu ? faX : faBars}
          height={36}
          width={36}
          className="mx-6 cursor-pointer sm:hidden"
          onClick={burgerMenuCallback}
        />
      </div>
      <BurgerMenu
        className={
          "absolute block top-14 w-[100%] -translate-z-10 transition-transform " +
          (showBurgerMenu ? "" : "-translate-y-[100%]")
        }
        links={links}
        setButtonCallback={burgerMenuCallback}
      />
    </nav>
  );
};

export default NavBar;
