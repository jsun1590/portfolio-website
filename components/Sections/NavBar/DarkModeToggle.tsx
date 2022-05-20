import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} height="36" />
    </button>
  );
};
export default DarkModeToggle;
