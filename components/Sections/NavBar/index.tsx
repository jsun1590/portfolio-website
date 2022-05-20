import Button from "@components/Utils/Button";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 flex justify-between bg-gray-900 text-primary h-14">
      <div className="flex items-center">
        <Link href="/">
          <a className=" h-9">
            <Image src={"/logo/logo.svg"} width={36} height={36} alt="Logo" />
          </a>
        </Link>

        <Link href="/">
          <a className="mx-3 duration-300 hover:text-red-500">Home</a>
        </Link>

        <Link href="/about">
          <a className="mx-3 duration-300 hover:text-red-500">About</a>
        </Link>

        <Link href="/projects">
          <a className="mx-3 duration-300 hover:text-red-500">Projects</a>
        </Link>

        <Link href="/blog">
          <a className="mx-3 duration-300 hover:text-red-500">Blog</a>
        </Link>
      </div>

      <div className="flex items-center">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <FontAwesomeIcon
            icon={theme === "dark" ? faSun : faMoon}
            className="h-8"
          />
        </button>

        <Link href="/contact">
          <a>
            <Button content="Contact" type="primary"></Button>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
