
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
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full select-none bg-[#0047FF]">
      {/* 3D Background layer - stays fixed or scrolls slightly */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 40 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <Scene mousePos={mousePos} />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="relative z-10 flex flex-col px-6 md:px-12 py-8">
        <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
        
        <main className="flex flex-col">
          {/* New Hero Section occupying large screen real estate */}
          <Hero />

          {/* Project Section */}
          <section className="mt-20 md:mt-32 pb-20">
            <div className="mb-12">
              <h2 className="pixel-font text-4xl md:text-7xl uppercase leading-tight tracking-tighter">
                Latest Projects <span className="inline-block transform rotate-45">↓</span>
              </h2>
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
