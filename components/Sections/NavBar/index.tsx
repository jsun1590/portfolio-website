import Button from "@components/Utils/Button";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-gray-900 text-primary h-14">
      <div className="">
        <Link href="/">
          <a>
            <Image src={"/logo/logo.svg"} width={35} height={35} alt="Logo" />
          </a>
        </Link>

        <Link href="/">
          <a className="mx-3 duration-300 hover:text-red-500">Home</a>
        </Link>

        <Link href="about">
          <a className="mx-3 duration-300 hover:text-red-500">About</a>
        </Link>

        <Link href="projects">
          <a className="mx-3 duration-300 hover:text-red-500">Projects</a>
        </Link>

        <Link href="blog">
          <a className="mx-3 duration-300 hover:text-red-500">Blog</a>
        </Link>
      </div>

      <div className="">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          toggle
        </button>

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
