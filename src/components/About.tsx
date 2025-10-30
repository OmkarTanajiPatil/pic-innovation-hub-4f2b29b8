import { Lightbulb, Rocket, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Encouraging creative problem-solving and out-of-the-box thinking in technology projects",
    },
    {
      icon: Rocket,
      title: "Industry Relevance",
      description: "Connecting academic learning with real-world industry challenges and opportunities",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating a collaborative environment where students can learn, share, and grow",
    },
    {
      icon: Award,
      title: "Excellence Recognition",
      description: "Celebrating and acknowledging outstanding achievements in research and innovation",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">PIC</span>
          </h2>
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              The Project & Innovation Club (PIC) at Pimpri Chinchwad College of Engineering and Research is dedicated to transforming creative ideas into impactful solutions. We bridge the gap between theoretical knowledge and practical application, fostering a culture of innovation and research excellence among students.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Our mission is to cultivate a research-driven mindset, encourage innovative thinking, and provide students with the tools and guidance needed to excel in their academic and professional endeavors.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 animate-fade-in border border-border/50 hover:border-primary/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
