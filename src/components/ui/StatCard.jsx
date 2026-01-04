import React from 'react';

export const StatCard = ({ label, value, icon: Icon, color = "text-green-400" }) => (
  <div className="bg-[#161b22] border border-gray-800 p-4 rounded flex items-center gap-4 hover:border-gray-600 transition-colors">
    <div className={`p-3 rounded-full bg-gray-800/50 ${color}`}>
      <Icon size={20} />
    </div>
    <div>
      <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
      <div className={`text-lg font-bold font-mono ${color}`}>{value}</div>
    </div>
  </div>
);