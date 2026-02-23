"use client";
import React from "react";
import { Coffee, Utensils, IceCream } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/animations";
import { ProductCard } from "./product/ProductCard";
import { ProductHeader } from "./product/ProductHeader";

const services = [
  {
    title: "Signature Coffee",
    description: "100% Indonesian beans, roasted to perfection for your daily soul fuel.",
    icon: <Coffee size={24} />,
    link: "/services",
    img: "/janji-jiwa-services-4.webp",
  },
  {
    title: "Jiwa Toast",
    description: "Premium crispy toast with savory fillings. The ultimate coffee companion.",
    icon: <Utensils size={24} />,
    link: "/services",
    img: "/janji-jiwa-services-2.webp",
  },
  {
    title: "Non-Coffee",
    description: "Refreshing botanical blends and creamy delights for everyone.",
    icon: <IceCream size={24} />,
    link: "/services",
    img: "/janji-jiwa-services-3.webp",
  }
];

const ProductHighlight = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">
      
      {/* Glow Effect Merah */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--jiwa-red)]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <ProductHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {services.map((item, idx) => (
            <ProductCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductHighlight;