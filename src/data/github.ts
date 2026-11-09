import { RepositoryItem } from '../types';

export const GITHUB_CONFIG = {
  username: "Gandharv84",
  profileUrl: "https://github.com/Gandharv84",
  repositories: [
    {
      name: "remindme",
      description: "Automated reminder platform for car dealerships and vehicle owners covering vehicle service, insurance renewal, and PUC expiry.",
      language: "TypeScript",
      topics: ["react", "typescript", "tailwind-css", "reminder-system", "rbac", "in-memory-db"],
      url: "https://github.com/Gandharv84/remindme",
      updatedAt: "Active",
    },
    {
      name: "techtalk-vault",
      description: "Full-stack technical learning platform developed with Python, Flask, MongoDB, and Gemini API for video summarization and transcript Q&A.",
      language: "Python",
      topics: ["python", "flask", "mongodb", "gemini-api", "youtube-api", "full-stack"],
      url: "https://github.com/Gandharv84/techtalk-vault",
      updatedAt: "Active",
    },
  ] as RepositoryItem[],
  languages: [
    { name: "Python", percentage: 40, color: "#C5F467" },
    { name: "TypeScript / JavaScript", percentage: 35, color: "#5CC8FF" },
    { name: "Java / C++", percentage: 15, color: "#F07836" },
    { name: "HTML / CSS / SQL", percentage: 10, color: "#C47A50" },
  ],
};
