import React, { useState } from 'react';
import { X, Copy, Check, Palette, Sparkles, Layers } from 'lucide-react';

interface ColorSystemDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ColorSystemDrawer: React.FC<ColorSystemDrawerProps> = ({ isOpen, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const corePalette = [
    { name: "Deep Indigo", hex: "#0B1020", role: "Main Background, Cinematic Hero, Footer", textColor: "#FFFFFF" },
    { name: "Graphite", hex: "#1E2633", role: "Navigation, Dark Cards, Surfaces", textColor: "#FFFFFF" },
    { name: "Tangerine", hex: "#F07836", role: "Primary CTA, Brand Highlights, Active Tabs", textColor: "#FFFFFF" },
    { name: "Electric Lime", hex: "#C5F467", role: "AI Indicators, Active States, Technical Accents", textColor: "#0B1020" },
    { name: "Arctic Cyan", hex: "#5CC8FF", role: "Technical Info, Data Visualization, Highlights", textColor: "#0B1020" },
    { name: "Copper", hex: "#C47A50", role: "Editorial Details, Subtle Gradients, Warm Accents", textColor: "#FFFFFF" },
    { name: "Ivory", hex: "#F7F5EF", role: "Main Light Sections, Editorial Backgrounds", textColor: "#0B1020" },
    { name: "Pure White", hex: "#FFFFFF", role: "Project Cards, Content Surfaces, Readability", textColor: "#0B1020" },
  ];

  const gradients = [
    { name: "Indigo → Tangerine", from: "#43358B", to: "#F07836", usage: "Hero Glows, Brand Highlights" },
    { name: "Teal → Electric Lime", from: "#007F78", to: "#C5F467", usage: "TechTalk Vault, AI Indicators" },
    { name: "Copper → Ivory", from: "#C47A50", to: "#F7F5EF", usage: "Editorial Transitions, MERN Project" },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="spectrum-fusion-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex justify-end animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl min-h-screen bg-[#0B1020] border-l border-white/15 p-6 sm:p-8 space-y-8 text-slate-100 shadow-2xl flex flex-col justify-between">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-[#F07836]/20 text-[#F07836]">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h2 id="spectrum-fusion-title" className="font-heading font-bold text-lg text-white">
                  The RDX Color System
                </h2>
                <p className="text-xs text-slate-400">Spectrum Fusion Signature Tokens</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close Design System Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-[#9BA7B7] leading-relaxed">
            A unique, harmonious blend of Graphite sophistication, Deep Indigo depth, Tangerine energy, Electric Lime innovation, Arctic Cyan technology, and Ivory editorial elegance.
          </p>

          {/* Core Palette Grid */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#5CC8FF] uppercase tracking-wider">
              Core Palette
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {corePalette.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCopy(color.hex)}
                  className="group p-2.5 rounded-xl border border-white/10 bg-[#1E2633] text-left hover:border-white/30 transition-all cursor-pointer relative"
                >
                  <div
                    className="w-full h-12 rounded-lg mb-2 shadow-inner border border-black/20 flex items-end p-1.5 justify-end"
                    style={{ backgroundColor: color.hex }}
                  >
                    {copiedHex === color.hex && (
                      <span className="text-[10px] font-mono bg-black/75 text-[#C5F467] px-1 rounded">
                        Copied!
                      </span>
                    )}
                  </div>
                  <div className="font-heading font-bold text-xs text-white truncate">
                    {color.name}
                  </div>
                  <div className="font-mono text-[11px] text-[#9BA7B7] flex items-center justify-between mt-0.5">
                    <span>{color.hex}</span>
                    <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-[9px] text-slate-400 mt-1 line-clamp-1">{color.role}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Accent Gradients */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C5F467] uppercase tracking-wider">
              Accent Gradients
            </span>
            <div className="space-y-2">
              {gradients.map((grad, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#1E2633] border border-white/10 flex items-center gap-3">
                  <div
                    className="w-16 h-8 rounded-lg shrink-0 border border-white/10"
                    style={{ background: `linear-gradient(135deg, ${grad.from} 0%, ${grad.to} 100%)` }}
                  />
                  <div className="flex-1">
                    <div className="font-heading font-bold text-xs text-white">{grad.name}</div>
                    <div className="text-[11px] text-slate-400">{grad.usage}</div>
                  </div>
                  <div className="font-mono text-[10px] text-[#9BA7B7] hidden sm:block">
                    {grad.from} → {grad.to}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Ratio Visualizer */}
          <div className="p-4 rounded-xl bg-[#1E2633]/60 border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-slate-300">Visual Balance Ratios</span>
              <span className="text-[#F07836] font-mono">100% Spectrum</span>
            </div>

            <div className="h-4 rounded-full overflow-hidden flex border border-white/10">
              <div style={{ width: '40%' }} className="bg-[#0B1020]" title="Deep Indigo: 40%" />
              <div style={{ width: '20%' }} className="bg-[#1E2633]" title="Graphite: 20%" />
              <div style={{ width: '15%' }} className="bg-[#F07836]" title="Tangerine: 15%" />
              <div style={{ width: '10%' }} className="bg-[#C5F467]" title="Lime: 10%" />
              <div style={{ width: '10%' }} className="bg-[#5CC8FF]" title="Cyan: 10%" />
              <div style={{ width: '5%' }} className="bg-[#F7F5EF]" title="Ivory: 5%" />
            </div>

            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400 font-mono pt-1">
              <span>● 40% Deep Indigo</span>
              <span>● 20% Graphite</span>
              <span>● 15% Tangerine</span>
              <span>● 10% Lime</span>
              <span>● 10% Cyan</span>
              <span>● 5% Ivory</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Click any color card to copy HEX token</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
