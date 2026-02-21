"use client";

import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Mencegah hydration mismatch
  if (!mounted) return null;

  return (
    <>
      {/* TOMBOL HAMBURGER GLOBAL (Berada di luar nav untuk menjamin z-index) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-7 right-6 md:hidden z-[200] p-3 focus:outline-none bg-white/10 backdrop-blur-sm rounded-full shadow-sm"
        aria-label="Menu"
      >
        <div className="w-6 h-4 relative flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-stone-900 transition-all duration-300 transform origin-left ${
            isOpen ? "rotate-45 translate-x-1" : ""
          }`} />
          <span className={`w-full h-0.5 bg-stone-900 transition-all duration-200 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`} />
          <span className={`w-full h-0.5 bg-stone-900 transition-all duration-300 transform origin-left ${
            isOpen ? "-rotate-45 translate-x-1" : ""
          }`} />
        </div>
      </button>

      <nav
        className={`fixed top-0 w-full z-[100] px-6 py-6 md:px-12 transition-all duration-500 ${
          isScrolled
            ? "bg-[#F9F7F2]/90 backdrop-blur-md border-b border-stone-200/50 py-4"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* BRANDING */}
          <div className="relative z-[150]">
            <Link href="/" onClick={closeMenu} className="group">
              <h1 className="text-2xl font-serif font-black leading-none text-stone-900 tracking-tighter">
                B&B<span className="text-amber-800">.</span>
              </h1>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="flex items-center gap-x-8 md:gap-x-12">
            <div className="hidden md:flex gap-x-8 text-[10px] uppercase tracking-[0.4em] font-black text-stone-900">
              <Link href="/services" className="hover:text-amber-800">Services</Link>
              <Link href="/teams" className="hover:text-amber-800">Teams</Link>
              <Link href="/blog" className="hover:text-amber-800">Blog</Link>
              <SignedIn>
                <Link href="/create-blog" className="text-amber-800 flex items-center gap-1">
                  Write <span className="text-[8px]">●</span>
                </Link>
              </SignedIn>
            </div>

            {/* AUTH ONLY (Toggle dipindah ke luar nav) */}
            <div className="flex items-center gap-4">
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8 rounded-full grayscale",
                    },
                  }}
                />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-[10px] uppercase tracking-[0.3em] font-black px-6 py-3 bg-stone-900 text-white rounded-full">
                    Join
                  </button>
                </SignInButton>
              </SignedOut>
              
              {/* Spacer untuk mobile agar tidak bertabrakan dengan tombol hamburger fixed */}
              <div className="w-10 md:hidden" />
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 bg-[#F9F7F2] z-[180] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-y-0 visible opacity-100" : "-translate-y-full invisible opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-y-8 text-center">
          <Link href={'/'} onClick={closeMenu} className="text-4xl font-serif text-stone-900">Home</Link>
          <Link href="/services" onClick={closeMenu} className="text-4xl font-serif text-stone-900">Services</Link>
          <Link href="/teams" onClick={closeMenu} className="text-4xl font-serif text-stone-900">Teams</Link>
          <Link href="/blog" onClick={closeMenu} className="text-4xl font-serif text-stone-900">Blog</Link>
          
          <div className="w-8 h-[1px] bg-stone-300 my-4" />
          
          <SignedIn>
            <Link href="/create-blog" onClick={closeMenu} className="text-xl font-serif text-amber-800 italic">
              Write a Narrative
            </Link>
          </SignedIn>

          <p className="mt-12 text-[9px] uppercase tracking-[0.6em] text-stone-400 font-bold">
            Bean & Beyond Collective
          </p>
        </div>
      </div>
    </>
  );
}