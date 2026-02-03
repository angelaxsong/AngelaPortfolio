
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-end pb-12 relative">
      {/* Technical Data Readout (Top Left) */}
      <div className="absolute top-0 left-0 hidden lg:flex flex-col gap-1 text-[8px] font-mono opacity-40 uppercase tracking-[0.2em]">
        <span>MODEL_CAP: OPTIMIZED</span>
        <span>LATENCY: ULTRA_LOW</span>
        <span>ENV: GLOBAL_OPS</span>
        <span>STEP: INITIALIZING</span>
      </div>

      <div className="flex flex-col gap-0">
        <div className="flex items-center gap-4 opacity-70 mb-8">
          <div className="w-16 h-[1px] bg-white"></div>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">Hands-On Experience</span>
        </div>
        
        <h1 className="pixel-font text-[13vw] leading-[0.8] uppercase tracking-tighter select-none">
          BUILDING AI<br />
          <span className="text-transparent stroke-text">PRODUCT</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-[10px] md:text-xs font-bold leading-relaxed opacity-60 uppercase tracking-[0.2em]">
              I design and build AI-first product systems, combining system thinking, visual design, and vibe coding into real, shipped experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-8">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className="text-[8px] opacity-40 uppercase tracking-widest font-bold mb-1">Scroll Work</span>
                <div className="w-1 h-12 bg-white/20 relative">
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-white animate-[scroll_2s_infinite]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Footer / Pagination */}
      <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6 text-[10px] font-bold tracking-[0.3em]">
          <span className="opacity-100">1</span>
          <span className="opacity-30 hover:opacity-100 cursor-pointer transition-opacity">2</span>
          <span className="opacity-30 hover:opacity-100 cursor-pointer transition-opacity">3</span>
        </div>
        <div className="text-[10px] font-bold opacity-40 uppercase tracking-[0.3em]">
          From model capability to shipped experience.
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};
