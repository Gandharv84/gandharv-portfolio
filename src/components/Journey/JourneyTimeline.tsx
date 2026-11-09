import React from 'react';
import { Milestone } from '../../types';
import { JOURNEY_MILESTONES } from '../../data/journey';
import { CheckCircle2 } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  const getMilestoneBadge = (type: Milestone['type']) => {
    switch (type) {
      case 'Education':
        return 'text-[#5CC8FF] bg-[#5CC8FF]/10 border-[#5CC8FF]/30';
      case 'Full-Stack Project':
        return 'text-[#F07836] bg-[#F07836]/10 border-[#F07836]/30';
      case 'AI & Web Project':
        return 'text-[#C5F467] bg-[#C5F467]/10 border-[#C5F467]/30';
      case 'AI-Native Exploration':
        return 'text-[#C5F467] bg-[#C5F467]/10 border-[#C5F467]/30';
      case 'Technical Foundation':
        return 'text-[#C47A50] bg-[#C47A50]/10 border-[#C47A50]/30';
    }
  };

  return (
    <section id="journey" className="py-20 lg:py-28 bg-[#0B1020] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-1 bg-[#F07836] rounded-full inline-block" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#F07836] font-mono">
              DEVELOPMENT MILESTONES
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My Development Journey
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9BA7B7] max-w-xl">
            Chronological progression of academic education, full-stack project building, and technical learning.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {JOURNEY_MILESTONES.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0B1020] border-2 border-[#F07836] group-hover:bg-[#F07836] group-hover:scale-125 transition-all duration-200" />

              <div className="p-6 rounded-2xl bg-[#1E2633]/50 border border-white/10 hover:border-white/20 transition-all duration-200 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-[#F07836] font-semibold">
                    {milestone.period}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${getMilestoneBadge(
                      milestone.type
                    )}`}
                  >
                    {milestone.type}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#5CC8FF] transition-colors">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {milestone.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {milestone.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[#9BA7B7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Takeaway */}
                <div className="pt-3 border-t border-white/5 flex items-start gap-2 text-xs text-[#C5F467]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-200">Key Learning: </strong>
                    {milestone.learnings}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
