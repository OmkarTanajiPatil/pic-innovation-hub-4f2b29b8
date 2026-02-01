const config = {
  clubName: "Project and Innovation Club",
  clubAcronym: "PIC",
  email: "piccomp@pccoer.in", // Official Club Email
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL, // Contact Person Email
  socialLinks: {
    instagram: "https://www.instagram.com/pic.pccoer_?igsh=d3Qyc2dzZ2ZmZmk3",
    linkedin: "", // Add LinkedIn URL here when available
  },
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
  address: {
    institution: "Pimpri Chinchwad College of Engineering and Research",
    cityState: "Ravet, Pune, Maharashtra",
  },
  copyright: {
    text: "Project and Innovation Club. All rights reserved.",
  }
};

export default config;
