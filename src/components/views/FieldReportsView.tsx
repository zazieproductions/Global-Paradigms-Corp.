import React, { useState } from 'react';
import { FIELD_REPORTS_ARCHIVE } from '../../data/fieldReportsData';
import { FieldReport } from '../../types/archive';
import { Radio, MapPin, Compass, Volume2, ShieldCheck, Activity, Search, AlertTriangle } from 'lucide-react';
import { audioService } from '../../audio/audioEngine';

export const FieldReportsView: React.FC = () => {
  const [selectedStation, setSelectedStation] = useState<FieldReport | null>(FIELD_REPORTS_ARCHIVE[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStations = FIELD_REPORTS_ARCHIVE.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.stationCode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 font-mono-code text-xs">
      {/* Top Banner */}
      <div className="border border-slate-700 bg-[#0a0e16] p-5 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sky-400 font-bold uppercase tracking-widest text-[11px]">
              GLOBAL LISTENING POST NETWORK // 14 CONTINENTAL STATIONS
            </span>
          </div>
          <h1 className="font-academic text-2xl sm:text-3xl font-bold text-slate-100">
            Field Telemetry & Remote Acoustic Posts
          </h1>
          <p className="font-academic text-sm text-slate-400 mt-1 max-w-2xl">
            Autonomous hydrophone buoys, VLF loop arrays, and subterranean mine geophones deployed across polar ice shelves, deep ocean trenches, and abandoned military radomes.
          </p>
        </div>

        <div className="text-right shrink-0">
          <div className="text-[10px] text-slate-400">ACTIVE STATIONS</div>
          <div className="text-xl font-bold text-sky-400 font-insignia">
            14 POSTS DEPLOYED
          </div>
        </div>
      </div>

      {/* Main Grid: Station Selector & Detailed Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Station Directory */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search post code or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#05080f] border border-slate-800 rounded pl-9 pr-3 py-2 text-slate-200 placeholder-slate-400 outline-none focus:border-sky-500 text-xs"
            />
          </div>

          <div className="max-h-[600px] overflow-y-auto space-y-2 pr-1">
            {filteredStations.map((station) => {
              const isSelected = selectedStation?.id === station.id;
              return (
                <div
                  key={station.id}
                  onClick={() => setSelectedStation(station)}
                  className={`p-3.5 border rounded-sm transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#101726] border-sky-500 shadow-md shadow-sky-950/40 text-white'
                      : 'bg-[#090d14] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span className="font-bold text-sky-400">{station.stationCode}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                      station.status === 'Continuous Stream'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : station.status === 'Autonomous Beacon'
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                        : station.status === 'Telemetry Lost'
                        ? 'bg-red-950 text-red-400 border border-red-800'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {station.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="font-academic text-sm font-bold text-slate-200 mb-1">
                    {station.title}
                  </div>

                  <div className="text-[10px] text-slate-400 flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    {station.location}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Station Dossier */}
        <div className="lg:col-span-7">
          {selectedStation && (
            <div className="p-6 bg-[#090d14] border border-slate-800 rounded-sm space-y-5">
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center justify-between text-[10px] text-sky-400 font-bold mb-1">
                  <span>EXPEDITION DOSSIER // {selectedStation.stationCode}</span>
                  <span>RECORDED: {selectedStation.date}</span>
                </div>

                <h2 className="font-academic text-2xl font-bold text-slate-100 mb-2">
                  {selectedStation.title}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[11px] pt-2">
                  <div>
                    <span className="text-slate-400 block text-[10px]">GEOGRAPHIC COORDS:</span>
                    <span className="text-slate-200 font-bold">{selectedStation.coordinates}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">ELEVATION / DEPTH:</span>
                    <span className="text-slate-200 font-bold">{selectedStation.elevation}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">LEAD INVESTIGATOR:</span>
                    <span className="text-slate-200 font-bold">{selectedStation.leadInvestigator}</span>
                  </div>
                </div>
              </div>

              {/* Acoustic Findings */}
              <div className="space-y-2">
                <h3 className="font-insignia text-xs text-sky-400 tracking-wider font-bold">
                  ACOUSTIC ABSTRACT & SURVEY FINDINGS
                </h3>
                <p className="font-academic text-base text-slate-300 leading-relaxed bg-[#0c1018] p-4 rounded border border-slate-800/80">
                  {selectedStation.findings}
                </p>
              </div>

              {/* Ambient Noise Floor & Bandwidth */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-black/60 border border-slate-800 rounded">
                  <span className="text-slate-400 text-[10px] block">AMBIENT NOISE FLOOR:</span>
                  <div className="text-lg font-bold text-cyan-400 font-insignia mt-0.5">
                    {selectedStation.ambientDecibels}
                  </div>
                </div>

                <div className="p-3 bg-black/60 border border-slate-800 rounded">
                  <span className="text-slate-400 text-[10px] block">SPECTRAL DETECTION BAND:</span>
                  <div className="text-lg font-bold text-amber-400 font-insignia mt-0.5">
                    {selectedStation.frequencyRange}
                  </div>
                </div>
              </div>

              {/* Hardware Deployed */}
              <div className="space-y-2">
                <h3 className="font-insignia text-xs text-slate-400 tracking-wider font-bold">
                  INSTRUMENTATION & TELEMETRY CLUSTER
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                  {selectedStation.equipmentCluster.map((eq, i) => (
                    <li key={i}>{eq}</li>
                  ))}
                </ul>
              </div>

              {/* Audio Test Trigger */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] text-slate-400">STATUS: {selectedStation.status}</span>
                <button
                  onClick={() => audioService.playAnomalyPing()}
                  className="py-1.5 px-3 bg-sky-600 hover:bg-sky-500 text-slate-950 font-bold rounded flex items-center gap-1.5 cursor-pointer transition-colors text-xs"
                >
                  <Activity className="w-3.5 h-3.5 fill-slate-950" /> AUDITION TELEMETRY PULSE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
