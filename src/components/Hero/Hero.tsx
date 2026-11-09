import React from 'react';
import { ArrowUpRight, Download, Github, Linkedin, Mail, Code, GraduationCap, Zap } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';
import { CodeWindow } from './CodeWindow';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onExploreProjects,
  onContactClick,
}) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#43358B]/20 via-[#007F78]/15 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#F07836]/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Badge */}
        <div className="flex justify-end mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E2633]/80 border border-[#C5F467]/30 text-xs font-medium text-slate-200 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C5F467] animate-pulse shadow-[0_0_8px_#C5F467]" />
            <span>Open to Technical Internships</span>
            <span className="text-slate-400 font-mono">2025–2027</span>
          </div>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Powerhouse */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Kicker */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-4 bg-[#C5F467] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-300 font-heading">
                GANDHARV SANKPALE · MCA STUDENT (2025–2027)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              Building Full-Stack Systems for{' '}
              <span className="block text-gradient-tangerine mt-1">
                Real-World Solutions.
              </span>
            </h1>

            {/* Supporting Headline in Arctic Cyan */}
            <div className="space-y-1.5">
              <p className="font-heading text-lg sm:text-xl font-medium text-[#5CC8FF] tracking-wide">
                {PROFILE_DATA.professionalTitle}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-0.5 text-xs font-mono">
                <span className="text-slate-400">Interests:</span>
                <span className="text-[#F07836] font-semibold">Full-Stack Development</span>
                <span className="text-slate-500">|</span>
                <span className="text-[#C5F467] font-semibold">AI-Native Development</span>
                <span className="text-slate-500">|</span>
                <span className="text-[#5CC8FF] font-semibold">Data Analytics</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#9BA7B7] max-w-xl leading-relaxed">
              MCA student seeking a technical internship. Hands-on experience building and maintaining full-stack projects with Python, Flask, React, TypeScript, JavaScript, MongoDB, and MySQL, with practical Gemini AI integration and automated workflows.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#F07836] hover:bg-[#d96728] shadow-lg shadow-[#F07836]/25 hover:shadow-[#F07836]/40 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F07836]"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={PROFILE_DATA.resumePdfUrl}
                download="GANDHARV_SANKPALE.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#1E2633] border border-white/15 hover:border-white/30 hover:bg-[#253041] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <Download className="w-4 h-4 text-[#F07836]" />
                <span>Download Resume (CV)</span>
              </a>
            </div>

            {/* Verified Social Channels */}
            <div className="flex items-center gap-4 pt-4 text-slate-400 text-sm">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Connect:</span>
              <a
                href={PROFILE_DATA.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors border border-white/5"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_DATA.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors border border-white/5"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#5CC8FF]" />
              </a>
              <button
                onClick={onContactClick}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors border border-white/5 cursor-pointer"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4 text-[#F07836]" />
              </button>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                India · {PROFILE_DATA.contact.email}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Code Editor Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <CodeWindow />
          </div>
        </div>

        {/* Bottom Hero Metric Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1E2633]/40 border border-white/5 backdrop-blur-sm">
            <div className="p-3 rounded-lg bg-[#F07836]/15 text-[#F07836]">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-white tabular-nums">02</div>
              <div className="text-xs text-[#9BA7B7] font-medium">CV-Verified Projects</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1E2633]/40 border border-white/5 backdrop-blur-sm">
            <div className="p-3 rounded-lg bg-[#5CC8FF]/15 text-[#5CC8FF]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-white tabular-nums">2025–2027</div>
              <div className="text-xs text-[#9BA7B7] font-medium">MCA · KIT IMER, Kolhapur</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1E2633]/40 border border-white/5 backdrop-blur-sm">
            <div className="p-3 rounded-lg bg-[#C5F467]/15 text-[#C5F467]">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-white flex items-center gap-1">
                <span>∞</span>
                <span className="text-xs font-normal text-slate-400 ml-1">Learning</span>
              </div>
              <div className="text-xs text-[#9BA7B7] font-medium">Delivering Tasks on Deadline</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
