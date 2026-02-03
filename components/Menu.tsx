
import React from 'react';

interface MenuProps {
  onClose: () => void;
}

export const Menu: React.FC<MenuProps> = ({ onClose }) => {
  const menuItems = [
    { title: 'Work', link: '#' },
    { title: 'Atelier', link: '#' },
    { title: 'About', link: '#' },
    { title: 'Lab', link: '#' },
    { title: 'Contact', link: '#' },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-[#0047FF] flex flex-col p-8 md:p-16">
      <div className="flex justify-between items-center mb-20">
        <h1 className="pixel-font text-3xl uppercase">ANGELA SONG</h1>
        <button onClick={onClose} className="text-sm font-bold tracking-widest border-2 border-white px-4 py-2 hover:bg-white hover:text-[#0047FF] transition-all">
          CLOSE [X]
        </button>
      </div>

      <div className="flex flex-col space-y-4 md:space-y-8">
        {menuItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="pixel-font text-4xl md:text-7xl uppercase hover:translate-x-4 transition-transform inline-block group"
          >
            <span className="mr-4 opacity-30 group-hover:opacity-100">0{index + 1}</span>
            {item.title}
          </a>
        ))}
      </div>

      <div className="mt-auto flex flex-col md:flex-row justify-between pt-12 border-t border-white border-opacity-20 gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-[10px] opacity-60 uppercase tracking-widest font-bold">Connect</span>
          <div className="flex gap-6 text-sm font-bold uppercase underline underline-offset-4 decoration-1">
            <a href="https://instagram.com/angelaxs" target="_blank">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 md:text-right">
          <span className="text-[10px] opacity-60 uppercase tracking-widest font-bold">Inquiries</span>
          <a href="mailto:hello@angelaxs.com" className="text-xl md:text-2xl font-bold lowercase">hello@angelaxs.com</a>
        </div>
      </div>
    </div>
  );
};
