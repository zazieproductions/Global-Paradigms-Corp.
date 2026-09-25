import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, Cpu, FileText, Activity, Compass, BookOpen, AlertOctagon, Users, Calendar } from 'lucide-react';
import { PROTOTYPES_ARCHIVE } from '../../data/prototypesData';
import { PATENTS_ARCHIVE } from '../../data/patentsData';
import { LAB_LOGS_ARCHIVE } from '../../data/logsData';
import { FIELD_REPORTS_ARCHIVE } from '../../data/fieldReportsData';
import { TECHNICAL_ESSAYS_ARCHIVE } from '../../data/essaysData';
import { FAILED_PROJECTS_ARCHIVE } from '../../data/failedProjectsData';
import { EXHIBITIONS_ARCHIVE } from '../../data/exhibitionsData';
import { RESIDENTS_ARCHIVE } from '../../data/residentsData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPrototype: (id: string) => void;
  onSelectPatent: (patentNum: string) => void;
  onSelectEssay: (id: string) => void;
  onNavigateTab: (tab: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectPrototype,
  onSelectPatent,
  onSelectEssay,
  onNavigateTab
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Unified Search Results across all datasets
  const results = useMemo(() => {
    if (!query.trim()) {
      return {
        prototypes: PROTOTYPES_ARCHIVE.slice(0, 4),
        patents: PATENTS_ARCHIVE.slice(0, 3),
        logs: LAB_LOGS_ARCHIVE.slice(0, 3),
        essays: TECHNICAL_ESSAYS_ARCHIVE.slice(0, 2),
        failed: FAILED_PROJECTS_ARCHIVE.slice(0, 2),
        fieldReports: FIELD_REPORTS_ARCHIVE.slice(0, 2)
      };
    }

    const q = query.toLowerCase();

    return {
      prototypes: PROTOTYPES_ARCHIVE.filter(
        (p) => p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q) || p.domain.toLowerCase().includes(q)
      ).slice(0, 6),
      patents: PATENTS_ARCHIVE.filter(
        (p) => p.title.toLowerCase().includes(q) || p.patentNumber.toLowerCase().includes(q)
      ).slice(0, 5),
      logs: LAB_LOGS_ARCHIVE.filter(
        (l) => l.title.toLowerCase().includes(q) || l.id.toLowerCase().includes(q) || l.division.toLowerCase().includes(q)
      ).slice(0, 4),
      essays: TECHNICAL_ESSAYS_ARCHIVE.filter(
        (e) => e.title.toLowerCase().includes(q) || e.doi.toLowerCase().includes(q)
      ).slice(0, 3),
      failed: FAILED_PROJECTS_ARCHIVE.filter(
        (f) => f.name.toLowerCase().includes(q) || f.code.toLowerCase().includes(q)
      ).slice(0, 3),
      fieldReports: FIELD_REPORTS_ARCHIVE.filter(
        (r) => r.title.toLowerCase().includes(q) || r.location.toLowerCase().includes(q) || r.stationCode.toLowerCase().includes(q)
      ).slice(0, 3)
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#090d14] border border-slate-700 shadow-2xl rounded-sm overflow-hidden text-slate-300 font-mono-code text-xs">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 bg-[#0d121c] border-b border-slate-800 gap-3">
          <Search className="w-4 h-4 text-amber-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search 128 programs, 78 filings, 264 ledger entries, field stations, white papers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-100 placeholder-slate-400 outline-none text-xs"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Nav Badges */}
        <div className="px-4 py-2 bg-[#070a10] border-b border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[10px]">
          <span className="text-slate-400">JUMP TO ARCHIVE:</span>
          {[
            { label: 'Programs', tab: 'prototypes' },
            { label: 'Filings', tab: 'patents' },
            { label: 'Systems Bench', tab: 'bench' },
            { label: 'Ledger', tab: 'logs' },
            { label: 'Field Stations', tab: 'field' },
            { label: 'Continuity Vault', tab: 'vault' },
            { label: 'White Papers', tab: 'essays' },
            { label: 'Signal Intercepts', tab: 'intercepts' },
            { label: 'Night-Watch', tab: 'nightwatch' }
          ].map((item) => (
            <button
              key={item.tab}
              onClick={() => {
                onNavigateTab(item.tab);
                onClose();
              }}
              className="px-2 py-0.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded cursor-pointer transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Prototypes */}
          {results.prototypes.length > 0 && (
            <div>
              <div className="text-[10px] text-amber-400 font-bold mb-1.5 flex items-center gap-1.5 tracking-wider">
                <Cpu className="w-3.5 h-3.5" /> PROGRAM ARCHIVE ({results.prototypes.length})
              </div>
              <div className="space-y-1">
                {results.prototypes.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectPrototype(p.id);
                      onClose();
                    }}
                    className="p-2 bg-[#0c1018] hover:bg-slate-800/80 border border-slate-800/80 hover:border-amber-500/50 rounded flex items-center justify-between cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="text-amber-400 font-bold">{p.code}</span>
                      <span className="text-slate-200 truncate">{p.name}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 shrink-0 ml-2">{p.domain}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Patents */}
          {results.patents.length > 0 && (
            <div>
              <div className="text-[10px] text-cyan-400 font-bold mb-1.5 flex items-center gap-1.5 tracking-wider">
                <FileText className="w-3.5 h-3.5" /> PATENT FILING DOSSIERS ({results.patents.length})
              </div>
              <div className="space-y-1">
                {results.patents.map((pat) => (
                  <div
                    key={pat.patentNumber}
                    onClick={() => {
                      onSelectPatent(pat.patentNumber);
                      onClose();
                    }}
                    className="p-2 bg-[#0c1018] hover:bg-slate-800/80 border border-slate-800/80 hover:border-cyan-500/50 rounded flex items-center justify-between cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="text-cyan-400 font-bold">{pat.patentNumber}</span>
                      <span className="text-slate-200 truncate">{pat.title}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 shrink-0 ml-2">{pat.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lab Logs */}
          {results.logs.length > 0 && (
            <div>
              <div className="text-[10px] text-emerald-400 font-bold mb-1.5 flex items-center gap-1.5 tracking-wider">
                <Activity className="w-3.5 h-3.5" /> OPERATIONS LEDGER ({results.logs.length})
              </div>
              <div className="space-y-1">
                {results.logs.map((log) => (
                  <div
                    key={log.id}
                    onClick={() => {
                      onNavigateTab('logs');
                      onClose();
                    }}
                    className="p-2 bg-[#0c1018] hover:bg-slate-800/80 border border-slate-800/80 hover:border-emerald-500/50 rounded flex items-center justify-between cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="text-emerald-400 font-bold">{log.id}</span>
                      <span className="text-slate-200 truncate">{log.title}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 shrink-0 ml-2">{log.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Monographs */}
          {results.essays.length > 0 && (
            <div>
              <div className="text-[10px] text-purple-400 font-bold mb-1.5 flex items-center gap-1.5 tracking-wider">
                <BookOpen className="w-3.5 h-3.5" /> WHITE PAPERS & MONOGRAPHS
              </div>
              <div className="space-y-1">
                {results.essays.map((essay) => (
                  <div
                    key={essay.id}
                    onClick={() => {
                      onSelectEssay(essay.id);
                      onClose();
                    }}
                    className="p-2 bg-[#0c1018] hover:bg-slate-800/80 border border-slate-800/80 hover:border-purple-500/50 rounded flex items-center justify-between cursor-pointer transition-all"
                  >
                    <span className="text-slate-200 truncate">{essay.title}</span>
                    <span className="text-[10px] text-purple-300 font-bold shrink-0 ml-2">{essay.doi}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Black Vault Failed Projects */}
          {results.failed.length > 0 && (
            <div>
              <div className="text-[10px] text-red-400 font-bold mb-1.5 flex items-center gap-1.5 tracking-wider">
                <AlertOctagon className="w-3.5 h-3.5" /> CONTINUITY VAULT SEALED
              </div>
              <div className="space-y-1">
                {results.failed.map((f) => (
                  <div
                    key={f.id}
                    onClick={() => {
                      onNavigateTab('vault');
                      onClose();
                    }}
                    className="p-2 bg-[#0c1018] hover:bg-slate-800/80 border border-slate-800/80 hover:border-red-500/50 rounded flex items-center justify-between cursor-pointer transition-all"
                  >
                    <span className="text-red-400 font-bold">{f.code}</span>
                    <span className="text-slate-200 truncate">{f.name}</span>
                    <span className="text-[10px] text-slate-400 shrink-0 ml-2">{f.operatingPeriod}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Command Palette Footer */}
        <div className="px-4 py-2 bg-[#070a10] border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
          <span>PRESS [ESC] TO CLOSE</span>
          <span>128 PROGRAMS • 78 FILINGS • 264 LEDGER ENTRIES</span>
        </div>
      </div>
    </div>
  );
};
