import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { TeamSection } from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <ClientsSection />
        <EcosystemSection />
        <WorkSection />
        <VisionSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
