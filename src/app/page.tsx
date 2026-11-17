import HeroSection from "@/components/sections/hero-section";
import ApologyInstructions from "@/components/sections/ApologyInstructions";
import SurvivalGuide from "@/components/sections/SurvivalGuide";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ApologyInstructions />
      <SurvivalGuide />
      <Footer />
    </main>
  );
}
