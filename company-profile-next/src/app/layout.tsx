import type { Metadata } from "next";
import { Geist, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Title Template: Otomatis menambahkan nama brand di setiap halaman
  title: {
    default: "Bean & Beyond — Artisan Coffee Journal",
    template: "%s | Bean & Beyond" 
  },
  description: "Menjelajahi narasi kopi dari hulu ke hilir. Temukan teknik brewing, profil origin, dan gaya hidup kopi.",
  keywords: ["kopi", "manual brew", "sidama coffee", "jurnal kopi", "teknik brewing"],
  authors: [{ name: "Hendra Agus" }],
  creator: "Hendra Agus",
  
  // OpenGraph (Untuk WhatsApp, Facebook, Instagram)
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://beanandbeyond.vercel.app", // ganti dengan domain asli nanti
    siteName: "Bean & Beyond",
    title: "Bean & Beyond — Artisan Coffee Journal",
    description: "Menjelajahi narasi kopi dari hulu ke hilir.",
    images: [
      {
        url: "/Hero.jpg", // pastikan file ini ada di folder public
        width: 1200,
        height: 630,
        alt: "Bean & Beyond Branding",
      },
    ],
  },

  // Twitter (Untuk tampilan di X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Bean & Beyond",
    description: "Jurnal kopi artisan untuk penikmat rasa.",
    images: ["/Hero.jpg"],
  },

  // Metadata lainnya
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="light">
        <link
    rel="preconnect"
    href="https://quiet-tortoise-10.clerk.accounts.dev"
    crossOrigin="anonymous"
  />
        <body
          className={`${inter.variable} ${playfair.variable} antialiased bg-stone-50 text-stone-900`}
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer/>

        </body>
      </html>
    </ClerkProvider>
  );
}