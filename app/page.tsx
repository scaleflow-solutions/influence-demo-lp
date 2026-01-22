import dynamic from "next/dynamic";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientsSection } from "@/components/sections/ClientsSection";

// Dynamically import below-the-fold sections to reduce initial bundle size
// and improve Speed Index by deferring Framer Motion code
const EcosystemSection = dynamic(
  () => import("@/components/sections/EcosystemSection").then((mod) => ({ default: mod.EcosystemSection })),
  { ssr: true }
);

const WorkSection = dynamic(
  () => import("@/components/sections/WorkSection").then((mod) => ({ default: mod.WorkSection })),
  { ssr: true }
);

const VisionSection = dynamic(
  () => import("@/components/sections/VisionSection").then((mod) => ({ default: mod.VisionSection })),
  { ssr: true }
);

const TeamSection = dynamic(
  () => import("@/components/sections/TeamSection").then((mod) => ({ default: mod.TeamSection })),
  { ssr: true }
);

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
