"use client";
import React from "react";
import Link from "next/link";
import { useThemeStore } from "@/store/useThemeStore";
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const { theme } = useThemeStore();
  const JIWA_RED = "#B22222";
  const TEXT_COLOR = theme === "dark" ? "#f5f5f5" : "#1a1a1a";
  const BORDER_COLOR = theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

  const footerLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Teams", href: "/teams" },
    { name: "Blog List", href: "/blog" },
  ];

  const socialLinks = [
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
    { icon: <Facebook size={18} />, href: "#" },
  ];

  return (
    <footer 
      className="py-16 px-8 md:px-12 border-t transition-colors duration-500"
      style={{ 
        backgroundColor: theme === 'dark' ? '#080808' : '#ffffff',
        borderColor: BORDER_COLOR
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="group flex flex-col mb-6">
              <h3 className="text-2xl font-black tracking-tighter leading-none italic" style={{ color: TEXT_COLOR }}>
                JANJI <span className="not-italic" style={{ color: JIWA_RED }}>JIWA</span>
              </h3>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold mt-1 opacity-60" style={{ color: TEXT_COLOR }}>
                Kopi Dari Hati
              </span>
            </Link>
            <p className="max-w-sm opacity-60 text-sm leading-relaxed" style={{ color: TEXT_COLOR }}>
              Bringing the authentic taste of Indonesian coffee to the world. Crafted with passion, served with heart since 2018.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-6" style={{ color: JIWA_RED }}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm font-medium opacity-70 hover:opacity-100 transition-all flex items-center gap-1 group"
                    style={{ color: TEXT_COLOR }}
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-6" style={{ color: JIWA_RED }}>
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="p-3 border rounded-none transition-all hover:bg-red-800/10"
                  style={{ borderColor: BORDER_COLOR, color: TEXT_COLOR }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest opacity-40"
          style={{ borderColor: BORDER_COLOR, color: TEXT_COLOR }}
        >
          <p>© 2026 PT. JIWA GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;