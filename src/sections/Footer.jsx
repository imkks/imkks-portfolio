import React, { forwardRef } from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

export const Footer = forwardRef(({ uptime }, ref) => {
  return (
    <footer ref={ref} className="border-t border-gray-800 pt-10 pb-20 text-center text-gray-500 text-sm font-mono scroll-mt-20">
      <div className="flex justify-center gap-6 mb-8">
         <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin size={14}/> linkedin.com/in/imkks</a>
         <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Github size={14}/> github.com/imkks</a>
         <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Mail size={14}/> imkrsh007@gmail.com</a>
      </div>
      <div className="flex justify-between items-center max-w-xs mx-auto text-xs text-gray-600 border-t border-gray-800 pt-4">
        <span>UPTIME: <span className="text-green-500">{uptime}</span></span>
        <span>MEM: <span className="text-green-500">64TB</span></span>
      </div>
      <p className="mt-4 opacity-50">
        &copy; 2026 Krishna Kumar Singh. All systems operational.
      </p>
    </footer>
  );
});
Footer.displayName = 'Footer';