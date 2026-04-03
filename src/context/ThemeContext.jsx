// src/context/ThemeContext.jsx
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");

    // Add/remove dark class on html
    const html = document.documentElement;
    if (theme === "light") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};