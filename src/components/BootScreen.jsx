import React, { useState, useEffect } from 'react';
import { BOOT_SEQUENCE } from '../data/resume';

export const BootScreen = ({ onComplete }) => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    let timeouts = [];
    BOOT_SEQUENCE.forEach((step, index) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, step]);
        if (index === BOOT_SEQUENCE.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, step.delay);
      timeouts.push(timeout);
    });
    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-[#0d1117] text-green-500 font-mono p-10 flex flex-col justify-end pb-20">
      {lines.map((line, i) => (
        <div key={i} className="mb-1 flex justify-between border-b border-dashed border-gray-800/50 pb-1">
          <span className="text-gray-400">{`> ${line.msg}`}</span>
          <span className="font-bold">[{line.status}]</span>
        </div>
      ))}
      <div className="animate-pulse mt-4 text-xl">_</div>
    </div>
  );
};