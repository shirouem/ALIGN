import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Economy } from "@/components/sections/economy";
import { Alignment } from "@/components/sections/alignment";
import { SharedUpside } from "@/components/sections/upside";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Economy />
      <Alignment />
      <SharedUpside />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
