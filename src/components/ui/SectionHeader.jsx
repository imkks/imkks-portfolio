import React from 'react';

export const SectionHeader = ({ title, icon: Icon }) => (
  <div className="flex items-center gap-2 text-blue-400 border-b border-gray-800 pb-2 mb-6 mt-16 select-none">
    <Icon size={20} />
    <h2 className="text-xl font-bold uppercase tracking-wider">{title}</h2>
    <div className="flex-1 h-[1px] bg-gray-800 ml-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-1/2 animate-[shimmer_2s_infinite]"></div>
    </div>
  </div>
);