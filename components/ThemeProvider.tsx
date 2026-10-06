"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read the theme that was already set by the inline script
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    if (current === "light" || current === "dark") {
      setTheme(current);
      document.documentElement.classList.remove(current === "light" ? "dark" : "light");
      document.documentElement.classList.add(current);
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.classList.remove(next === "light" ? "dark" : "light");
    document.documentElement.classList.add(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : "dark", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
