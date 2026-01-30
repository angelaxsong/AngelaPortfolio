
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-end pb-12">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4 opacity-70 mb-4">
          <div className="w-12 h-[1px] bg-white"></div>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Creative Tech Studio</span>
        </div>
        
        <h1 className="pixel-font text-[12vw] leading-[0.85] uppercase tracking-tighter">
          Crafting<br />
          Digital<br />
          <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>Realities</span>
        </h1>

        <div className="mt-8 max-w-md">
          <p className="text-xs md:text-sm font-medium leading-relaxed opacity-80 uppercase tracking-widest">
            We merge high-end 3D graphics with cutting edge web technology to create unforgettable interactive experiences.
          </p>
        </div>
      </div>
      
      <div className="mt-16 flex items-center gap-8">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border border-white bg-white/10 backdrop-blur-sm flex items-center justify-center text-[10px]">
              {i}
            </div>
          ))}
        </div>
        <span className="text-[10px] font-bold opacity-60 uppercase tracking-[0.2em]">Trusted by worldwide brands</span>
      </div>
    </section>
  );
};
