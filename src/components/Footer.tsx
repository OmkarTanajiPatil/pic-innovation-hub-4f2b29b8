import { useState, useEffect } from "react";
import picLogo from "@/assets/pic-logo.jpg";

interface Config {
  email: string;
}

const Footer = () => {
  const [config, setConfig] = useState<Config | null>(null);

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

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <img src={picLogo} alt="PIC Logo" className="h-12 w-12 rounded-lg object-cover" />
            <div>
              <h3 className="font-bold text-lg">Project and Innovation Club</h3>
              <p className="text-sm text-secondary-foreground/70">Innovate. Create. Inspire.</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} Project and Innovation Club. All rights reserved.
            </p>
            {config && (
              <p className="text-sm text-secondary-foreground/70 mt-1">{config.email}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
