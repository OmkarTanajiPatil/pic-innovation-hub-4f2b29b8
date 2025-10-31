import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Type definitions
interface TeamMember {
  name: string;
  class: string;
  position: string;
}

interface TeamData {
  executive: TeamMember[];
  marketing: TeamMember[];
  editorial: TeamMember[];
  technical: TeamMember[];
  webdev: TeamMember[];
  socialmedia: TeamMember[];
  design: TeamMember[];
}

interface FacultyMember {
  name: string;
  position: string;
}

// Team data organized by department
const teamData: TeamData = {
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
  socialmedia: [
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

// Faculty coordinators
const facultyCoordinators: FacultyMember[] = [
  { name: "Prof. Abhijit Jadhav", position: "Faculty Coordinator" },
  { name: "Mrs. Rachana Mudholkar", position: "Faculty Coordinator" },
];

const Team = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Handle image load errors
  const handleImageError = (imageName: string) => {
    setImageErrors((prev) => ({ ...prev, [imageName]: true }));
  };

  // Generate image path for team members
  const getImagePath = (name: string): string => {
    const fileName = name.toLowerCase().replace(/\s+/g, "");
    return `/images/team/${fileName}.jpg`;
  };

  // Generate image path for faculty
  const getFacultyImagePath = (name: string): string => {
    const fileName = name.toLowerCase().replace(/prof\.\s*/i, "").replace(/mrs\.\s*/i, "").replace(/\s+/g, "");
    return `/images/faculty/${fileName}.jpg`;
  };

  // Get initials for placeholder
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Team member card component
  const TeamMemberCard = ({ member, delay }: { member: TeamMember; delay: number }) => {
    const imagePath = getImagePath(member.name);
    const hasError = imageErrors[imagePath];

    return (
      <Card
        className="group w-72 mx-auto hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur animate-fade-in"
        style={{ animationDelay: `${delay}ms` }}
      >
        <CardContent className="p-6 text-center">
          <div className="mb-4 relative mx-auto w-32 h-32">
            {!hasError ? (
              <img
                src={imagePath}
                alt={member.name}
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-all"
                onError={() => handleImageError(imagePath)}
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl font-bold text-primary border-4 border-primary/20">
                {getInitials(member.name)}
              </div>
            )}
          </div>
          <h3 className="font-bold text-lg mb-1 text-foreground">{member.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{member.class}</p>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            {member.position}
          </span>
        </CardContent>
      </Card>
    );
  };

  // Faculty card component
  const FacultyCard = ({ faculty, delay }: { faculty: FacultyMember; delay: number }) => {
    const imagePath = getFacultyImagePath(faculty.name);
    const hasError = imageErrors[imagePath];

    return (
      <Card
        className="group w-72 mx-auto hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur animate-fade-in"
        style={{ animationDelay: `${delay}ms` }}
      >
        <CardContent className="p-6 text-center">
          <div className="mb-4 relative mx-auto w-40 h-40">
            {!hasError ? (
              <img
                src={imagePath}
                alt={faculty.name}
                className="w-full h-full rounded-full object-cover border-4 border-accent/20 group-hover:border-accent/50 transition-all"
                onError={() => handleImageError(imagePath)}
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-3xl font-bold text-accent border-4 border-accent/20">
                {getInitials(faculty.name)}
              </div>
            )}
          </div>
          <h3 className="font-bold text-xl mb-2 text-foreground">{faculty.name}</h3>
          <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/20">
            {faculty.position}
          </span>
        </CardContent>
      </Card>
    );
  };

  // Render team section by department with improved responsiveness
  const renderTeamSection = (members: TeamMember[], startDelay: number = 0) => {
    // Separate heads (Lead/Co-Lead) and members
    const heads = members.filter((m) => m.position === "Lead" || m.position === "Co-Lead");
    const regularMembers = members.filter((m) => m.position === "Member");

    // Helper function to get responsive grid classes
    const getGridClasses = (count: number) => {
      if (count === 1) {
        return "grid grid-cols-1 justify-items-center max-w-sm mx-auto";
      } else if (count === 2) {
        return "grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto justify-items-center";
      } else if (count === 3) {
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto justify-items-center";
      } else {
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center";
      }
    };

    return (
      <div className="space-y-12">
        {/* Heads Section */}
        {heads.length > 0 && (
          <div>
            <h4 className="text-xl font-semibold text-primary mb-6 text-center">
              {heads.length === 1 ? "Team Head" : "Team Heads"}
            </h4>
            <div className={getGridClasses(heads.length)}>
              {heads.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} delay={startDelay + index * 100} />
              ))}
            </div>
          </div>
        )}

        {/* Members Section */}
        {regularMembers.length > 0 && (
          <div>
            <h4 className="text-xl font-semibold text-primary mb-6 text-center">
              {regularMembers.length === 1 ? "Team Member" : "Team Members"}
            </h4>
            <div className={getGridClasses(regularMembers.length)}>
              {regularMembers.map((member, index) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  delay={startDelay + heads.length * 100 + index * 100}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Compute club leadership (Lead & Co-Lead) excluding specific names and helper for grid classes
  const leadership = teamData.executive
    .filter(
      (m) => (m.position === "Lead" || m.position === "Co-Lead") &&
             m.name !== "Vaishnavi Deshmukh" &&
             m.name !== "Tanvi Homkar"
    )
    .slice(0, 2);

  const getLeadershipGridClasses = (count: number) => {
    if (count === 1) return "grid grid-cols-1 justify-items-center max-w-sm mx-auto";
    if (count === 2) return "grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto justify-items-center";
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center";
  };

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate individuals driving innovation and excellence at PIC.
          </p>
        </div>

        {/* Club Leadership - Always Visible */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Club Leadership
          </h3>
          <div className={getLeadershipGridClasses(leadership.length)}>
            {leadership.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} delay={index * 100} />
            ))}
          </div>
        </div>

        {/* Department Teams - Tabbed */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Department Teams
          </h3>
          <Tabs defaultValue="executive" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-8 h-auto bg-card/50 p-2">
              <TabsTrigger value="executive" className="text-sm">Executive</TabsTrigger>
              <TabsTrigger value="marketing" className="text-sm">Marketing</TabsTrigger>
              <TabsTrigger value="editorial" className="text-sm">Editorial</TabsTrigger>
              <TabsTrigger value="technical" className="text-sm">Technical</TabsTrigger>
              <TabsTrigger value="webdev" className="text-sm">Web Dev</TabsTrigger>
              <TabsTrigger value="socialmedia" className="text-sm">Social Media</TabsTrigger>
              <TabsTrigger value="design" className="text-sm">Design</TabsTrigger>
            </TabsList>

            <TabsContent value="executive" className="animate-fade-in">
              {renderTeamSection(
                teamData.executive.filter(
                  (m) => m.name !== "Soham Pachpute" && m.name !== "Jeevan Patil"
                )
              )}
            </TabsContent>

            <TabsContent value="marketing" className="animate-fade-in">
              {renderTeamSection(teamData.marketing)}
            </TabsContent>

            <TabsContent value="editorial" className="animate-fade-in">
              {renderTeamSection(teamData.editorial)}
            </TabsContent>

            <TabsContent value="technical" className="animate-fade-in">
              {renderTeamSection(teamData.technical)}
            </TabsContent>

            <TabsContent value="webdev" className="animate-fade-in">
              {renderTeamSection(teamData.webdev)}
            </TabsContent>

            <TabsContent value="socialmedia" className="animate-fade-in">
              {renderTeamSection(teamData.socialmedia)}
            </TabsContent>

            <TabsContent value="design" className="animate-fade-in">
              {renderTeamSection(teamData.design)}
            </TabsContent>
          </Tabs>
        </div>

        {/* Faculty Coordinators */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Faculty Coordinators
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Guiding and mentoring our club with their expertise and support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto justify-items-center">
            {facultyCoordinators.map((faculty, index) => (
              <FacultyCard key={faculty.name} faculty={faculty} delay={index * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
