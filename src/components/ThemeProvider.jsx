import React, { useState } from "react";

const themes = {
  light: {
    backgroundColor: "#fff",
    color: "#000",
  },
  dark: {
    backgroundColor: "#000",
    color: "#fff",
  },
};

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div style={themes[theme]}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </div>
  );
}

export default ThemeProvider;
