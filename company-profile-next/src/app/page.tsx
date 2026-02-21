import Hero from "@/components/home/Hero";
import Overview from "@/components/home/Overview";
import MenuPreview from "@/components/home/MenuPreview";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <MenuPreview />
      <Testimonials />
    </main>
  );
}