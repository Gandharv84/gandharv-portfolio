import React, { useState } from 'react';
import { Code2, Server, Database, Wrench, Layout, CheckCircle, BarChart3, Binary, FileText, Share2, ShieldCheck, Cpu } from 'lucide-react';
import { SKILLS_DATA, DATA_HANDLING_SKILLS } from '../../data/skills';
import { SkillItem } from '../../types';
import { AiNativeSection } from './AiNativeSection';

interface SkillsSectionProps {
  onOpenCaseStudy?: (projectId: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onOpenCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Programming Languages',
    'Data Handling & Analytics',
    'Frontend',
    'Backend',
    'Databases',
    'Tools & Technologies',
    'Core Skills',
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    return selectedCategory === 'All' || skill.category === selectedCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-4 h-4 text-[#F07836]" />;
      case 'Data Handling & Analytics':
        return <BarChart3 className="w-4 h-4 text-[#5CC8FF]" />;
      case 'Frontend':
        return <Layout className="w-4 h-4 text-[#5CC8FF]" />;
      case 'Backend':
        return <Server className="w-4 h-4 text-[#C5F467]" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-[#C47A50]" />;
      case 'Tools & Technologies':
        return <Wrench className="w-4 h-4 text-[#5CC8FF]" />;
      case 'Core Skills':
        return <CheckCircle className="w-4 h-4 text-[#C5F467]" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  const getDataSkillIcon = (name: string) => {
    switch (name) {
      case 'Data Processing':
        return <Binary className="w-4 h-4 text-[#5CC8FF]" />;
      case 'Relational Data Modeling':
        return <Database className="w-4 h-4 text-[#F07836]" />;
      case 'Text & Transcript Processing':
        return <FileText className="w-4 h-4 text-[#C5F467]" />;
      case 'API Data Integration':
        return <Share2 className="w-4 h-4 text-[#5CC8FF]" />;
      case 'Audit Logging':
        return <ShieldCheck className="w-4 h-4 text-[#C47A50]" />;
      case 'SQL (MySQL)':
        return <Database className="w-4 h-4 text-[#5CC8FF]" />;
      case 'NoSQL (MongoDB)':
        return <Database className="w-4 h-4 text-[#C5F467]" />;
      case 'Analytical Problem Solving':
        return <Cpu className="w-4 h-4 text-[#F07836]" />;
      default:
        return <BarChart3 className="w-4 h-4 text-[#5CC8FF]" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#0B1020] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-1 bg-[#5CC8FF] rounded-full inline-block" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#5CC8FF] font-mono">
                TECHNICAL CAPABILITIES & PROFICIENCIES
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills, Tooling & Analytics
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#9BA7B7] max-w-2xl">
              Verified competencies from physical CV and supplementary technical resumes. Representing practical project implementations without inflated claims.
            </p>
          </div>

          <div className="text-xs font-mono text-[#C5F467] bg-[#C5F467]/10 px-3.5 py-1.5 rounded-xl border border-[#C5F467]/20 flex items-center gap-2 self-start md:self-auto">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>CV & Project-Verified Capabilities</span>
          </div>
        </div>

        {/* DEDICATED SUBSECTION: EXPLORING AI-NATIVE DEVELOPMENT */}
        <AiNativeSection onOpenCaseStudy={onOpenCaseStudy} />

        {/* DEDICATED SUBSECTION: DATA HANDLING & ANALYTICAL SKILLS */}
        <div className="rounded-2xl bg-gradient-to-br from-[#1E2633]/90 via-[#161D2A] to-[#0B1020] border border-[#5CC8FF]/30 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5CC8FF]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#5CC8FF]" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                  DATA HANDLING & ANALYTICAL SKILLS
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#9BA7B7] mt-1 max-w-2xl">
                Practical project-related capabilities demonstrated in TechTalk Vault (transcript collection, API pipelines, MongoDB) and RemindMe (relational data modeling, interval calculations, audit logging).
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-[11px] font-mono text-[#5CC8FF] bg-[#5CC8FF]/10 px-3 py-1 rounded-full border border-[#5CC8FF]/25">
              <span>Practical Project-Related Capabilities</span>
            </div>
          </div>

          {/* 8 Practical Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {DATA_HANDLING_SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0B1020]/75 border border-white/10 hover:border-[#5CC8FF]/40 transition-all duration-200 hover:-translate-y-0.5 space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getDataSkillIcon(skill.name)}
                    <span className="font-heading font-semibold text-white text-xs sm:text-sm group-hover:text-[#5CC8FF] transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#9BA7B7] leading-relaxed line-clamp-3">
                  {skill.description}
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Project Application</span>
                  <span className="text-[#5CC8FF]">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters for Full Directory */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h4 className="font-heading text-lg font-bold text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#F07836]" />
              <span>Complete Verified Skillset</span>
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#F07836] text-white shadow-md'
                      : 'bg-[#1E2633] text-slate-300 hover:text-white hover:bg-[#283344] border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="group p-4 rounded-xl bg-[#1E2633]/50 border border-white/10 hover:border-white/25 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(skill.category)}
                      <span className="font-heading font-semibold text-white text-sm">
                        {skill.name}
                      </span>
                    </div>
                  </div>

                  {skill.description && (
                    <p className="text-xs text-[#9BA7B7] leading-relaxed line-clamp-2">
                      {skill.description}
                    </p>
                  )}
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono">{skill.category}</span>
                  <span className="text-[10px] text-[#C5F467] font-mono flex items-center gap-1">
                    <CheckCircle className="w-2.5 h-2.5" />
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

