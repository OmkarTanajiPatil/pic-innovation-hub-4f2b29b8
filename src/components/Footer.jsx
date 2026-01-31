import { useState, useEffect } from "react";
import picLogo from "@/assets/pic-logo.jpg";
import config from "@/config";

const Footer = () => {
    return (
        <footer className="bg-secondary text-secondary-foreground py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Name */}
                    <div className="flex items-center gap-3">
                        <img src={picLogo} alt="PIC Logo" className="h-12 w-12 rounded-lg object-cover" />
                        <div>
                            <h3 className="font-bold text-lg">{config.clubName}</h3>
                            <p className="text-sm text-secondary-foreground/70">Innovate. Create. Inspire.</p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-sm text-secondary-foreground/70">
                            © {config.copyright.year} {config.clubName}. All rights reserved.
                        </p>
                        <p className="text-sm text-secondary-foreground/70 mt-1">{config.email}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
