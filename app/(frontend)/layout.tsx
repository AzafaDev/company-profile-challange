import type { Metadata, Viewport } from "next"; // Tambahkan Viewport
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// 1. Viewport: Mengatur warna bar browser di HP agar senada dengan brand
export const viewport: Viewport = {
  themeColor: "#B22222", // Warna Merah Janji Jiwa
  width: "device-width",
  initialScale: 1,
};

// 2. Metadata: Best Practice SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://company-profile-challange.vercel.app/"), // Ganti dengan domain aslimu nanti
  title: {
    default: "Janji Jiwa® | Kopi Dari Hati",
    template: "%s | Janji Jiwa®", // Otomatis menambah akhiran di tiap halaman
  },
  description: "Janji Jiwa menyajikan kopi kualitas dunia untuk Teman Sejiwa. Cerita tentang rasa, dedikasi, dan kopi asli Indonesia.",
  keywords: ["Janji Jiwa", "Kopi Dari Hati", "Kopi Indonesia", "Janji Jiwa Journal", "Coffee Shop Indonesia"],
  authors: [{ name: "Janji Jiwa Team" }],
  creator: "Janji Jiwa",
  
  // OpenGraph (Untuk Share ke Facebook/WhatsApp)
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://company-profile-challange.vercel.app/",
    title: "Janji Jiwa® | Kopi Dari Hati",
    description: "Nikmati kopi kualitas dunia dari Janji Jiwa.",
    siteName: "Janji Jiwa Journal",
    images: [
      {
        url: "/og-image.png", // Pastikan file ini ada di folder public
        width: 1200,
        height: 630,
        alt: "Janji Jiwa - Kopi Dari Hati",
      },
    ],
  },

  // Twitter (X) Card
  twitter: {
    card: "summary_large_image",
    title: "Janji Jiwa® | Kopi Dari Hati",
    description: "Cerita tentang rasa dan kopi asli Indonesia.",
    images: ["/og-image.png"],
  },

  // Favicon & Ikon
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id"> 
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}