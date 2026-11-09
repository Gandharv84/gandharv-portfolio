import { AiExplorationArea } from '../types';

export const AI_NATIVE_SECTION_CONTENT = {
  title: "Exploring AI-Native Development",
  subtitle: "INTELLIGENT APIS & MODERN ENGINEERING",
  description:
    "I am interested in the evolution of software engineering through AI-native development. I explore how AI models, intelligent APIs, AI-assisted development tools, and automation can improve software development workflows and enable more intelligent applications.",
  framing:
    "AI-Native Development represents an emerging engineering focus in my journey, bridging full-stack systems and data processing with intelligent APIs.",
  projectConnections: {
    techtalkVault: {
      title: "TechTalk Vault",
      role: "Hands-on AI API Integration & Full-Stack Implementation",
      summary:
        "Practical integration of the Google Gemini API combined with YouTube transcript processing pipelines to build an AI-powered technical learning assistant.",
      points: [
        "AI-Based Video Summarization: Distilling lengthy technical discussions into concise, structured key takeaways via Gemini API.",
        "Transcript-Based Question Answering: Constraining Gemini prompts to answer technical queries grounded directly in verified video dialogue.",
        "YouTube Transcript Processing: Extracting, cleaning, and formatting timestamped transcripts for reliable LLM ingestion.",
        "AI-Powered Technical Learning Assistance: Transforming passive video watching into an active, searchable knowledge repository.",
      ],
    },
    remindMe: {
      title: "RemindMe",
      role: "Software Automation Concepts (Rule-Based Engineering)",
      summary:
        "Application of software automation principles through state machines and evaluation engines—designed with structured logic rather than generative AI.",
      points: [
        "Automated Reminder Workflows: Scheduled evaluation of vehicle document compliance deadlines.",
        "Expiry Tracking: Real-time day-boundary calculations flagging PUC and insurance policies due for renewal.",
        "Reminder Engine: Interval management and multi-tier urgency calculation algorithms.",
        "Simulated Notification Workflows: Automated dispatch simulation with regulatory DLT headers and SMTP relay logs.",
      ],
      disclaimer: "Note: RemindMe applies software automation and interval rules; it is intentionally engineered without generative AI.",
    },
  },
};

export const AI_EXPLORATION_AREAS: AiExplorationArea[] = [
  {
    name: "AI API Integration",
    category: "Hands-on Implemented",
    description:
      "Integrating RESTful endpoints with the Google GenAI SDK and external data feeds to deliver server-side AI features.",
    projectEvidence: "TechTalk Vault (Gemini API routes & YouTube Data API)",
  },
  {
    name: "Gemini API",
    category: "Hands-on Implemented",
    description:
      "Implementing structured prompts for video summarization and transcript-grounded question answering with high fidelity.",
    projectEvidence: "TechTalk Vault (Gemini 2.5 Flash API implementation)",
  },
  {
    name: "AI-Powered Application Development",
    category: "Hands-on Implemented",
    description:
      "Architecting end-to-end full-stack applications that pair user authentication and databases with intelligent AI capabilities.",
    projectEvidence: "TechTalk Vault (Python, Flask, MongoDB, Gemini API)",
  },
  {
    name: "Prompt Engineering Fundamentals",
    category: "Hands-on Implemented",
    description:
      "Designing structured, context-constrained prompt templates that prevent hallucinations by grounding answers strictly in source transcripts.",
    projectEvidence: "TechTalk Vault (Transcript-grounded Q&A prompt design)",
  },
  {
    name: "Intelligent Workflow Automation",
    category: "Hands-on Implemented",
    description:
      "Building automated multi-step logic, interval evaluation engines, and simulated event-triggered notification workflows.",
    projectEvidence: "RemindMe (Automated vehicle expiry tracking engine)",
  },
  {
    name: "AI-Assisted Development",
    category: "Active Exploration",
    description:
      "Utilizing modern AI coding assistants to accelerate test-case generation, debugging diagnostics, and technical documentation drafting.",
  },
  {
    name: "LLM Exploration",
    category: "Active Exploration",
    description:
      "Studying large language model reasoning patterns, context window trade-offs, token efficiency, and structured JSON output schemas.",
  },
  {
    name: "AI-Augmented Software Engineering",
    category: "Active Exploration",
    description:
      "Investigating the shifting paradigm where intelligent APIs and AI workflows augment full-stack architectures and developer velocity.",
  },
];
