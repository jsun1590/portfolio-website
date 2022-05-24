import { useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const changeTheme = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [setTheme, theme]
  );
  return mounted ? (
    <button onClick={changeTheme}>
      <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} height="36" />
    </button>
  ) : null;
};
export default DarkModeToggle;
