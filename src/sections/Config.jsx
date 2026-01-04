import React, { forwardRef } from 'react';
import { Settings } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

export const Config = forwardRef((props, ref) => {
  return (
    <section id={props.id} ref={ref} className="scroll-mt-20">
       <div className="bg-[#0d1117] border border-gray-800 rounded-lg overflow-hidden">
         <div className="bg-[#161b22] px-4 py-2 border-b border-gray-800 flex justify-between items-center">
           <span className="text-xs text-gray-500 font-mono flex items-center gap-2">
            <Settings size={12} /> system_config.json
           </span>
           <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
           </div>
         </div>
         <div className="p-4 overflow-x-auto">
           <pre className="text-sm font-mono text-blue-300">
{`{
  "environment": {`}
{Object.entries(RESUME_DATA.system_config).map(([key, val]) => (
  <div key={key} className="pl-4">
    <span className="text-purple-400">"{key}"</span>: <span className="text-yellow-300">"{val}"</span>,
  </div>
))}
{`  }
}`}
           </pre>
         </div>
       </div>
    </section>
  );
});
Config.displayName = 'Config';