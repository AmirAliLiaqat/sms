import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Helper: Convert Hex to RGB space-separated string
const hexToRgb = (hex) => {
  if (!hex) return null;
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : null;
};

export const ThemeProvider = ({ children }) => {
  // Initialize state from localStorage or defaults
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [primaryColor, setPrimaryColor] = useState(() => {
    return localStorage.getItem("primaryColor") || "#2563eb";
  });

  // Apply Dark Mode
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Apply Primary Color
  useEffect(() => {
    const root = window.document.documentElement;
    const rgb = hexToRgb(primaryColor);
    if (rgb) {
      root.style.setProperty("--color-primary", rgb);
      // Optional: Calculate darker/lighter shades if needed,
      // but current setup uses opacity which works well with single variable.
      localStorage.setItem("primaryColor", primaryColor);
    }
  }, [primaryColor]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const updatePrimaryColor = (color) => {
    setPrimaryColor(color);
  };

  const value = {
    theme,
    toggleTheme,
    primaryColor,
    updatePrimaryColor,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
