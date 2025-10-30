import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const Team = () => {
  const coreTeam = [
    { name: "John Doe", position: "President", image: null },
    { name: "Jane Smith", position: "Vice President", image: null },
    { name: "Alex Johnson", position: "Technical Lead", image: null },
    { name: "Sarah Williams", position: "Event Coordinator", image: null },
    { name: "Michael Brown", position: "PR & Marketing Head", image: null },
    { name: "Emily Davis", position: "Treasurer", image: null },
  ];

  const facultyCoordinators = [
    { name: "Dr. Robert Anderson", position: "Faculty Advisor", image: null },
    { name: "Prof. Lisa Martinez", position: "Faculty Coordinator", image: null },
  ];

  const TeamMemberCard = ({ member }: { member: { name: string; position: string; image: string | null } }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <User className="w-12 h-12 text-primary" />
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-1 text-foreground">{member.name}</h3>
        <p className="text-muted-foreground text-sm">{member.position}</p>
      </CardContent>
    </Card>
  );

  return (
    <section id="team" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Team */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground">Meet the passionate leaders driving innovation</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreTeam.map((member, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Coordinators */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
              Faculty <span className="text-accent">Coordinators</span>
            </h3>
            <p className="text-lg text-muted-foreground">Guided by experienced mentors</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {facultyCoordinators.map((faculty, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <TeamMemberCard member={faculty} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
