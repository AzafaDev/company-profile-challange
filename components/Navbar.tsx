"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useThemeStore } from "@/store/useThemeStore";
import { MoonIcon, SunIcon, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MENU_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Teams", href: "/teams" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const { theme, setTheme } = useThemeStore();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // --- 1. INITIAL MOUNT & THEME SYNC ---
  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // --- 2. SCROLL HANDLER ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- 3. LOCK BODY SCROLL ---
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  if (!mounted) return <div className="h-20" />;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-[60] transition-all duration-500 ${
          scrolled
            ? "py-4 backdrop-blur-xl border-b border-[var(--text-primary)]/10 bg-[var(--bg-primary)]/80 shadow-sm"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* LOGO */}
          <Link
            href="/"
            className="group flex flex-col z-[70] transition-transform active:scale-95"
          >
            <h1 className="text-xl md:text-2xl font-black tracking-tighter leading-none italic text-[var(--text-primary)]">
              JANJI{" "}
              <span className="not-italic text-[var(--jiwa-red)]">JIWA</span>
            </h1>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-bold mt-1 text-[var(--jiwa-red)]">
              Kopi Dari Hati
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-[var(--text-primary)]">
              {MENU_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`transition-colors duration-300 ${isActive ? "text-[var(--jiwa-red)]" : "hover:text-[var(--jiwa-red)]"}`}
                    >
                      {link.name}
                    </Link>
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-[var(--jiwa-red)] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-5 border-l border-[var(--text-primary)]/10 pl-10">
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
              <Link
                href="/admin"
                className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white bg-[var(--jiwa-red)] hover:brightness-110 transition-all shadow-lg shadow-[var(--jiwa-red)]/20 active:scale-95 rounded-sm"
              >
                Write Blog
              </Link>
            </div>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex lg:hidden items-center gap-2 z-[70]">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              onClick={toggleMenu}
              className="p-3 text-[var(--text-primary)] active:scale-90"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-[var(--bg-primary)] flex flex-col justify-center px-8"
          >
            <ul className="flex flex-col gap-6 max-w-md mx-auto w-full">
              {MENU_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-5xl md:text-7xl font-black uppercase tracking-tighter flex items-center justify-between group ${isActive ? "text-[var(--jiwa-red)]" : "text-[var(--text-primary)]"}`}
                    >
                      <span>
                        {link.name}
                        {link.name === "Home" && (
                          <span className="text-[var(--jiwa-red)]">.</span>
                        )}
                      </span>
                      <ArrowRight
                        size={40}
                        className={`transition-all ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0"}`}
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- SUB-COMPONENT FOR REUSABILITY ---
const ThemeToggle = ({
  theme,
  onToggle,
}: {
  theme: string;
  onToggle: () => void;
}) => (
  <button
    onClick={onToggle}
    className="p-2.5 rounded-full hover:bg-[var(--text-primary)]/5 transition-all text-[var(--text-primary)] active:rotate-12"
    aria-label="Toggle Theme"
  >
    {theme === "light" ? (
      <MoonIcon size={18} />
    ) : (
      <SunIcon size={18} className="text-yellow-500" />
    )}
  </button>
);

export default Navbar;
