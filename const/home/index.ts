import { Users, Zap } from "lucide-react";

export const FEATURES = [
  {
    icon: Users,
    title: "The People",
    desc: "Didukung oleh 500+ talenta lokal yang berdedikasi.",
  },
  {
    icon: Zap,
    title: "The Speed",
    desc: "Konsistensi rasa dalam pelayanan yang efisien.",
  },
];

 export const TESTIMONIAL_DATA = [
  {
    name: "Adit Pratama",
    role: "Coffee Enthusiast",
    comment:
      "Kopi Susu Gula Aren-nya juara! Konsistensi rasanya nggak pernah berubah sejak pertama kali coba di 2018.",
    rating: 5,
    avatar: "AP",
  },
  {
    name: "Siska Amelia",
    role: "Freelance Designer",
    comment:
      "Jiwa Toast dan Latte mereka adalah kombinasi maut buat nemenin kerja seharian. Tempatnya juga industrial banget!",
    rating: 5,
    avatar: "SA",
  },
  {
    name: "Budi Santoso",
    role: "Daily Commuter",
    comment:
      "Pelayanan cepat dan rasa yang selalu bikin melek pagi-pagi. Janji Jiwa emang andalan!",
    rating: 5,
    avatar: "BS",
  },
];

export const STATS = [
  { label: "Average Rating", value: "4.9/5", color: "text-[var(--jiwa-red)]" },
  { label: "Reviews", value: "10k+", color: "text-[var(--text-primary)]" },
];
