"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useThemeStore } from "@/store/useThemeStore";
import { Users, Heart, ArrowRight, Coffee, Quote } from "lucide-react";

interface TeamMember {
  name: { first: string; last: string };
  picture: { large: string };
  location: { city: string };
}

const AboutPage = () => {
  const { theme } = useThemeStore();
  const [team, setTeam] = useState<TeamMember[]>([]);
  
  // Design Tokens
  const JIWA_RED = "#B22222";
  const IS_DARK = theme === "dark";
  
  const BG_MAIN = IS_DARK ? "#0D0D0D" : "#FFFFFF";
  const BG_SECONDARY = IS_DARK ? "#121212" : "#FBFBF9"; // Off-white/Creamy untuk light mode
  const TEXT_PRIMARY = IS_DARK ? "#F5F5F5" : "#1A1A1A";
  const TEXT_SECONDARY = IS_DARK ? "#A0A0A0" : "#505050";
  const CARD_BG = IS_DARK ? "#181818" : "#FFFFFF";
  const BORDER_COLOR = IS_DARK ? "#262626" : "#E5E5E5";

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4&seed=jiwa")
      .then((res) => res.json())
      .then((data) => setTeam(data.results));
  }, []);

  return (
    <main className="pt-20 overflow-x-hidden transition-colors duration-500" style={{ backgroundColor: BG_MAIN }}>
      
      {/* SECTION 1: HERO HISTORY */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px]" style={{ backgroundColor: JIWA_RED }} />
              <span className="font-black tracking-[0.4em] text-[10px] uppercase" style={{ color: JIWA_RED }}>Since 2018</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-10 italic leading-[0.85] tracking-tighter" style={{ color: TEXT_PRIMARY }}>
              Kopi Dari <br /> <span style={{ color: JIWA_RED }}>Hati.</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-8 text-base leading-relaxed" style={{ color: TEXT_SECONDARY }}>
              <p>
                Janji Jiwa lahir dari satu misi sederhana: menyajikan kopi kualitas dunia yang bisa diakses oleh setiap lapisan masyarakat Indonesia tanpa terkecuali.
              </p>
              <p>
                Kami menyebut pelanggan kami "Teman Sejiwa". Hubungan ini adalah komunitas yang dibangun atas dasar kepercayaan dan kecintaan pada warisan kopi lokal.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 ring-1 ring-black/5">
              <Image src="/janji-jiwa-history.webp" alt="History" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div 
                className="absolute -bottom-6 -left-6 p-6 rounded-3xl shadow-xl border hidden md:block"
                style={{ backgroundColor: CARD_BG, borderColor: BORDER_COLOR }}
            >
              <Quote size={32} style={{ color: JIWA_RED }} className="mb-2" />
              <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: TEXT_PRIMARY }}>Real Taste, Real Soul.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: BENTO PILLARS */}
      <section className="py-24 px-6 md:px-12 transition-colors duration-500" style={{ backgroundColor: BG_SECONDARY }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 p-10 md:p-16 rounded-[3.5rem] border flex flex-col justify-between min-h-[450px] transition-all"
              style={{ backgroundColor: CARD_BG, borderColor: BORDER_COLOR }}
            >
              <div className="w-16 h-16 rounded-3xl flex items-center justify-center mb-10 shadow-lg" style={{ backgroundColor: `${JIWA_RED}15`, color: JIWA_RED }}>
                <Coffee size={32} />
              </div>
              <div>
                <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-8" style={{ color: TEXT_PRIMARY }}>
                  Brewing <span style={{ color: JIWA_RED }}>Culture.</span>
                </h2>
                <p className="max-w-md text-base md:text-lg" style={{ color: TEXT_SECONDARY }}>
                  Melampaui sekadar rasa, kami membangun standar baru melalui tiga pilar utama yang membentuk karakter setiap cangkir.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-4 p-10 rounded-[3.5rem] text-white flex flex-col justify-between relative overflow-hidden group shadow-xl shadow-red-900/10"
              style={{ backgroundColor: JIWA_RED }}
            >
              <span className="text-8xl font-black opacity-20 italic group-hover:scale-110 transition-transform duration-500">01</span>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">The Quality</h3>
                <p className="text-sm opacity-80 leading-relaxed">Biji kopi pilihan dari petani lokal, diproses dengan presisi tinggi di setiap tahap.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-4 p-10 rounded-[3.5rem] flex flex-col justify-between min-h-[350px] group transition-all"
              style={{ backgroundColor: IS_DARK ? "#1F1F1F" : "#1A1A1A" }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors">
                <Heart size={24} fill={JIWA_RED} color={JIWA_RED} />
              </div>
              <div className="text-white">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-3">The Passion</h3>
                <p className="text-sm opacity-60 leading-relaxed">Setiap barista menyeduh dengan empati, memastikan kehangatan sampai ke tangan Anda.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 p-10 md:p-14 rounded-[3.5rem] border-2 border-dashed flex flex-col md:flex-row items-center gap-10"
              style={{ borderColor: BORDER_COLOR }}
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-4xl font-black italic tracking-tighter mb-4" style={{ color: TEXT_PRIMARY }}>Community Rooted.</h3>
                <p className="text-sm max-w-sm" style={{ color: TEXT_SECONDARY }}>Menjadi ruang inklusif bagi Teman Sejiwa untuk bertukar ide dan inspirasi.</p>
              </div>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-14 h-14 rounded-full border-4 flex items-center justify-center transition-colors shadow-md"
                    style={{ backgroundColor: CARD_BG, borderColor: BG_SECONDARY }}
                  >
                    <Users size={20} style={{ color: JIWA_RED }} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE TEAM */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="font-black tracking-[0.4em] text-[10px] uppercase block mb-4" style={{ color: JIWA_RED }}>The Creators</span>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter" style={{ color: TEXT_PRIMARY }}>
              Meet The <span style={{ color: JIWA_RED }}>Faces.</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs mx-auto lg:mx-0 text-center lg:text-left" style={{ color: TEXT_SECONDARY }}>
            Orang-orang dibalik layar yang memastikan janji kami sampai ke tangan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-10 rounded-[3rem] border transition-all duration-500 text-center"
              style={{ backgroundColor: CARD_BG, borderColor: BORDER_COLOR }}
            >
              <div className="relative w-28 h-28 mx-auto mb-6">
                <div 
                    className="absolute inset-0 rounded-full border border-dashed group-hover:rotate-180 transition-transform duration-1000" 
                    style={{ borderColor: `${JIWA_RED}40` }}
                />
                <div className="absolute inset-2 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shadow-inner">
                  <Image src={member.picture.large} alt={member.name.first} fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500" />
                </div>
              </div>
              <h4 className="font-bold text-lg" style={{ color: TEXT_PRIMARY }}>{member.name.first} {member.name.last}</h4>
              <p className="text-[9px] font-black uppercase tracking-widest mt-2" style={{ color: JIWA_RED }}>
                {idx === 0 ? "Founder" : idx === 1 ? "Head Barista" : idx === 2 ? "Operations" : "Quality Control"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: BIG CTA */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-2xl shadow-red-900/40 group"
          style={{ backgroundColor: JIWA_RED }}
        >
          {/* Background Text Watermark */}
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none select-none flex items-center justify-center overflow-hidden">
            <h2 className="text-[25vw] font-black italic whitespace-nowrap leading-none group-hover:scale-110 transition-transform duration-700 text-white">JANJI JIWA</h2>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-12 italic tracking-tighter leading-none">
              Ready to Brew <br /> Your Story?
            </h2>
            <button className="group/btn bg-white text-black px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.2em] transition-all hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto shadow-xl">
              Join The Family <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;