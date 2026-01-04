import React, { forwardRef } from 'react';
import { FileText } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { RESUME_DATA } from '../data/resume';

export const Experience = forwardRef((props, ref) => {
  return (
    <section id={props.id}ref={ref} className="scroll-mt-20">
      <SectionHeader title="System Logs (Experience)" icon={FileText} />
      <div className="space-y-12 pl-0 md:pl-4 border-l-2 border-gray-800 ml-2 md:ml-0">
        {RESUME_DATA.experience.map((job, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0d1117] border-2 border-green-500 group-hover:bg-green-500 group-hover:shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-all"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-100 group-hover:text-green-400 transition-colors">{job.role}</h3>
                <div className="text-lg text-blue-400 font-mono">{job.company}</div>
              </div>
              <span className="font-mono text-xs text-gray-400 border border-gray-700 px-3 py-1 rounded-full mt-2 sm:mt-0 bg-[#161b22]">{job.period}</span>
            </div>
            
            <div className="bg-[#161b22] rounded-lg border border-gray-800 font-mono text-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
               {/* Log details... */}
               <div className="p-4 space-y-3">
                 {job.logs.map((log, i) => (
                   <div key={i} className="flex gap-3 hover:bg-gray-800/30 -mx-4 px-4 py-1 transition-colors">
                     <span className="text-green-500/50 select-none font-bold">[{new Date().getFullYear()-idx}]</span>
                     <span className="text-gray-300">{log}</span>
                   </div>
                 ))}
               </div>
               {/* Tech stack tags... */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

Experience.displayName = "Experience";