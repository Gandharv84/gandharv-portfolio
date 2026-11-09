import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: "remindme",
    title: "RemindMe",
    category: "Full-Stack",
    categoryLabel: "Full-Stack Development | Management Systems & Analytics",
    shortDescription:
      "Automated reminder platform for car dealerships and vehicle owners covering vehicle service intervals, insurance renewals, PUC expiry, and IDV valuation tracking.",
    longDescription:
      "Developed an automated reminder platform for car dealerships and vehicle owners covering vehicle service interval tracking, insurance renewals, and PUC expiry. Engineered an in-memory relational data model and reminder engine to calculate service intervals, IDV valuations, and insurance/PUC expiry timelines, with simulated multi-channel notification workflows, audit logging, and role-based access control.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    accentColor: "tangerine",
    githubUrl: "https://github.com/Gandharv84/remindme",
    isImplemented: true,
    statusLabel: "CV-Verified Project",
    caseStudy: {
      overview:
        "RemindMe is an automated vehicle compliance and reminder system designed for automobile dealerships and individual vehicle owners. It combines relational data modeling, automated service interval tracking, IDV valuation tracking, and simulated multi-channel notification workflows with complete audit logging.",
      problemStatement:
        "Automobile dealerships and vehicle owners face recurring challenges tracking vehicle service intervals, PUC certifications, and insurance policy expirations across diverse fleets. Without structured relational data modeling and automated reminder calculations, owners face statutory penalties and dealerships lose service retention.",
      proposedSolution:
        "A streamlined React and TypeScript platform featuring relational data modeling, an automated reminder evaluation engine, simulated multi-channel notification workflows (SMS with regulatory DLT headers and SMTP email relay audit logs), role-based access control, an employee/admin operations dashboard, and customer appointment booking.",
      architecture: {
        summary:
          "Modular client-side architecture using React and TypeScript, powered by an in-memory relational data store and a state-driven reminder engine with role-based routing.",
        clientTier: "React with TypeScript, styled with Tailwind CSS, offering a dedicated employee/admin operations dashboard and a customer appointment booking portal.",
        apiTier: "Client-side service and controller layer managing relational data operations, appointment booking workflows, and role-based access control.",
        dataTier: "In-memory relational data modeling for vehicle assets, service intervals, IDV valuations, and compliance expiration timelines with referential integrity.",
        integrationTier: "Simulated multi-channel notification workflows with DLT template header logging and SMTP relay audit records.",
      },
      techStackDetailed: [
        {
          category: "Frontend & UI",
          technologies: ["React", "TypeScript", "Tailwind CSS"],
        },
        {
          category: "Data Layer & Modeling",
          technologies: ["Relational Data Modeling", "In-Memory Relational Engine", "Typed Entity Associations"],
        },
        {
          category: "Reminder Engine & Tracking",
          technologies: ["Vehicle Service Interval Tracking", "Insurance & PUC Expiry Tracking", "IDV Valuation Tracking"],
        },
        {
          category: "Workflows & Security",
          technologies: ["Simulated Multi-Channel Notification Workflows", "Audit Logging (DLT & SMTP)", "Role-Based Access Control (RBAC)"],
        },
      ],
      databaseDesign: {
        engine: "In-Memory Relational Data Structure",
        keyEntities: [
          {
            name: "CustomerRecord",
            description: "Stores owner information, contact details, and assigned vehicle IDs.",
            fields: ["id", "fullName", "phoneNumber", "emailAddress", "role (ADMIN | CUSTOMER)"],
          },
          {
            name: "VehicleAsset",
            description: "Tracks registration number, make, model, IDV valuation, and last service date.",
            fields: ["id", "registrationNo", "customerId", "make", "model", "idvValuation", "lastServiceKm"],
          },
          {
            name: "ComplianceTimeline",
            description: "Records expiration dates for Insurance policies and PUC certificates.",
            fields: ["id", "vehicleId", "type (INSURANCE | PUC)", "expiryDate", "status (ACTIVE | DUE | EXPIRED)"],
          },
          {
            name: "GatewayAuditLog",
            description: "Stores simulated multi-channel notification dispatches with DLT template headers and SMTP relay audit logs.",
            fields: ["logId", "vehicleId", "channel (SMS | EMAIL)", "dltHeader", "timestamp", "status"],
          },
        ],
        schemaNotes:
          "Relational data modeling preserves referential integrity in-memory, linking customers to multiple vehicles, compliance timelines, and audit logs.",
      },
      keyFeatures: [
        "Relational Data Modeling: Structured relational schemas associating owners, vehicle records, compliance timelines, and audit logs.",
        "Vehicle Service Interval Tracking: Tracks periodic odometer and calendar intervals to proactively schedule maintenance.",
        "Insurance and PUC Expiry Tracking: Evaluates document expiration timelines and flags upcoming renewals before deadlines.",
        "IDV Valuation Tracking: Monitors Insured Declared Value (IDV) metrics to assist vehicle insurance renewal decisions.",
        "Reminder Engine: Calculates remaining renewal periods and automates multi-stage status evaluation.",
        "Simulated Multi-Channel Notification Workflows: Emulates SMS and email notification flows with Indian telecom DLT compliance headers.",
        "Audit Logging: Generates tamper-evident timestamped audit records for simulated notification dispatches and system events.",
        "Role-Based Access Control: Granular RBAC enforcing distinct permissions for administrative staff and vehicle owners.",
        "Employee/Admin Operations Dashboard: Centralized dashboard for managing customer fleets, viewing expiry metrics, and reviewing logs.",
        "Customer Appointment Booking: User-facing interface enabling vehicle owners to view records and book service appointments.",
      ],
      implementationDetails: [
        {
          title: "In-Memory Expiry & Status Engine",
          description: "Calculates day boundaries for vehicle documents and triggers reminder states.",
          codeSnippet: `export interface ComplianceItem {
  id: string;
  vehicleReg: string;
  type: 'PUC' | 'INSURANCE' | 'SERVICE';
  expiryDate: string;
}

export function evaluateReminderStatus(expiryDateStr: string): 'VALID' | 'DUE_SOON' | 'EXPIRED' {
  const today = new Date();
  const expiry = new Date(expiryDateStr);
  const diffDays = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return 'EXPIRED';
  if (diffDays <= 7) return 'DUE_SOON';
  return 'VALID';
}`,
          codeLanguage: "typescript",
        },
        {
          title: "Simulated DLT & SMTP Gateway Logger",
          description: "Generates formatted audit logs for simulated SMS and email reminder notifications.",
          codeSnippet: `export function simulateGatewayDispatch(vehicleNo: string, customerPhone: string, type: string) {
  return {
    dispatchId: 'SIM-' + Date.now(),
    channel: 'SMS_DLT',
    dltHeader: 'DLT_CAR_REMIND',
    recipient: customerPhone,
    message: \`Reminder: \${type} for vehicle \${vehicleNo} is due for renewal.\`,
    smtpRelayStatus: 'SIMULATED_250_OK',
    dispatchedAt: new Date().toISOString()
  };
}`,
          codeLanguage: "typescript",
        },
      ],
      technicalChallenges: [
        {
          challenge: "Managing Multi-Entity Relations Without an External Database Server",
          solution:
            "Designed a strongly typed in-memory relational model in TypeScript, using foreign keys and referential lookup arrays to link customers, vehicles, and compliance logs seamlessly.",
        },
        {
          challenge: "Accurately Modeling Regulatory Communication Workflows",
          solution:
            "Implemented simulated multi-channel notification workflows logging DLT header identifiers and SMTP transaction audit records, mimicking real-world Indian telecom compliance.",
        },
      ],
      engineeringDecisions: [
        {
          decision: "In-Memory Relational Engine over Cloud Database",
          rationale: "Keeps the application lightweight, fast, and self-contained for client evaluation and academic demonstration.",
          tradeoff: "Data resets on session refresh, but provides instantaneous responsiveness with zero external dependencies.",
        },
        {
          decision: "Role-Based View Routing in React",
          rationale: "Separates employee/admin operations dashboard from customer booking workflows cleanly.",
          tradeoff: "Requires maintaining role state across application views.",
        },
        {
          decision: "Deterministic Software Automation over Generative AI",
          rationale: "RemindMe relies on deterministic interval algorithms, expiry boundary evaluations, and simulated DLT/SMTP notification workflows. Software automation is best achieved here with predictable, rule-based logic rather than non-deterministic AI models.",
          tradeoff: "Strict rules require explicit condition handling, but guarantees zero hallucinations for regulatory compliance dates.",
        },
      ],
      learnings: [
        "In-memory data structures require disciplined typing and relational keys to prevent orphaned records.",
        "Simulating external services (SMS DLT and SMTP) provides practical understanding of backend contracts and audit logging.",
        "Role-based access control provides clear UX boundaries between administrators and end-users.",
      ],
      futureRoadmap: [
        "Persistent database integration with MySQL.",
        "Live third-party SMS/WhatsApp gateway API connection.",
        "Vehicle diagnostic report generation in PDF format.",
      ],
    },
  },
  {
    id: "techtalk-vault",
    title: "TechTalk Vault",
    category: "Full-Stack",
    categoryLabel: "Full-Stack Web Platform | Educational Technology & AI Integration",
    shortDescription:
      "Full-stack web platform developed with Python, Flask, MongoDB, HTML5, CSS3, JavaScript, and Gemini API to collect, process, and summarize technology interview transcripts.",
    longDescription:
      "Developed a full-stack web platform to organize and deliver technology interview content. Implemented automated collection of YouTube transcript data through APIs, transcript text processing, and organized storage in MongoDB. Prepared transcript data for AI-based summarization via Google Gemini API integration, implemented interactive transcript-based question answering, and built user authentication, user profiles, and an admin dashboard for platform content management.",
    technologies: ["Python", "Flask", "MongoDB", "HTML5", "CSS3", "JavaScript", "Gemini API", "YouTube API"],
    accentColor: "lime",
    githubUrl: "https://github.com/Gandharv84/techtalk-vault",
    isImplemented: true,
    statusLabel: "CV-Verified Project",
    caseStudy: {
      overview:
        "TechTalk Vault is a full-stack educational platform built with Python, Flask, and MongoDB that collects YouTube transcript data through APIs, processes raw transcript text, and organizes technical interview content. It prepares transcript data for AI-based summarization using the Google Gemini API, enables interactive transcript-based question answering, and manages user and platform content through session authentication and an admin dashboard.",
      problemStatement:
        "Students and software candidates spend excessive time scrubbing through multi-hour technical interviews and system design podcasts without efficient transcript search or structured summaries. Raw transcripts often contain time markers, noise, and formatting that need systematic text processing before being analyzed.",
      proposedSolution:
        "A full-stack web application designed to collect YouTube transcript data through APIs, process and clean transcript text, organize interviews in MongoDB document collections, prepare transcript datasets for AI-based summarization with the Gemini API, deliver interactive transcript-based question answering, and manage platform access via robust authentication and admin controls.",
      architecture: {
        summary:
          "Full-stack web architecture with Python and Flask, MongoDB document store for transcripts and user accounts, YouTube API transcript extraction pipelines, and Google Gemini API for transcript summarization and Q&A.",
        clientTier: "Semantic HTML5, responsive CSS3, and JavaScript providing interactive video browsing, transcript search, and transcript-grounded Q&A panels.",
        apiTier: "Python Flask backend handling session-based authentication, user profile management, admin content workflows, and Gemini API inference routes.",
        dataTier: "MongoDB document collections organizing technical interview content, speaker metadata, processed transcript texts, and cached summaries.",
        integrationTier: "YouTube API for transcript data extraction and Google Gemini API for AI-powered summarization and contextual transcript Q&A.",
      },
      techStackDetailed: [
        {
          category: "Backend Framework & API Routing",
          technologies: ["Python", "Flask", "REST APIs", "Session Authentication"],
        },
        {
          category: "Database & Content Organization",
          technologies: ["MongoDB", "PyMongo", "Document Store for Transcripts"],
        },
        {
          category: "Frontend & Interaction",
          technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
        },
        {
          category: "Data Processing & AI Integration",
          technologies: ["YouTube API Transcript Extraction", "Text & Transcript Processing", "Gemini API Integration", "Transcript Q&A"],
        },
      ],
      databaseDesign: {
        engine: "MongoDB Document Database",
        keyEntities: [
          {
            name: "users",
            description: "Stores user credentials, profile information, and account role.",
            fields: ["_id (ObjectId)", "username", "email", "password_hash", "role (ADMIN | USER)", "created_at"],
          },
          {
            name: "interviews",
            description: "Stores video titles, YouTube video IDs, category tags, speaker metadata, and duration.",
            fields: ["_id (ObjectId)", "title", "youtube_id", "category", "speaker_name", "created_at"],
          },
          {
            name: "transcripts",
            description: "Stores processed YouTube transcripts, clean text segments, and cached summaries.",
            fields: ["_id (ObjectId)", "interview_id", "transcript_text", "summary_cache", "last_updated"],
          },
        ],
        schemaNotes:
          "Document model allows flexible storage of long-form processed transcript texts and structured summaries alongside interview metadata.",
      },
      keyFeatures: [
        "AI-Based Video Summarization: Distills complex technical discussions and interviews into structured key takeaways using the Google Gemini API.",
        "Transcript-Based Question Answering: Enables users to ask technical queries answered strictly and accurately from verified transcript dialogue.",
        "YouTube Transcript Processing: Automates extraction, cleaning, and preprocessing of timestamped YouTube transcripts via APIs.",
        "AI-Powered Technical Learning Assistance: Converts passive interview videos into interactive, searchable, and AI-summarized learning resources.",
        "Collecting YouTube Transcript Data: Automated collection of video transcripts and episode metadata via YouTube APIs.",
        "Organizing Interview Content in MongoDB: Structured NoSQL document store categorizing interview topics, transcripts, and speaker details.",
        "Preparing Data for AI Summarization: Chunks and formats processed text payloads optimized for large language model context windows.",
        "User Authentication & Profiles: Secure user sign-up, session-based authentication, and profile management.",
        "Admin Content Management: Administrative dashboard for adding, categorizing, updating, and reviewing platform content.",
      ],
      implementationDetails: [
        {
          title: "Gemini API Transcript Summarization Route",
          description: "Flask backend route passing extracted YouTube transcript to Google Gemini API for structured summarization.",
          codeSnippet: `from flask import Flask, request, jsonify
from google import genai

app = Flask(__name__)
client = genai.Client()

@app.route('/api/summarize', methods=['POST'])
def summarize_video():
    data = request.get_json()
    transcript_text = data.get('transcript', '')

    prompt = f"""Summarize the following technology interview transcript into key technical takeaways:
Transcript:
{transcript_text[:4000]}
"""
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=prompt
    )
    return jsonify({'summary': response.text})`,
          codeLanguage: "python",
        },
        {
          title: "Transcript-Based Question Answering",
          description: "Constraining the Gemini API prompt to answer strictly based on the extracted video transcript.",
          codeSnippet: `@app.route('/api/ask-transcript', methods=['POST'])
def ask_transcript():
    data = request.get_json()
    question = data.get('question')
    transcript = data.get('transcript')

    prompt = f"""Based solely on the interview transcript below, answer the student's question accurately.
Transcript:
{transcript[:5000]}

Question: {question}"""

    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=prompt
    )
    return jsonify({'answer': response.text})`,
          codeLanguage: "python",
        },
      ],
      technicalChallenges: [
        {
          challenge: "Handling Variable Length Transcripts within API Prompt Limits",
          solution:
            "Engineered preprocessing logic in Python to clean and truncate transcript segments, extracting the most relevant dialogue excerpts before sending to the Gemini API.",
        },
        {
          challenge: "Managing Administrative and User Permissions",
          solution:
            "Implemented Flask session-based role checks on administrative endpoints to ensure only verified admin accounts can create or update interview listings.",
        },
      ],
      engineeringDecisions: [
        {
          decision: "MongoDB for Video & Transcript Storage",
          rationale: "Unstructured transcript texts and varying episode metadata fit naturally into flexible BSON documents.",
          tradeoff: "Requires application-level schema enforcement for user profiles.",
        },
        {
          decision: "Google Gemini API for Summarization",
          rationale: "Fast inference speed and high contextual comprehension for technical interview dialogues.",
          tradeoff: "Dependent on external network connectivity and API key configuration.",
        },
      ],
      learnings: [
        "Structuring prompts with clear constraints prevents AI models from hallucinating beyond the supplied transcript context.",
        "Building end-to-end authentication in Flask clarifies session cookie lifecycles and route security.",
        "Integrating external APIs (YouTube and Gemini) requires robust error handling for network latency and empty transcripts.",
      ],
      futureRoadmap: [
        "Timestamp bookmarking linking Q&A answers directly to video playback seconds.",
        "Search indexing across full transcript database.",
        "User bookmarking and personal note-taking features.",
      ],
    },
  },
];
