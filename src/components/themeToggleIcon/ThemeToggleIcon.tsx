import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./themeToggleIcon.scss";

const ThemeToggleIcon = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)!;
  const isLight = theme === "light";
  return (
    <button
      className="ToggleThemeIcon"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        // <img src="/moon.svg" alt="" className="icon-moon" />
        <svg
          className="icon-moon lucide lucide-moon absolute h-4 w-4 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
        </svg>
      ) : (
        // <img src="/sun.svg" alt="" className="icon-sun" />
        <svg
          className="icon-sun lucide lucide-sun h-4 w-4 scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      )}
    </button>
  );
};

export default ThemeToggleIcon;
