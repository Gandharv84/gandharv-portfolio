import React from 'react';
import { Calendar, CheckCircle2, Search, Bot, ShieldCheck, Key, Youtube, Sparkles } from 'lucide-react';

export const RemindMeMockup: React.FC = () => {
  return (
    <div className="w-full h-56 sm:h-64 rounded-xl bg-[#1E2633] border border-white/10 overflow-hidden flex flex-col font-sans text-xs select-none shadow-inner">
      {/* Mini App Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#0B1020] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F07836]" />
          <span className="font-heading font-bold text-white text-xs tracking-tight">RemindMe System</span>
        </div>
        <span className="text-[10px] text-[#C5F467] font-mono flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5F467]" />
          In-Memory Relational Engine
        </span>
      </div>

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Mini Sidebar */}
        <div className="w-24 sm:w-28 bg-[#161C26] p-2 border-r border-white/5 flex flex-col gap-1 shrink-0">
          <div className="px-2 py-1 rounded bg-[#F07836] text-white font-medium text-[11px] truncate">
            Operations
          </div>
          <div className="px-2 py-1 rounded text-slate-400 hover:text-white text-[11px] truncate">
            Service Logs
          </div>
          <div className="px-2 py-1 rounded text-slate-400 hover:text-white text-[11px] truncate">
            PUC & Insurance
          </div>
          <div className="px-2 py-1 rounded text-slate-400 hover:text-white text-[11px] truncate">
            Customer Portal
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 p-3 bg-gradient-to-br from-[#1E2633] to-[#141A24] flex flex-col justify-between overflow-hidden">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold text-xs flex items-center gap-1">
                Vehicle Compliance Dashboard
              </span>
              <span className="text-[10px] text-[#5CC8FF] font-mono">React · TypeScript</span>
            </div>
            <p className="text-[11px] text-[#9BA7B7] mt-0.5">Automated tracking for service intervals & document renewals.</p>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="p-2 rounded-lg bg-[#F07836]/20 border border-[#F07836]/40 text-center">
              <span className="block text-sm font-bold text-[#F07836] font-mono">3</span>
              <span className="text-[10px] text-slate-300">Due Reminders</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
              <span className="block text-sm font-bold text-white font-mono">₹4.8L</span>
              <span className="text-[10px] text-slate-400">IDV Tracked</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
              <span className="block text-sm font-bold text-[#C5F467] font-mono">RBAC</span>
              <span className="text-[10px] text-slate-400">Employee/Admin</span>
            </div>
          </div>

          {/* Simulated Gateway Log strip */}
          <div className="p-2 rounded bg-black/25 border border-white/5 flex items-center justify-between text-[10px] text-slate-300">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#F07836]" />
              Simulated DLT SMS Gateway: DLT_CAR_PUC
            </span>
            <span className="text-[#C5F467] font-mono">Relay Logged</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TechTalkMockup: React.FC = () => {
  return (
    <div className="w-full h-56 sm:h-64 rounded-xl bg-[#0F1D1A] border border-[#007F78]/30 overflow-hidden flex flex-col font-sans text-xs select-none shadow-inner">
      {/* Mini App Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#091512] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C5F467]" />
          <span className="font-heading font-bold text-white text-xs tracking-tight">TechTalk Vault</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/40 border border-white/10 text-[10px] text-slate-300 w-36 truncate">
          <Search className="w-2.5 h-2.5 text-slate-400" />
          <span>Search interview topics...</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-24 sm:w-28 bg-[#0B1513] p-2 border-r border-white/5 flex flex-col gap-1 shrink-0">
          <div className="px-2 py-1 rounded bg-[#007F78]/40 border border-[#007F78]/60 text-[#C5F467] font-medium text-[11px] truncate flex items-center gap-1">
            <Bot className="w-3 h-3" />
            Gemini Q&A
          </div>
          <div className="px-2 py-1 rounded text-slate-400 hover:text-white text-[11px] truncate flex items-center gap-1">
            <Youtube className="w-2.5 h-2.5 text-red-400" />
            Transcripts
          </div>
          <div className="px-2 py-1 rounded text-slate-400 hover:text-white text-[11px] truncate">
            Admin Panel
          </div>
          <div className="px-2 py-1 rounded text-slate-400 hover:text-white text-[11px] truncate">
            User Profile
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 p-3 bg-gradient-to-br from-[#0E1F1C] to-[#081311] flex flex-col justify-between overflow-hidden">
          {/* User Query Bubble */}
          <div className="flex justify-end">
            <div className="bg-[#007F78]/50 border border-[#007F78] px-2.5 py-1 rounded-lg text-white text-[11px]">
              Summarize system design discussion from transcript?
            </div>
          </div>

          {/* Gemini AI Summarization Answer Box */}
          <div className="p-2.5 rounded-lg bg-black/40 border border-[#C5F467]/30 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] text-[#C5F467] font-semibold">
              <Sparkles className="w-3 h-3 text-[#C5F467]" />
              <span>Gemini API Video Summary & Transcript Q&A</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug line-clamp-3">
              "Key Takeaway: The candidate explains scaling database reads using replica nodes, implementing authentication token validation, and structuring REST API contracts."
            </p>
          </div>

          {/* Pipeline badges */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
            <span className="text-[#5CC8FF] font-mono">Python · Flask · MongoDB</span>
            <span className="text-[#C5F467] font-mono">YouTube API Integration</span>
          </div>
        </div>
      </div>
    </div>
  );
};
