import { Footer } from "@/components/Footer";
import { FeatureSections } from "@/components/FeatureSections";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PromiseSection } from "@/components/Promise";
import { WaitlistSection } from "@/components/WaitlistForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PromiseSection />
        <FeatureSections />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
