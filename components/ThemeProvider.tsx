"use client";

import React, { useEffect } from "react";
import { useThemeStore } from "@/store/useThemeStore";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();

  // --- SYNC THEME TO DOCUMENT ---
  useEffect(() => {
    // Menambahkan class atau atribut ke root element agar CSS variable berubah
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div
      data-theme={theme}
      className="min-h-screen transition-colors duration-300"
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
