import Navbar from "../components/intro/Navbar";
import Hero from "../components/intro/Hero";
import Works from "../components/intro/Works";
import About from "../components/About";
import Contact from "../components/Contact";

import Services from "../components/Services";
import TechStack from "../components/TechStack";
import CTA from "../components/CTA";
import Certificates from "../components/Certificates"; // ✅ əlavə etdik

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />
      <Hero />
      <Works />
      <Services />
      <TechStack />

      {/* ✅ CERTIFICATES SECTION */}
      <Certificates />

      <About />
      <Contact />
      <CTA />
    </div>
  );
}
