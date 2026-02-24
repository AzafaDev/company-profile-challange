"use client";

import React from "react";
import NextLink from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

// --- DATA CONFIGURATION ---
const EXPLORE_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Teams", href: "/teams" },
  { name: "Journal", href: "/blog" },
];

const SOCIAL_LINKS = [
  { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
];

const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookies"];

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 px-6 md:px-12 border-t border-[var(--text-primary)]/10 bg-[var(--bg-primary)] transition-colors duration-500 overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--jiwa-red)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* --- Brand Column --- */}
          <div className="md:col-span-5">
            <NextLink
              href="/"
              className="group flex flex-col mb-8 outline-none"
            >
              <h3 className="text-3xl font-black tracking-tighter leading-none italic text-[var(--text-primary)]">
                JANJI{" "}
                <span className="not-italic text-[var(--jiwa-red)]">JIWA</span>
              </h3>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold mt-2 text-[var(--jiwa-red)]">
                Kopi Dari Hati
              </span>
            </NextLink>
            <p className="max-w-md text-[var(--text-primary)]/60 text-base leading-relaxed mb-8">
              Membawa cita rasa kopi asli Indonesia ke tingkat dunia. Diseduh
              dengan semangat, disajikan dengan hati sejak 2018.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, idx) => (
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
              {EXPLORE_LINKS.map((link) => (
                <li key={link.name}>
                  <NextLink
                    href={link.href}
                    className="group text-[var(--text-primary)]/70 hover:text-[var(--text-primary)] transition-all flex items-center gap-2 text-sm font-bold uppercase tracking-widest outline-none"
                  >
                    <span className="w-0 group-hover:w-4 h-[2px] bg-[var(--jiwa-red)] transition-all duration-300" />
                    {link.name}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 transition-all duration-300 text-[var(--jiwa-red)]"
                    />
                  </NextLink>
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
              <ContactItem
                icon={<MapPin size={20} />}
                text={
                  <>
                    Jl. Kedoya Raya No. 2, <br /> Jakarta Barat, Indonesia 11520
                  </>
                }
              />
              <ContactItem
                icon={<Mail size={20} />}
                text="halo@janjijiwa.com"
              />
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-10 border-t border-[var(--text-primary)]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black tracking-[0.2em] text-[var(--text-primary)]/40 uppercase text-center md:text-left">
            © 2026 PT. JIWA GROUP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {LEGAL_LINKS.map((item) => (
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

// --- HELPER COMPONENT ---
const ContactItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) => (
  <div className="flex items-start gap-4 group cursor-default">
    <div className="mt-1 text-[var(--jiwa-red)]">{icon}</div>
    <div className="text-[var(--text-primary)]/70 text-sm leading-relaxed group-hover:text-[var(--text-primary)] transition-colors font-medium">
      {text}
    </div>
  </div>
);

export default Footer;
