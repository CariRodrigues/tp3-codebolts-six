import React from "react";
import { useTheme } from "@/context/ThemeContext";
import "@/components/DarkModeButton/DarkModeButton.css";

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      id="darkModeBtn"
      onClick={toggleDarkMode} 
      className={isDarkMode ? "dark" : "light"}
      style={{ justifyContent: isDarkMode ? "flex-start" : "flex-end" }}
    >
      <i
        className={`fa-solid mode-icon ${isDarkMode ? "fa-sun" : "fa-moon"}`}
      ></i>
    </button>
  );
};

export default DarkModeButton;
