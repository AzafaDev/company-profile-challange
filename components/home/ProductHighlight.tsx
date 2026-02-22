"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Coffee, Utensils, IceCream, ArrowRight, Plus } from "lucide-react";
import { useThemeStore } from "@/store/useThemeStore";
import { motion } from "framer-motion";

const ProductHighlight = () => {
  const { theme } = useThemeStore();
  const JIWA_RED = "#B22222";
  const TEXT_COLOR = theme === "dark" ? "#f5f5f5" : "#1a1a1a";
  const CARD_BG = theme === "dark" ? "#111111" : "#ffffff";

  const services = [
    {
      title: "Signature Coffee",
      description: "100% Indonesian beans, roasted to perfection for your daily soul fuel.",
      icon: <Coffee size={24} />,
      link: "/services",
      img: "/janji-jiwa-services-4.webp",
      accent: "#E63946"
    },
    {
      title: "Jiwa Toast",
      description: "Premium crispy toast with savory fillings. The ultimate coffee companion.",
      icon: <Utensils size={24} />,
      link: "/services",
      img: "/janji-jiwa-services-2.webp",
      accent: "#F4A261"
    },
    {
      title: "Non-Coffee",
      description: "Refreshing botanical blends and creamy delights for everyone.",
      icon: <IceCream size={24} />,
      link: "/services",
      img: "/janji-jiwa-services-3.webp",
      accent: "#2A9D8F"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden" style={{ backgroundColor: theme === 'dark' ? '#0d0d0d' : '#F9F7F2' }}>
      
      {/* Decorative Blur BG */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Center on Mobile, Left on Desktop */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-20 gap-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="w-8 h-[2px]" style={{ backgroundColor: JIWA_RED }} />
              <span className="font-black tracking-[0.4em] text-[10px] uppercase" style={{ color: JIWA_RED }}>What We Brew</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none" style={{ color: TEXT_COLOR }}>
              Freshness In <br /> <span style={{ color: JIWA_RED }}>Every Byte.</span>
            </h2>
          </div>
          
          <Link 
            href="/services" 
            className="group flex items-center gap-4 px-8 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            style={{ color: TEXT_COLOR }}
          >
            Explore Full Menu <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {services.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group pt-16" // Space for the floating image
            >
              <div 
                className="relative h-full p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-red-900/10 flex flex-col items-start border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
                style={{ backgroundColor: CARD_BG }}
              >
                {/* Floating Image Component */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40 md:w-48 md:h-48 z-20 group-hover:-translate-y-4 transition-transform duration-500">
                   <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl rotate-3 group-hover:rotate-6 transition-transform">
                      <Image src={item.img} alt={item.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                   </div>
                   {/* Icon Badge */}
                   <div 
                    className="absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xl z-30"
                    style={{ backgroundColor: JIWA_RED }}
                   >
                    {item.icon}
                   </div>
                </div>

                <div className="mt-32 w-full text-center md:text-left">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4" style={{ color: TEXT_COLOR }}>
                    {item.title}
                  </h3>
                  <p className="opacity-50 text-sm leading-relaxed mb-10 min-h-[60px]" style={{ color: TEXT_COLOR }}>
                    {item.description}
                  </p>
                  
                  {/* Button: Minimalist with hover reveal */}
                  <Link
                    href={item.link}
                    className="group/link inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.3em] transition-all"
                    style={{ color: JIWA_RED }}
                  >
                    <span>Discover More</span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover/link:bg-red-700 group-hover/link:text-white group-hover/link:border-transparent transition-all">
                      <Plus size={14} />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Decorative Number Index in Background */}
              <span className="absolute bottom-6 right-10 text-8xl font-black opacity-[0.03] select-none" style={{ color: TEXT_COLOR }}>
                0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;