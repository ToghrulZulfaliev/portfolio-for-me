import Navbar from "../components/intro/Navbar";
import Hero from "../components/intro/Hero";
import Services from "../components/Services";
import Works from "../components/intro/Works";
import TechStack from "../components/TechStack";
import Certificates from "../components/Certificates";
import About from "../components/About";
import CTA from "../components/CTA";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />

      <Hero />

      <Services />

      <Works />

      <TechStack />

      <Certificates />

      <About />

      <CTA />

      <Contact />
    </main>
  );
}