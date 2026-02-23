import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Kenali orang-orang hebat di balik Janji Jiwa yang berdedikasi menyajikan kopi kualitas terbaik untuk setiap Teman Sejiwa.",
  openGraph: {
    title: "The Dream Team | Janji Jiwa®",
    description: "Individu berdedikasi untuk setiap cangkir kopi Anda.",
    images: ["/og-teams.png"], // Gunakan gambar tim yang keren di sini
  },
};

export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}