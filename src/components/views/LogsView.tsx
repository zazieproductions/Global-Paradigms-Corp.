import React, { useState, useMemo } from 'react';
import { LAB_LOGS_ARCHIVE } from '../../data/logsData';
import { LabLog } from '../../types/archive';
import { Search, Activity, Calendar, AlertTriangle, ShieldAlert, Cpu, Filter } from 'lucide-react';

export const LogsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedRating, setSelectedRating] = useState<string>('all');
  const [selectedDivision, setSelectedDivision] = useState<string>('all');
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);

  const filteredLogs = useMemo(() => {
    return LAB_LOGS_ARCHIVE.filter((log) => {
      if (selectedYear !== 'all' && !log.date.startsWith(selectedYear)) return false;
      if (selectedRating !== 'all' && log.anomalyRating.toString() !== selectedRating) return false;
      if (selectedDivision !== 'all' && !log.division.includes(selectedDivision)) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = log.title.toLowerCase().includes(q);
        const matchesContent = log.content.toLowerCase().includes(q);
        const matchesAuthor = log.author.toLowerCase().includes(q);
        const matchesId = log.id.toLowerCase().includes(q);
        if (!matchesTitle && !matchesContent && !matchesAuthor && !matchesId) return false;
      }
      return true;
    });
  }, [searchQuery, selectedYear, selectedRating, selectedDivision]);

  return (
    <div className="space-y-6 font-mono-code text-xs">
      {/* Top Banner */}
      <div className="border border-slate-700 bg-[#0a0e16] p-5 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-[11px]">
              CHRONOLOGICAL NOTEBOOK RUNS // 264 LAB LOGS (2021–2026)
            </span>
          </div>
          <h1 className="font-academic text-2xl sm:text-3xl font-bold text-slate-100">
            Laboratory Observation Ledgers
          </h1>
          <p className="font-academic text-sm text-slate-400 mt-1 max-w-2xl">
            Real-time technician notes, ambient temperature readouts, anomalous acoustic phase spikes, and safety interlock trigger events recorded across 5 years of daily laboratory bench operations.
          </p>
        </div>

        <div className="text-right shrink-0">
          <div className="text-[10px] text-slate-400">ARCHIVED RUNS</div>
          <div className="text-xl font-bold text-emerald-400 font-insignia">
            {filteredLogs.length} / {LAB_LOGS_ARCHIVE.length}
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
              placeholder="Search logbook ID (e.g. LOG-2023-018), keyword, author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#04060a] border border-slate-800 rounded pl-9 pr-4 py-2 text-slate-200 placeholder-slate-400 outline-none focus:border-emerald-500 text-xs"
            />
          </div>

          <div className="grid grid-cols-3 gap-2 w-full sm:w-auto text-[11px]">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-[#05080f] border border-slate-800 text-slate-200 rounded p-2 outline-none"
            >
              <option value="all">All Years (2021–2026)</option>
              {[2021, 2022, 2023, 2024, 2025, 2026].map((y) => (
                <option key={y} value={y.toString()}>{y}</option>
              ))}
            </select>

            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="bg-[#05080f] border border-slate-800 text-slate-200 rounded p-2 outline-none"
            >
              <option value="all">All Ratings (1 to 5)</option>
              <option value="1">Rating 1: Baseline</option>
              <option value="2">Rating 2: Nominal Drift</option>
              <option value="3">Rating 3: Elevated</option>
              <option value="4">Rating 4: Restricted Spike</option>
              <option value="5">Rating 5: Containment Breach</option>
            </select>

            <select
              value={selectedDivision}
              onChange={(e) => setSelectedDivision(e.target.value)}
              className="bg-[#05080f] border border-slate-800 text-slate-200 rounded p-2 outline-none"
            >
              <option value="all">All Divisions</option>
              <option value="Division A">Div A: Metamaterials</option>
              <option value="Division B">Div B: Archaeology</option>
              <option value="Division C">Div C: Psychoacoustics</option>
              <option value="Division D">Div D: Generative</option>
              <option value="Division E">Div E: Infrastructure</option>
              <option value="Division F">Div F: Bio-Magnetic</option>
              <option value="Division G">Div G: Infrasonics</option>
              <option value="Division H">Div H: Black Vault</option>
            </select>
          </div>
        </div>
      </div>

      {/* Logs List */}
      <div className="space-y-3">
        {filteredLogs.slice(0, 50).map((log) => {
          const isExpanded = expandedLogId === log.id;
          const isCritical = log.anomalyRating >= 5;
          const isHigh = log.anomalyRating === 4;

          return (
            <div
              key={log.id}
              className={`p-4 bg-[#090d14] border rounded-sm transition-all ${
                isCritical
                  ? 'border-red-900/60 bg-gradient-to-r from-[#14080a] to-[#090d14]'
                  : isHigh
                  ? 'border-amber-900/50'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80 text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-emerald-400 font-mono-code">{log.id}</span>
                  <span className="text-slate-400">• {log.date}</span>
                  <span className="text-slate-400">• {log.division}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-slate-400">ANOMALY LEVEL:</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < log.anomalyRating
                            ? isCritical
                              ? 'bg-red-500 animate-pulse'
                              : isHigh
                              ? 'bg-amber-400'
                              : 'bg-emerald-400'
                            : 'bg-slate-800'
                        }`}
                      />
                    ))}
                  </div>
                  <span className={`px-1.5 py-0.5 rounded font-bold text-[9px] ${
                    isCritical
                      ? 'bg-red-950 text-red-400 border border-red-800'
                      : isHigh
                      ? 'bg-amber-950 text-amber-400 border border-amber-800'
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    {log.clearance}
                  </span>
                </div>
              </div>

              {/* Title & Author */}
              <div className="pt-2.5">
                <h3 className="font-academic text-base font-bold text-slate-100 mb-1">
                  {log.title}
                </h3>
                <div className="text-[11px] text-slate-400 mb-2">
                  LOGGED BY: <strong className="text-slate-300">{log.author}</strong>
                </div>

                <p className="font-academic text-sm text-slate-300 leading-relaxed whitespace-pre-line mb-3">
                  {log.content}
                </p>

                {/* Spectrogram Note */}
                <div className="p-2.5 bg-black/60 border border-slate-800 rounded text-[11px] text-cyan-300/90 font-mono-code mb-2">
                  <span className="text-slate-400 font-bold block mb-0.5">SPECTRAL TELEMETRY OBSERVATION:</span>
                  {log.spectrogramNote}
                </div>

                {/* Equipment & Tags Toggle */}
                {isExpanded && (
                  <div className="pt-2 border-t border-slate-800/80 space-y-2 mt-2">
                    <div>
                      <span className="text-slate-400 block mb-1 text-[10px]">INSTRUMENTATION RACK:</span>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-300 text-[11px]">
                        {log.equipmentUsed.map((eq, i) => (
                          <li key={i}>{eq}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {log.tags.map((t) => (
                        <span key={t} className="px-1.5 py-0.5 bg-slate-800 text-slate-400 rounded text-[9px]">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setExpandedLogId(isExpanded ? null : log.id)}
                  className="mt-1 text-[10px] text-emerald-400 hover:underline cursor-pointer"
                >
                  {isExpanded ? 'Collapse Equipment Details' : 'View Bench Equipment & Metadata →'}
                </button>
              </div>
            </div>
          );
        })}

        {filteredLogs.length > 50 && (
          <div className="text-center py-4 text-slate-400 text-[11px]">
            Displaying first 50 of {filteredLogs.length} matching logs. Use search or filters to narrow chronological window.
          </div>
        )}
      </div>
    </div>
  );
};
