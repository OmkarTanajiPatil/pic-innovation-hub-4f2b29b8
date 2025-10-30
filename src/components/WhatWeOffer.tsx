import { Microscope, Lightbulb, Code, Users, FileText, Trophy, Calendar, Rocket, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

  const activities = [
    {
      icon: Rocket,
      title: "Tech Innovation Summit",
      date: "March 15, 2025",
      description: "Annual flagship event showcasing cutting-edge student projects and innovations",
      color: "from-primary/20 to-accent/10",
    },
    {
      icon: Code,
      title: "Hackathon 2025",
      date: "April 20-21, 2025",
      description: "48-hour coding marathon to solve real-world problems with innovative solutions",
      color: "from-accent/20 to-primary/10",
    },
    {
      icon: Target,
      title: "Research Symposium",
      date: "May 10, 2025",
      description: "Platform for students to present research papers and get expert feedback",
      color: "from-primary/20 to-accent/10",
    },
    {
      icon: Calendar,
      title: "Weekly Tech Talks",
      date: "Every Friday",
      description: "Industry experts and alumni share insights on emerging technologies and career guidance",
      color: "from-accent/20 to-primary/10",
    },
  ];

  return (
    <section id="offerings" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* What We Offer */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering students with resources, guidance, and opportunities to excel
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
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

        {/* Activities & Events */}
        <div className="text-center mb-16 animate-fade-in mt-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in our exciting activities, workshops, and competitions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`bg-gradient-to-br ${activity.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {activity.title}
                </h3>
                <p className="text-sm text-primary mb-3 font-medium">
                  {activity.date}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
