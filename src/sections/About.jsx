import React, { forwardRef } from 'react';
import { Code, Mail, Linkedin, Github, Activity, Award } from 'lucide-react';
import { StatCard } from '../components/ui/StatCard';
import { RocketIcon } from '../components/icons/RocketIcon';
import { RESUME_DATA } from '../data/resume';

export const About = forwardRef((props, ref) => {
  const { about } = RESUME_DATA;
  
  return (
    <section id={props.id} ref={ref} className="pt-6 animate-in fade-in duration-700 scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* ID Card */}
        <div className="md:col-span-2 border border-green-500/30 bg-green-500/5 p-6 md:p-10 rounded-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 opacity-50 text-xs text-green-500 font-mono hidden md:block border-b border-l border-green-500/30 rounded-bl">
            STATUS: ONLINE
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-gray-900 rounded-full border-4 border-green-900/50 flex items-center justify-center text-5xl overflow-hidden relative shadow-[0_0_30px_rgba(34,197,94,0.2)]">
              <span className="z-10">👨‍💻</span>
              <div className="absolute inset-0 bg-green-500/10 animate-pulse"></div>
            </div>
            
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-100 mb-2 tracking-tight">{about.name}</h1>
                <h2 className="text-xl text-green-400 font-mono flex items-center justify-center md:justify-start gap-2">
                  <Code size={20} />
                  {about.role}
                </h2>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-2xl border-l-4 border-gray-700 pl-4 italic">
                "{about.mission}"
              </p>
              
              <div className="text-sm text-gray-500 font-mono">
                 <span className="text-blue-400">root@loc:</span> {about.location}
              </div>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
                 <a href="#" className="flex items-center gap-2 bg-[#21262d] hover:bg-green-600 hover:text-white px-4 py-2 rounded text-sm transition-all border border-gray-700 group">
                  <Mail size={16} className="text-blue-400 group-hover:text-white" /> Email
                 </a>
                 <a href="#" className="flex items-center gap-2 bg-[#21262d] hover:bg-[#0077b5] hover:text-white px-4 py-2 rounded text-sm transition-all border border-gray-700 group">
                  <Linkedin size={16} className="text-blue-400 group-hover:text-white" /> LinkedIn
                 </a>
                 <a href="#" className="flex items-center gap-2 bg-[#21262d] hover:bg-gray-100 hover:text-black px-4 py-2 rounded text-sm transition-all border border-gray-700 group">
                  <Github size={16} className="text-blue-400 group-hover:text-black" /> GitHub
                 </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
           <StatCard label="Years Experience" value="3.5+" icon={Activity} />
           <StatCard label="Projects Shipped" value="12" icon={RocketIcon} color="text-blue-400" />
           <StatCard label="Hackathons Won" value="02" icon={Award} color="text-yellow-400" />
        </div>
      </div>
    </section>
  );
});
About.displayName = 'About';