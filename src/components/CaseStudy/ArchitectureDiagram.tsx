import React from 'react';
import { Database, Server, Smartphone, Cpu, ArrowRight, ShieldCheck, RefreshCw, FileText, Bot, Youtube, BellRing } from 'lucide-react';

interface ArchitectureDiagramProps {
  projectId: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ projectId }) => {
  if (projectId === 'remindme') {
    return (
      <div className="p-5 rounded-2xl bg-[#0B1020] border border-white/10 text-slate-200">
        <div className="text-xs font-mono text-[#5CC8FF] uppercase tracking-wider mb-4 flex items-center gap-2">
          <Server className="w-4 h-4 text-[#F07836]" />
          <span>System Architecture & Data Flow: RemindMe</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Client Tier */}
          <div className="p-4 rounded-xl bg-[#1E2633] border border-white/10 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-lg bg-[#F07836]/20 flex items-center justify-center text-[#F07836]">
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="font-heading font-bold text-white text-xs">Client & Views</div>
            <p className="text-[11px] text-[#9BA7B7]">React + TypeScript</p>
            <span className="inline-block text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-300">
              Admin Ops & Customer Portal
            </span>
          </div>

          {/* Logic & Engine */}
          <div className="p-4 rounded-xl bg-[#1E2633] border border-white/10 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-lg bg-[#5CC8FF]/20 flex items-center justify-center text-[#5CC8FF]">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div className="font-heading font-bold text-white text-xs">Reminder Engine</div>
            <p className="text-[11px] text-[#9BA7B7]">Intervals & IDV Logic</p>
            <span className="inline-block text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-300">
              Service, PUC & Insurance
            </span>
          </div>

          {/* In-Memory Data Store */}
          <div className="p-4 rounded-xl bg-[#1E2633] border border-[#F07836]/40 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-lg bg-[#F07836]/20 flex items-center justify-center text-[#F07836]">
              <Database className="w-5 h-5" />
            </div>
            <div className="font-heading font-bold text-white text-xs">Data Store</div>
            <p className="text-[11px] text-[#9BA7B7]">In-Memory Relational</p>
            <span className="inline-block text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#C5F467]">
              Customer & Vehicle Relations
            </span>
          </div>

          {/* Communication Gateway */}
          <div className="p-4 rounded-xl bg-[#1E2633] border border-white/10 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-lg bg-[#C5F467]/20 flex items-center justify-center text-[#C5F467]">
              <BellRing className="w-5 h-5" />
            </div>
            <div className="font-heading font-bold text-white text-xs">Simulated Gateways</div>
            <p className="text-[11px] text-[#9BA7B7]">DLT SMS & SMTP Logs</p>
            <span className="inline-block text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-300">
              Audit Trail Verification
            </span>
          </div>
        </div>

        {/* Workflow Note */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-2 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F07836]" />
            Workflow: In-memory reminder engine evaluates expiry dates → Generates simulated DLT SMS & SMTP relay audit logs.
          </span>
          <span className="text-[#C5F467] font-mono">CV Verified</span>
        </div>
      </div>
    );
  }

  // TechTalk Vault Diagram
  return (
    <div className="p-5 rounded-2xl bg-[#091512] border border-[#007F78]/40 text-slate-200">
      <div className="text-xs font-mono text-[#C5F467] uppercase tracking-wider mb-4 flex items-center gap-2">
        <Bot className="w-4 h-4 text-[#C5F467]" />
        <span>Full-Stack Platform Architecture: TechTalk Vault</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        {/* Step 1: Frontend */}
        <div className="p-4 rounded-xl bg-[#0F1E1A] border border-white/10 text-center space-y-2">
          <div className="w-10 h-10 mx-auto rounded-lg bg-[#5CC8FF]/20 flex items-center justify-center text-[#5CC8FF]">
            <Smartphone className="w-5 h-5" />
          </div>
          <div className="font-heading font-bold text-white text-xs">1. Web Frontend</div>
          <p className="text-[11px] text-[#9BA7B7]">HTML5, CSS3, JS</p>
          <span className="inline-block text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-300">
            Auth, Profiles & Admin UI
          </span>
        </div>

        {/* Step 2: Flask API */}
        <div className="p-4 rounded-xl bg-[#0F1E1A] border border-white/10 text-center space-y-2">
          <div className="w-10 h-10 mx-auto rounded-lg bg-[#C5F467]/20 flex items-center justify-center text-[#C5F467]">
            <Server className="w-5 h-5" />
          </div>
          <div className="font-heading font-bold text-white text-xs">2. Backend Server</div>
          <p className="text-[11px] text-[#9BA7B7]">Python + Flask</p>
          <span className="inline-block text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-300">
            REST Routes & Session Auth
          </span>
        </div>

        {/* Step 3: MongoDB */}
        <div className="p-4 rounded-xl bg-[#0F1E1A] border border-[#007F78] text-center space-y-2">
          <div className="w-10 h-10 mx-auto rounded-lg bg-[#F07836]/20 flex items-center justify-center text-[#F07836]">
            <Database className="w-5 h-5" />
          </div>
          <div className="font-heading font-bold text-white text-xs">3. Document Store</div>
          <p className="text-[11px] text-[#9BA7B7]">MongoDB</p>
          <span className="inline-block text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#C5F467]">
            Users & Interview Content
          </span>
        </div>

        {/* Step 4: AI & YouTube APIs */}
        <div className="p-4 rounded-xl bg-[#0F1E1A] border border-white/10 text-center space-y-2">
          <div className="w-10 h-10 mx-auto rounded-lg bg-[#5CC8FF]/20 flex items-center justify-center text-[#5CC8FF]">
            <Bot className="w-5 h-5" />
          </div>
          <div className="font-heading font-bold text-white text-xs">4. AI & Media APIs</div>
          <p className="text-[11px] text-[#9BA7B7]">Gemini & YouTube API</p>
          <span className="inline-block text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#C5F467]">
            Summaries & Transcript Q&A
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-2 text-[11px] text-slate-400">
        <span className="text-slate-300">
          Architecture: Flask backend consumes YouTube transcripts and communicates with Gemini API for automated video takeaways and interactive Q&A.
        </span>
        <span className="text-[#5CC8FF] font-mono">CV Verified</span>
      </div>
    </div>
  );
};
