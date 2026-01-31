import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import WhatWeOffer from "@/sections/WhatWeOffer";
import Team from "@/sections/Team";
import Contact from "@/sections/Contact";
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
