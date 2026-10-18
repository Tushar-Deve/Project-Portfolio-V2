export type InternshipCertificate = {
  title: string;
  recipient: string;
  issuer: string;
  issueDate: string;
  duration: string;
  image: string;
  description: string;
  skills: string[];
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
  certificate?: InternshipCertificate;
};

// =========================================================================
// CERTIFICATE DATA
// Apni certificate photo ko public/certificates/ folder me daal kar 
// image path yahan set karein (jaise: "/certificates/certificate.jpg" ya ".png")
// =========================================================================
export const internshipCertificate: InternshipCertificate = {
  title: "Internship Certificate",
  recipient: "Tushar",
  issuer: "Health Dial Pvt LTD.",
  issueDate: "October 2026",
  duration: "13 July 2026 – 14 Oct 2026 (3 Months)",
  image: "/certificates/Internship_Certificate.jpg",
  description: "Web Development Internship Certificate of Completion.",
  skills: ["React.js", "JavaScript", "HTML/CSS", "Node.js", "Tailwind CSS"],
};

// =========================================================================
// EXPERIENCE DATA
// Yahan aap apna role, company name, duration aur content add kar sakte hain
// =========================================================================
export const experiences: ExperienceItem[] = [
  {
    id: "experience-1",
    role: "Web Developer Intern",
    company: "Health Dial Pvt LTD.",
    period: "13 July 2026 – 14 Oct 2026",
    type: "Internship",
    description: [
      "Developed and maintained responsive web user interfaces using modern frontend technologies.",
      "Collaborated with the development team to implement clean features and integrate backend APIs.",
      "Optimized website responsiveness, cross-browser compatibility, and overall user experience.",
    ],
    technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "Tailwind CSS", "Git"],
    certificate: internshipCertificate,
  },
];
