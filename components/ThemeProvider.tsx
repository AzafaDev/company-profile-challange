"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen`}
        style={{ backgroundColor: "#ffffff" }}
        data-set={theme}
      >
        {children}
      </body>
    </html>
  );
};

export default ThemeProvider;
