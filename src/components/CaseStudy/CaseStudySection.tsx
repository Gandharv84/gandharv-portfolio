import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { PROJECTS_DATA } from '../../data/projects';
import { TechTalkSimulator } from './TechTalkSimulator';

interface CaseStudySectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onOpenCaseStudy }) => {
  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-[#161D2A] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-1 bg-[#5CC8FF] rounded-full inline-block" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#5CC8FF] font-mono">
                ENGINEERING DEEP DIVES
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Detailed Project Case Studies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#9BA7B7] max-w-xl">
              Architectural breakdowns documenting problem statements, implementation details, database modeling, and engineering trade-offs.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400">
            2 CV-Documented Project Case Studies
          </div>
        </div>

        {/* 2 Case Study Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#0B1020] border border-white/10 hover:border-white/20 transition-all duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#F07836] bg-[#F07836]/10 px-2.5 py-1 rounded-full border border-[#F07836]/20">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Verified Case Study</span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9BA7B7] leading-relaxed line-clamp-3">
                  {project.caseStudy.overview}
                </p>

                <div className="space-y-1.5 pt-2 text-xs text-slate-300">
                  <div className="text-[11px] font-mono text-[#5CC8FF] uppercase">Architecture Focus:</div>
                  <div className="text-[11px] text-slate-400 line-clamp-2">
                    {project.caseStudy.architecture.summary}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenCaseStudy(project)}
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-[#1E2633] hover:bg-[#F07836] transition-colors flex items-center justify-center gap-2 cursor-pointer border border-white/5"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive TechTalk Vault Simulator Widget */}
        <TechTalkSimulator />
      </div>
    </section>
  );
};
