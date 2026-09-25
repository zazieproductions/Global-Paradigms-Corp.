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
import { InterceptsView } from './components/views/InterceptsView';
import { NightWatchView } from './components/views/NightWatchView';

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
  AlertOctagon, BookOpen, Globe, Users, Zap, Terminal, Sparkles, Layers,
  KeyRound, TerminalSquare
} from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [benchInitialId, setBenchInitialId] = useState<string>('cavitation');

  // Selected modals
  const [selectedPrototype, setSelectedPrototype] = useState<PrototypeRecord | null>(null);
  const [selectedPatent, setSelectedPatent] = useState<PatentDossier | null>(null);
  const [selectedEssay, setSelectedEssay] = useState<TechnicalEssay | null>(null);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  // The caretaker hears the word: type "identify" anywhere to reach the console.
  useEffect(() => {
    let buffer = '';
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT')) return;
      if (e.key.length !== 1) return;
      buffer = (buffer + e.key.toLowerCase()).slice(-10);
      if (buffer.endsWith('identify')) {
        buffer = '';
        setActiveTab('nightwatch');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
    { id: 'prototypes', label: '01 // Programs', icon: Cpu, count: '128' },
    { id: 'patents', label: '02 // Patent Filings', icon: FileText, count: '78' },
    { id: 'bench', label: '03 // Audio Systems Bench', icon: Zap, count: '6 LIVE' },
    { id: 'logs', label: '04 // Operations Ledger', icon: Activity, count: '264' },
    { id: 'field', label: '05 // Field Stations', icon: Radio, count: '14' },
    { id: 'vault', label: '06 // Continuity Vault', icon: AlertOctagon, count: '18 SEALED' },
    { id: 'essays', label: '07 // White Papers', icon: BookOpen, count: '8' },
    { id: 'exhibitions', label: '08 // Client Installations', icon: Globe, count: '16' },
    { id: 'personnel', label: '09 // Division Staff', icon: Users, count: '12' },
    { id: 'intercepts', label: '10 // Signal Intercepts', icon: KeyRound, count: '3' },
    { id: 'nightwatch', label: '11 // Night-Watch', icon: TerminalSquare, count: 'Ω' }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-300 font-mono-code flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Institutional Header */}
      <header className="border-b border-slate-800 bg-[#090d14]/95 backdrop-blur-md sticky top-0 z-40">
        {/* Urgent Telemetry Ticker Ribbon */}
        <div className="bg-[#05070b] border-b border-slate-800/80 px-4 py-1 text-[10px] flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              GPC NETWORK TELEMETRY:
            </span>
            <span className="truncate text-slate-400">
              GENEVA ANNEX PASSIVE // SNAPSHOTTED 2006-03-14 // GANDER BEACON: TRANSMITTING // 3 INTERCEPTS CATALOGED // DIRECTIVE 99 UNREVOKED
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <span>PRESS <kbd className="px-1 py-0.5 bg-slate-800 border border-slate-700 rounded text-[9px] text-slate-300 font-bold">⌘K</kbd> OR <kbd className="px-1 py-0.5 bg-slate-800 border border-slate-700 rounded text-[9px] text-slate-300 font-bold">CTRL+K</kbd> TO SEARCH</span>
            <span className="text-cyan-400/90 font-bold">RESTORED 2026-09-14 // OPERATED 1998–2006</span>
          </div>
        </div>

        {/* Main Header Brand Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <div 
            onClick={() => setActiveTab('overview')}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            {/* Custom SVG Corporate Insignia Seal */}
            <div className="w-10 h-10 shrink-0 relative flex items-center justify-center bg-[#0d1420] border border-amber-500/50 rounded group-hover:border-amber-400 transition-colors shadow-lg shadow-amber-950/40">
              <svg viewBox="0 0 40 40" className="w-7 h-7">
                <circle cx="20" cy="20" r="17" fill="none" stroke="#ffb000" strokeWidth="1.5" />
                <ellipse cx="20" cy="20" rx="8" ry="17" fill="none" stroke="#d4a359" strokeWidth="1" />
                <line x1="3" y1="20" x2="37" y2="20" stroke="#d4a359" strokeWidth="1" />
                <path d="M10 20 C14 14, 16 26, 20 20 C24 14, 26 26, 30 20" fill="none" stroke="#ffb000" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="20" cy="20" r="2" fill="#ff4d4d" />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-insignia text-lg sm:text-xl font-bold tracking-wider text-slate-100 group-hover:text-amber-300 transition-colors">
                  GLOBAL PARADIGMS
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 bg-slate-800 text-slate-300 text-[9px] rounded font-mono-code font-bold tracking-widest">
                  CORP.
                </span>
                <span className="text-slate-400 text-xs hidden md:inline">
                  // Order From Anticipation
                </span>
              </div>
              <div className="text-[10px] text-slate-400 tracking-wider">
                STRATEGIC FORECASTING • CIVIC CONTINUITY • BEHAVIORAL RESEARCH • <strong className="text-cyan-400 font-normal">ENVIRONMENTAL AUDIO</strong>
              </div>
            </div>
          </div>

          {/* Quick Header Actions: Search, Audio Telemetry, Mobile Menu */}
          <div className="flex items-center gap-2.5">
            {/* Search Trigger Button */}
            <button
              onClick={() => setIsCommandOpen(true)}
              className="py-1.5 px-3 bg-[#0d131f] hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/60 text-slate-300 rounded flex items-center gap-2 transition-all cursor-pointer text-xs"
              title="Search entire archive"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Search Archive</span>
              <kbd className="hidden md:inline px-1 bg-slate-800 text-[10px] text-slate-400 rounded">⌘K</kbd>
            </button>

            {/* Audio Engine Mute/Unmute */}
            <button
              onClick={toggleMute}
              className={`p-2 rounded border transition-colors cursor-pointer ${
                isMuted
                  ? 'bg-red-950 border-red-800 text-red-400'
                  : 'bg-[#0d131f] border-slate-700/80 text-amber-400 hover:text-white'
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
                    ? 'border-amber-400 text-amber-300 bg-amber-950/20 font-bold'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.count && (
                  <span className={`px-1.5 py-0.2 rounded text-[9px] ${
                    isActive ? 'bg-amber-900/60 text-amber-200' : 'bg-slate-800/80 text-slate-400'
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

        {activeTab === 'intercepts' && (
          <InterceptsView onOpenNightWatch={() => { setActiveTab('nightwatch'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
        )}

        {activeTab === 'nightwatch' && (
          <NightWatchView onNavigateIntercepts={() => { setActiveTab('intercepts'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
        )}
      </main>

      {/* Institutional Archival Footer */}
      <footer className="border-t border-slate-800 bg-[#05070c] py-10 text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6 border-b border-slate-800/80">
            <div className="space-y-2 md:col-span-2">
              <div className="flex items-center gap-2">
                <span className="font-insignia text-sm font-bold text-slate-200">
                  GLOBAL PARADIGMS CORP.
                </span>
                <span className="px-1.5 py-0.5 bg-slate-800 text-slate-300 text-[9px] rounded">
                  EST. 1998 — TERMINATED 2006
                </span>
              </div>
              <p className="font-academic text-xs text-slate-400 leading-relaxed max-w-lg">
                Multinational consultancy for strategic forecasting, civic continuity, behavioral research, and environmental audio. Chartered in Geneva, 1998. Terminated by Directive 99, 2006-11-30. This archive is the complete declassified record, served unattended since 2026-09-14.
              </p>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-slate-300 mb-1">ARCHIVAL INVENTORY</div>
              <div>• 128 Program Apparatus Records</div>
              <div>• 78 Patent Filing Dossiers</div>
              <div>• 264 Operations Ledger Entries</div>
              <div>• 14 Global Field Stations</div>
              <div>• 18 Sealed Continuity Vault Programs</div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-slate-300 mb-1">REGISTERED ANNEXES</div>
              <div>• Headquarters: Palais des Paradigmes, Geneva</div>
              <div>• Continuity Bunker: Halcyon Ridge, Colorado</div>
              <div>• Quiet Bay & Beacon: Gander, Newfoundland</div>
              <div>• Broadcast Relay: São Sebastião, São Paulo</div>
              <div>• Forecast Floor: Reykjanes, Iceland</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px]">
            <div>
              © 1998–2006 Global Paradigms Corp. All claims registered under Charter Standard ES-77. Restored unattended 2026.
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span>CLEARANCE: LEVEL I — IV</span>
              <span>DIRECTIVE 99 UNREVOKED</span>
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
