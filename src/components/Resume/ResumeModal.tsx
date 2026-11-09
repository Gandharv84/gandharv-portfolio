import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink, Mail, MapPin, FileText, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ResumeTab = 'primary' | 'analyst' | 'intern';

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<ResumeTab>('primary');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const getActiveDownloadInfo = () => {
    switch (activeTab) {
      case 'analyst':
        return {
          filename: 'Data_Analyst_Resume.pdf',
          url: '/assets/aistudio/Data_Analyst_Resume_a8c6d34a.pdf',
          label: 'Data Analyst Resume',
        };
      case 'intern':
        return {
          filename: 'Software_intern_Resume.pdf',
          url: '/assets/aistudio/Software_intern_Resume_2c232f0e.pdf',
          label: 'Software Intern Resume',
        };
      default:
        return {
          filename: 'GANDHARV_SANKPALE.pdf',
          url: '/assets/aistudio/GANDHARV_SANKPALE_b3f2b663.pdf',
          label: 'Primary Physical CV (Authoritative)',
        };
    }
  };

  const handleCopyText = () => {
    let textResume = '';

    if (activeTab === 'analyst') {
      textResume = `
GANDHARV SANKPALE
Software Developer Intern | Full-Stack Developer | MCA Student
Specialization: Data Handling & Analytical Skills
Email: gandharv9384@gmail.com | Location: India | GitHub: github.com/Gandharv84 | LinkedIn: linkedin.com/in/gandharv-sankpale

PROFESSIONAL SUMMARY
MCA student and Full-Stack Developer with strong data handling and analytical foundation seeking a technical internship. Hands-on experience building full-stack software and data processing workflows with Python, Flask, React, TypeScript, JavaScript, MongoDB, and MySQL. Skilled in relational data modeling, text and transcript processing via APIs, audit logging, and analytical problem solving.

DATA HANDLING & ANALYTICAL SKILLS
• Data Processing: Extracting, structuring, and preparing datasets for model consumption.
• Relational Data Modeling: Entity relationships, foreign keys, and interval tracking in MySQL and in-memory stores.
• Text & Transcript Processing: Collecting YouTube transcripts through APIs and sanitizing text data.
• API Data Integration: Connecting RESTful APIs, Google Gemini API, and YouTube data endpoints.
• Audit Logging: Logging simulated multi-channel communication records with DLT headers and SMTP relays.
• SQL (MySQL): Querying, filtering, and relational database management.
• NoSQL (MongoDB): Document schemas for transcripts, user profiles, and video metadata.
• Analytical Problem Solving: Date calculations, boundary validation, and algorithmic data pipelines.

PROJECTS
TechTalk Vault: Full-Stack Platform with Transcript Data Processing & AI Integration
• Automated YouTube transcript data collection through APIs.
• Processed and structured transcript text in MongoDB document collections.
• Prepared cleaned transcript text datasets for AI-based summarization with the Gemini API.
• Implemented transcript-based question answering and administrative content management.

RemindMe: Vehicle Service, Expiry & Compliance Reminder Engine
• Engineered in-memory relational data modeling linking customers, vehicles, and compliance timelines.
• Programmed automated vehicle service interval tracking, insurance renewal, and PUC expiry evaluation.
• Tracked Insured Declared Value (IDV) metrics for vehicle insurance.
• Designed simulated multi-channel notification workflows with DLT headers and SMTP audit logging.

EDUCATION
Master of Computer Applications (MCA) — KIT IMER, Kolhapur (2025–2027)
Bachelor of Science in Computer Science — Shivraj College, Gadhinglaj (67.71%)
      `.trim();
    } else if (activeTab === 'intern') {
      textResume = `
GANDHARV SANKPALE
Software Developer Intern | Full-Stack Developer | MCA Student
Email: gandharv9384@gmail.com | Location: India | GitHub: github.com/Gandharv84 | LinkedIn: linkedin.com/in/gandharv-sankpale

PROFESSIONAL SUMMARY
MCA student and Full-Stack Developer seeking a software developer internship. Experienced in developing full-stack web applications with Python, Flask, React, TypeScript, JavaScript, MongoDB, and MySQL. Skilled in building REST APIs, role-based access control, user authentication, and operations dashboards. Strong problem-solving, debugging, and software development foundations.

TECHNICAL SKILLS
Languages: Python, Java, C++, JavaScript, TypeScript
Frontend: React, HTML5, CSS3, Tailwind CSS
Backend: Python, Flask, REST APIs
Databases: MongoDB, MySQL
Tools & Technologies: Git, GitHub, Gemini API, YouTube API
Core Competencies: Problem Solving, Troubleshooting, Software Development, Technical Documentation, Team Collaboration, Time Management

FEATURED PROJECTS
TechTalk Vault: Full-Stack Learning & Video Transcript Platform
• Python Flask backend with RESTful API endpoints and session-based authentication.
• Integrated Google Gemini API for transcript summarization and Q&A.
• Managed MongoDB collections for user profiles, interviews, and transcripts.
• Developed admin content dashboard for managing platform interviews.

RemindMe: Automated Vehicle Compliance & Reminder System
• React and TypeScript application with modular component architecture.
• In-memory relational database and state-driven reminder engine.
• Simulated SMS (DLT compliance) and SMTP email notification audit workflows.
• Role-based access control with employee/admin dashboard and customer booking portal.

EDUCATION
Master of Computer Applications (MCA) — KIT IMER, Kolhapur (2025–2027)
Bachelor of Science in Computer Science — Shivraj College, Gadhinglaj (67.71%)
      `.trim();
    } else {
      textResume = `
GANDHARV SANKPALE
Software Developer Intern | Full-Stack Developer | MCA Student
gandharv9384@gmail.com | India | GitHub: github.com/Gandharv84 | LinkedIn: linkedin.com/in/gandharv-sankpale

PROFESSIONAL SUMMARY
MCA student and Full-Stack Developer seeking a technical internship in software development. Hands-on experience building and maintaining full-stack projects with Python, Flask, React, TypeScript, JavaScript, MongoDB, and MySQL. Skilled in REST API integration, authentication, role-based access control, and admin dashboards. Strong troubleshooting and problem-solving skills, comfortable with GitHub workflows, and committed to delivering tasks on deadline.

TECHNICAL SKILLS
Programming Languages: Python, Java, C++, JavaScript, TypeScript
Frontend: React, HTML5, CSS3, Tailwind CSS
Backend: Python, Flask, REST APIs
Databases: MongoDB, MySQL
Tools and Technologies: Git, GitHub, Gemini API, YouTube API
Core Skills: Problem Solving, Troubleshooting, Software Development, Technical Documentation, Team Collaboration, Time Management

PROJECTS
TechTalk Vault: Full-Stack Technical Learning Platform
Tech stack: Python, Flask, MongoDB, HTML5, CSS3, JavaScript, Gemini API
• Developed a full-stack web platform to organize and deliver technology interview content.
• Implemented user authentication, user profiles, and an admin dashboard for managing platform content.
• Integrated the Gemini API to provide AI-based video summarization and transcript-based question answering.
• Processed YouTube transcripts and APIs to power content summarization and interactive Q&A.

RemindMe: Vehicle Service, Insurance and Document Reminder System
Tech stack: React, TypeScript, Tailwind CSS
• Developed an automated reminder platform for car dealerships and vehicle owners covering vehicle service, insurance renewal, and PUC expiry.
• Engineered an in-memory relational database and reminder engine to track service intervals, IDV valuations, and insurance/PUC expiry timelines.
• Integrated simulated SMS and email notification gateways with DLT headers and SMTP relay audit logs for multi-channel communication.
• Built a role-based access control system with an employee/admin operations dashboard and a customer portal for booking service appointments.

EDUCATION
Master of Computer Applications (MCA), KIT's Institute of Management Education & Research (KIT IMER), Kolhapur | 2025 – 2027
Bachelor of Science in Computer Science, Shivraj College, Gadhinglaj | Percentage: 67.71%

STRENGTHS
• Technical Problem Solving: Identifies application issues, analyzes causes, and implements practical solutions.
• Programming Foundation: Hands-on experience in Python, Java, C++, and JavaScript with full-stack development.
• Learning Agility: Keen interest in emerging technologies and continuous technical learning.
• Collaboration: Works well on team tasks, incorporates feedback, and coordinates technical work.
• Execution: Prioritizes tasks and manages time to meet strict deadlines.

ADDITIONAL INFORMATION
Career Focus: Software Development, Full-Stack Development, Data Analytics, Data Processing, API Integration, Emerging Technologies
Availability: Open to technical internship opportunities
      `.trim();
    }

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadInfo = getActiveDownloadInfo();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-preview-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0B1020] border border-white/20 text-slate-100 shadow-2xl flex flex-col">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-[#1E2633] border-b border-white/10 gap-3">
          <div className="flex items-center gap-2">
            <h2 id="resume-preview-title" className="font-heading font-bold text-white text-base">
              Gandharv Sankpale — CV & Resumes
            </h2>
            <span className="text-[11px] font-mono bg-[#C5F467]/15 text-[#C5F467] px-2 py-0.5 rounded-full border border-[#C5F467]/30">
              MCA (2025–2027)
            </span>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={handleCopyText}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
              title="Copy active resume text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#C5F467]" /> : <Copy className="w-3.5 h-3.5 text-slate-300" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <a
              href={downloadInfo.url}
              download={downloadInfo.filename}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#F07836] hover:bg-[#d96728] text-white transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer shadow"
              title={`Download ${downloadInfo.filename}`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
              title="Print active resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-red-500/80 text-white transition-colors cursor-pointer ml-1"
              aria-label="Close CV Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Switcher Tabs */}
        <div className="px-6 py-3 bg-[#161D2A] border-b border-white/10 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('primary')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'primary'
                ? 'bg-[#F07836] text-white shadow'
                : 'bg-[#1E2633] text-slate-300 hover:text-white hover:bg-[#283344] border border-white/5'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Primary Physical CV (Authoritative)</span>
          </button>

          <button
            onClick={() => setActiveTab('analyst')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'analyst'
                ? 'bg-[#5CC8FF] text-slate-900 font-semibold shadow'
                : 'bg-[#1E2633] text-slate-300 hover:text-white hover:bg-[#283344] border border-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Data Analyst Resume</span>
          </button>

          <button
            onClick={() => setActiveTab('intern')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'intern'
                ? 'bg-[#C5F467] text-slate-900 font-semibold shadow'
                : 'bg-[#1E2633] text-slate-300 hover:text-white hover:bg-[#283344] border border-white/5'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Software Intern Resume</span>
          </button>
        </div>

        {/* Tab Notice Banner */}
        <div className="px-6 py-2.5 bg-[#0B1020] border-b border-white/5 text-[11px] font-mono flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5F467]" />
            {activeTab === 'primary' && <span>Authoritative Physical CV — Full-Stack & Engineering Master Reference</span>}
            {activeTab === 'analyst' && <span>Supplementary Resume — Data Handling, Relational Modeling & Transcript Processing Focus</span>}
            {activeTab === 'intern' && <span>Supplementary Resume — Software Development, Flask REST APIs & Full-Stack Focus</span>}
          </div>
          <span className="hidden sm:inline text-slate-400">Source: /public/assets/aistudio/{downloadInfo.filename}</span>
        </div>

        {/* Printable Resume Sheet (Light Mode Paper look for clean readability) */}
        <div className="p-6 sm:p-12 bg-white text-slate-900 font-sans print:p-0 print:m-0 selection:bg-amber-100">
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-heading">
                  GANDHARV SANKPALE
                </h1>
                <p className="text-sm font-semibold text-[#F07836] mt-0.5">
                  Software Developer Intern | Full-Stack Developer | MCA Student
                </p>
                {activeTab === 'analyst' && (
                  <p className="text-xs font-mono text-[#5CC8FF] bg-slate-900 px-2 py-0.5 rounded inline-block mt-1 font-semibold">
                    Focus: Data Handling & Analytical Skills
                  </p>
                )}
                {activeTab === 'intern' && (
                  <p className="text-xs font-mono text-[#C5F467] bg-slate-900 px-2 py-0.5 rounded inline-block mt-1 font-semibold">
                    Focus: Software Development & Full-Stack Workflows
                  </p>
                )}
              </div>

              <div className="text-xs text-slate-600 sm:text-right space-y-0.5 font-mono">
                <div>gandharv9384@gmail.com</div>
                <div>India</div>
                <div className="text-[#C5F467] bg-slate-900 px-2 py-0.5 rounded text-[11px] inline-block font-sans font-medium">
                  Open to Technical Internships
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-200 flex flex-wrap gap-4 text-xs font-mono text-slate-700">
              <a href={PROFILE_DATA.contact.github} target="_blank" rel="noreferrer" className="hover:underline">
                GitHub: github.com/Gandharv84
              </a>
              <span>·</span>
              <a href={PROFILE_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn: linkedin.com/in/gandharv-sankpale
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6 space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono border-b border-slate-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed pt-1">
              {activeTab === 'analyst'
                ? "MCA student and Full-Stack Developer with strong data handling and analytical foundation seeking a technical internship. Hands-on experience building full-stack software and data processing workflows with Python, Flask, React, TypeScript, JavaScript, MongoDB, and MySQL. Skilled in relational data modeling, text and transcript processing via APIs, audit logging, and analytical problem solving."
                : activeTab === 'intern'
                ? "MCA student and Full-Stack Developer seeking a technical internship in software development. Hands-on experience building and maintaining full-stack projects with Python, Flask, React, TypeScript, JavaScript, MongoDB, and MySQL. Skilled in REST API integration, authentication, role-based access control, and admin dashboards. Strong troubleshooting and problem-solving skills, comfortable with GitHub workflows, and committed to delivering tasks on deadline."
                : PROFILE_DATA.summary}
            </p>
          </div>

          {/* Technical Skills & Analytics */}
          <div className="mb-6 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono border-b border-slate-300 pb-1">
              {activeTab === 'analyst' ? "Data Handling, Technical Skills & Analytics" : "Technical Skills"}
            </h2>
            <div className="space-y-1 text-xs text-slate-800 pt-1">
              {activeTab === 'analyst' && (
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200 mb-2 space-y-1">
                  <div className="font-bold text-slate-900 uppercase tracking-wide text-[11px] font-mono text-cyan-800">
                    Data Handling & Analytical Capabilities (Practical Project Applications):
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-700">
                    <div>• <strong>Data Processing:</strong> Ingestion, structuring, and sanitization</div>
                    <div>• <strong>Relational Data Modeling:</strong> Entity associations and integrity</div>
                    <div>• <strong>Text & Transcript Processing:</strong> API extraction & AI prep</div>
                    <div>• <strong>API Data Integration:</strong> REST APIs, Gemini, YouTube APIs</div>
                    <div>• <strong>Audit Logging:</strong> Simulated DLT SMS & SMTP logs</div>
                    <div>• <strong>SQL (MySQL):</strong> Relational schemas & data queries</div>
                    <div>• <strong>NoSQL (MongoDB):</strong> Documents for transcripts & user profiles</div>
                    <div>• <strong>Analytical Problem Solving:</strong> Date intervals & logic design</div>
                  </div>
                </div>
              )}
              <div>
                <strong className="font-semibold text-slate-900">Programming Languages:</strong> Python, Java, C++, JavaScript, TypeScript
              </div>
              <div>
                <strong className="font-semibold text-slate-900">Frontend:</strong> React, HTML5, CSS3, Tailwind CSS
              </div>
              <div>
                <strong className="font-semibold text-slate-900">Backend:</strong> Python, Flask, REST APIs
              </div>
              <div>
                <strong className="font-semibold text-slate-900">Databases:</strong> MongoDB, MySQL
              </div>
              <div>
                <strong className="font-semibold text-slate-900">Tools and Technologies:</strong> Git, GitHub, Gemini API, YouTube API
              </div>
              <div>
                <strong className="font-semibold text-slate-900">Core Skills:</strong> Problem Solving, Troubleshooting, Software Development, Technical Documentation, Team Collaboration, Time Management
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono border-b border-slate-300 pb-1">
              Projects & Engineering Work
            </h2>

            {/* TechTalk Vault */}
            <div className="space-y-1 text-xs text-slate-800">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-slate-900">
                  TechTalk Vault: Full-Stack Technical Learning & Transcript Processing Platform
                </span>
                <span className="font-mono text-[11px] text-slate-600">CV Verified</span>
              </div>
              <div className="text-[11px] font-mono text-emerald-700">
                Tech stack: Python, Flask, MongoDB, HTML5, CSS3, JavaScript, Gemini API, YouTube API
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700 leading-relaxed">
                <li>Automated collection of YouTube transcript data and episode metadata through APIs.</li>
                <li>Processed and cleaned transcript text for reliable readability and model ingestion.</li>
                <li>Organized technical interview content and transcripts in MongoDB document collections.</li>
                <li>Prepared cleaned transcript datasets for AI-based summarization via Google Gemini API.</li>
                <li>Implemented interactive transcript-based question answering strictly grounded in video dialogue.</li>
                <li>Built user authentication, user profiles, and an admin dashboard for content management.</li>
              </ul>
            </div>

            {/* RemindMe */}
            <div className="space-y-1 text-xs text-slate-800">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-slate-900">
                  RemindMe: Vehicle Service, Expiry & Compliance Reminder Engine
                </span>
                <span className="font-mono text-[11px] text-slate-600">CV Verified</span>
              </div>
              <div className="text-[11px] font-mono text-[#F07836]">
                Tech stack: React, TypeScript, Tailwind CSS
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700 leading-relaxed">
                <li>Engineered relational data modeling linking customer profiles, vehicle assets, and compliance timelines.</li>
                <li>Automated tracking of vehicle service intervals, insurance renewals, and PUC expiration dates.</li>
                <li>Integrated IDV valuation tracking to evaluate vehicle market worth for insurance renewals.</li>
                <li>Constructed an automated reminder engine calculating expiry day boundaries and reminder stages.</li>
                <li>Simulated multi-channel notification workflows with telecom DLT template headers and SMTP relay audit logs.</li>
                <li>Implemented role-based access control (RBAC) with an employee/admin operations dashboard and customer appointment booking.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono border-b border-slate-300 pb-1">
              Education
            </h2>
            <div className="space-y-1 text-xs text-slate-800 pt-1">
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-slate-900">Master of Computer Applications (MCA)</strong>, KIT's Institute of Management Education & Research (KIT IMER), Kolhapur
                </div>
                <div className="font-mono text-[11px] text-slate-600 font-semibold">2025 – 2027</div>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-slate-900">Bachelor of Science in Computer Science</strong>, Shivraj College, Gadhinglaj
                </div>
                <div className="font-mono text-[11px] text-slate-600 font-semibold">Percentage: 67.71%</div>
              </div>
            </div>
          </div>

          {/* Strengths */}
          <div className="mb-6 space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono border-b border-slate-300 pb-1">
              Core Strengths
            </h2>
            <ul className="list-disc pl-4 space-y-0.5 text-xs text-slate-700 leading-relaxed pt-1">
              <li><strong className="text-slate-900">Analytical Thinking & Problem Solving:</strong> Identifies application issues, analyzes root causes, and designs practical, structured solutions.</li>
              <li><strong className="text-slate-900">Data & Programming Foundation:</strong> Hands-on experience across Python, Java, C++, JavaScript, TypeScript, MySQL, and MongoDB.</li>
              <li><strong className="text-slate-900">Learning Agility:</strong> Keen interest in emerging technologies, data analytics, software engineering, and continuous technical growth.</li>
              <li><strong className="text-slate-900">Collaboration & Technical Communication:</strong> Works well in teams, incorporates constructive feedback, and coordinates technical tasks.</li>
              <li><strong className="text-slate-900">Task Prioritization & Execution:</strong> Prioritizes engineering deliverables, manages time effectively, and meets strict deadlines.</li>
            </ul>
          </div>

          {/* Additional Information */}
          <div className="pt-3 border-t border-slate-300 text-xs text-slate-700 flex flex-col sm:flex-row justify-between gap-1">
            <div>
              <strong>Career Focus:</strong> Full-Stack Development · AI-Native Development · Data Analytics & Data Processing · Software Engineering
            </div>
            <div>
              <strong>Availability:</strong> Open to technical internship opportunities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

