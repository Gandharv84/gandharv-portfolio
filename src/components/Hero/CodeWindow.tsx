import React, { useState } from 'react';
import { Copy, Check, Play, Terminal } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const CodeWindow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'mindset' | 'stack'>('profile');
  const [copied, setCopied] = useState(false);
  const [outputMessage, setOutputMessage] = useState<string | null>(null);

  const codeSnippets = {
    profile: `1  const developer = {
2    name: "Gandharv Sankpale",
3    role: "Software Developer Intern",
4    interests: ["Full-Stack", "AI-Native", "Data Analytics"],
5    education: "MCA (KIT IMER Kolhapur, 2025–2027)",
6    status: "Open to Technical Internships",
7  };`,
    mindset: `1  const strengths = {
2    problemSolving: "Identifies issues & implements practical solutions",
3    programming: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
4    workstyle: "Comfortable with GitHub workflows & strict deadlines",
5  };`,
    stack: `1  const verifiedStack = {
2    frontend: ["React", "HTML5", "CSS3", "Tailwind CSS"],
3    backend: ["Python", "Flask", "REST APIs"],
4    databases: ["MongoDB", "MySQL"],
5    dataHandling: ["Data Processing", "Relational Modeling", "Audit Logs"],
6    tools: ["Git", "GitHub", "Gemini API", "YouTube API"],
7  };`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setOutputMessage("Running verification: Candidate Gandharv Sankpale initialized. Profile: Full-Stack Developer. Status: Ready for Technical Internships.");
    setTimeout(() => {
      setOutputMessage(null);
    }, 4500);
  };

  return (
    <div className="relative group w-full max-w-xl mx-auto">
      {/* Glow aura */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#43358B]/50 via-[#5CC8FF]/30 to-[#C5F467]/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Code Editor Frame */}
      <div className="rounded-2xl bg-[#0B1020]/90 border border-white/15 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1E2633]/80 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block" />
            <span className="ml-2 text-[11px] font-medium text-slate-400">gandharv-profile.ts</span>
          </div>

          {/* Editor Tabs */}
          <div className="hidden sm:flex items-center gap-1">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                activeTab === 'profile'
                  ? 'bg-[#0B1020] text-[#5CC8FF] border border-white/10'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              profile.ts
            </button>
            <button
              onClick={() => setActiveTab('mindset')}
              className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                activeTab === 'mindset'
                  ? 'bg-[#0B1020] text-[#C5F467] border border-white/10'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              strengths.ts
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                activeTab === 'stack'
                  ? 'bg-[#0B1020] text-[#F07836] border border-white/10'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              stack.json
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRun}
              className="p-1.5 rounded hover:bg-white/10 text-[#C5F467] transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
              title="Run code verification"
              aria-label="Run Code"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span className="hidden md:inline">Run</span>
            </button>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Copy code"
              aria-label="Copy Code"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#C5F467]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Code Content Area */}
        <div className="p-4 sm:p-6 overflow-x-auto text-slate-200 leading-relaxed font-code select-text">
          {activeTab === 'profile' && (
            <pre className="text-slate-200">
              <span className="text-slate-500 mr-3 select-none">1</span>
              <span className="text-[#F07836] font-semibold">const </span>
              <span className="text-[#5CC8FF] font-bold">developer</span>
              <span className="text-white"> = &#123;</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">2</span>
              <span className="text-[#C47A50] italic">  name</span>
              <span className="text-white">: </span>
              <span className="text-[#C5F467]">"Gandharv Sankpale"</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">3</span>
              <span className="text-[#C47A50] italic">  role</span>
              <span className="text-white">: </span>
              <span className="text-[#5CC8FF]">"Software Developer Intern"</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">4</span>
              <span className="text-[#C47A50] italic">  interests</span>
              <span className="text-white">: [</span>
              <span className="text-[#F07836]">"Full-Stack"</span>
              <span className="text-white">, </span>
              <span className="text-[#C5F467]">"AI-Native"</span>
              <span className="text-white">, </span>
              <span className="text-[#5CC8FF]">"Data Analytics"</span>
              <span className="text-white">],</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">5</span>
              <span className="text-[#C47A50] italic">  education</span>
              <span className="text-white">: </span>
              <span className="text-[#5CC8FF]">"MCA (KIT IMER, 2025–2027)"</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">6</span>
              <span className="text-[#C47A50] italic">  status</span>
              <span className="text-white">: </span>
              <span className="text-[#C5F467]">"Open to Technical Internships"</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">7</span>
              <span className="text-white">&#125;;</span>
            </pre>
          )}

          {activeTab === 'mindset' && (
            <pre className="text-slate-200">
              <span className="text-slate-500 mr-3 select-none">1</span>
              <span className="text-[#F07836]">const </span>
              <span className="text-[#5CC8FF]">strengths</span>
              <span className="text-white"> = &#123;</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">2</span>
              <span className="text-[#C47A50] italic">  problemSolving</span>
              <span className="text-white">: </span>
              <span className="text-[#C5F467]">"Identifies issues & implements solutions"</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">3</span>
              <span className="text-[#C47A50] italic">  programming</span>
              <span className="text-white">: [</span>
              <span className="text-[#5CC8FF]">"Python"</span>
              <span className="text-white">, </span>
              <span className="text-[#5CC8FF]">"Java"</span>
              <span className="text-white">, </span>
              <span className="text-[#5CC8FF]">"C++"</span>
              <span className="text-white">, </span>
              <span className="text-[#5CC8FF]">"JavaScript"</span>
              <span className="text-white">, </span>
              <span className="text-[#5CC8FF]">"TypeScript"</span>
              <span className="text-white">],</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">4</span>
              <span className="text-[#C47A50] italic">  delivery</span>
              <span className="text-white">: </span>
              <span className="text-[#C5F467]">"Committed to delivering tasks on deadline"</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">5</span>
              <span className="text-white">&#125;;</span>
            </pre>
          )}

          {activeTab === 'stack' && (
            <pre className="text-slate-200">
              <span className="text-slate-500 mr-3 select-none">1</span>
              <span className="text-[#F07836]">const </span>
              <span className="text-[#5CC8FF]">verifiedStack</span>
              <span className="text-white"> = &#123;</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">2</span>
              <span className="text-[#C47A50] italic">  frontend</span>
              <span className="text-white">: </span>
              <span className="text-[#C5F467]">["React", "HTML5", "CSS3", "Tailwind CSS"]</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">3</span>
              <span className="text-[#C47A50] italic">  backend</span>
              <span className="text-white">: </span>
              <span className="text-[#5CC8FF]">["Python", "Flask", "REST APIs"]</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">4</span>
              <span className="text-[#C47A50] italic">  databases</span>
              <span className="text-white">: </span>
              <span className="text-[#C5F467]">["MongoDB", "MySQL"]</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">5</span>
              <span className="text-[#C47A50] italic">  dataHandling</span>
              <span className="text-white">: </span>
              <span className="text-[#5CC8FF]">["Data Processing", "Relational Modeling", "Audit Logs"]</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">6</span>
              <span className="text-[#C47A50] italic">  tools</span>
              <span className="text-white">: </span>
              <span className="text-[#5CC8FF]">["Git", "GitHub", "Gemini API", "YouTube API"]</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-slate-500 mr-3 select-none">7</span>
              <span className="text-white">&#125;;</span>
            </pre>
          )}

          {/* Interactive execution output box */}
          {outputMessage && (
            <div className="mt-4 pt-3 border-t border-white/10 flex items-start gap-2 text-xs text-[#C5F467] animate-in fade-in duration-300">
              <Terminal className="w-4 h-4 shrink-0 mt-0.5 text-[#5CC8FF]" />
              <span>{outputMessage}</span>
            </div>
          )}
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#1E2633]/60 border-t border-white/5 text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5F467]" />
              Python & React
            </span>
            <span className="hidden sm:inline">UTF-8</span>
          </div>
          <span className="text-[#5CC8FF]">MCA 2025–2027</span>
        </div>
      </div>
    </div>
  );
};
