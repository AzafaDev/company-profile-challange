"use client";

import React from "react";
import { Coffee, Utensils, IceCream } from "lucide-react";
import { motion } from "framer-motion";

// Components
import { ProductCard } from "./product/ProductCard";
import { ProductHeader } from "./product/ProductHeader";

// Animations
import { containerVariants } from "@/lib/animations";

// --- CONFIGURATION ---
const HIGHLIGHT_PRODUCTS = [
  {
    title: "Signature Coffee",
    description:
      "100% Indonesian beans, roasted to perfection for your daily soul fuel.",
    icon: <Coffee size={24} />,
    link: "/services",
    img: "/janji-jiwa-services-4.webp",
  },
  {
    title: "Jiwa Toast",
    description:
      "Premium crispy toast with savory fillings. The ultimate coffee companion.",
    icon: <Utensils size={24} />,
    link: "/services",
    img: "/janji-jiwa-services-2.webp",
  },
  {
    title: "Non-Coffee",
    description:
      "Refreshing botanical blends and creamy delights for everyone.",
    icon: <IceCream size={24} />,
    link: "/services",
    img: "/janji-jiwa-services-3.webp",
  },
];

const ProductHighlight = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">
      {/* --- AMBIENT VISUALS --- */}
      {/* Glow Effect Merah - Dioptimalkan agar tidak menghalangi klik */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--jiwa-red)]/5 blur-[120px] rounded-full pointer-events-none select-none"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header Section */}
        <ProductHeader />

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {HIGHLIGHT_PRODUCTS.map((product, idx) => (
            <ProductCard
              key={`${product.title}-${idx}`}
              item={product}
              index={idx}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductHighlight;
