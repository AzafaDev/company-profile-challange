import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Menu",
  description: "Jelajahi menu andalan Janji Jiwa, mulai dari Signature Coffee, Jiwa Toast premium, hingga layanan katering untuk acara spesial Anda.",
  openGraph: {
    title: "Menu & Layanan Janji Jiwa | Kopi Dari Hati",
    description: "Nikmati perpaduan kopi nusantara dan roti panggang premium.",
    images: ["/og-services.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}