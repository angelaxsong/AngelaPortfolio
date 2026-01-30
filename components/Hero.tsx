
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-end pb-24 relative">
      {/* Technical Data Readout (Top Left) */}
      <div className="absolute top-0 left-0 hidden lg:flex flex-col gap-1 text-[8px] font-mono opacity-40 uppercase tracking-[0.2em]">
        <span>SYS.STATUS: OPTIMAL</span>
        <span>LATENCY: 12MS</span>
        <span>GFX_ENGINE: THREE_JS_V182</span>
        <span>LOC: 45.4642° N, 9.1900° E</span>
      </div>

      <div className="flex flex-col gap-0">
        <div className="flex items-center gap-4 opacity-70 mb-8">
          <div className="w-16 h-[1px] bg-white"></div>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">Creative Tech Studio</span>
        </div>
        
        <h1 className="pixel-font text-[13vw] leading-[0.8] uppercase tracking-tighter select-none">
          DVERSO<br />
          <span className="text-transparent stroke-text">STUDIO</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-md">
            <p className="text-[10px] md:text-xs font-bold leading-relaxed opacity-60 uppercase tracking-[0.2em]">
              Architecting the next generation of interactive web experiences through high-performance 3D graphics and unconventional design.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[8px] opacity-40 uppercase tracking-widest font-bold mb-1">Scroll to explore</span>
              <div className="w-1 h-12 bg-white/20 relative">
                <div className="absolute top-0 left-0 w-full h-1/3 bg-white animate-[scroll_2s_infinite]"></div>
              </div>
            </div>
          </div>
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
