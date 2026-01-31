import { Lightbulb, Rocket, Users, Award } from "lucide-react";
import config from "@/config";

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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        About {config.clubAcronym}
                    </h2>
                    <p className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed">
                        The {config.clubName} ({config.clubAcronym}) at {config.address.institution}
                        transforms creative ideas into impactful solutions. We bridge theoretical knowledge with
                        practical application, fostering innovation and research excellence.
                    </p>
                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                        Our mission is to cultivate a research-driven mindset, encourage innovative thinking, and
                        equip students with the tools needed to excel academically and professionally.
                    </p>
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
