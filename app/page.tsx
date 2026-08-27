"use client";

import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useTracking } from "@/hooks/useTracking";

export default function Home() {
  useTracking();

  return (
    <main className="bg-gradient-dark">
      <Header />
      <About />
      <Hero />
      <HowItWorks />
      <CaseStudies />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
