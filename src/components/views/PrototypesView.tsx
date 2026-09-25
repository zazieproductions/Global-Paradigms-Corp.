import React, { useState, useMemo } from 'react';
import { PROTOTYPES_ARCHIVE } from '../../data/prototypesData';
import { PrototypeRecord, Domain, ClearanceLevel, PrototypeStatus } from '../../types/archive';
import { Search, Filter, LayoutGrid, List, SlidersHorizontal, ChevronRight, Play, Cpu, ShieldAlert } from 'lucide-react';

interface PrototypesViewProps {
  onSelectPrototype: (proto: PrototypeRecord) => void;
  onLaunchBench?: (preset: string) => void;
}

const ALL_DOMAINS: Domain[] = [
  'Predictive Modeling',
  'Scenario Architecture',
  'Continuity Logistics',
  'Emergency Broadcast Systems',
  'Behavioral Compliance',
  'Opinion Topology',
  'Ambient Soundscaping',
  'Subliminal Acoustics'
];

export const PrototypesView: React.FC<PrototypesViewProps> = ({
  onSelectPrototype,
  onLaunchBench
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedClearance, setSelectedClearance] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredPrototypes = useMemo(() => {
    return PROTOTYPES_ARCHIVE.filter((p) => {
      if (selectedDomain !== 'all' && p.domain !== selectedDomain) return false;
      if (selectedClearance !== 'all' && p.clearance !== selectedClearance) return false;
      if (selectedYear !== 'all' && p.year.toString() !== selectedYear) return false;
      if (selectedStatus !== 'all' && p.status !== selectedStatus) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCode = p.code.toLowerCase().includes(q);
        const matchesLead = p.lead.toLowerCase().includes(q);
        const matchesSummary = p.summary.toLowerCase().includes(q);
        if (!matchesName && !matchesCode && !matchesLead && !matchesSummary) return false;
      }
      return true;
    });
  }, [searchQuery, selectedDomain, selectedClearance, selectedYear, selectedStatus]);

  return (
    <div className="space-y-6 font-mono-code text-xs">
      {/* Top Banner */}
      <div className="border border-slate-700 bg-[#0a0e16] p-5 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-[11px]">
              GPC TECHNICAL INVENTORY // 128 VERIFIED RECORDS
            </span>
          </div>
          <h1 className="font-academic text-2xl sm:text-3xl font-bold text-slate-100">
            Program Apparatus Catalog (1998–2006)
          </h1>
          <p className="font-academic text-sm text-slate-400 mt-1 max-w-2xl">
            Apparatus built to client-grade tolerances in the Geneva Annex workshops and certified against Charter Standard ES-77. Click any record for complete vector schematics and operating specifications.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="text-[10px] text-slate-400">INDEXED RECORDS</div>
            <div className="text-xl font-bold text-amber-400 font-insignia">
              {filteredPrototypes.length} / {PROTOTYPES_ARCHIVE.length}
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="border border-slate-800 bg-[#090d14] p-4 rounded-sm space-y-3">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by apparatus name, code (e.g. GPC-PR-049), officer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#04060a] border border-slate-800 rounded pl-9 pr-4 py-2 text-slate-200 placeholder-slate-400 outline-none focus:border-amber-500 text-xs"
            />
          </div>

          {/* Grid / Table Toggle */}
          <div className="flex items-center border border-slate-800 rounded overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-amber-600 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 transition-colors ${viewMode === 'table' ? 'bg-amber-600 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
              title="Table View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dropdown Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
          <div>
            <label className="text-slate-400 block mb-1 text-[10px]">DOMAIN:</label>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full bg-[#05080f] border border-slate-800 text-slate-200 rounded p-1.5 outline-none"
            >
              <option value="all">All Domains (8 Vectors)</option>
              {ALL_DOMAINS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 text-[10px]">CLEARANCE TIER:</label>
            <select
              value={selectedClearance}
              onChange={(e) => setSelectedClearance(e.target.value)}
              className="w-full bg-[#05080f] border border-slate-800 text-slate-200 rounded p-1.5 outline-none"
            >
              <option value="all">All Clearance Tiers</option>
              <option value="Level I (Public)">Level I (Public)</option>
              <option value="Level II (Internal)">Level II (Internal)</option>
              <option value="Level III (Restricted)">Level III (Restricted)</option>
              <option value="Level IV (Continuity Vault)">Level IV (Continuity Vault)</option>
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 text-[10px]">OPERATIONAL STATUS:</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-[#05080f] border border-slate-800 text-slate-200 rounded p-1.5 outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="Active Program">Active Program (at shutdown)</option>
              <option value="Field Verified">Field Verified</option>
              <option value="Client Deployment">Client Deployment</option>
              <option value="Archived">Archived</option>
              <option value="Decommissioned">Decommissioned</option>
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 text-[10px]">FISCAL YEAR:</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full bg-[#05080f] border border-slate-800 text-slate-200 rounded p-1.5 outline-none"
            >
              <option value="all">All Years (1998–2006)</option>
              {[1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006].map((y) => (
                <option key={y} value={y.toString()}>{y}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrototypes.map((proto) => {
            const isBlackVault = proto.clearance.includes('Continuity Vault');
            const isRestricted = proto.clearance.includes('Restricted');
            return (
              <div
                key={proto.id}
                onClick={() => onSelectPrototype(proto)}
                className={`p-4 bg-[#090d14] border rounded-sm transition-all flex flex-col justify-between group cursor-pointer ${
                  isBlackVault
                    ? 'border-red-900/60 hover:border-red-500 bg-gradient-to-b from-[#120a0d] to-[#090d14]'
                    : isRestricted
                    ? 'border-cyan-900/50 hover:border-cyan-500/80'
                    : 'border-slate-800 hover:border-amber-500/70 hover:bg-[#0c121c]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] mb-2">
                    <span className="font-bold text-amber-400 font-mono-code">{proto.code}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                      isBlackVault
                        ? 'bg-red-950 text-red-400 border border-red-800'
                        : isRestricted
                        ? 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {proto.clearance.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className="font-academic text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                    {proto.name}
                  </h3>

                  <div className="text-[10px] text-slate-400 mb-2">
                    <span className="text-slate-300 font-semibold">{proto.domain}</span> • {proto.year}
                  </div>

                  <p className="font-academic text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                    {proto.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                  <span className="text-slate-400 truncate max-w-[150px]">
                    {proto.lead}
                  </span>
                  <span className="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-0.5 font-bold">
                    INSPECT <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Table View */
        <div className="border border-slate-800 rounded overflow-x-auto bg-[#090d14]">
          <table className="w-full text-left border-collapse text-[11px]">
            <thead>
              <tr className="bg-[#0d121c] text-slate-400 border-b border-slate-800">
                <th className="p-3">CODE</th>
                <th className="p-3">APPARATUS NAME</th>
                <th className="p-3">DOMAIN</th>
                <th className="p-3">YEAR</th>
                <th className="p-3">CLEARANCE</th>
                <th className="p-3">STATUS</th>
                <th className="p-3">LEAD</th>
                <th className="p-3 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredPrototypes.map((proto, idx) => (
                <tr
                  key={proto.id}
                  onClick={() => onSelectPrototype(proto)}
                  className={`border-b border-slate-800/60 hover:bg-slate-800/50 cursor-pointer transition-colors ${
                    idx % 2 === 0 ? 'bg-transparent' : 'bg-[#05080e]'
                  }`}
                >
                  <td className="p-3 font-bold text-amber-400">{proto.code}</td>
                  <td className="p-3 font-bold text-slate-200">{proto.name}</td>
                  <td className="p-3 text-slate-400">{proto.domain}</td>
                  <td className="p-3 text-slate-400">{proto.year}</td>
                  <td className="p-3">
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                      proto.clearance.includes('Continuity Vault')
                        ? 'bg-red-950 text-red-400 border border-red-800'
                        : proto.clearance.includes('Restricted')
                        ? 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {proto.clearance.split(' ')[0]}
                    </span>
                  </td>
                  <td className="p-3 text-emerald-400">{proto.status}</td>
                  <td className="p-3 text-slate-400">{proto.lead}</td>
                  <td className="p-3 text-right text-amber-400 font-bold">VIEW →</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
