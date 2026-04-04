import { useLocalStorage } from "../hooks/useLocalStorage";
import { useThemeEffect } from "../hooks/useThemeEffect";
import { ThemeContext, type Theme } from "./ThemeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize theme state with localStorage or default to "light"
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Apply theme changes to the document body
  useThemeEffect(theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
