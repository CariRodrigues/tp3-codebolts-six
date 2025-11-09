import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Inicializar desde localStorage directamente
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  // Update body + localStorage whenever it changes
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for easy access
export const useTheme = () => useContext(ThemeContext);
