import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}
