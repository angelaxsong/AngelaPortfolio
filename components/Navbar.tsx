
import React from 'react';

interface NavbarProps {
  onToggleMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleMenu }) => {
  return (
    <nav className="fixed top-0 left-0 w-full px-6 md:px-12 py-8 flex justify-between items-center z-[100] nav-blur border-b border-white/10">
      <div className="flex items-center gap-8">
        <div className="flex flex-col gap-0.5">
          <span className="pixel-font text-xl leading-none">ANGELA SONG</span>
          <span className="text-[7px] tracking-[0.5em] opacity-50 uppercase font-bold">AI Builder</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-2 text-[10px] opacity-40 font-mono">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          <span>AI PRODUCT DESIGNER · CODING GLOBALLY</span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden sm:flex items-center gap-4 text-[10px] font-bold tracking-[0.2em]">
          <a href="mailto:hello@angelaxs.com" className="hover:text-white/60 transition-colors uppercase">Contact</a>
        </div>
        
        <button 
          onClick={onToggleMenu} 
          aria-label="Toggle navigation menu"
          className="group flex items-center gap-3 px-4 py-2 border border-white/20 hover:border-white transition-all bg-white/5"
        >
          <span className="text-[10px] font-bold tracking-[0.3em]">MENU</span>
          <div className="flex flex-col gap-1">
            <div className="w-4 h-[1px] bg-white"></div>
            <div className="w-4 h-[1px] bg-white group-hover:translate-x-1 transition-transform"></div>
          </div>
        </button>
      </div>
    </nav>
  );
};
