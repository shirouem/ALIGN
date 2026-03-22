import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Pillars from "@/components/sections/Pillars";
import Agentic from "@/components/sections/Agentic";
import Model from "@/components/sections/Model";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Pillars />
        <Agentic />
        <Model />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
