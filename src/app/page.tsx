import { IntroLoader } from "@/components/home/IntroLoader";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Gallery } from "@/components/home/Gallery";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Navbar />
      <main className="flex-1 bg-ink">
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
