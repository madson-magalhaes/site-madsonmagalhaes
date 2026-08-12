import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-dark">
      <Header />
      <Hero />
      <HowItWorks />
      <CaseStudies />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
