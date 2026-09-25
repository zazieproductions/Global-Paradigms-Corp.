import React, { useState } from 'react';
import { FAILED_PROJECTS_ARCHIVE } from '../../data/failedProjectsData';
import { FailedProject } from '../../types/archive';
import { AlertOctagon, ShieldAlert, Skull, FileWarning, Search, ExternalLink, Flame } from 'lucide-react';

export const BlackVaultView: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<FailedProject | null>(FAILED_PROJECTS_ARCHIVE[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = FAILED_PROJECTS_ARCHIVE.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.causeOfFailure.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 font-mono-code text-xs">
      {/* Top Banner */}
      <div className="border border-red-900/60 bg-gradient-to-b from-[#1a080c] to-[#090507] p-5 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="stamp-classified text-[10px]">LEVEL IV BLACK VAULT</span>
            <span className="text-red-400 font-bold uppercase tracking-widest text-[11px]">
              RESTRICTED DISCLOSURE // 18 DECOMMISSIONED EXPERIMENTS
            </span>
          </div>
          <h1 className="font-academic text-2xl sm:text-3xl font-bold text-slate-100">
            Anomaly Containment & Failure Forensics
          </h1>
          <p className="font-academic text-sm text-red-200/80 mt-1 max-w-2xl">
            Catastrophic structural ruptures, acoustic soil liquefaction events, irreversible biological stress, and somatic vertigo hazards. Decommissioned and physically quarantined under ZIAA Protocol Sec-IV.
          </p>
        </div>

        <div className="text-right shrink-0">
          <div className="text-[10px] text-red-400">SEALED IN VAULT</div>
          <div className="text-xl font-bold text-red-500 font-insignia">
            18 DECOMMISSIONED
          </div>
        </div>
      </div>

      {/* Grid: Project Selector & Incident Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Project List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-red-400" />
            <input
              type="text"
              placeholder="Search Black Vault failed code or incident..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#050508] border border-red-900/60 rounded pl-9 pr-3 py-2 text-slate-200 placeholder-slate-400 outline-none focus:border-red-500 text-xs"
            />
          </div>

          <div className="max-h-[600px] overflow-y-auto space-y-2 pr-1">
            {filteredProjects.map((p) => {
              const isSelected = selectedProject?.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedProject(p)}
                  className={`p-3.5 border rounded-sm transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#18090d] border-red-500 shadow-md shadow-red-950/50 text-white'
                      : 'bg-[#090507] border-red-950/60 text-slate-400 hover:text-slate-200 hover:border-red-900/80'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span className="font-bold text-red-400">{p.code}</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-950 text-red-400 border border-red-800">
                      CONTAINED
                    </span>
                  </div>

                  <div className="font-academic text-sm font-bold text-slate-200 mb-1">
                    {p.name}
                  </div>

                  <div className="text-[10px] text-slate-400 truncate">
                    {p.operatingPeriod} • {p.causeOfFailure}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Forensic Post-Mortem */}
        <div className="lg:col-span-7">
          {selectedProject && (
            <div className="p-6 bg-[#090507] border border-red-900/70 rounded-sm space-y-5">
              <div className="border-b border-red-900/50 pb-4">
                <div className="flex items-center justify-between text-[10px] text-red-400 font-bold mb-1">
                  <span>INCIDENT FORENSICS // {selectedProject.code}</span>
                  <span>ACTIVE EMBARGO</span>
                </div>

                <h2 className="font-academic text-2xl font-bold text-slate-100 mb-2">
                  {selectedProject.name}
                </h2>

                <div className="grid grid-cols-2 gap-3 text-[11px] pt-2">
                  <div>
                    <span className="text-slate-400 block text-[10px]">OPERATIONAL LIFESPAN:</span>
                    <span className="text-slate-200 font-bold">{selectedProject.operatingPeriod}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">DECOMMISSIONING OFFICER:</span>
                    <span className="text-red-400 font-bold">{selectedProject.decommissioningOfficer}</span>
                  </div>
                </div>
              </div>

              {/* Primary Failure Cause */}
              <div className="space-y-1.5">
                <span className="font-insignia text-xs text-red-400 tracking-wider font-bold block">
                  1.0 STRUCTURAL FAILURE MODE
                </span>
                <p className="font-academic text-base text-slate-200 leading-relaxed bg-[#12070a] p-4 rounded border border-red-900/40">
                  {selectedProject.failureMode}
                </p>
              </div>

              {/* Safety Hazards */}
              <div className="p-4 bg-red-950/30 border border-red-900/60 rounded space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-bold text-xs">
                  <Flame className="w-4 h-4" /> HAZARD VECTOR & PHYSIOLOGICAL IMPACT
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {selectedProject.safetyHazard}
                </p>
              </div>

              {/* Containment Protocol */}
              <div className="space-y-1.5">
                <span className="font-insignia text-xs text-amber-400 tracking-wider font-bold block">
                  2.0 EMERGENCY CONTAINMENT PROTOCOL
                </span>
                <p className="font-academic text-sm text-slate-300 leading-relaxed bg-black/60 p-3.5 rounded border border-slate-800">
                  {selectedProject.containmentProtocol}
                </p>
              </div>

              {/* Post-Mortem Recommendations */}
              <div className="space-y-1.5">
                <span className="font-insignia text-xs text-slate-400 tracking-wider font-bold block">
                  3.0 FORENSIC LESSONS & REDESIGN MANDATE
                </span>
                <p className="font-academic text-xs text-slate-400 leading-relaxed italic">
                  {selectedProject.postMortemSummary}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
