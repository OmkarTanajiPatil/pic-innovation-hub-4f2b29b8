import { Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creative thinking and problem-solving",
    },
    {
      icon: Rocket,
      title: "Projects",
      description: "Hands-on experience with real-world applications",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building a community of passionate learners",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">PIC</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            The Project and Innovation Club is a vibrant community dedicated to nurturing creativity,
            innovation, and technical excellence. We provide students with a platform to explore
            cutting-edge technologies, develop innovative projects, and transform groundbreaking
            ideas into tangible solutions. Through workshops, hackathons, and collaborative projects,
            we inspire the next generation of innovators and problem-solvers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
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
