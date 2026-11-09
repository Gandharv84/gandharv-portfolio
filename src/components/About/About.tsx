import React from 'react';
import { User, MapPin, GraduationCap, Briefcase, Target, CheckCircle2, ShieldAlert } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#161D2A] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-1 bg-[#C5F467] rounded-full inline-block" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C5F467] font-mono">
              PROFESSIONAL IDENTITY & STRENGTHS
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Gandharv Sankpale
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9BA7B7] max-w-xl">
            MCA student and Full-Stack Developer seeking a technical internship in software development.
          </p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: CV Professional Summary & Verified Strengths */}
          <div className="lg:col-span-7 space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="p-6 rounded-2xl bg-[#0B1020]/70 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#F07836] font-semibold tracking-wider">
                  CV Professional Summary
                </span>
                <span className="text-[11px] font-mono text-[#C5F467] bg-[#C5F467]/10 px-2.5 py-0.5 rounded-full border border-[#C5F467]/20">
                  Full-Stack · AI-Native · Data Analytics
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                {PROFILE_DATA.summary}
              </p>
            </div>

            {/* Three Interconnected Development Interests */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-lg">
                  <span className="w-2 h-2 rounded-full bg-[#5CC8FF]" />
                  <span>Three Interconnected Development Pillars</span>
                </div>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  Complementary Engineering Focus
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {PROFILE_DATA.primaryInterests.map((interest, idx) => {
                  const borderClass =
                    interest.accentColor === 'tangerine'
                      ? 'border-[#F07836]/30 hover:border-[#F07836]'
                      : interest.accentColor === 'lime'
                      ? 'border-[#C5F467]/30 hover:border-[#C5F467]'
                      : 'border-[#5CC8FF]/30 hover:border-[#5CC8FF]';

                  const badgeColor =
                    interest.accentColor === 'tangerine'
                      ? 'text-[#F07836] bg-[#F07836]/10'
                      : interest.accentColor === 'lime'
                      ? 'text-[#C5F467] bg-[#C5F467]/10'
                      : 'text-[#5CC8FF] bg-[#5CC8FF]/10';

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl bg-[#0B1020]/80 border ${borderClass} transition-all duration-200 space-y-2 flex flex-col justify-between`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${badgeColor} font-semibold`}>
                            {interest.tag}
                          </span>
                        </div>
                        <h4 className="font-heading font-bold text-white text-sm">
                          {interest.title}
                        </h4>
                        <p className="text-xs text-[#9BA7B7] leading-relaxed">
                          {interest.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/5 text-[11px] text-slate-300 leading-snug font-sans">
                        <strong className="text-slate-200">Role in Stack: </strong>
                        {interest.connection}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Verified Strengths Section (Direct from CV) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-heading font-bold text-lg">
                <span className="w-2 h-2 rounded-full bg-[#C5F467]" />
                <span>Core Engineering Strengths</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PROFILE_DATA.strengths.map((strength, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0B1020]/60 border border-white/5 space-y-1.5 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-white font-heading font-semibold text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#C5F467] shrink-0" />
                      <span>{strength.title}</span>
                    </div>
                    <p className="text-xs text-[#9BA7B7] pl-6 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Professional Information Panel */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0B1020] border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-[#F07836] uppercase tracking-wider">
                VERIFIED CREDENTIALS
              </span>
              <h3 className="font-heading text-xl font-bold text-white mt-1">
                Candidate Profile
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-[#5CC8FF] shrink-0 mt-1" />
                <div>
                  <div className="text-slate-400 font-mono text-[11px]">Postgraduate Degree</div>
                  <div className="text-white font-medium">Master of Computer Applications (MCA)</div>
                  <div className="text-slate-400 text-xs">KIT IMER, Kolhapur (2025–2027)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-[#C47A50] shrink-0 mt-1" />
                <div>
                  <div className="text-slate-400 font-mono text-[11px]">Undergraduate Degree</div>
                  <div className="text-white font-medium">B.Sc. in Computer Science (67.71%)</div>
                  <div className="text-slate-400 text-xs">Shivraj College, Gadhinglaj</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F07836] shrink-0 mt-1" />
                <div>
                  <div className="text-slate-400 font-mono text-[11px]">Location</div>
                  <div className="text-white font-medium">{PROFILE_DATA.location}</div>
                  <div className="text-slate-400 text-xs">Open to Technical Internships</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="w-4 h-4 text-[#C5F467] shrink-0 mt-1" />
                <div>
                  <div className="text-slate-400 font-mono text-[11px]">Availability Status</div>
                  <div className="text-[#C5F467] font-medium">{PROFILE_DATA.availability}</div>
                  <div className="text-slate-400 text-xs">Software Developer Intern / Full-Stack</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="w-4 h-4 text-[#5CC8FF] shrink-0 mt-1" />
                <div className="space-y-2 w-full">
                  <div className="text-slate-400 font-mono text-[11px]">Career Focus & Interests</div>
                  <div className="flex flex-wrap gap-1.5">
                    {PROFILE_DATA.careerFocus.map((focus, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#1E2633] border border-white/10 text-white font-medium text-[11px] leading-tight"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Downloads & Multi-CV Access */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Verified Resume Documents
              </span>
              <a
                href={PROFILE_DATA.resumePdfUrl}
                download="GANDHARV_SANKPALE.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#F07836] hover:bg-[#d96728] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <span>Download Primary CV (GANDHARV SANKPALE.pdf)</span>
              </a>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="/assets/aistudio/Data_Analyst_Resume_a8c6d34a.pdf"
                  download="Data_Analyst_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 rounded-lg bg-[#1E2633] hover:bg-[#283344] text-[#5CC8FF] text-[11px] font-medium border border-white/10 text-center transition-colors truncate"
                  title="Download Data Analyst Resume PDF"
                >
                  Data Analyst PDF
                </a>
                <a
                  href="/assets/aistudio/Software_intern_Resume_2c232f0e.pdf"
                  download="Software_intern_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 rounded-lg bg-[#1E2633] hover:bg-[#283344] text-[#C5F467] text-[11px] font-medium border border-white/10 text-center transition-colors truncate"
                  title="Download Software Intern Resume PDF"
                >
                  Software Intern PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
