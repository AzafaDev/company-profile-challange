import React from "react";
import type { Metadata } from "next";
import CompanyOverview from "@/components/home/CompanyOverview";
import HeroSection from "@/components/home/HeroSection";
import ProductHighlight from "@/components/home/ProductHighlight";
import Testimonials from "@/components/home/Testimonials";

// --- SEO METADATA ---
export const metadata: Metadata = {
  title: "Beranda | Janji Jiwa",
  description:
    "Selamat datang di Janji Jiwa. Temukan koleksi kopi terbaik dan cerita di balik setiap cangkir Kopi Dari Hati.",
};

const Home = () => {
  // --- SEO STRUCTURED DATA (JSON-LD) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CoffeeShop",
    name: "Janji Jiwa",
    image: "https://company-profile-challange.vercel.app/og-image.png",
    "@id": "https://company-profile-challange.vercel.app/",
    url: "https://company-profile-challange.vercel.app/",
    telephone: "+62-xxx-xxxx-xxxx",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Kedoya Raya No. 2",
      addressLocality: "Jakarta Barat",
      addressRegion: "DKI Jakarta",
      postalCode: "11520",
      addressCountry: "ID",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
    sameAs: [
      "https://www.instagram.com/kopijanjijiwa",
      "https://twitter.com/kopijanjijiwa",
    ],
  };

  return (
    <main className="relative">
      {/* Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Sections */}
      <HeroSection />
      <CompanyOverview />
      <ProductHighlight />
      <Testimonials />
    </main>
  );
};

export default Home;
