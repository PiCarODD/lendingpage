import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { ProductShowcase } from "@/components/ProductShowcase";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BentoGrid />
      <ProductShowcase />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}

