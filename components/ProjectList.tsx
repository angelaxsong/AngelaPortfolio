
import React from 'react';

const PROJECTS = [
  { id: 1, name: 'ALGOLX AI', domain: 'AI Agent Platform · 0→1 Systems', year: '2025', status: 'ACTIVE →' },
  { id: 2, name: 'FIS / ATELIO', domain: 'Enterprise Fintech · Billing Systems', year: '2024', status: 'CLEARED →' },
  { id: 3, name: 'AMAZON ADS', domain: 'Ads Intelligence · Data Systems', year: '2022', status: 'CLEARED →' },
  { id: 4, name: 'DISNEY GENIE', domain: 'Real-Time Experience · Consumer AI UX', year: '2021', status: 'CLEARED →' },
  { id: 5, name: 'DAILYPAY', domain: 'Fintech Startup · 0→1 Products', year: '2019', status: 'CLEARED →' },
];

export const ProjectList: React.FC = () => {
  return (
    <div className="w-full mt-4">
      {/* Header for larger screens */}
      <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-white border-opacity-30 text-[10px] uppercase font-bold tracking-widest opacity-60">
        <div className="col-span-5">Mission</div>
        <div className="col-span-3">System Domain</div>
        <div className="col-span-1">Year</div>
        <div className="col-span-3 text-right">Status</div>
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="project-row grid grid-cols-12 gap-4 py-6 md:py-8 items-center cursor-pointer group hover:bg-white/5 transition-colors border-b border-white/5 md:border-none"
          >
            <div className="col-span-12 md:col-span-5">
              <h2 className="pixel-font text-2xl md:text-3xl uppercase tracking-tight">{project.name}</h2>
            </div>
            <div className="hidden md:block col-span-3 text-sm opacity-80 uppercase font-bold tracking-tight">
              {project.domain}
            </div>
            <div className="hidden md:block col-span-1 text-sm opacity-80 font-bold">
              {project.year}
            </div>
            <div className="col-span-12 md:col-span-3 flex justify-between md:justify-end items-center text-[10px] md:text-sm">
              <span className="md:hidden opacity-60 uppercase font-bold">{project.domain} • {project.year}</span>
              <span 
                className={`pixel-font font-bold transition-opacity ${project.status === 'ACTIVE →' ? 'text-white' : 'opacity-60 group-hover:opacity-100'}`}
              >
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
