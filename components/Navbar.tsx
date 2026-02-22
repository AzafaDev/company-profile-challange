"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useThemeStore } from "@/store/useThemeStore";
import { MoonIcon, SunIcon, Menu, X, ArrowRight } from "lucide-react"; // Tambah ikon X
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { theme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk mobile menu

  const JIWA_RED = "#B22222";

  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute("data-theme", theme);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  // Lock scroll saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!mounted) return <div className="h-20" />;

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Teams", href: "/teams" },
    { name: "Blog", href: "/blog" },
  ];

  const TEXT_COLOR = theme === 'dark' ? '#f5f5f5' : '#1a1a1a';
  const BG_NAV = theme === 'dark' ? 'rgba(13, 13, 13, 0.95)' : 'rgba(255, 255, 255, 0.95)';

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
          scrolled ? "py-4 backdrop-blur-xl border-b shadow-lg" : "py-8 bg-transparent"
        }`}
        style={{ 
          backgroundColor: scrolled ? BG_NAV : 'transparent',
          borderColor: scrolled ? `${JIWA_RED}33` : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="group flex flex-col z-[70]">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter leading-none italic" 
                style={{ color: TEXT_COLOR }}>
              JANJI <span className="not-italic" style={{ color: JIWA_RED }}>JIWA</span>
            </h1>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-bold mt-1"
                  style={{ color: JIWA_RED }}>
              Kopi Dari Hati
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8 text-[11px] font-bold uppercase tracking-widest">
              {menuLinks.map((link) => (
                <li key={link.name} className="relative group overflow-hidden">
                  <Link href={link.href} className="transition-colors hover:opacity-70" style={{ color: TEXT_COLOR }}>
                    {link.name}
                  </Link>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-300"
                        style={{ backgroundColor: JIWA_RED }} />
                </li>
              ))}
            </ul>

            <button 
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 border rounded-full"
              style={{ borderColor: `${JIWA_RED}4D`, color: TEXT_COLOR }}
            >
              {theme === "light" ? <MoonIcon size={16} /> : <SunIcon size={16} className="text-yellow-500" />}
            </button>

            <Link href="/create-blog" className="px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95"
                  style={{ backgroundColor: JIWA_RED }}>
              Write Blog
            </Link>
          </div>

          {/* MOBILE TOGGLE & THEME */}
          <div className="flex lg:hidden items-center gap-4 z-[70]">
            <button 
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2"
              style={{ color: TEXT_COLOR }}
            >
              {theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: TEXT_COLOR }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] flex flex-col justify-center items-center px-8"
            style={{ backgroundColor: theme === 'dark' ? '#0d0d0d' : '#ffffff' }}
          >
            <ul className="flex flex-col gap-8 text-center">
              {menuLinks.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black uppercase tracking-tighter"
                    style={{ color: TEXT_COLOR }}
                  >
                    {link.name}
                    {link.name === "Home" && <span style={{ color: JIWA_RED }}>.</span>}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 w-full max-w-xs"
            >
              <Link
                href="/create-blog"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-4 font-black uppercase tracking-widest text-white"
                style={{ backgroundColor: JIWA_RED }}
              >
                Write Blog <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;