import Navbar from "../components/intro/Navbar"; // səndə Navbar başqa yerdədirsə, yolu dəyiş
import Hero from "../components/intro/Hero"; // səndə Hero başqa yerdədirsə, yolu dəyiş
import Works from "../components/intro/Works";
import About from "../components/About";
import Contact from "../components/Contact";

import Services from "../components/Services";
import TechStack from "../components/TechStack";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />
      <Hero />
      <Works />
      <Services />
      <TechStack />
      <About />
      <Contact />
      <CTA />
    </div>
  );
}
