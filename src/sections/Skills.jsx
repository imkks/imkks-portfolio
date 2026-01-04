import React, { forwardRef } from 'react';
import { Cpu, Hash } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { RESUME_DATA } from '../data/resume';

export const Skills = forwardRef((props, ref) => {
  return (
    <section id={props.id} ref={ref} className="scroll-mt-20">
      <SectionHeader title="Loaded Modules (Skills)" icon={Cpu} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(RESUME_DATA.skills).map(([category, skills]) => (
          <div key={category} className="bg-[#161b22] border border-gray-800 p-5 rounded relative overflow-hidden hover:border-blue-500/30 transition-colors">
            <div className="absolute -right-4 -bottom-4 text-gray-800/50 rotate-12">
               <Hash size={60} />
            </div>
            <h3 className="text-blue-400 uppercase text-xs font-bold tracking-widest mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              {category.replace('_', ' ')}
            </h3>
            <ul className="space-y-2 relative z-10">
              {skills.map(skill => (
                <li key={skill} className="flex items-center gap-2 text-sm text-gray-300 font-mono group">
                  <span className="text-gray-600 group-hover:text-green-500 transition-colors">➜</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
});
Skills.displayName = 'Skills';