import React, { useState } from 'react';
import { Search, Sparkles, Youtube, Terminal, RefreshCw, CheckCircle2, FileText, Bot } from 'lucide-react';

export const TechTalkSimulator: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const demoItems = [
    {
      title: "System Design Interview: Building Scalable Web Architectures",
      speaker: "Staff Engineer Interview",
      duration: "45 mins",
      youtubeId: "v=arch_demo_01",
      question: "What strategies are recommended for managing database read load?",
      extractedTranscript:
        "...when scaling web backends, the immediate bottleneck is database read contention. Rather than putting everything on the primary write node, we separate reads using replicas and integrate Redis for volatile cache keys. For authentication, validating signed tokens at the reverse proxy layer reduces application server load significantly...",
      geminiSummary:
        "• Database Scaling: Recommended using read replicas to decouple read load from write transactions.\n• Caching Strategy: Implemented memory caching (Redis) for high-frequency queries to reduce database latency.\n• Authentication Layer: Suggested token validation at the API gateway layer to prevent unnecessary server compute.",
      geminiAnswer:
        "According to the transcript, the engineer recommends utilizing database read replicas to distribute query traffic away from the primary write node, paired with an in-memory caching layer for volatile reads.",
    },
    {
      title: "Backend Engineering: REST API Design & Error Handling",
      speaker: "Backend Architect",
      duration: "32 mins",
      youtubeId: "v=rest_api_02",
      question: "How does the speaker structure standard API response codes?",
      extractedTranscript:
        "...consistent status codes make client integrations deterministic. We reserve 200 for OK, 201 for created resources, 400 for validation errors with structured JSON field error arrays, 401 for missing authentication, and 403 for unauthorized role access. Every error payload must follow a predictable JSON schema with a clear error code and message...",
      geminiSummary:
        "• Status Code Standardization: Explicit separation of 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, and 403 Forbidden.\n• Error Schema: Enforcing a standardized JSON error contract with specific field-level validation messages for predictable client error handling.",
      geminiAnswer:
        "The speaker mandates using semantic HTTP status codes (200, 201, 400, 401, 403) and wrapping all error responses in a uniform JSON schema that specifies the exact failing field and error reason.",
    },
  ];

  const current = demoItems[selectedDemo];

  const handleSelectDemo = (idx: number) => {
    setSelectedDemo(idx);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 400);
  };

  return (
    <div className="rounded-3xl bg-[#0B1020] border border-white/10 p-6 sm:p-8 space-y-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#C5F467] animate-pulse" />
            <span className="text-xs font-mono uppercase text-[#C5F467] font-semibold">
              TECHTALK VAULT INTERACTIVE SIMULATOR
            </span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
            Experience Gemini API & YouTube Transcript Processing
          </h3>
          <p className="text-xs sm:text-sm text-[#9BA7B7]">
            Select an interview demo to see how YouTube transcripts are extracted, summarized, and queried using the Gemini API.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-mono">Integration:</span>
          <span className="text-xs font-mono text-[#5CC8FF] bg-[#5CC8FF]/10 px-2.5 py-1 rounded-full border border-[#5CC8FF]/20">
            Gemini API + YouTube API
          </span>
        </div>
      </div>

      {/* Preset Interview Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {demoItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectDemo(idx)}
            className={`p-3.5 rounded-xl text-left text-xs transition-all duration-200 border cursor-pointer ${
              selectedDemo === idx
                ? 'bg-[#1E2633] text-white border-[#C5F467]/60 shadow-md'
                : 'bg-[#161D29]/60 text-slate-300 border-white/5 hover:border-white/20 hover:bg-[#1E2633]'
            }`}
          >
            <div className="flex items-center gap-2 text-[11px] text-[#5CC8FF] font-mono mb-1">
              <Youtube className="w-3.5 h-3.5 text-red-400" />
              <span>{item.speaker} · {item.duration}</span>
            </div>
            <div className="font-heading font-semibold text-white text-xs">{item.title}</div>
          </button>
        ))}
      </div>

      {/* Extracted Transcript Box */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase">
          <span className="flex items-center gap-1.5 text-slate-300">
            <FileText className="w-3.5 h-3.5 text-[#5CC8FF]" />
            Processed YouTube Transcript Segment
          </span>
          <span className="text-[#C5F467]">Extracted via YouTube API</span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#161D29] border border-white/10 text-xs text-slate-300 italic leading-relaxed">
          "{current.extractedTranscript}"
        </div>
      </div>

      {/* Two-Column AI Result: Summarization & Q&A */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Gemini AI Summarization */}
        <div className="p-4 rounded-2xl bg-[#161D29] border border-[#C5F467]/30 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-[#C5F467] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gemini Video Summary</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">gemini-2.5-flash</span>
          </div>

          <div className="text-xs text-slate-200 whitespace-pre-line leading-relaxed font-sans bg-black/30 p-3 rounded-lg border border-white/5">
            {current.geminiSummary}
          </div>
        </div>

        {/* Transcript-based Q&A */}
        <div className="p-4 rounded-2xl bg-[#161D29] border border-[#5CC8FF]/30 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-[#5CC8FF] font-semibold">
              <Bot className="w-3.5 h-3.5" />
              <span>Transcript-Based Q&A</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Interactive Q&A</span>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] text-slate-400">
              <strong className="text-white font-medium">Q:</strong> "{current.question}"
            </div>
            <div className="text-xs text-slate-200 leading-relaxed bg-black/30 p-3 rounded-lg border border-white/5">
              <strong className="text-[#5CC8FF] font-medium block mb-1">Gemini Answer:</strong>
              {current.geminiAnswer}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5">
        <span className="flex items-center gap-1 text-[#C5F467]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Answers grounded directly on extracted video transcript content
        </span>
        <span className="font-mono text-slate-400">TechTalk Vault Architecture</span>
      </div>
    </div>
  );
};
