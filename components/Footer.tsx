"use client";
import React from "react";
import Link from "next/link";
import { useThemeStore } from "@/store/useThemeStore";
import { Instagram, Twitter, Facebook, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const { theme } = useThemeStore();
  
  const footerLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Teams", href: "/teams" },
    { name: "Journal", href: "/blog" },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="relative pt-24 pb-12 px-6 md:px-12 border-t border-[var(--text-primary)]/10 bg-[var(--bg-primary)] transition-colors duration-500 overflow-hidden">
      {/* Dekorasi Background Halus */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--jiwa-red)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* --- Brand Column --- */}
          <div className="md:col-span-5">
            <Link href="/" className="group flex flex-col mb-8 outline-none">
              <h3 className="text-3xl font-black tracking-tighter leading-none italic text-[var(--text-primary)]">
                JANJI <span className="not-italic text-[var(--jiwa-red)]">JIWA</span>
              </h3>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold mt-2 text-[var(--jiwa-red)]">
                Kopi Dari Hati
              </span>
            </Link>
            <p className="max-w-md text-[var(--text-primary)]/60 text-base leading-relaxed mb-8">
              Membawa cita rasa kopi asli Indonesia ke tingkat dunia. Diseduh dengan semangat, disajikan dengan hati sejak 2018. Nikmati setiap tegukan sebagai cerita.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center border border-[var(--text-primary)]/10 text-[var(--text-primary)] hover:bg-[var(--jiwa-red)] hover:border-[var(--jiwa-red)] hover:text-white transition-all duration-300 rounded-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* --- Navigation Column --- */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-[var(--jiwa-red)]">
              Explore
            </h4>
            <ul className="flex flex-col gap-5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group text-[var(--text-primary)]/70 hover:text-[var(--text-primary)] transition-all flex items-center gap-2 text-sm font-bold uppercase tracking-widest outline-none"
                  >
                    <span className="w-0 group-hover:w-4 h-[2px] bg-[var(--jiwa-red)] transition-all duration-300" />
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 transition-all duration-300 text-[var(--jiwa-red)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Contact Column --- */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-[var(--jiwa-red)]">
              Get in Touch
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 text-[var(--jiwa-red)]">
                  <MapPin size={20} />
                </div>
                <p className="text-[var(--text-primary)]/70 text-sm leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">
                  Jl. Kedoya Raya No. 2, <br />
                  Jakarta Barat, Indonesia 11520
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="text-[var(--jiwa-red)]">
                  <Mail size={20} />
                </div>
                <p className="text-[var(--text-primary)]/70 text-sm font-bold group-hover:text-[var(--text-primary)] transition-colors">
                  halo@janjijiwa.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-10 border-t border-[var(--text-primary)]/10 flex flex-col md:row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
            <p className="text-[10px] font-black tracking-[0.2em] text-[var(--text-primary)]/40 uppercase">
              © 2026 PT. JIWA GROUP. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-[10px] font-black tracking-[0.2em] text-[var(--text-primary)]/30 hover:text-[var(--jiwa-red)] transition-colors uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;