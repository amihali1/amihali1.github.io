"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Theme, Colors } from "@/lib/types";
import { darkColors, lightColors } from "@/lib/colors";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
  colors: Colors;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const isDark = theme === "dark";
  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
        isDark,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
