import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { FeaturedProjects } from './components/Projects/FeaturedProjects';
import { CaseStudySection } from './components/CaseStudy/CaseStudySection';
import { CaseStudyModal } from './components/CaseStudy/CaseStudyModal';
import { SkillsSection } from './components/Skills/SkillsSection';
import { About } from './components/About/About';
import { JourneyTimeline } from './components/Journey/JourneyTimeline';
import { EducationSection } from './components/Education/EducationSection';
import { GitHubSection } from './components/GitHub/GitHubSection';
import { ResumeModal } from './components/Resume/ResumeModal';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/Footer/Footer';
import { ColorSystemDrawer } from './components/DesignSystem/ColorSystemDrawer';
import { CommandPalette } from './components/QuickSearch/CommandPalette';
import { Project } from './types';
import { PROJECTS_DATA } from './data/projects';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [colorSystemOpen, setColorSystemOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Initialize theme
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Handle global keyboard shortcuts (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigateSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1020] text-slate-100 flex flex-col font-sans selection:bg-[#F07836] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenColorSystem={() => setColorSystemOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1">
        {/* 1. Cinematic Dark Hero */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onExploreProjects={() => handleNavigateSection('projects')}
          onContactClick={() => handleNavigateSection('contact')}
        />

        {/* 2. Featured Projects on Signature Ivory Background */}
        <FeaturedProjects
          onOpenCaseStudy={(project) => setSelectedCaseStudy(project)}
        />

        {/* 3. Detailed Case Studies & Interactive RAG Simulator */}
        <CaseStudySection
          onOpenCaseStudy={(project) => setSelectedCaseStudy(project)}
        />

        {/* 4. Technical Skills & Engineering Tooling */}
        <SkillsSection
          onOpenCaseStudy={(projectId) => {
            const found = PROJECTS_DATA.find((p) => p.id === projectId);
            if (found) setSelectedCaseStudy(found);
          }}
        />

        {/* 5. Beyond Writing Code — Professional Identity & Bio */}
        <About />

        {/* 6. My Engineering Journey Timeline */}
        <JourneyTimeline />

        {/* 7. Education & Academic Background */}
        <EducationSection />

        {/* 8. GitHub Repositories & Language Breakdown */}
        <GitHubSection />

        {/* 9. Contact & Recruiter Conversion */}
        <ContactSection />
      </main>

      {/* 10. Distinctive Dark Footer */}
      <Footer
        onOpenColorSystem={() => setColorSystemOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Interactive Overlays & Modals */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectProject={(project) => setSelectedCaseStudy(project)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <ColorSystemDrawer
        isOpen={colorSystemOpen}
        onClose={() => setColorSystemOpen(false)}
      />

      <CommandPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProject={(project) => setSelectedCaseStudy(project)}
        onOpenResume={() => setResumeModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />
    </div>
  );
}
