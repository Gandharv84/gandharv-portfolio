import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Palette, Download } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

interface FooterProps {
  onOpenColorSystem: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenColorSystem, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0B1020] border-t border-white/10 text-slate-300 py-16 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-1">
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                GANDHARV
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F07836]" />
            </div>

            <p className="text-sm text-[#9BA7B7] max-w-sm leading-relaxed">
              Software Developer Intern | Full-Stack Developer | MCA Student (2025–2027)
            </p>

            <div className="pt-1 text-xs text-slate-400 font-mono">
              KIT's Institute of Management Education & Research (KIT IMER), Kolhapur
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#5CC8FF]">
              Quick Navigation
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={PROFILE_DATA.resumePdfUrl}
                  download="GANDHARV_SANKPALE.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#F07836] hover:underline font-medium inline-flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  <span>Download CV</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenColorSystem}
                  className="text-[#C5F467] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                >
                  <Palette className="w-3 h-3" />
                  <span>Color System</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="md:col-span-3 space-y-4 md:text-right flex flex-col md:items-end justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C5F467] block">
                Connect Directly
              </span>
              <div className="flex items-center md:justify-end gap-3">
                <a
                  href={PROFILE_DATA.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#1E2633] hover:bg-white/10 hover:text-white text-slate-300 transition-colors border border-white/5"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE_DATA.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#1E2633] hover:bg-white/10 hover:text-[#5CC8FF] text-slate-300 transition-colors border border-white/5"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PROFILE_DATA.contact.email}`}
                  className="p-2.5 rounded-xl bg-[#1E2633] hover:bg-white/10 hover:text-[#F07836] text-slate-300 transition-colors border border-white/5"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E2633] hover:bg-[#2c3748] text-xs font-medium text-slate-300 hover:text-white transition-colors border border-white/5 cursor-pointer mt-4"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#F07836]" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Gandharv Sankpale. All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-[#9BA7B7]">
            Full-Stack Developer · MCA Student · India
          </div>
        </div>
      </div>
    </footer>
  );
};
