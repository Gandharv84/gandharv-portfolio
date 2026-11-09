import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { GITHUB_CONFIG } from '../../data/github';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-20 lg:py-28 bg-[#0B1020] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-1 bg-[#C5F467] rounded-full inline-block" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#C5F467] font-mono">
                DEVELOPER FOOTPRINT
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              GitHub & Code Repositories
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#9BA7B7] max-w-xl">
              Public repositories illustrating source code organization, commit discipline, and open exploration.
            </p>
          </div>

          <a
            href={GITHUB_CONFIG.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1E2633] hover:bg-[#273244] border border-white/10 transition-colors self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>Visit @{GITHUB_CONFIG.username}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Language Breakdown Strip */}
        <div className="p-6 rounded-2xl bg-[#1E2633]/60 border border-white/10 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="font-mono text-[#5CC8FF] uppercase">Codebase Language Distribution</span>
            <span className="text-slate-400">Public Repositories</span>
          </div>

          {/* Multi-color Bar */}
          <div className="h-3 rounded-full overflow-hidden flex bg-black/40">
            {GITHUB_CONFIG.languages.map((lang, idx) => (
              <div
                key={idx}
                style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                title={`${lang.name}: ${lang.percentage}%`}
                className="h-full transition-all duration-500"
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            {GITHUB_CONFIG.languages.map((lang, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                <span>{lang.name}</span>
                <span className="text-slate-400 font-mono text-[11px]">({lang.percentage}%)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GITHUB_CONFIG.repositories.map((repo, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-[#1E2633]/40 border border-white/10 hover:border-white/20 transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#F07836]" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-heading font-bold text-base text-white hover:text-[#F07836] transition-colors"
                    >
                      {repo.name}
                    </a>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={`External link to ${repo.name}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {repo.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5">
                  {repo.topics.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-[#5CC8FF] border border-white/5"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Metadata */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-[#C5F467]" />
                    {repo.language}
                  </span>
                  <span className="text-[11px] bg-white/5 px-2 py-0.5 rounded text-[#5CC8FF]">
                    Public Repository
                  </span>
                </div>
                <span className="text-[11px] text-[#C5F467]">CV Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
