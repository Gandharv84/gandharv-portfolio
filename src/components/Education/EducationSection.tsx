import React from 'react';
import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/education';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 bg-[#161D2A] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-1 bg-[#5CC8FF] rounded-full inline-block" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#5CC8FF] font-mono">
              CV-DOCUMENTED EDUCATION
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic Background
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9BA7B7] max-w-xl">
            Verified academic qualifications in Computer Science and Software Engineering.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#0B1020] border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5CC8FF]/15 border border-[#5CC8FF]/30 text-xs font-mono text-[#5CC8FF]">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <span className="text-xs font-mono text-[#C5F467] font-semibold">
                    {item.scoreOrStatus}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    {item.degree}
                  </h3>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    {item.institution}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {item.location}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#9BA7B7] leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="text-[11px] font-mono text-[#F07836] uppercase tracking-wider">
                    Key Highlights
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C5F467] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
