"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useThemeStore } from "@/store/useThemeStore";
import { MoonIcon, SunIcon, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { theme, setTheme } = useThemeStore();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 1. Theme Sync & Mounting
  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // 2. Scroll Logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Prevent Body Scroll when Mobile Menu is Open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  if (!mounted) return <div className="h-20" />;

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Teams", href: "/teams" },
    { name: "Blog", href: "/blog" },
  ];

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
          
          {/* LOGO SECTION */}
          <Link href="/" className="group flex flex-col z-[70] transition-transform active:scale-95">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter leading-none italic text-[var(--text-primary)]">
              JANJI <span className="not-italic text-[var(--jiwa-red)]">JIWA</span>
            </h1>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-bold mt-1 text-[var(--jiwa-red)]">
              Kopi Dari Hati
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-[var(--text-primary)]">
              {menuLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name} className="relative group">
                    <Link 
                      href={link.href} 
                      className={`transition-colors duration-300 ${isActive ? 'text-[var(--jiwa-red)]' : 'hover:text-[var(--jiwa-red)]'}`}
                    >
                      {link.name}
                    </Link>
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[var(--jiwa-red)] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </li>
                );
              })}
            </ul>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-5 border-l border-[var(--text-primary)]/10 pl-10">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2.5 rounded-full hover:bg-[var(--text-primary)]/5 transition-all text-[var(--text-primary)] active:rotate-12"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? <MoonIcon size={18} /> : <SunIcon size={18} className="text-yellow-500" />}
              </button>

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
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-3 text-[var(--text-primary)] transition-transform active:scale-90"
            >
              {theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} className="text-yellow-500" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-[var(--text-primary)] transition-transform active:scale-90"
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
              {menuLinks.map((link, idx) => {
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
                      className={`text-5xl md:text-7xl font-black uppercase tracking-tighter transition-all flex items-center justify-between group ${
                        isActive ? 'text-[var(--jiwa-red)]' : 'text-[var(--text-primary)]'
                      }`}
                    >
                      <span>
                        {link.name}
                        {link.name === "Home" && <span className="text-[var(--jiwa-red)]">.</span>}
                      </span>
                      <ArrowRight size={40} className={`transition-all ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20 max-w-md mx-auto w-full"
            >
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-4 py-6 font-black uppercase tracking-widest text-white bg-[var(--jiwa-red)] shadow-2xl shadow-[var(--jiwa-red)]/30 rounded-sm"
              >
                Start Writing <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;