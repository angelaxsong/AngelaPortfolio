
import React from 'react';

interface NavbarProps {
  onToggleMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleMenu }) => {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    timeZone: 'Europe/Rome' 
  });

  return (
    <nav className="fixed top-0 left-0 w-full px-6 md:px-12 py-8 flex justify-between items-center z-[100] nav-blur border-b border-white/10">
      <div className="flex items-center gap-8">
        <div className="flex flex-col gap-0.5">
          <span className="pixel-font text-xl leading-none">DVERSO</span>
          <span className="text-[7px] tracking-[0.5em] opacity-50 uppercase font-bold">Studio Portfolio</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-2 text-[10px] opacity-40 font-mono">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          <span>LIVE_FEED // MILAN {timeStr}</span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden sm:flex items-center gap-4 text-[10px] font-bold tracking-[0.2em]">
          <a href="#" className="hover:text-white/60 transition-colors uppercase">Services</a>
          <a href="#" className="hover:text-white/60 transition-colors uppercase">Lab</a>
        </div>
        
        <button 
          onClick={onToggleMenu} 
          className="group flex items-center gap-3 px-4 py-2 border border-white/20 hover:border-white transition-all bg-white/5"
        >
          <span className="text-[10px] font-bold tracking-[0.3em]">INDEX</span>
          <div className="flex flex-col gap-1">
            <div className="w-4 h-[1px] bg-white"></div>
            <div className="w-4 h-[1px] bg-white group-hover:translate-x-1 transition-transform"></div>
          </div>
        </button>
      </div>
    </nav>
  );
};
