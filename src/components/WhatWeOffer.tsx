import { Microscope, Lightbulb, Code, Users, FileText, Trophy } from "lucide-react";

const WhatWeOffer = () => {
  const offerings = [
    {
      icon: Microscope,
      title: "Research Orientation",
      description: "Guidance on conducting impactful research and academic projects",
    },
    {
      icon: Lightbulb,
      title: "Innovation Workshops",
      description: "Interactive sessions on emerging technologies and creative methodologies",
    },
    {
      icon: Code,
      title: "Technical Training",
      description: "Hands-on training in cutting-edge tools and programming languages",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Opportunities to work on multidisciplinary projects with peers",
    },
    {
      icon: FileText,
      title: "Patent Guidance",
      description: "Support in filing patents and protecting intellectual property",
    },
    {
      icon: Trophy,
      title: "Competitions",
      description: "Participation in hackathons, challenges, and national-level competitions",
    },
  ];

  return (
    <section id="offerings" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering students with resources, guidance, and opportunities to excel
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 animate-fade-in border border-border/50 hover:border-primary/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
