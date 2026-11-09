import React, { useState, useEffect } from 'react';
import { Search, X, Code2, BookOpen, Layers, User, Mail, ArrowRight, FileText } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projects';
import { SKILLS_DATA } from '../../data/skills';
import { Project } from '../../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onOpenResume: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onOpenResume,
  onNavigateSection,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS_DATA.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
    p.shortDescription.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSkills = SKILLS_DATA.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.category.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 6);

  const quickNav = [
    { label: "Featured Projects", section: "projects", icon: <Layers className="w-4 h-4 text-[#F07836]" /> },
    { label: "Engineering Case Studies", section: "case-studies", icon: <BookOpen className="w-4 h-4 text-[#5CC8FF]" /> },
    { label: "AI-Native Development", section: "ai-native", icon: <Code2 className="w-4 h-4 text-[#C5F467]" /> },
    { label: "Technical Skills & Tooling", section: "skills", icon: <Code2 className="w-4 h-4 text-[#5CC8FF]" /> },
    { label: "Candidate Profile & Bio", section: "about", icon: <User className="w-4 h-4 text-slate-300" /> },
    { label: "Get in Touch", section: "contact", icon: <Mail className="w-4 h-4 text-[#F07836]" /> },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0B1020] border border-white/15 text-slate-100 shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#1E2633]">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects, skills, technologies (e.g. React, Python, Flask, MongoDB)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {/* Quick Actions */}
          {!query && (
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-2">
                Quick Navigation & Actions
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                <button
                  onClick={() => {
                    onClose();
                    onOpenResume();
                  }}
                  className="p-2.5 rounded-xl hover:bg-[#1E2633] text-left flex items-center justify-between text-xs text-slate-200 transition-colors cursor-pointer border border-transparent hover:border-white/5"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#C5F467]" />
                    <span className="font-semibold text-white">View Candidate CV</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>

                {quickNav.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onClose();
                      onNavigateSection(item.section);
                    }}
                    className="p-2.5 rounded-xl hover:bg-[#1E2633] text-left flex items-center justify-between text-xs text-slate-200 transition-colors cursor-pointer border border-transparent hover:border-white/5"
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Projects */}
          {filteredProjects.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#F07836] uppercase tracking-wider px-2">
                Projects ({filteredProjects.length})
              </span>
              <div className="space-y-1.5">
                {filteredProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onClose();
                      onSelectProject(p);
                    }}
                    className="w-full p-3 rounded-xl bg-[#1E2633]/60 hover:bg-[#1E2633] border border-white/5 hover:border-[#F07836]/40 text-left flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="font-heading font-bold text-sm text-white flex items-center gap-2">
                        <span>{p.title}</span>
                        <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-[#5CC8FF]">
                          {p.category}
                        </span>
                      </div>
                      <p className="text-xs text-[#9BA7B7] line-clamp-1 mt-0.5">
                        {p.shortDescription}
                      </p>
                    </div>
                    <span className="text-xs text-[#F07836] font-mono shrink-0 ml-2">Case Study →</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Skills */}
          {filteredSkills.length > 0 && query && (
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#5CC8FF] uppercase tracking-wider px-2">
                Matching Skills ({filteredSkills.length})
              </span>
              <div className="grid grid-cols-2 gap-2">
                {filteredSkills.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-[#1E2633]/40 border border-white/5 text-xs flex items-center justify-between"
                  >
                    <span className="font-medium text-white">{s.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{s.category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {query && filteredProjects.length === 0 && filteredSkills.length === 0 && (
            <div className="py-8 text-center text-slate-400 text-xs">
              No direct matches found for "{query}". Try searching "React", "Python", "Flask", or "MongoDB".
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#1E2633]/80 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Press ESC to close</span>
          <span>Gandharv Sankpale Portfolio Search</span>
        </div>
      </div>
    </div>
  );
};
