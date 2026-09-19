import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PujaDays from "@/components/PujaDays";
import BengaliSchedule from "@/components/BengaliSchedule";
import Events from "@/components/Events";
import Visitors from "@/components/Visitors";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import Volunteer from "@/components/Volunteer";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <PujaDays />
        <BengaliSchedule />
        <Events />
        <Visitors />
        <Gallery />
        <Sponsors />
        <Volunteer />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
