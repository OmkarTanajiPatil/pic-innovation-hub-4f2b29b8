import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Code, Trophy } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: Code,
      title: "Weekly Workshops",
      date: "Every Friday",
      description:
        "Hands-on coding sessions covering web development, AI/ML, IoT, and emerging technologies. Led by industry experts and senior students.",
      color: "from-primary to-primary/70",
    },
    {
      icon: Trophy,
      title: "Annual Hackathon",
      date: "March 2025",
      description:
        "24-hour coding marathon where teams compete to build innovative solutions. Prize pool of $5000 and mentorship opportunities with tech companies.",
      color: "from-accent to-accent/70",
    },
    {
      icon: Calendar,
      title: "Project Showcase",
      date: "Semester End",
      description:
        "Present your innovative projects to faculty, industry professionals, and fellow students. Winner projects get featured on our website and social media.",
      color: "from-secondary to-secondary/70",
    },
  ];

  return (
    <section id="activities" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Activities & <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting workshops, competitions, and collaborative projects throughout the year
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${activity.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <activity.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{activity.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-primary font-medium">
                  <Calendar className="w-4 h-4" />
                  {activity.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
