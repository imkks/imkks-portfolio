import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';
import { BootScreen } from './components/BootScreen';
import { NavButton } from './components/ui/NavButton';
import { useUptime } from './hooks/useUptime';

// Sections
import { About } from './sections/About';
import { Config } from './sections/Config';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Patches } from './sections/Patches';
import { Footer } from './sections/Footer';

export default function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const { formattedUptime } = useUptime();

  // Scroll References
  const sections = {
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    // We don't usually highlight config/patches in nav, but if you want to, add refs here
  };

  const scrollTo = (key) => {
    sections[key].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(key);
  };

  // --- ⚡️ NEW: SCROLL SPY LOGIC ---
  useEffect(() => {
    if (isBooting) return;

    const observerOptions = {
      root: null,
      // margin: top right bottom left
      // This creates a "detection zone" in the middle of the screen
      // It ignores the top 10% and bottom 40% of the screen
      rootMargin: '-10% 0px -40% 0px', 
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update state to the ID of the visible section
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections defined in our refs
    Object.keys(sections).forEach((key) => {
      const element = sections[key].current;
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isBooting]); 
  // --------------------------------

  if (isBooting) {
    return <BootScreen onComplete={() => setIsBooting(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-mono relative selection:bg-green-500/30">
      
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20"></div>

      <div className="sticky top-0 z-40 bg-[#161b22]/90 backdrop-blur-sm border-b border-gray-800 flex items-center justify-between px-4 h-14 shadow-lg">
        <div className="flex items-center gap-2 text-green-500 font-bold">
          <Terminal size={18} />
          <span className="hidden md:inline">krishna@portfolio:~</span>
          <span className="md:hidden">~</span>
        </div>
        <div className="flex gap-1 overflow-x-auto no-scrollbar mask-gradient">
          <NavButton label="01_IDE" active={activeSection === 'about'} onClick={() => scrollTo('about')} />
          <NavButton label="02_LOGS" active={activeSection === 'experience'} onClick={() => scrollTo('experience')} />
          <NavButton label="03_EXE" active={activeSection === 'projects'} onClick={() => scrollTo('projects')} />
          <NavButton label="04_MODS" active={activeSection === 'skills'} onClick={() => scrollTo('skills')} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-12">
        {/* IMPORTANT: PASS 'id' PROP MATCHING THE KEY NAME */}
        <About id="about" ref={sections.about} />
        <Config />
        <Experience id="experience" ref={sections.experience} />
        <Projects id="projects" ref={sections.projects} />
        <Patches />
        <Skills id="skills" ref={sections.skills} />
        
        <Footer uptime={formattedUptime} />
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#161b22] border-t border-gray-800 p-2 flex justify-between px-4 text-xs font-mono text-gray-500 z-50">
        <span>UPTIME: {formattedUptime}</span>
        <span className="text-green-500">ONLINE</span>
      </div>
    </div>
  );
}