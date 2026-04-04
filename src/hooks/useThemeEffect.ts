import { useEffect } from "react";
import type { Theme } from "../context/ThemeContext";

// A custom hook to apply the current theme to the document body
export const useThemeEffect = (theme: Theme) => {
  useEffect(() => {
    // apply current theme
    document.body.className = theme;

    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    if (theme === "light") {
      document.body.classList.remove("dark");
    }
  }, [theme]);
};
