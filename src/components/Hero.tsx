import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import picLogo from "@/assets/pic-logo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={picLogo}
                alt="Project and Innovation Club Logo"
                className="h-32 w-32 md:h-40 md:w-40 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Project and Innovation Club
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 font-light">
            Innovate. Create. Inspire.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering students to transform ideas into reality through innovation,
            collaboration, and hands-on learning experiences.
          </p>

          {/* CTA Button */}
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-6 group"
          >
            Join Us Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};

export default Hero;
