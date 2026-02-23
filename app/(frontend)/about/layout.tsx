import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Pelajari sejarah Janji Jiwa dan misi kami membawa kopi kualitas dunia untuk Teman Sejiwa di seluruh Indonesia.",
  openGraph: {
    title: "About Janji Jiwa | Kopi Dari Hati",
    description: "Cerita di balik setiap cangkir kopi Janji Jiwa.",
    images: ["/og-about.png"], // Gambar khusus halaman about jika ada
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}