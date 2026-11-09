export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  scoreOrStatus: string;
  description: string;
  highlights: string[];
}

export const EDUCATION_DATA: EducationEntry[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    field: "Computer Applications",
    institution: "KIT's Institute of Management Education & Research (KIT IMER)",
    location: "Kolhapur, India",
    period: "2025 – 2027",
    scoreOrStatus: "Currently Pursuing (2025–2027)",
    description:
      "Postgraduate program focused on software development, full-stack systems, database management, and emerging technologies.",
    highlights: [
      "Hands-on development of full-stack projects using Python, Flask, React, TypeScript, and MongoDB.",
      "Emphasis on REST API integration, authentication mechanisms, and role-based access control.",
      "Preparing for technical internship opportunities in software engineering.",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science (B.Sc. CS)",
    field: "Computer Science",
    institution: "Shivraj College",
    location: "Gadhinglaj, India",
    period: "Completed",
    scoreOrStatus: "Percentage: 67.71%",
    description:
      "Undergraduate computer science degree establishing strong fundamentals in programming languages, data structures, and database principles.",
    highlights: [
      "Core programming in C++, Java, and Python.",
      "Relational database concepts with MySQL and structured queries.",
      "Graduated with 67.71% aggregate.",
    ],
  },
];
