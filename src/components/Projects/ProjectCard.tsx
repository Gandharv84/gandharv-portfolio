import React from 'react';
import { ArrowUpRight, Github, ExternalLink, BookOpen, Layers } from 'lucide-react';
import { Project } from '../../types';
import { RemindMeMockup, TechTalkMockup } from './MiniMockups';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
}) => {
  const getAccentBorder = () => {
    switch (project.accentColor) {
      case 'tangerine':
        return 'hover:border-[#F07836] border-slate-200 dark:border-white/10';
      case 'lime':
        return 'hover:border-[#C5F467] border-slate-200 dark:border-white/10';
      case 'cyan':
        return 'hover:border-[#5CC8FF] border-slate-200 dark:border-white/10';
      case 'copper':
        return 'hover:border-[#C47A50] border-slate-200 dark:border-white/10';
      default:
        return 'border-slate-200 dark:border-white/10';
    }
  };

  const getAccentBadge = () => {
    switch (project.accentColor) {
      case 'tangerine':
        return 'bg-[#F07836]/15 text-[#F07836] border-[#F07836]/30';
      case 'lime':
        return 'bg-[#C5F467]/20 text-emerald-800 dark:text-[#C5F467] border-[#C5F467]/40';
      case 'cyan':
        return 'bg-[#5CC8FF]/15 text-sky-800 dark:text-[#5CC8FF] border-[#5CC8FF]/30';
      case 'copper':
        return 'bg-[#C47A50]/15 text-[#C47A50] border-[#C47A50]/30';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300';
    }
  };

  const renderMockup = () => {
    if (project.id === 'remindme') return <RemindMeMockup />;
    if (project.id === 'techtalk-vault') return <TechTalkMockup />;
    return <RemindMeMockup />;
  };

  return (
    <div
      className={`group rounded-2xl bg-white dark:bg-[#1E2633] border transition-all duration-300 hover:shadow-2xl overflow-hidden flex flex-col justify-between p-5 sm:p-6 ${getAccentBorder()}`}
    >
      <div className="space-y-4">
        {/* Mockup Frame */}
        <div className="relative rounded-xl overflow-hidden shadow-sm">
          {renderMockup()}
          <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0B1020]/80 backdrop-blur-md border border-white/10 text-[10px] text-slate-300 font-mono">
            <span>{project.category}</span>
          </div>
        </div>

        {/* Header and Title */}
        <div className="pt-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#F07836] transition-colors">
              {project.title}
            </h3>

            <button
              onClick={() => onOpenCaseStudy(project)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-[#F07836] hover:text-white dark:hover:bg-[#F07836] text-slate-700 dark:text-slate-300 transition-colors"
              title="Open full engineering case study"
              aria-label={`Open case study for ${project.title}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-2 text-sm text-slate-600 dark:text-[#9BA7B7] leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md border ${getAccentBadge()}`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] text-slate-500 dark:text-slate-400 px-1 py-0.5 self-center">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2 text-xs">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200 hover:text-[#F07836] dark:hover:text-[#F07836] transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Detailed Case Study</span>
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              title="View repository on GitHub"
              aria-label={`GitHub repo for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              title="View Live Demo or Technical Specification"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
