import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Instagram, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-600" },
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-gray-900" },
    { icon: Mail, label: "Email", href: "mailto:pic@college.edu", color: "hover:text-primary" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to join us? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="animate-fade-in border-border/50">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form and we'll get back to you shortly</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-border/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-border/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-border/50"
                  />
                </div>
                <Button type="submit" variant="default" className="w-full group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="h-full border-border/50">
              <CardHeader>
                <CardTitle>Connect with us</CardTitle>
                <CardDescription>Follow us on social media and stay updated</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-all duration-300 hover:-translate-x-1 group ${link.color}`}
                  >
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <link.icon className="w-5 h-5 text-primary group-hover:text-current" />
                    </div>
                    <span className="font-medium text-foreground">{link.label}</span>
                  </a>
                ))}

                <div className="pt-6 mt-6 border-t border-border">
                  <h4 className="font-semibold mb-2 text-foreground">Email</h4>
                  <p className="text-muted-foreground">pic@college.edu</p>
                  
                  <h4 className="font-semibold mb-2 mt-4 text-foreground">Location</h4>
                  <p className="text-muted-foreground">
                    Innovation Lab, Room 203<br />
                    Engineering Building<br />
                    Your College Campus
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
