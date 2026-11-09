export interface StrengthItem {
  title: string;
  description: string;
}

export interface DevelopmentInterest {
  id: string;
  title: string;
  description: string;
  accentColor: 'tangerine' | 'lime' | 'cyan';
  tag: string;
  connection: string;
}

export interface AiExplorationArea {
  name: string;
  category: 'Hands-on Implemented' | 'Active Exploration';
  description: string;
  projectEvidence?: string;
}

export interface ProfileData {
  name: string;
  professionalTitle: string;
  education: string;
  expectedGraduation: string;
  location: string;
  availability: string;
  careerFocus: string[];
  primaryInterests: DevelopmentInterest[];
  brandPositioning: string;
  coreMessage: string;
  summary: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
  resumePdfUrl: string;
  supplementaryResumes: {
    title: string;
    url: string;
    focus: string;
  }[];
  metrics: {
    projectCount: number;
    graduationYear: string;
    learningFocus: string;
  };
  strengths: StrengthItem[];
}

export type ProjectCategory = 'Full-Stack' | 'Frontend' | 'Backend' | 'AI Integration';

export interface CaseStudyData {
  overview: string;
  problemStatement: string;
  proposedSolution: string;
  architecture: {
    summary: string;
    clientTier: string;
    apiTier: string;
    dataTier: string;
    integrationTier?: string;
  };
  techStackDetailed: {
    category: string;
    technologies: string[];
  }[];
  databaseDesign: {
    engine: string;
    keyEntities: {
      name: string;
      description: string;
      fields: string[];
    }[];
    schemaNotes: string;
  };
  keyFeatures: string[];
  implementationDetails: {
    title: string;
    description: string;
    codeSnippet?: string;
    codeLanguage?: string;
  }[];
  technicalChallenges: {
    challenge: string;
    solution: string;
  }[];
  engineeringDecisions: {
    decision: string;
    rationale: string;
    tradeoff: string;
  }[];
  learnings: string[];
  futureRoadmap: string[];
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  accentColor: 'tangerine' | 'lime' | 'cyan' | 'copper';
  githubUrl?: string;
  liveDemoUrl?: string;
  isImplemented: boolean;
  statusLabel: string;
  caseStudy: CaseStudyData;
}

export interface SkillItem {
  name: string;
  category:
    | 'Programming Languages'
    | 'Frontend'
    | 'Backend'
    | 'Databases'
    | 'Data Handling & Analytics'
    | 'Tools & Technologies'
    | 'Core Skills';
  description?: string;
}

export interface Milestone {
  period: string;
  title: string;
  type: 'Education' | 'Full-Stack Project' | 'AI & Web Project' | 'Technical Foundation' | 'AI-Native Exploration';
  description: string;
  tags: string[];
  learnings: string;
}

export interface RepositoryItem {
  name: string;
  description: string;
  language: string;
  topics: string[];
  url: string;
  updatedAt: string;
}
