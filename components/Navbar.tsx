
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
    timeZone: 'Europe/Rome' 
  });

  return (
    <nav className="flex justify-between items-start w-full uppercase text-xs md:text-sm font-bold tracking-widest z-50">
      <div className="flex flex-col gap-1">
        <span className="opacity-80">DVERSO STUDIO</span>
        <span>{timeStr}, CET - MILAN</span>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
        <h1 className="pixel-font text-2xl md:text-4xl">dverso</h1>
        <div className="flex justify-between text-[6px] tracking-[0.4em] -mt-1 opacity-70">
          <span>S</span><span>T</span><span>U</span><span>D</span><span>I</span><span>O</span>
        </div>
      </div>

      <div className="flex items-center gap-6 md:gap-12">
        <div className="hidden sm:flex items-center group cursor-pointer">
          <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center mr-2 group-hover:bg-white group-hover:text-[#0047FF] transition-all">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <a href="#contact" className="border-b-2 border-white pb-0.5">GET IN TOUCH</a>
        </div>
        <button onClick={onToggleMenu} className="hover:opacity-50 transition-opacity">
          MENU
        </button>
      </div>
    </nav>
  );
};
