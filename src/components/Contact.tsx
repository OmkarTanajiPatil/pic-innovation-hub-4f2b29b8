import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// Type definitions
interface Config {
  email: string;
  instagram: string;
  linkedin: string;
  contactEmail: string;
  emailjs: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [config, setConfig] = useState<Config | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Load configuration from config.json
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch("/config.json");
        const data: Config = await response.json();
        setConfig(data);
      } catch (error) {
        console.error("Error loading config:", error);
      }
    };
    loadConfig();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!config) {
      toast({
        title: "Configuration Error",
        description: "Unable to load contact configuration. Please try again later.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS with public key
      emailjs.init(config.emailjs.publicKey);

      // Send email using EmailJS
      await emailjs.send(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        }
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Social links configuration
  const socialLinks = config
    ? [
        {
          icon: Instagram,
          label: "Instagram",
          href: config.instagram,
          color: "text-pink-500",
        },
        config.linkedin && {
          icon: Linkedin,
          label: "LinkedIn",
          href: config.linkedin,
          color: "text-blue-500",
        },
        {
          icon: Mail,
          label: "Email",
          href: `mailto:${config.email}`,
          color: "text-primary",
        },
      ].filter(Boolean)
    : [];

  if (!config) {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Loading contact information...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to join PIC? Reach out to us and we'll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/80 backdrop-blur animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  variant="default"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            {/* Social Media Card */}
            <Card className="border-border/50 bg-card/80 backdrop-blur animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Connect With Us</CardTitle>
                <CardDescription>
                  Follow us on social media for updates and events.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link: any) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                    >
                      <div className={`${link.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{link.label}</p>
                        <p className="text-sm text-muted-foreground">
                          {link.label === "Email" ? config.email : `@pic.pccoer_`}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="border-border/50 bg-card/80 backdrop-blur animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Our Location</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Pimpri Chinchwad College of Engineering and Research
                      <br />
                      Ravet, Pune, Maharashtra
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email Us</p>
                    <a
                      href={`mailto:${config.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {config.email}
                    </a>
                  </div>
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
