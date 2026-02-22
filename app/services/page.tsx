"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useThemeStore } from "@/store/useThemeStore";
import { Star, CheckCircle2, ShoppingCart } from "lucide-react";

const ServicesPage = () => {
  const { theme } = useThemeStore();
  const JIWA_RED = "#B22222";
  const TEXT_COLOR = theme === "dark" ? "#f5f5f5" : "#1a1a1a";
  const BG_SECONDARY = theme === "dark" ? "#121212" : "#F9F7F2";

  const products = [
    {
      id: 1,
      title: "Signature Coffee",
      category: "Our Pride",
      price: "From Rp 18.000",
      description:
        "Paduan harmonis biji kopi pilihan nusantara dengan susu segar. Menu klasik seperti Es Kopi Susu Gula Aren yang menjadi janji kebahagiaan harianmu.",
      image: "/janji-jiwa-services-4.webp",
      testimonial:
        "Kopi susu paling konsisten rasanya, nggak pernah mengecewakan!",
      client: "Andi, Freelancer",
    },
    {
      id: 2,
      title: "Jiwa Toast",
      category: "Perfect Match",
      price: "From Rp 25.000",
      description:
        "Roti panggang premium dengan berbagai pilihan topping gurih dan manis. Tekstur renyah di luar namun lembut di dalam, pasangan sempurna untuk kopimu.",
      image: "/janji-jiwa-services-2.webp",
      testimonial:
        "Beef Truffle-nya juara! Porsinya pas buat sarapan atau camilan sore.",
      client: "Siska, Kantoran",
    },
    {
      id: 3,
      title: "Bulk Order / Catering",
      category: "Big Events",
      price: "Custom Pricing",
      description:
        "Hadirkan keseruan Janji Jiwa di acaramu. Kami melayani pesanan partai besar untuk meeting, wedding, hingga event komunitas dengan pelayanan khusus.",
      image: "/janji-jiwa-services-3.webp",
      testimonial:
        "Sangat profesional. Kopi datang tepat waktu dan tetap segar untuk 50 pax.",
      client: "Budi, Event Organizer",
    },
  ];

  return (
    <main
      className="pt-20 min-h-screen"
      style={{ backgroundColor: theme === "dark" ? "#0d0d0d" : "#ffffff" }}
    >
      {/* HEADER SECTION */}
      <section className="py-20 px-8 text-center">
        <span
          className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 block"
          style={{ color: JIWA_RED }}
        >
          Menu & Services
        </span>
        <h1
          className="text-5xl md:text-7xl font-black italic tracking-tighter"
          style={{ color: TEXT_COLOR }}
        >
          Fuel Your <span style={{ color: JIWA_RED }}>Soul.</span>
        </h1>
      </section>
      {/* PRODUCTS LIST */}
      <section className="pb-24">
        {products.map((item, idx) => (
          <div
            key={item.id}
            className={`py-20 px-8 md:px-12 ${idx % 2 !== 0 ? "" : ""}`}
            style={{
              backgroundColor: idx % 2 !== 0 ? BG_SECONDARY : "transparent",
            }}
          >
            <div
              className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* IMAGE AREA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative aspect-square rounded-[2.5rem] overflow-hidden ${idx % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/90 px-4 py-2 rounded-full backdrop-blur-md">
                  <p
                    className="text-[10px] font-black uppercase tracking-widest"
                    style={{ color: JIWA_RED }}
                  >
                    {item.category}
                  </p>
                </div>
              </motion.div>

              {/* CONTENT AREA */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={idx % 2 !== 0 ? "lg:order-1" : ""}
              >
                <h2
                  className="text-4xl md:text-5xl font-black mb-4 tracking-tighter"
                  style={{ color: TEXT_COLOR }}
                >
                  {item.title}
                </h2>
                <p
                  className="text-xl font-bold mb-6 italic"
                  style={{ color: JIWA_RED }}
                >
                  {item.price}
                </p>
                <p
                  className="text-lg opacity-60 leading-relaxed mb-8"
                  style={{ color: TEXT_COLOR }}
                >
                  {item.description}
                </p>
                {/* TESTIMONIAL MINI CARD */}
                <div
                  className="p-6 rounded-2xl border-l-4 mb-8"
                  style={{
                    backgroundColor: theme === "dark" ? "#1a1a1a" : "#fff",
                    borderColor: JIWA_RED,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <div className="flex gap-1 mb-2 text-yellow-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p
                    className="italic text-sm opacity-80 mb-3"
                    style={{ color: TEXT_COLOR }}
                  >
                    "{item.testimonial}"
                  </p>
                  <p
                    className="text-[10px] font-black uppercase tracking-widest"
                    style={{ color: TEXT_COLOR }}
                  >
                    — {item.client}
                  </p>
                </div>
                <button
                  className="flex items-center gap-3 px-8 py-4 text-[11px] font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-black dark:hover:bg-white dark:hover:text-black hover:gap-6 shadow-lg shadow-red-900/20"
                  style={{ backgroundColor: JIWA_RED }}
                >
                  Order Now <ShoppingCart size={16} />
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </section>
      {/* QUALITY PROMISE - Enhanced & Responsive Layout */}
      <section
        className="py-24 px-6 md:px-12 transition-colors duration-500"
        style={{
          backgroundColor: theme === "dark" ? "#0a0a0a" : "#ffffff",
          borderTop: `1px solid ${theme === "dark" ? "#1a1a1a" : "#f0f0f0"}`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3
              className="text-4xl md:text-5xl font-black mb-4 tracking-tighter"
              style={{ color: TEXT_COLOR }}
            >
              The Jiwa <span style={{ color: JIWA_RED }}>Standard.</span>
            </h3>
            <p
              className="opacity-50 max-w-lg mx-auto text-sm md:text-base"
              style={{ color: TEXT_COLOR }}
            >
              Komitmen kami untuk memberikan kualitas terbaik di setiap aspek
              layanan bagi para Teman Sejiwa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                title: "Fresh Ingredients",
                desc: "Biji kopi pilihan dan bahan baku yang selalu baru setiap harinya.",
                icon: <CheckCircle2 size={32} />,
              },
              {
                title: "Fast Delivery",
                desc: "Sistem pengiriman terintegrasi untuk menjaga suhu dan rasa tetap prima.",
                icon: <ShoppingCart size={32} />,
              },
              {
                title: "Eco-Friendly",
                desc: "Langkah nyata mengurangi plastik demi bumi yang lebih baik.",
                icon: <Star size={32} />,
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-10 rounded-[2.5rem] border transition-all duration-300 relative overflow-hidden"
                style={{
                  backgroundColor: theme === "dark" ? "#121212" : "#FBFBF9",
                  borderColor: theme === "dark" ? "#262626" : "#eeeeee",
                }}
              >
                {/* Decorative Background Glow */}
                <div
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 transition-transform group-hover:scale-150 duration-700"
                  style={{ backgroundColor: JIWA_RED }}
                />

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform group-hover:rotate-6"
                  style={{
                    backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
                    color: JIWA_RED,
                    boxShadow:
                      theme === "dark"
                        ? "none"
                        : "0 10px 30px rgba(0,0,0,0.05)",
                  }}
                >
                  {feature.icon}
                </div>

                <h4
                  className="font-black uppercase text-[14px] tracking-[0.2em] mb-4"
                  style={{ color: TEXT_COLOR }}
                >
                  {feature.title}
                </h4>
                <p
                  className="text-sm leading-relaxed opacity-60"
                  style={{ color: TEXT_COLOR }}
                >
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
