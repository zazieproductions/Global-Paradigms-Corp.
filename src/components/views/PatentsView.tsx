import React, { useState, useMemo } from 'react';
import { PATENTS_ARCHIVE } from '../../data/patentsData';
import { PatentDossier } from '../../types/archive';
import { Search, FileText, Printer, CheckCircle, Clock, ShieldAlert, ChevronRight, BookOpen } from 'lucide-react';

interface PatentsViewProps {
  onSelectPatent: (patent: PatentDossier) => void;
}

export const PatentsView: React.FC<PatentsViewProps> = ({ onSelectPatent }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const filteredPatents = useMemo(() => {
    return PATENTS_ARCHIVE.filter((pat) => {
      if (selectedStatus !== 'all' && pat.status !== selectedStatus) return false;
      if (selectedYear !== 'all' && !pat.patentNumber.includes(selectedYear)) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesNum = pat.patentNumber.toLowerCase().includes(q);
        const matchesTitle = pat.title.toLowerCase().includes(q);
        const matchesAbstract = pat.abstract.toLowerCase().includes(q);
        const matchesInventor = pat.inventors.some((inv) => inv.toLowerCase().includes(q));
        if (!matchesNum && !matchesTitle && !matchesAbstract && !matchesInventor) return false;
      }
      return true;
    });
  }, [searchQuery, selectedStatus, selectedYear]);

  return (
    <div className="space-y-6 font-mono-code text-xs">
      {/* Top Banner */}
      <div className="border border-slate-700 bg-[#0a0e16] p-5 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-[11px]">
              INTELLECTUAL SPECULATION REGISTRY // 78 LEGAL DOSSIERS
            </span>
          </div>
          <h1 className="font-academic text-2xl sm:text-3xl font-bold text-slate-100">
            Speculative Patent Studies (2021–2026)
          </h1>
          <p className="font-academic text-sm text-slate-400 mt-1 max-w-2xl">
            Legal claims, phononic boundary conditions, and device disclosures filed by Zazie Productions LLC. Each dossier contains independent and dependent claims, technical vector blueprints, and prior art trees.
          </p>
        </div>

        <div className="text-right shrink-0">
          <div className="text-[10px] text-slate-400">REGISTERED PATENTS</div>
          <div className="text-xl font-bold text-amber-400 font-insignia">
            {filteredPatents.length} / {PATENTS_ARCHIVE.length}
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="border border-slate-800 bg-[#090d14] p-4 rounded-sm space-y-3">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search patent title, number (e.g. ZIAA-PAT-2023-018), inventor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#04060a] border border-slate-800 rounded pl-9 pr-4 py-2 text-slate-200 placeholder-slate-400 outline-none focus:border-amber-500 text-xs"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-[#05080f] border border-slate-800 text-slate-200 rounded p-2 text-[11px] outline-none flex-1 sm:flex-none"
            >
              <option value="all">All Legal Statuses</option>
              <option value="Granted">Granted</option>
              <option value="Under Defense">Under Defense</option>
              <option value="Speculative Embargo">Speculative Embargo</option>
              <option value="Public Domain Study">Public Domain Study</option>
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-[#05080f] border border-slate-800 text-slate-200 rounded p-2 text-[11px] outline-none flex-1 sm:flex-none"
            >
              <option value="all">All Filing Years</option>
              {[2021, 2022, 2023, 2024, 2025, 2026].map((y) => (
                <option key={y} value={y.toString()}>{y}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Patent Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPatents.map((pat) => (
          <div
            key={pat.patentNumber}
            onClick={() => onSelectPatent(pat)}
            className="p-5 bg-[#090d14] border border-slate-800 hover:border-amber-500/70 rounded-sm transition-all cursor-pointer flex flex-col justify-between group hover:bg-[#0c111a]"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] mb-2">
                <span className="font-bold text-amber-400 font-mono-code">{pat.patentNumber}</span>
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                  pat.status === 'Granted'
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                    : pat.status === 'Speculative Embargo'
                    ? 'bg-amber-950 text-amber-400 border border-amber-800'
                    : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                }`}>
                  {pat.status.toUpperCase()}
                </span>
              </div>

              <h3 className="font-academic text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                {pat.title}
              </h3>

              <div className="text-[10px] text-slate-400 mb-2 flex flex-wrap items-center gap-3">
                <span>CPC: <strong className="text-cyan-400">{pat.cpcClassification}</strong></span>
                <span>FILED: {pat.filingDate}</span>
              </div>

              <p className="font-academic text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                {pat.abstract}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
              <span className="text-slate-400 truncate max-w-[200px]">
                {pat.inventors.join(', ')}
              </span>
              <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                INSPECT DOSSIER <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
