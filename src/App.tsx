import React, { useState, useEffect } from 'react';
import { OverviewView } from './components/views/OverviewView';
import { PrototypesView } from './components/views/PrototypesView';
import { PatentsView } from './components/views/PatentsView';
import { InteractiveBenchView } from './components/views/InteractiveBenchView';
import { LogsView } from './components/views/LogsView';
import { FieldReportsView } from './components/views/FieldReportsView';
import { BlackVaultView } from './components/views/BlackVaultView';
import { EssaysView } from './components/views/EssaysView';
import { ExhibitionsView } from './components/views/ExhibitionsView';
import { PersonnelView } from './components/views/PersonnelView';

import { PrototypeModal } from './components/modals/PrototypeModal';
import { PatentModal } from './components/modals/PatentModal';
import { EssayModal } from './components/modals/EssayModal';
import { CommandPalette } from './components/modals/CommandPalette';

import { PROTOTYPES_ARCHIVE } from './data/prototypesData';
import { PATENTS_ARCHIVE } from './data/patentsData';
import { TECHNICAL_ESSAYS_ARCHIVE } from './data/essaysData';
import { PrototypeRecord, PatentDossier, TechnicalEssay } from './types/archive';
import { audioService } from './audio/audioEngine';

import { 
  Search, Volume2, VolumeX, Shield, Cpu, FileText, Activity, Radio, 
  AlertOctagon, BookOpen, Globe, Users, Zap, Terminal, Sparkles, Layers
} from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [benchInitialId, setBenchInitialId] = useState<string>('cavitation');

  // Selected modals
  const [selectedPrototype, setSelectedPrototype] = useState<PrototypeRecord | null>(null);
  const [selectedPatent, setSelectedPatent] = useState<PatentDossier | null>(null);
  const [selectedEssay, setSelectedEssay] = useState<TechnicalEssay | null>(null);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  // Audio Telemetry State
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    const m = audioService.toggleMute();
    setIsMuted(m);
  };

  const handleOpenPrototypeById = (protoId: string) => {
    const found = PROTOTYPES_ARCHIVE.find((p) => p.id === protoId || p.code === protoId);
    if (found) setSelectedPrototype(found);
  };

  const handleOpenPatentByNum = (patentNum: string) => {
    const found = PATENTS_ARCHIVE.find((p) => p.patentNumber === patentNum);
    if (found) setSelectedPatent(found);
  };

  const handleOpenEssayById = (essayId: string) => {
    const found = TECHNICAL_ESSAYS_ARCHIVE.find((e) => e.id === essayId || e.doi === essayId);
    if (found) setSelectedEssay(found);
  };

  const handleLaunchBench = (preset: string) => {
    setBenchInitialId(preset);
    setActiveTab('bench');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'overview', label: '00 // Dossier Overview', icon: Terminal, count: null },
    { id: 'prototypes', label: '01 // Prototypes', icon: Cpu, count: '128' },
    { id: 'patents', label: '02 // Speculative Patents', icon: FileText, count: '78' },
    { id: 'bench', label: '03 // Interactive Audio Bench', icon: Zap, count: '6 LIVE' },
    { id: 'logs', label: '04 // Lab Notebooks', icon: Activity, count: '264' },
    { id: 'field', label: '05 // Remote Field Posts', icon: Radio, count: '14' },
    { id: 'vault', label: '06 // Black Vault', icon: AlertOctagon, count: '18 HAZ' },
    { id: 'essays', label: '07 // Technical Monographs', icon: BookOpen, count: '8' },
    { id: 'exhibitions', label: '08 // Public Infrastructure', icon: Globe, count: '16' },
    { id: 'personnel', label: '09 // Fellowship Faculty', icon: Users, count: '12' }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-300 font-mono-code flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Institutional Header */}
      <header className="border-b border-slate-800 bg-[#090d14]/95 backdrop-blur-md sticky top-0 z-40">
        {/* Urgent Telemetry Ticker Ribbon */}
        <div className="bg-[#05070b] border-b border-slate-800/80 px-4 py-1 text-[10px] flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              ZIAA ARCHIVAL TELEMETRY:
            </span>
            <span className="truncate text-slate-400">
              ROTTERDAM CLEANROOM PASSIVE // 48kHz SAMPLING // 128 PROTOTYPES PRESERVED // EMBARGO DIRECTIVE SEC-IV ACTIVE
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <span>PRESS <kbd className="px-1 py-0.5 bg-slate-800 border border-slate-700 rounded text-[9px] text-slate-300 font-bold">⌘K</kbd> OR <kbd className="px-1 py-0.5 bg-slate-800 border border-slate-700 rounded text-[9px] text-slate-300 font-bold">CTRL+K</kbd> TO SEARCH</span>
            <span className="text-amber-400/90 font-bold">5-YEAR ARCHIVE (2021–2026)</span>
          </div>
        </div>

        {/* Main Header Brand Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <div 
            onClick={() => setActiveTab('overview')}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            {/* Custom SVG Institutional Insignia Seal */}
            <div className="w-10 h-10 shrink-0 relative flex items-center justify-center bg-[#0d1420] border border-cyan-500/50 rounded group-hover:border-cyan-400 transition-colors shadow-lg shadow-cyan-950/40">
              <svg viewBox="0 0 40 40" className="w-7 h-7">
                <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="none" stroke="#00e5ff" strokeWidth="1.5" />
                <circle cx="20" cy="20" r="9" fill="none" stroke="#d4a359" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M12 20 C15 13, 17 27, 20 20 C23 13, 25 27, 28 20" fill="none" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="20" cy="20" r="2" fill="#ff4d4d" />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-insignia text-lg sm:text-xl font-bold tracking-wider text-slate-100 group-hover:text-cyan-300 transition-colors">
                  ZIAA
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 bg-slate-800 text-slate-300 text-[9px] rounded font-mono-code font-bold tracking-widest">
                  SEC-IV
                </span>
                <span className="text-slate-400 text-xs hidden md:inline">
                  // Zazie Institute of Applied Anomalies
                </span>
              </div>
              <div className="text-[10px] text-slate-400 tracking-wider">
                R&D DIVISION OF <strong className="text-amber-400 font-normal">ZAZIE PRODUCTIONS LLC</strong> • SPECULATIVE ACOUSTICS
              </div>
            </div>
          </div>

          {/* Quick Header Actions: Search, Audio Telemetry, Mobile Menu */}
          <div className="flex items-center gap-2.5">
            {/* Search Trigger Button */}
            <button
              onClick={() => setIsCommandOpen(true)}
              className="py-1.5 px-3 bg-[#0d131f] hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/60 text-slate-300 rounded flex items-center gap-2 transition-all cursor-pointer text-xs"
              title="Search entire archive"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Search Archive</span>
              <kbd className="hidden md:inline px-1 bg-slate-800 text-[10px] text-slate-400 rounded">⌘K</kbd>
            </button>

            {/* Audio Engine Mute/Unmute */}
            <button
              onClick={toggleMute}
              className={`p-2 rounded border transition-colors cursor-pointer ${
                isMuted
                  ? 'bg-red-950 border-red-800 text-red-400'
                  : 'bg-[#0d131f] border-slate-700/80 text-cyan-400 hover:text-white'
              }`}
              title={isMuted ? 'Unmute Institutional Audio' : 'Mute Institutional Audio'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Horizontal Navigation Tab Bar */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto flex items-center border-t border-slate-800/80 scrollbar-none">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const IconComp = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`py-2.5 px-3 whitespace-nowrap text-xs flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
                  isActive
                    ? 'border-cyan-400 text-cyan-300 bg-cyan-950/20 font-bold'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.count && (
                  <span className={`px-1.5 py-0.2 rounded text-[9px] ${
                    isActive ? 'bg-cyan-900/60 text-cyan-200' : 'bg-slate-800/80 text-slate-400'
                  }`}>
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Main Body Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'overview' && (
          <OverviewView
            onNavigateTab={setActiveTab}
            onOpenPrototype={handleOpenPrototypeById}
            onOpenPatent={handleOpenPatentByNum}
          />
        )}

        {activeTab === 'prototypes' && (
          <PrototypesView
            onSelectPrototype={(proto) => setSelectedPrototype(proto)}
            onLaunchBench={handleLaunchBench}
          />
        )}

        {activeTab === 'patents' && (
          <PatentsView
            onSelectPatent={(pat) => setSelectedPatent(pat)}
          />
        )}

        {activeTab === 'bench' && (
          <InteractiveBenchView initialBenchId={benchInitialId} />
        )}

        {activeTab === 'logs' && <LogsView />}

        {activeTab === 'field' && <FieldReportsView />}

        {activeTab === 'vault' && <BlackVaultView />}

        {activeTab === 'essays' && (
          <EssaysView onSelectEssay={(essay) => setSelectedEssay(essay)} />
        )}

        {activeTab === 'exhibitions' && <ExhibitionsView />}

        {activeTab === 'personnel' && <PersonnelView />}
      </main>

      {/* Institutional Archival Footer */}
      <footer className="border-t border-slate-800 bg-[#05070c] py-10 text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6 border-b border-slate-800/80">
            <div className="space-y-2 md:col-span-2">
              <div className="flex items-center gap-2">
                <span className="font-insignia text-sm font-bold text-slate-200">
                  ZAZIE INSTITUTE OF APPLIED ANOMALIES
                </span>
                <span className="px-1.5 py-0.5 bg-slate-800 text-slate-300 text-[9px] rounded">
                  EST. 2021
                </span>
              </div>
              <p className="font-academic text-xs text-slate-400 leading-relaxed max-w-lg">
                Independent laboratory for experimental audio technologies, creative tools, speculative patents, perceptual interfaces, signal archaeology, material research, generative composition systems, and public listening infrastructure. The R&D division of <strong>Zazie Productions LLC</strong>.
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-slate-300 mb-1">ARCHIVAL INVENTORY</div>
              <div>• 128 Physical Prototype Records</div>
              <div>• 78 Speculative Patent Dossiers</div>
              <div>• 264 Chronological Lab Notebooks</div>
              <div>• 14 Global Remote Field Posts</div>
              <div>• 18 Decommissioned Black Vault Anomalies</div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-slate-300 mb-1">FACILITY LOCATIONS</div>
              <div>• Main Lab Hangar: Rotterdam, Netherlands</div>
              <div>• Infrasound Array: Svalbard Archipelago</div>
              <div>• Cistern Acoustics Post: Venice, Italy</div>
              <div>• Cleanroom CNC Facility: Zurich, Switzerland</div>
              <div>• High-Pressure Tank: Mariana Abyssal Node</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px]">
            <div>
              © 2021–2026 Zazie Productions LLC. All speculative acoustic claims registered under ISO-10209.
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span>CLEARANCE: LEVEL I — IV</span>
              <span>NO AI GENERATED ASSETS</span>
              <span>WEB AUDIO ENGINE v5.4</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals & Command Palette */}
      <PrototypeModal
        prototype={selectedPrototype}
        onClose={() => setSelectedPrototype(null)}
        onLaunchBench={handleLaunchBench}
        onSelectPatent={handleOpenPatentByNum}
        onSelectLog={(logId) => {
          setSelectedPrototype(null);
          setActiveTab('logs');
        }}
      />

      <PatentModal
        patent={selectedPatent}
        onClose={() => setSelectedPatent(null)}
        onSelectPrototype={handleOpenPrototypeById}
      />

      <EssayModal
        essay={selectedEssay}
        onClose={() => setSelectedEssay(null)}
      />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onSelectPrototype={handleOpenPrototypeById}
        onSelectPatent={handleOpenPatentByNum}
        onSelectEssay={handleOpenEssayById}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}

export default App;
