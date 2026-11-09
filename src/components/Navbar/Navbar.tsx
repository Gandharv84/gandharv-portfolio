import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sun, Moon, Palette, Search, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenColorSystem: () => void;
  onOpenSearch: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenColorSystem,
  onOpenSearch,
  theme,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'projects', 'case-studies', 'skills', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1E2633]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-1 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F07836] rounded px-1"
          aria-label="Gandharv Sankpale Portfolio Home"
        >
          <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-slate-100 transition-colors">
            GANDHARV
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#F07836] group-hover:scale-125 transition-transform duration-300" />
        </a>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#1E2633]/70 border border-white/10 backdrop-blur-md"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 relative whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-[#0B1020] shadow-sm font-semibold'
                    : 'text-[#9BA7B7] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#F07836] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-2 lg:gap-3">
          {/* Quick Search trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-lg text-[#9BA7B7] hover:text-white hover:bg-white/10 transition-colors border border-white/5 text-xs flex items-center gap-1.5"
            title="Search portfolio (Ctrl+K)"
            aria-label="Search portfolio"
          >
            <Search className="w-4 h-4" />
            <span className="hidden xl:inline text-[11px] text-slate-400 font-mono bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
              ⌘K
            </span>
          </button>

          {/* Color Palette Showcase Trigger */}
          <button
            onClick={onOpenColorSystem}
            className="p-2 rounded-lg text-[#9BA7B7] hover:text-[#C5F467] hover:bg-white/10 transition-colors border border-white/5"
            title="Explore Spectrum Fusion Design System"
            aria-label="Spectrum Fusion Color System"
          >
            <Palette className="w-4 h-4" />
          </button>

          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-[#9BA7B7] hover:text-[#5CC8FF] hover:bg-white/10 transition-colors border border-white/5"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle visual mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Download Resume Button */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-transparent border border-white/20 hover:border-[#F07836] hover:bg-[#F07836]/10 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F07836]"
          >
            <Download className="w-3.5 h-3.5 text-[#F07836]" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-lg text-[#9BA7B7] hover:text-white"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#F07836]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#1E2633] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-lg text-left ${
                  activeSection === link.id
                    ? 'text-white bg-[#0B1020] border-l-2 border-[#F07836]'
                    : 'text-[#9BA7B7] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#F07836] hover:bg-[#d96728] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <div className="flex items-center justify-between pt-2 px-2 text-xs text-[#9BA7B7]">
              <button
                onClick={onOpenColorSystem}
                className="flex items-center gap-1.5 hover:text-white"
              >
                <Palette className="w-4 h-4 text-[#C5F467]" />
                <span>Spectrum Fusion System</span>
              </button>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-1.5 hover:text-white"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-[#5CC8FF]" /> : <Moon className="w-4 h-4" />}
                <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
