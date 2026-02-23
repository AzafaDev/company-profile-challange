"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShoppingCart, Star } from "lucide-react";
import { ProductRow } from "@/components/services/ProductRow";
import { containerVariants, fadeInUp } from "@/lib/animations";

const products = [
  {
    id: 1,
    title: "Signature Coffee",
    category: "Our Pride",
    price: "From Rp 18.000",
    description: "Paduan harmonis biji kopi pilihan nusantara dengan susu segar. Menu klasik seperti Es Kopi Susu Gula Aren.",
    image: "/janji-jiwa-services-4.webp",
    testimonial: "Kopi susu paling konsisten rasanya!",
    client: "Andi, Freelancer",
  },
  {
    id: 2,
    title: "Jiwa Toast",
    category: "Perfect Match",
    price: "From Rp 25.000",
    description: "Roti panggang premium dengan berbagai pilihan topping gurih dan manis. Tekstur renyah di luar namun lembut di dalam.",
    image: "/janji-jiwa-services-2.webp",
    testimonial: "Beef Truffle-nya juara! Porsinya pas buat sarapan.",
    client: "Siska, Kantoran",
  },
  {
    id: 3,
    title: "Bulk Order / Catering",
    category: "Big Events",
    price: "Custom Pricing",
    description: "Hadirkan keseruan Janji Jiwa di acaramu. Kami melayani pesanan partai besar untuk meeting hingga wedding.",
    image: "/janji-jiwa-services-3.webp",
    testimonial: "Sangat profesional. Kopi datang tepat waktu.",
    client: "Budi, Event Organizer",
  },
];

const ServicesPage = () => {
  return (
    <main className="pt-20 bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="py-20 px-8 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 block text-[var(--jiwa-red)]"
        >
          Menu & Services
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-black italic tracking-tighter"
        >
          Fuel Your <span className="text-[var(--jiwa-red)]">Soul.</span>
        </motion.h1>
      </section>

      {/* PRODUCTS LIST */}
      <section className="pb-24">
        {products.map((item, idx) => (
          <ProductRow key={item.id} item={item} idx={idx} />
        ))}
      </section>

      {/* QUALITY STANDARD SECTION */}
      <section className="py-24 px-6 md:px-12 border-t border-[var(--text-primary)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
              The Jiwa <span className="text-[var(--jiwa-red)]">Standard.</span>
            </h3>
            <p className="opacity-50 max-w-lg mx-auto text-sm md:text-base">
              Komitmen kami untuk memberikan kualitas terbaik di setiap aspek layanan.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
          >
            {[
              { title: "Fresh Ingredients", desc: "Biji kopi pilihan setiap harinya.", icon: <CheckCircle2 size={32} /> },
              { title: "Fast Delivery", desc: "Sistem pengiriman terintegrasi.", icon: <ShoppingCart size={32} /> },
              { title: "Eco-Friendly", desc: "Langkah nyata mengurangi plastik.", icon: <Star size={32} /> },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="p-10 rounded-[2.5rem] border border-[var(--text-primary)]/10 bg-[var(--text-primary)]/[0.02] transition-all duration-300 hover:border-[var(--jiwa-red)]/30"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-[var(--bg-primary)] text-[var(--jiwa-red)] shadow-sm">
                  {feature.icon}
                </div>
                <h4 className="font-black uppercase text-[14px] tracking-[0.2em] mb-4">
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed opacity-60">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;