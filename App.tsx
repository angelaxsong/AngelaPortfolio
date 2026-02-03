
import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { Navbar } from './components/Navbar';
import { ProjectList } from './components/ProjectList';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { Hero } from './components/Hero';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleCreated = () => {
    // Reveal the app once core Three.js systems are ready to render
    requestAnimationFrame(() => {
      document.getElementById('root')?.classList.add('loaded');
    });
  };

  return (
    <div className="relative min-h-screen w-full select-none bg-[#0047FF]">
      {/* 3D Background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 35 }} 
          dpr={[1, 2]}
          onCreated={handleCreated}
          gl={{ 
            antialias: true, 
            alpha: false,
            powerPreference: "high-performance",
            stencil: false,
            depth: true
          }}
        >
          <Suspense fallback={null}>
            <Scene mousePos={mousePos} />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="relative z-10 flex flex-col px-6 md:px-12">
        <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
        
        <main className="flex flex-col pt-24">
          <Hero />

          {/* Project Section */}
          <section className="mt-32 pb-32">
            <div className="mb-16 flex items-end justify-between border-b border-white/20 pb-4">
              <h2 className="pixel-font text-5xl md:text-8xl uppercase leading-tight tracking-tighter">
                WORK LOG ↗
              </h2>
              <div className="text-[10px] font-bold opacity-40 uppercase tracking-[0.3em] hidden md:block">
                AI Product Systems · Shipped at Scale
              </div>
            </div>
            <ProjectList />
          </section>
        </main>

        <Footer />
      </div>

      {/* Fullscreen Menu */}
      {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
    </div>
  );
};

export default App;
