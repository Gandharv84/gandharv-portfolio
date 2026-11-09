import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Project, ProjectCategory } from '../../types';
import { PROJECTS_DATA } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

interface FeaturedProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onOpenCaseStudy,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | ProjectCategory>('All');

  const filterOptions: ('All' | ProjectCategory)[] = [
    'All',
    'Full-Stack',
    'Frontend',
    'Backend',
  ];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedFilter || p.categoryLabel.includes(selectedFilter));

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F7F5EF] dark:bg-[#0E1528] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-1 bg-[#F07836] rounded-full inline-block" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#F07836] font-mono">
                CV-DOCUMENTED PROJECTS
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#9BA7B7] max-w-xl">
              Verified full-stack applications with in-memory relational architecture, simulated communication gateways, and Gemini API YouTube transcript processing.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-[#1E2633] border border-slate-300/60 dark:border-white/10 self-start md:self-auto">
            {filterOptions.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-[#0B1020] text-slate-900 dark:text-white shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-[#9BA7B7] hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'
                  }`}
                >
                  {filter === 'All' ? 'All Projects' : filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid - 2 columns for the 2 primary documented projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>

        {/* Bottom Banner & Case Study Callout */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1E2633] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
              Interested in the Architectural Decisions?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9BA7B7]">
              Each documented project includes a verified technical breakdown detailing system structures, entity models, and trade-offs.
            </p>
          </div>

          <button
            onClick={() => onOpenCaseStudy(PROJECTS_DATA[0])}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0B1020] dark:bg-[#F07836] hover:bg-[#1E2633] dark:hover:bg-[#d96728] transition-colors shrink-0 cursor-pointer"
          >
            <span>Explore RemindMe Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
