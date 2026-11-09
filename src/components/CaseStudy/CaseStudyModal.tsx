import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink, Code2, Database, AlertCircle, CheckCircle, ArrowRight, Layers, Cpu, Copy, Check } from 'lucide-react';
import { Project } from '../../types';
import { PROJECTS_DATA } from '../../data/projects';
import { ArchitectureDiagram } from './ArchitectureDiagram';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const { caseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0B1020] border border-white/15 text-slate-100 shadow-2xl flex flex-col">
        {/* Sticky Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#1E2633]/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F07836]">
              ENGINEERING CASE STUDY
            </span>
            <span className="text-slate-500">/</span>
            <span className="text-xs text-[#9BA7B7] hidden sm:inline">{project.categoryLabel}</span>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-[#F07836] text-white transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-12">
          {/* 01. Project Header & Overview */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F07836]/15 border border-[#F07836]/30 text-xs text-[#F07836] font-mono">
              <span>{project.statusLabel}</span>
            </div>

            <h2 id="case-study-title" className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {project.title}
            </h2>

            <p className="text-base sm:text-lg text-[#9BA7B7] leading-relaxed max-w-3xl">
              {project.longDescription}
            </p>

            {/* Quick Tech Pill list */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-[#1E2633] border border-white/10 text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 02. Problem Statement & 03. Proposed Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#1E2633]/60 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-[#F07836]">
                <AlertCircle className="w-5 h-5" />
                <h3 className="font-heading font-bold text-lg text-white">02. Problem Statement</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {caseStudy.problemStatement}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1E2633]/60 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-[#C5F467]">
                <CheckCircle className="w-5 h-5" />
                <h3 className="font-heading font-bold text-white">03. Proposed Solution</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {caseStudy.proposedSolution}
              </p>
            </div>
          </div>

          {/* 04. System Architecture */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#5CC8FF]" />
                <span>04. System Architecture</span>
              </h3>
            </div>
            <p className="text-sm text-slate-300">
              {caseStudy.architecture.summary}
            </p>
            <ArchitectureDiagram projectId={project.id} />
          </div>

          {/* 05. Detailed Tech Stack */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#C5F467]" />
              <span>05. Technology Stack & Rationale</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {caseStudy.techStackDetailed.map((tier, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#1E2633]/50 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[#F07836] font-semibold">{tier.category}</div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {tier.technologies.map((t, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5CC8FF]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 06. Database Design & Schemas */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-[#F07836]" />
              <span>06. Database Design & Entity Modeling</span>
            </h3>
            <p className="text-sm text-[#9BA7B7]">
              Engine: <strong className="text-white font-mono">{caseStudy.databaseDesign.engine}</strong>. {caseStudy.databaseDesign.schemaNotes}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.databaseDesign.keyEntities.map((entity, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#161D29] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#C5F467]">{entity.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">Entity</span>
                  </div>
                  <p className="text-xs text-slate-300">{entity.description}</p>
                  <div className="pt-2 border-t border-white/5">
                    <div className="text-[10px] text-slate-400 font-mono mb-1">Key Fields:</div>
                    <div className="flex flex-wrap gap-1">
                      {entity.fields.map((f, fi) => (
                        <span key={fi} className="text-[10px] font-mono bg-white/5 px-2 py-0.5 rounded text-slate-300">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 07. Implementation Details & Code Excerpts */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[#5CC8FF]" />
              <span>07. Implementation Details</span>
            </h3>

            <div className="space-y-6">
              {caseStudy.implementationDetails.map((impl, idx) => (
                <div key={idx} className="rounded-xl bg-[#161D29] border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#1E2633] border-b border-white/10">
                    <span className="text-xs font-semibold text-white">{impl.title}</span>
                    {impl.codeSnippet && (
                      <button
                        onClick={() => handleCopyCode(impl.codeSnippet!, idx)}
                        className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#C5F467]" />
                            <span className="text-[#C5F467]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Snippet</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                  <div className="p-4 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-300">{impl.description}</p>
                    {impl.codeSnippet && (
                      <pre className="p-3 rounded-lg bg-[#0B1020] text-slate-200 text-xs font-mono overflow-x-auto leading-relaxed border border-white/5">
                        <code>{impl.codeSnippet}</code>
                      </pre>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 08. Development Challenges & 09. Engineering Decisions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#1E2633]/60 border border-white/10 space-y-4">
              <h3 className="font-heading font-bold text-lg text-white">08. Development Challenges</h3>
              <div className="space-y-3">
                {caseStudy.technicalChallenges.map((ch, i) => (
                  <div key={i} className="text-xs space-y-1">
                    <div className="font-semibold text-[#F07836]">⚠ {ch.challenge}</div>
                    <div className="text-slate-300 pl-4 border-l border-white/10">{ch.solution}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#1E2633]/60 border border-white/10 space-y-4">
              <h3 className="font-heading font-bold text-lg text-white">09. Engineering Decisions</h3>
              <div className="space-y-3">
                {caseStudy.engineeringDecisions.map((dec, i) => (
                  <div key={i} className="text-xs space-y-1">
                    <div className="font-semibold text-[#5CC8FF]">✦ {dec.decision}</div>
                    <div className="text-slate-300">{dec.rationale}</div>
                    <div className="text-slate-400 italic text-[11px]">Trade-off: {dec.tradeoff}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 10. Key Learnings & 11. Future Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#1E2633]/40 border border-white/10 space-y-3">
              <h3 className="font-heading font-bold text-white text-base">10. Key Learnings</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {caseStudy.learnings.map((learn, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#C5F467] font-bold">✓</span>
                    <span>{learn}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#1E2633]/40 border border-white/10 space-y-3">
              <h3 className="font-heading font-bold text-white text-base">11. Future Roadmap</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {caseStudy.futureRoadmap.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#5CC8FF]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Between Projects */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous: {prevProject.title}</span>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="flex items-center gap-2 text-xs text-[#F07836] hover:text-white transition-colors font-semibold"
            >
              <span>Next: {nextProject.title}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
