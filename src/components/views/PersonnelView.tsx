import React, { useState } from 'react';
import { RESIDENTS_ARCHIVE } from '../../data/residentsData';
import { REVISIONS_ARCHIVE } from '../../data/revisionsData';
import { ResidentProfile } from '../../types/archive';
import { Users, GitCommit, Shield, Award, Calendar, CheckCircle, ChevronRight } from 'lucide-react';

export const PersonnelView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'residents' | 'ledger'>('residents');

  return (
    <div className="space-y-6 font-mono-code text-xs">
      {/* Top Banner */}
      <div className="border border-slate-700 bg-[#0a0e16] p-5 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-[11px]">
              GOVERNANCE & PROVENANCE // 12 FELLOWS & 34 LEDGER ENTRIES
            </span>
          </div>
          <h1 className="font-academic text-2xl sm:text-3xl font-bold text-slate-100">
            Fellowship Faculty & Repository Provenance
          </h1>
          <p className="font-academic text-sm text-slate-400 mt-1 max-w-2xl">
            Biographies of principal investigators directing ZIAA research benches, along with the complete 5-year cryptographic revision commit history (2021–2026).
          </p>
        </div>

        <div className="flex items-center gap-2 border border-slate-800 rounded p-1 bg-[#05080f]">
          <button
            onClick={() => setActiveTab('residents')}
            className={`py-1.5 px-3 rounded cursor-pointer transition-colors ${
              activeTab === 'residents'
                ? 'bg-amber-600 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Resident Fellows (12)
          </button>
          <button
            onClick={() => setActiveTab('ledger')}
            className={`py-1.5 px-3 rounded cursor-pointer transition-colors ${
              activeTab === 'ledger'
                ? 'bg-amber-600 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Revision Ledger (34)
          </button>
        </div>
      </div>

      {/* View Content */}
      {activeTab === 'residents' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RESIDENTS_ARCHIVE.map((res) => (
            <div
              key={res.id}
              className="p-5 bg-[#090d14] border border-slate-800 rounded-sm space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] mb-1">
                  <span className="text-amber-400 font-bold">{res.division}</span>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                    res.clearance.includes('Black Vault')
                      ? 'bg-red-950 text-red-400 border border-red-800'
                      : res.clearance.includes('Restricted')
                      ? 'bg-amber-950 text-amber-400 border border-amber-800'
                      : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                  }`}>
                    {res.clearance}
                  </span>
                </div>

                <h2 className="font-academic text-xl font-bold text-slate-100">
                  {res.name}
                </h2>

                <div className="text-[11px] text-cyan-400 font-semibold mb-2">
                  {res.title}
                </div>

                <div className="text-[10px] text-slate-400 mb-2">
                  TENURE: <strong className="text-slate-300">{res.tenure}</strong>
                </div>

                <p className="font-academic text-sm text-slate-300 leading-relaxed mb-3">
                  {res.bio}
                </p>

                {/* Specializations */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {res.specialization.map((spec) => (
                    <span key={spec} className="px-2 py-0.5 bg-slate-800/80 text-slate-400 rounded text-[9px]">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notable inventions */}
              <div className="pt-2 border-t border-slate-800 text-[10px]">
                <span className="text-slate-400 font-bold block mb-1">NOTABLE PROTOTYPES & PATENTS:</span>
                <ul className="list-disc list-inside space-y-0.5 text-slate-300">
                  {res.notableInventions.map((inv, i) => (
                    <li key={i}>{inv}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Revision Commit Ledger */
        <div className="border border-slate-800 bg-[#090d14] rounded-sm p-4 space-y-3">
          <div className="text-[11px] text-slate-400 mb-2 font-bold">
            CRYPTOGRAPHIC REPOSITORY COMMIT RECORD (2021.01.15 — 2026.09.14)
          </div>

          <div className="space-y-2">
            {REVISIONS_ARCHIVE.map((entry) => (
              <div
                key={entry.commitHash}
                className="p-3 bg-[#0c1018] border border-slate-800/80 rounded flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="font-mono-code font-bold text-amber-400 text-xs w-20 shrink-0">
                    commit {entry.commitHash}
                  </div>
                  <div>
                    <div className="text-slate-200 font-bold text-[11px]">{entry.message}</div>
                    <div className="text-[10px] text-slate-400">
                      {entry.date} • <strong className="text-slate-300">{entry.author}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  <span className="px-2 py-0.5 bg-slate-800 text-slate-300 text-[9px] font-bold rounded">
                    {entry.category}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                    entry.impactScore === 'CRITICAL'
                      ? 'bg-red-950 text-red-400 border border-red-800'
                      : entry.impactScore === 'ELEVATED'
                      ? 'bg-amber-950 text-amber-400 border border-amber-800'
                      : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  }`}>
                    {entry.impactScore}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
