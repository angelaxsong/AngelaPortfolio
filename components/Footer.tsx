
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 mb-12 flex justify-between items-end w-full uppercase text-[10px] md:text-xs font-bold tracking-widest">
      <div className="flex flex-col gap-1">
        <span className="opacity-80">10+ Years · AI / ML Products</span>
        <span>Enterprise & Consumer Systems</span>
      </div>

      <div className="flex flex-col items-end gap-2 group cursor-pointer">
        <span className="opacity-80">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white rounded-md flex justify-center p-1 group-hover:bg-white transition-all">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce group-hover:bg-[#0047FF]"></div>
        </div>
      </div>
    </footer>
  );
};
