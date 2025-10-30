import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User } from "lucide-react";
import { useState } from "react";

const Team = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (imageName: string) => {
    setImageErrors(prev => ({ ...prev, [imageName]: true }));
  };

  const getImagePath = (name: string) => {
    // Convert name to lowercase and remove spaces for filename
    const filename = name.toLowerCase().replace(/\s+/g, '');
    return `/images/team/${filename}.jpg`;
  };

  const getFacultyImagePath = (name: string) => {
    const filename = name.toLowerCase().replace(/\s+/g, '').replace('prof.', '').replace('mrs.', '');
    return `/images/faculty/${filename}.jpg`;
  };

  const teams = {
    executive: [
      { name: "Soham Pachpute", class: "TE-C", position: "Lead" },
      { name: "Jeevan Patil", class: "TE-C", position: "Co-Lead" },
      { name: "Vaishnavi Deshmukh", class: "TE-A", position: "Lead" },
      { name: "Tanvi Homkar", class: "TE-B", position: "Co-Lead" },
      { name: "Krishna Kamurti", class: "SE-C", position: "Member" },
      { name: "Neha Shingi", class: "SE-F", position: "Member" },
      { name: "Kushagra Brijwasi", class: "SE-F", position: "Member" },
    ],
    marketing: [
      { name: "Shruti Sonalkar", class: "TE-D", position: "Lead" },
      { name: "Mansi Shinde", class: "TE-D", position: "Co-Lead" },
      { name: "Pragati Patil", class: "TE-D", position: "Member" },
      { name: "Srushti Pawar", class: "TE-D", position: "Member" },
      { name: "Pranav Vanjari", class: "TE-D", position: "Member" },
      { name: "Sneha Mankar", class: "SE-F", position: "Member" },
    ],
    editorial: [
      { name: "Jayesh Korake", class: "TE-B", position: "Lead" },
      { name: "Rugved Bairagi", class: "SE-A", position: "Member" },
    ],
    technical: [
      { name: "Kaivalya Agarkar", class: "TE-B", position: "Lead" },
      { name: "Jayesh Korake", class: "TE-B", position: "Co-Lead" },
      { name: "Sakshi Jadhav", class: "SE-B", position: "Member" },
      { name: "Snehal", class: "SE-A", position: "Member" },
    ],
    webdev: [
      { name: "Hemashree Jawdekar", class: "TE-A", position: "Lead" },
      { name: "Omkar Patil", class: "TE-B", position: "Co-Lead" },
      { name: "Anup Padwalkar", class: "SE-A", position: "Member" },
      { name: "Siya Bhosale", class: "SE-F", position: "Member" },
    ],
    social: [
      { name: "Harshada Jagadale", class: "TE-A", position: "Lead" },
      { name: "Suyash Shinde", class: "SE-F", position: "Member" },
      { name: "Shreeya Takalkar", class: "SE-F", position: "Member" },
      { name: "Yash Tolwani", class: "SE-F", position: "Member" },
    ],
    design: [
      { name: "Disha Musale", class: "TE-C", position: "Lead" },
      { name: "Sujal Kunte", class: "SE-C", position: "Member" },
      { name: "Raviraj", class: "SE-A", position: "Member" },
      { name: "Soham Patil", class: "SE-E", position: "Member" },
    ],
  };

  const facultyCoordinators = [
    { name: "Prof. Abhijit Jadhav", position: "Faculty Coordinator" },
    { name: "Mrs. Rachana Mudholkar", position: "Faculty Coordinator" },
  ];

  const TeamMemberCard = ({ member }: { member: { name: string; class: string; position: string } }) => {
    const imagePath = getImagePath(member.name);
    const hasError = imageErrors[member.name];

    return (
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50">
        <CardContent className="p-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              {!hasError ? (
                <img
                  src={imagePath}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(member.name)}
                />
              ) : (
                <User className="w-12 h-12 text-primary" />
              )}
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-1 text-foreground">{member.name}</h3>
          <p className="text-muted-foreground text-sm">{member.class}</p>
          <p className="text-primary text-sm font-medium mt-1">{member.position}</p>
        </CardContent>
      </Card>
    );
  };

  const FacultyCard = ({ faculty }: { faculty: { name: string; position: string } }) => {
    const imagePath = getFacultyImagePath(faculty.name);
    const hasError = imageErrors[faculty.name];

    return (
      <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-accent/50">
        <CardContent className="p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              {!hasError ? (
                <img
                  src={imagePath}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(faculty.name)}
                />
              ) : (
                <User className="w-16 h-16 text-accent" />
              )}
            </div>
          </div>
          <h3 className="font-bold text-xl mb-2 text-foreground">{faculty.name}</h3>
          <p className="text-accent font-medium">{faculty.position}</p>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="team" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Core Team */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground">Meet the passionate leaders driving innovation</p>
          </div>

          <Tabs defaultValue="executive" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-2 h-auto bg-card/50 p-2 mb-8">
              <TabsTrigger value="executive" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Executive</TabsTrigger>
              <TabsTrigger value="marketing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Marketing</TabsTrigger>
              <TabsTrigger value="editorial" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Editorial</TabsTrigger>
              <TabsTrigger value="technical" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Technical</TabsTrigger>
              <TabsTrigger value="webdev" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Web Dev</TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Social Media</TabsTrigger>
              <TabsTrigger value="design" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Design</TabsTrigger>
            </TabsList>

            <TabsContent value="executive" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teams.executive.map((member, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teams.marketing.map((member, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="editorial" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {teams.editorial.map((member, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="technical" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teams.technical.map((member, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="webdev" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teams.webdev.map((member, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="social" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teams.social.map((member, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="design" className="mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teams.design.map((member, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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
                <FacultyCard faculty={faculty} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
