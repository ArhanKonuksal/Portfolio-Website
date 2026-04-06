/**
 * Theme Toggle Component
 * Icon button for switching between light/dark modes
 */

import useDarkMode from "../../hooks/useDarkMode";
import { SunIcon, MoonIcon } from "../icons";

const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleDarkMode } = useDarkMode();
  
  const classes = ["icon-btn", className].filter(Boolean).join(" ");

  return (
    <button 
      className={classes}
      onClick={toggleDarkMode}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      type="button"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
