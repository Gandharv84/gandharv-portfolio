import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  Cpu,
  Terminal,
  Layers,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Code2,
  Workflow,
  Search,
  BookOpen,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { AI_NATIVE_SECTION_CONTENT, AI_EXPLORATION_AREAS } from '../../data/aiNative';

interface AiNativeSectionProps {
  onOpenCaseStudy?: (projectId: string) => void;
}

export const AiNativeSection: React.FC<AiNativeSectionProps> = ({ onOpenCaseStudy }) => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [activeProjectTab, setActiveProjectTab] = useState<'techtalk' | 'remindme'>('techtalk');

  const getAreaIcon = (name: string) => {
    switch (name) {
      case 'AI API Integration':
        return <Zap className="w-4 h-4 text-[#C5F467]" />;
      case 'Gemini API':
        return <Sparkles className="w-4 h-4 text-[#5CC8FF]" />;
      case 'AI-Assisted Development':
        return <Bot className="w-4 h-4 text-[#F07836]" />;
      case 'AI-Powered Application Development':
        return <Layers className="w-4 h-4 text-[#C5F467]" />;
      case 'Prompt Engineering Fundamentals':
        return <Terminal className="w-4 h-4 text-[#5CC8FF]" />;
      case 'LLM Exploration':
        return <Cpu className="w-4 h-4 text-[#C47A50]" />;
      case 'Intelligent Workflow Automation':
        return <Workflow className="w-4 h-4 text-[#C5F467]" />;
      case 'AI-Augmented Software Engineering':
        return <Code2 className="w-4 h-4 text-[#5CC8FF]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#C5F467]" />;
    }
  };

  return (
    <div id="ai-native" className="rounded-3xl bg-gradient-to-br from-[#121829] via-[#0E1424] to-[#0B1020] border border-[#C5F467]/30 p-6 sm:p-10 space-y-10 shadow-2xl relative overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#C5F467]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-[#5CC8FF]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C5F467] animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#C5F467] font-mono">
            {AI_NATIVE_SECTION_CONTENT.subtitle}
          </span>
        </div>

        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
          {AI_NATIVE_SECTION_CONTENT.title}
        </h3>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          "{AI_NATIVE_SECTION_CONTENT.description}"
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono">
          <span className="text-[#5CC8FF] bg-[#5CC8FF]/10 px-3 py-1 rounded-full border border-[#5CC8FF]/20 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Hands-on Gemini API Integration</span>
          </span>
          <span className="text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            Active Workflow Exploration
          </span>
        </div>
      </div>

      {/* 8 Areas of Exploration Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#5CC8FF]" />
            <span>Areas of Exploration & Hands-on Implementation</span>
          </h4>
          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
            Click cards to review project evidence
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {AI_EXPLORATION_AREAS.map((area, idx) => {
            const isImplemented = area.category === 'Hands-on Implemented';
            const isSelected = selectedArea === area.name;

            return (
              <div
                key={idx}
                onClick={() => setSelectedArea(isSelected ? null : area.name)}
                className={`p-4 rounded-xl bg-[#1E2633]/60 border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-[#C5F467] bg-[#1E2633]/90 shadow-lg'
                    : isImplemented
                    ? 'border-white/15 hover:border-[#C5F467]/40 hover:-translate-y-0.5'
                    : 'border-white/10 hover:border-[#5CC8FF]/30 hover:-translate-y-0.5'
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getAreaIcon(area.name)}
                      <span className="font-heading font-semibold text-white text-xs sm:text-sm group-hover:text-[#C5F467] transition-colors">
                        {area.name}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#9BA7B7] leading-relaxed line-clamp-3">
                    {area.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
                  <span
                    className={`px-2 py-0.5 rounded ${
                      isImplemented
                        ? 'text-[#C5F467] bg-[#C5F467]/10 border border-[#C5F467]/20'
                        : 'text-[#5CC8FF] bg-[#5CC8FF]/10 border border-[#5CC8FF]/20'
                    }`}
                  >
                    {area.category}
                  </span>

                  {area.projectEvidence && (
                    <span className="text-slate-400 group-hover:text-slate-200 truncate max-w-[120px]">
                      {area.projectEvidence.split('(')[0].trim()}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Connections: TechTalk Vault & RemindMe */}
      <div className="pt-6 border-t border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Workflow className="w-5 h-5 text-[#5CC8FF]" />
              <span>Connecting AI-Native Development to Verified Projects</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#9BA7B7] mt-0.5">
              Evidence-based implementation in TechTalk Vault and deterministic workflow automation in RemindMe.
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex items-center gap-1.5 bg-[#0B1020] p-1 rounded-xl border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => setActiveProjectTab('techtalk')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeProjectTab === 'techtalk'
                  ? 'bg-[#C5F467] text-slate-950 font-semibold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>TechTalk Vault (AI API)</span>
            </button>
            <button
              onClick={() => setActiveProjectTab('remindme')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeProjectTab === 'remindme'
                  ? 'bg-[#F07836] text-white font-semibold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>RemindMe (Automation)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: TechTalk Vault (AI Integration) */}
        {activeProjectTab === 'techtalk' && (
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0B1020]/80 border border-[#C5F467]/25 space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5F467]" />
                  <span className="text-xs font-mono uppercase text-[#C5F467] font-semibold">
                    Hands-On AI API Integration & Full-Stack Platform
                  </span>
                </div>
                <h5 className="font-heading text-xl font-bold text-white mt-1">
                  TechTalk Vault — Gemini API & YouTube Transcript Processing
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Practical full-stack integration utilizing Google's Gemini API and Python Flask to transform technical podcasts into structured, searchable learning tools.
                </p>
              </div>

              {onOpenCaseStudy && (
                <button
                  onClick={() => onOpenCaseStudy('techtalk-vault')}
                  className="px-3.5 py-1.5 rounded-lg bg-[#C5F467]/15 hover:bg-[#C5F467]/25 text-[#C5F467] border border-[#C5F467]/30 text-xs font-medium transition-colors flex items-center gap-1.5 shrink-0 self-start cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              {AI_NATIVE_SECTION_CONTENT.projectConnections.techtalkVault.points.map((pt, i) => {
                const [title, desc] = pt.split(': ');
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#1E2633]/50 border border-white/5 space-y-1 hover:border-white/15 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5F467] shrink-0" />
                      <span>{title}</span>
                    </div>
                    <p className="text-xs text-[#9BA7B7] pl-5 leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: RemindMe (Software Automation Concepts) */}
        {activeProjectTab === 'remindme' && (
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0B1020]/80 border border-[#F07836]/25 space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F07836]" />
                  <span className="text-xs font-mono uppercase text-[#F07836] font-semibold">
                    Deterministic Software Automation Concepts
                  </span>
                </div>
                <h5 className="font-heading text-xl font-bold text-white mt-1">
                  RemindMe — Automated Workflows & Expiry Engine
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Demonstrating software automation principles through state evaluation engines, interval calculations, and simulated communication channels with complete audit logging.
                </p>
              </div>

              {onOpenCaseStudy && (
                <button
                  onClick={() => onOpenCaseStudy('remindme')}
                  className="px-3.5 py-1.5 rounded-lg bg-[#F07836]/15 hover:bg-[#F07836]/25 text-[#F07836] border border-[#F07836]/30 text-xs font-medium transition-colors flex items-center gap-1.5 shrink-0 self-start cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              {AI_NATIVE_SECTION_CONTENT.projectConnections.remindMe.points.map((pt, i) => {
                const [title, desc] = pt.split(': ');
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#1E2633]/50 border border-white/5 space-y-1 hover:border-white/15 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F07836] shrink-0" />
                      <span>{title}</span>
                    </div>
                    <p className="text-xs text-[#9BA7B7] pl-5 leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#5CC8FF] shrink-0" />
              <span>{AI_NATIVE_SECTION_CONTENT.projectConnections.remindMe.disclaimer}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
