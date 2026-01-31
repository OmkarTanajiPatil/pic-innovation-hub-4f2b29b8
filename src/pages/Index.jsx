import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeOffer from "@/components/WhatWeOffer";
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
            <Team />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;
