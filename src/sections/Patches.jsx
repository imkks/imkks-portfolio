import React, { forwardRef } from 'react';
import { Shield } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { RESUME_DATA } from '../data/resume';

export const Patches = forwardRef((props, ref) => {
  return (
    <section id={props.id} ref={ref} className="scroll-mt-20">
      <SectionHeader title="Installed Patches (Certifications)" icon={Shield} />
      <div className="bg-[#161b22] border border-gray-800 rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm font-mono">
          <thead className="bg-gray-800/50 text-gray-500 border-b border-gray-800">
            <tr>
              <th className="p-4 w-24">ID</th>
              <th className="p-4">PATCH NAME</th>
              <th className="p-4 hidden md:table-cell">DATE</th>
              <th className="p-4 text-right">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {RESUME_DATA.patches.map((patch, i) => (
              <tr key={i} className="border-b border-gray-800 last:border-0 hover:bg-gray-800/20 transition-colors">
                <td className="p-4 text-gray-500">{patch.id}</td>
                <td className="p-4 text-gray-300 font-bold">{patch.name}</td>
                <td className="p-4 text-gray-500 hidden md:table-cell">{patch.date}</td>
                <td className="p-4 text-right">
                  <span className={`inline-block px-2 py-1 rounded text-[10px] border ${
                    patch.status === 'INSTALLED' ? 'border-green-500/30 bg-green-500/10 text-green-400' : 
                    patch.status === 'PENDING' ? 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400' :
                    'border-blue-500/30 bg-blue-500/10 text-blue-400'
                  }`}>
                    {patch.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
});
Patches.displayName = 'Patches';