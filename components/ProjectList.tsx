
import React from 'react';

const PROJECTS = [
  { id: 1, name: 'JORD Golf', type: 'E-Commerce', year: '2025', url: 'https://jordgolf.com' },
  { id: 2, name: 'BLDBL2', type: 'Creative Lab', year: '2024', url: 'https://bldblz.com' },
  { id: 3, name: 'Dverso', type: 'Metaverse', year: '2023', url: 'https://dverso.io/map' },
  { id: 4, name: 'Milan Lab', type: '3D Editor', year: '2023', url: '#' },
  { id: 5, name: 'Nautilus', type: 'Branding', year: '2022', url: '#' },
];

export const ProjectList: React.FC = () => {
  return (
    <div className="w-full mt-4">
      {/* Header for larger screens */}
      <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-white border-opacity-30 text-[10px] uppercase font-bold tracking-widest opacity-60">
        <div className="col-span-5">Project Name</div>
        <div className="col-span-3">Category</div>
        <div className="col-span-1">Year</div>
        <div className="col-span-3 text-right">Reference</div>
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="project-row grid grid-cols-12 gap-4 py-6 md:py-8 items-center cursor-pointer group"
          >
            <div className="col-span-12 md:col-span-5">
              <h2 className="pixel-font text-2xl md:text-3xl uppercase">{project.name}</h2>
            </div>
            <div className="hidden md:block col-span-3 text-sm opacity-80 uppercase font-bold">
              {project.type}
            </div>
            <div className="hidden md:block col-span-1 text-sm opacity-80 font-bold">
              {project.year}
            </div>
            <div className="col-span-12 md:col-span-3 flex justify-between md:justify-end items-center text-[10px] md:text-xs">
              <span className="md:hidden opacity-60 uppercase font-bold">{project.type} • {project.year}</span>
              <a 
                href={project.url} 
                className="opacity-60 group-hover:opacity-100 underline decoration-1 underline-offset-4 transition-opacity font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.url.replace('https://', '')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
