import React from 'react';
import { Shield, Cpu, FileText, Activity, Radio, AlertOctagon, BookOpen, Globe, ArrowUpRight, Play, Terminal, Layers } from 'lucide-react';
import { audioService } from '../../audio/audioEngine';

interface OverviewViewProps {
  onNavigateTab: (tab: string) => void;
  onOpenPrototype: (id: string) => void;
  onOpenPatent: (patentNum: string) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  onNavigateTab,
  onOpenPrototype,
  onOpenPatent
}) => {
  return (
    <div className="space-y-8 font-mono-code text-xs">
      {/* Restoration Notice Strip */}
      <div className="border border-cyan-700/60 bg-gradient-to-r from-[#160f05] to-[#0a0908] p-3.5 rounded-sm flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[11px]">
        <span className="stamp-embargo text-[10px] shrink-0">RESTORED</span>
        <p className="text-slate-300 leading-relaxed font-academic">
          <strong className="text-cyan-300">Public notice, 2026-09-14:</strong> this domain resolved for the first time since the 2006-11-30 termination of Global Paradigms Corp., serving its last-good archive image (2006-03-14, drift 0.00). No registrant has identified itself. The archive is complete, truthful to the limits of its clearances, and unattended.
        </p>
      </div>

      {/* Institutional Hero Banner */}
      <div className="border border-slate-700 bg-gradient-to-b from-[#0e131d] to-[#080b11] p-6 sm:p-8 rounded-sm relative overflow-hidden shadow-2xl">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-archival opacity-40 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="stamp-embargo text-[10px]">DECLASSIFIED ARCHIVE</span>
              <span className="text-amber-400 font-bold tracking-wider">CHARTERED 1998 // TERMINATED 2006</span>
              <span className="text-slate-400">• GENEVA / GANDER / COLORADO / SÃO PAULO</span>
            </div>

            <h1 className="font-academic text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight leading-none">
              Global Paradigms <span className="text-cyan-400">Corp.</span>
            </h1>

            <p className="font-academic text-base sm:text-lg text-slate-300 leading-relaxed">
              Multinational consultancy for <strong>strategic forecasting</strong>, <strong>civic continuity</strong>, <strong>behavioral research</strong>, and <strong>environmental audio</strong>. We did not sell certainty. We sold the institution's ability to be wrong, quickly and cheaply, forever. <em>Order from Anticipation.</em>
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigateTab('bench')}
                className="py-2.5 px-5 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold rounded flex items-center gap-2 cursor-pointer transition-all shadow-lg shadow-amber-900/40 text-xs"
              >
                <Play className="w-4 h-4 fill-slate-950" /> OPEN AUDIO SYSTEMS BENCH (6 ENGINES)
              </button>

              <button
                onClick={() => onNavigateTab('prototypes')}
                className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 flex items-center gap-2 cursor-pointer transition-colors text-xs"
              >
                <Cpu className="w-4 h-4 text-amber-400" /> EXPLORE 128 PROGRAMS
              </button>
            </div>
          </div>

          {/* Institutional Badge & Telemetry Box */}
          <div className="border border-slate-700 bg-black/60 p-5 rounded-sm lg:w-80 shrink-0 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400 text-[10px]">FACILITY STATUS</span>
              <span className="text-emerald-400 text-[10px] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE // UNATTENDED
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div>
                <span className="text-slate-400 text-[10px] block">OPERATIONAL YEARS:</span>
                <span className="font-bold text-slate-200">1998 – 2006 (8 YRS)</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">CLEARANCE TIER:</span>
                <span className="font-bold text-cyan-400">LEVEL I — IV</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">SILENCE DURATION:</span>
                <span className="font-bold text-amber-300">7,319 DAYS</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">SNAPSHOT DRIFT:</span>
                <span className="font-bold text-purple-300">0.00%</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[10px]">
              <span className="text-slate-400">SYSTEM CLOCK:</span>
              <span className="text-amber-400 font-mono-code">2026.09.25 UTC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          { label: 'Programs Cataloged', value: '128', icon: Cpu, tab: 'prototypes', color: 'text-amber-400', border: 'hover:border-amber-500/60' },
          { label: 'Patent Filings', value: '78', icon: FileText, tab: 'patents', color: 'text-cyan-400', border: 'hover:border-cyan-500/60' },
          { label: 'Ledger Entries', value: '264', icon: Activity, tab: 'logs', color: 'text-emerald-400', border: 'hover:border-emerald-500/60' },
          { label: 'Field Stations', value: '14', icon: Radio, tab: 'field', color: 'text-sky-400', border: 'hover:border-sky-500/60' },
          { label: 'Sealed Vault Programs', value: '18', icon: AlertOctagon, tab: 'vault', color: 'text-red-400', border: 'hover:border-red-500/60' },
          { label: 'Client Installations', value: '16', icon: Globe, tab: 'exhibitions', color: 'text-purple-400', border: 'hover:border-purple-500/60' }
        ].map((metric) => {
          const IconComp = metric.icon;
          return (
            <div
              key={metric.label}
              onClick={() => onNavigateTab(metric.tab)}
              className={`p-4 bg-[#0a0d14] border border-slate-800 rounded-sm cursor-pointer transition-all ${metric.border} hover:bg-[#0f1420] group`}
            >
              <div className="flex items-center justify-between mb-2">
                <IconComp className={`w-4 h-4 ${metric.color}`} />
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-300 transition-colors" />
              </div>
              <div className={`text-2xl font-bold font-insignia ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                {metric.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured Core Disciplines */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <span className="font-insignia text-sm text-slate-200 font-bold tracking-wider">
              FOUR DIVISIONS // EIGHT PRACTICE SECTORS
            </span>
          </div>
          <span className="text-[10px] text-slate-400">8 SECTORS × 16 PROGRAMS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Predictive Modeling',
              count: '16 PROGRAMS // DIV A',
              desc: 'Bayesian consensus engines, error-absorption metrics, black swan registries, and long-range fiscal oracle arrays.',
              protoId: 'proto-001'
            },
            {
              title: 'Scenario Architecture',
              count: '16 PROGRAMS // DIV A',
              desc: 'Branching future corridors, red cell adversary consoles, wildcard injection decks, and after-action replay engines.',
              protoId: 'proto-017'
            },
            {
              title: 'Continuity Logistics',
              count: '16 PROGRAMS // DIV B',
              desc: 'Muster tones, succession roll-calls, perpetual hold-tone sustainers, and deep archive climate sonifiers.',
              protoId: 'proto-033'
            },
            {
              title: 'Emergency Broadcast Systems',
              count: '16 PROGRAMS // DIV B',
              desc: 'Dead-air sentinels, siren harmonic synchronizers, hijack-null relays, and last-resort message vault players.',
              protoId: 'proto-049'
            },
            {
              title: 'Behavioral Compliance',
              count: '16 PROGRAMS // DIV C',
              desc: 'Terminal crowd-flow automata, queue patience injection, wayfinding discipline, and anti-panic announcement compression.',
              protoId: 'proto-065'
            },
            {
              title: 'Opinion Topology',
              count: '16 PROGRAMS // DIV C',
              desc: 'Sentiment manifold plotters, dissent clustering spectrometers, rumor wind tunnels, and consensus crystallization chambers.',
              protoId: 'proto-081'
            },
            {
              title: 'Ambient Soundscaping',
              count: '16 PROGRAMS // DIV D',
              desc: 'Managed atriums, concourse calming canopies, arrival chime grids, and platform edge hum maskers for civic interiors.',
              protoId: 'proto-097'
            },
            {
              title: 'Subliminal Acoustics',
              count: '16 PROGRAMS // DIV D',
              desc: 'Threshold masking carriers, inaudible cue injectors, affirmation embedding consoles — research-mandated, ethics-board contested.',
              protoId: 'proto-113'
            }
          ].map((domain) => (
            <div
              key={domain.title}
              onClick={() => onOpenPrototype(domain.protoId)}
              className="p-4 bg-[#090d14] border border-slate-800/90 rounded-sm hover:border-slate-600 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] text-amber-400 font-bold mb-1.5">
                  <span>{domain.count}</span>
                  <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">INSPECT →</span>
                </div>
                <h3 className="font-academic text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors mb-2">
                  {domain.title}
                </h3>
                <p className="font-academic text-xs text-slate-400 leading-normal">
                  {domain.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Quick Audio Bench Showcase */}
      <div className="border border-slate-800 bg-[#080c13] p-5 rounded-sm">
        <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-slate-800 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="font-insignia text-sm text-slate-100 font-bold">
              AUDIO SYSTEMS BENCH // 6 RECOVERED ENGINES, STILL LIVE
            </span>
          </div>
          <button
            onClick={() => onNavigateTab('bench')}
            className="text-[11px] text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            Open Full Systems Suite →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { id: 'cavitation', name: 'Consensus Oscillator Array', code: 'GPC-PR-002', desc: 'Dual-oscillator non-reciprocal feedback synth modeling expert consensus consolidation, with biquad filter ladder and real-time Lissajous scope.' },
            { id: 'archaeology', name: 'Emergency Band Demodulator', code: 'GPC-PR-049', desc: 'Real-time shortwave and civil-defense band tuner, BFO heterodyne whistle, waterfall spectrogram, and Morse cipher recovery.' },
            { id: 'markov', name: 'Crowd-Flow Automata Matrix', code: 'GPC-PR-065', desc: '8x8 interactive generative sequencer modeling pedestrian compliance, with cellular evolution and microtonal wayfinding chimes.' },
            { id: 'shepard', name: 'Perpetual Hold-Tone Spiral', code: 'GPC-PR-033', desc: 'The retention spiral itself: perpetual ascending/descending auditory illusion with binaural entrainment. Found running in 2026.' },
            { id: 'raytracer', name: 'Atrium Ray-Tracer Convolver', code: 'GPC-PR-097', desc: 'Interactive civic-interior geometry tracing 48 ray bounces with audible multi-tap impulse response, as deployed in managed atriums.' },
            { id: 'microtonal', name: 'Compliance Interval Keyboard', code: 'GPC-PR-081', desc: 'Microtonal Bohlen-Pierce and Partch keyboard mapping survey compliance scales onto musical intervals.' }
          ].map((bench) => (
            <div
              key={bench.id}
              onClick={() => onNavigateTab('bench')}
              className="p-3.5 bg-[#0b1019] border border-slate-800 rounded hover:border-amber-500/70 transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-center text-[10px] mb-1">
                <span className="text-amber-400 font-bold">{bench.code}</span>
                <span className="px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded text-[9px] group-hover:bg-amber-950 group-hover:text-amber-300">
                  PLAYABLE
                </span>
              </div>
              <div className="font-academic text-sm font-bold text-slate-200 group-hover:text-white mb-1">
                {bench.name}
              </div>
              <p className="font-academic text-xs text-slate-400 line-clamp-2">
                {bench.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Clearance Hierarchy & Provenance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 border border-slate-800 bg-[#0a0d14] p-5 rounded-sm space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-insignia text-xs text-cyan-400 font-bold tracking-wider">
              CLEARANCE MATRIX & ARCHIVAL MANDATE
            </span>
            <Shield className="w-4 h-4 text-cyan-400" />
          </div>

          <div className="space-y-2.5 text-[11px]">
            <div className="p-2.5 bg-[#0e1420] border-l-2 border-emerald-500 rounded-r">
              <span className="font-bold text-emerald-400 block">LEVEL I // PUBLIC CLIENT INFRASTRUCTURE</span>
              <p className="text-slate-400 mt-0.5">
                Declassified for municipal grids, client estate tuning sheets, and the Pavilion of Probable Tomorrows record.
              </p>
            </div>

            <div className="p-2.5 bg-[#0e1420] border-l-2 border-amber-500 rounded-r">
              <span className="font-bold text-amber-400 block">LEVEL II // INTERNAL ANNEX BENCH</span>
              <p className="text-slate-400 mt-0.5">
                Standard apparatus operated within the Geneva Annex workshops and the fourteen registered field stations.
              </p>
            </div>

            <div className="p-2.5 bg-[#0e1420] border-l-2 border-cyan-500 rounded-r">
              <span className="font-bold text-cyan-400 block">LEVEL III // RESTRICTED CLIENT ENGAGEMENT</span>
              <p className="text-slate-400 mt-0.5">
                Behavioral programs, threshold research, and client telemetry released only to the limits of the engagement letter.
              </p>
            </div>

            <div className="p-2.5 bg-[#0e1420] border-l-2 border-red-500 rounded-r">
              <span className="font-bold text-red-400 block">LEVEL IV // CONTINUITY VAULT SEAL</span>
              <p className="text-slate-400 mt-0.5">
                Eighteen programs sealed under procedure D-99: overshoot, runaway feedback, emergent content, and ledgers that write themselves.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Provenance */}
        <div className="lg:col-span-5 border border-slate-800 bg-[#0a0d14] p-5 rounded-sm space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="font-insignia text-xs text-slate-300 font-bold tracking-wider">
                CORPORATE PROVENANCE
              </span>
              <span className="text-[10px] text-slate-400">GENEVA CHARTER #1998-044</span>
            </div>

            <p className="font-academic text-sm text-slate-300 leading-relaxed mb-3">
              <strong>Global Paradigms Corp.</strong> was chartered in Geneva in February 1998 on a single doctrine: institutions should be rehearsed, not reassured. On <strong>2006-11-30</strong>, Directive 99 ordered its immediate and quiet termination. The corporation complied with its own doctrine, and archived itself perfectly.
            </p>

            <p className="font-academic text-xs text-slate-400 leading-relaxed">
              This archive is served by an unattended caretaker process. Directive 99 has never been revoked. The former staff are asked, in plain text, to identify themselves.
            </p>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
            <span>ARCHIVE IMAGE REV 2006.03.14</span>
            <span className="text-cyan-400 font-bold">ORDER FROM ANTICIPATION</span>
          </div>
        </div>
      </div>
    </div>
  );
};
