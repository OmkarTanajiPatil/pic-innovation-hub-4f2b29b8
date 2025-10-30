import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeOffer from "@/components/WhatWeOffer";
import Activities from "@/components/Activities";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhatWeOffer />
      <Activities />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
