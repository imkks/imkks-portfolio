import React from 'react';

export const NavButton = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`px-4 py-2 text-xs md:text-sm font-mono border-b-2 transition-all ${active ? 'border-green-500 text-green-400 bg-green-500/10' : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'}`}
  >
    {label}
  </button>
);