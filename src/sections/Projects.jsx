import React, { forwardRef } from 'react';
import { Zap, Folder, Award, Github, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { RESUME_DATA } from '../data/resume';

export const Projects = forwardRef((props, ref) => {
  return (
    <section id={props.id} ref={ref} className="scroll-mt-20">
      <SectionHeader title="Executables (Projects)" icon={Zap} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RESUME_DATA.projects.map((project, idx) => (
          <div key={idx} className="border border-gray-800 bg-[#0d1117] p-6 rounded-lg hover:border-green-500/50 transition-all hover:bg-[#161b22] group flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3 text-blue-400">
                <div className="p-2 bg-blue-500/10 rounded">
                  <Folder size={20} />
                </div>
                <span className="font-bold text-lg text-gray-200 group-hover:text-green-400 transition-colors">{project.name}</span>
              </div>
              <div className="flex gap-2">
                {project.award && <Zap size={18} className="text-yellow-500 animate-pulse" />}
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-6 leading-relaxed flex-grow border-l-2 border-gray-700 pl-4">
              {project.desc}
            </p>

            <div className="space-y-4 mt-auto">
               {project.award && (
                <div className="text-xs text-yellow-500/90 bg-yellow-500/5 p-2 rounded border border-yellow-500/20 flex items-center gap-2">
                  <Award size={14} /> {project.award}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.stack.split(', ').map((tech, t) => (
                  <span key={t} className="text-xs font-mono text-gray-500 bg-gray-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-2 border-t border-gray-800">
                <button className="text-xs flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded transition-colors text-white w-full justify-center border border-gray-700">
                  <Github size={14} /> Source Code
                </button>
                <button className="text-xs flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors text-white w-full justify-center shadow-lg shadow-green-900/20">
                  <ExternalLink size={14} /> Live Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
Projects.displayName = 'Projects';