import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// --- BROWSER APPEARANCE ---
export const viewport: Viewport = {
  themeColor: "#B22222",
  width: "device-width",
  initialScale: 1,
};

// --- GLOBAL SEO CONFIGURATION ---
export const metadata: Metadata = {
  metadataBase: new URL("https://company-profile-challange.vercel.app/"),
  title: {
    default: "Janji Jiwa® | Kopi Dari Hati",
    template: "%s | Janji Jiwa®",
  },
  description:
    "Janji Jiwa menyajikan kopi kualitas dunia untuk Teman Sejiwa. Cerita tentang rasa, dedikasi, dan kopi asli Indonesia.",
  keywords: [
    "Janji Jiwa",
    "Kopi Dari Hati",
    "Kopi Indonesia",
    "Coffee Shop Indonesia",
  ],
  authors: [{ name: "Janji Jiwa Team" }],
  creator: "Janji Jiwa",

  // Social Media Sharing (OpenGraph)
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://company-profile-challange.vercel.app/",
    title: "Janji Jiwa® | Kopi Dari Hati",
    description: "Nikmati kopi kualitas dunia dari Janji Jiwa.",
    siteName: "Janji Jiwa Journal",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },

  // Twitter/X Card
  twitter: {
    card: "summary_large_image",
    title: "Janji Jiwa® | Kopi Dari Hati",
    images: ["/og-image.png"],
  },

  // Branding Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },

  verification: {
    google: "Vb8ByMmZDsaOl3XO15j7o-SOSpYQiw8EUEs-oSaKUTk",
  },
};

// <meta name="google-site-verification" content="Vb8ByMmZDsaOl3XO15j7o-SOSpYQiw8EUEs-oSaKUTk" />

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased font-sans bg-white`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
