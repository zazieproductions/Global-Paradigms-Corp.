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
      {/* Institutional Hero Banner */}
      <div className="border border-slate-700 bg-gradient-to-b from-[#0e131d] to-[#080b11] p-6 sm:p-8 rounded-sm relative overflow-hidden shadow-2xl">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-archival opacity-40 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="stamp-embargo text-[10px]">DECLASSIFIED ARCHIVE</span>
              <span className="text-cyan-400 font-bold tracking-wider">FOUNDED 2021 // 5-YEAR COMPREHENSIVE DOSSIER</span>
              <span className="text-slate-400">• ROTTERDAM / SVALBARD / VENICE</span>
            </div>

            <h1 className="font-academic text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight leading-none">
              Zazie Institute of <span className="text-amber-400">Applied Anomalies</span>
            </h1>

            <p className="font-academic text-base sm:text-lg text-slate-300 leading-relaxed">
              The clandestine research & speculative acoustics division of <strong>Zazie Productions LLC</strong>. Operating across physical acoustic metamaterials, signal archaeology, psychoacoustic perceptual interfaces, non-Hermitian phononics, generative Markov automata, and public listening infrastructure.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigateTab('bench')}
                className="py-2.5 px-5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold rounded flex items-center gap-2 cursor-pointer transition-all shadow-lg shadow-cyan-900/40 text-xs"
              >
                <Play className="w-4 h-4 fill-slate-950" /> OPEN PLAYABLE AUDIO BENCHES (6 ENGINES)
              </button>

              <button
                onClick={() => onNavigateTab('prototypes')}
                className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 flex items-center gap-2 cursor-pointer transition-colors text-xs"
              >
                <Cpu className="w-4 h-4 text-cyan-400" /> EXPLORE 128 PROTOTYPES
              </button>
            </div>
          </div>

          {/* Institutional Badge & Telemetry Box */}
          <div className="border border-slate-700 bg-black/60 p-5 rounded-sm lg:w-80 shrink-0 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400 text-[10px]">FACILITY STATUS</span>
              <span className="text-emerald-400 text-[10px] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE // PASSIVE RECEPTION
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div>
                <span className="text-slate-400 text-[10px] block">OPERATIONAL YEARS:</span>
                <span className="font-bold text-slate-200">2021 – 2026 (5 YRS)</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">CLEARANCE TIER:</span>
                <span className="font-bold text-amber-400">LEVEL I — IV</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">MASTER IMPEDANCE:</span>
                <span className="font-bold text-cyan-300">415 RAYLS</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">CAVITATION HEADROOM:</span>
                <span className="font-bold text-purple-300">+34.8 dB</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[10px]">
              <span className="text-slate-400">SYSTEM CLOCK:</span>
              <span className="text-cyan-400 font-mono-code">2026.09.14 UTC</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Year Metric Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          { label: 'Prototypes Cataloged', value: '128', icon: Cpu, tab: 'prototypes', color: 'text-cyan-400', border: 'hover:border-cyan-500/60' },
          { label: 'Speculative Patents', value: '78', icon: FileText, tab: 'patents', color: 'text-amber-400', border: 'hover:border-amber-500/60' },
          { label: 'Lab Notebook Runs', value: '264', icon: Activity, tab: 'logs', color: 'text-emerald-400', border: 'hover:border-emerald-500/60' },
          { label: 'Remote Field Posts', value: '14', icon: Radio, tab: 'field', color: 'text-sky-400', border: 'hover:border-sky-500/60' },
          { label: 'Black Vault Anomalies', value: '18', icon: AlertOctagon, tab: 'vault', color: 'text-red-400', border: 'hover:border-red-500/60' },
          { label: 'Public Exhibitions', value: '16', icon: Globe, tab: 'exhibitions', color: 'text-purple-400', border: 'hover:border-purple-500/60' }
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
              PRIMARY RESEARCH DOMAINS & ANOMALOUS ACCREDITATIONS
            </span>
          </div>
          <span className="text-[10px] text-slate-400">8 DISCIPLINARY VECTORS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Acoustic Metamaterials',
              count: '16 PROTOTYPES',
              desc: 'Sub-wavelength phononic crystals, pentamode lattices, negative-mass resonators, and acoustic cloaking shells.',
              protoId: 'proto-001'
            },
            {
              title: 'Signal Archaeology',
              count: '16 PROTOTYPES',
              desc: 'Extraction of discarded Cold War carriers, telluric earth currents, VLF whistlers, and magnetic wire decoding.',
              protoId: 'proto-017'
            },
            {
              title: 'Perceptual Interfaces',
              count: '16 PROTOTYPES',
              desc: 'Continuous Shepard-Risset pitch spirals, cranial bone spatialization, vestibular perturbation, and infrasonic threshold pods.',
              protoId: 'proto-033'
            },
            {
              title: 'Generative Composition',
              count: '16 PROTOTYPES',
              desc: 'Stochastic Markov automata, cellular Turing reaction patterns, Fibonacci delay networks, and chaotic attractors.',
              protoId: 'proto-049'
            },
            {
              title: 'Public Infrastructure',
              count: '16 PROTOTYPES',
              desc: 'Subterranean cistern waveguides, urban acoustic shadow benches, rain-activated monuments, and harbor tuning arrays.',
              protoId: 'proto-065'
            },
            {
              title: 'Bio-Magnetic Transduction',
              count: '16 PROTOTYPES',
              desc: 'Mycelial hyphae action potential sonification, plant xylem cavitation sensors, and ferrofluid membrane transducers.',
              protoId: 'proto-081'
            },
            {
              title: 'Infrasonics & Seismology',
              count: '16 PROTOTYPES',
              desc: 'Permafrost cracking arrays, volcanic plume micro-barographs, continental plate shear taps, and ocean microseisms.',
              protoId: 'proto-097'
            },
            {
              title: 'Quantum-Stochastic Acoustics',
              count: '16 PROTOTYPES',
              desc: 'Optomechanical phonon cooling to quantum ground state, squeezed acoustic states, and Casimir force sensors.',
              protoId: 'proto-113'
            }
          ].map((domain) => (
            <div
              key={domain.title}
              onClick={() => onOpenPrototype(domain.protoId)}
              className="p-4 bg-[#090d14] border border-slate-800/90 rounded-sm hover:border-slate-600 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] text-cyan-400 font-bold mb-1.5">
                  <span>{domain.count}</span>
                  <span className="text-slate-400 group-hover:text-amber-400 transition-colors">INSPECT →</span>
                </div>
                <h3 className="font-academic text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
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

      {/* Interactive Quick Audio Lab Showcase */}
      <div className="border border-slate-800 bg-[#080c13] p-5 rounded-sm">
        <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-slate-800 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-insignia text-sm text-slate-100 font-bold">
              INTERACTIVE TEST BENCH SUITE // 6 LIVE ACOUSTIC INSTRUMENTS
            </span>
          </div>
          <button
            onClick={() => onNavigateTab('bench')}
            className="text-[11px] text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            Open Full Experimental Suite →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { id: 'cavitation', name: 'Non-Hermitian Cavitation Synth', code: 'PR-003', desc: 'Dual-oscillator non-reciprocal feedback with biquad filter ladder and real-time Lissajous scope.' },
            { id: 'archaeology', name: 'Signal Archaeology Demodulator', code: 'PR-017', desc: 'Real-time shortwave tuner, BFO heterodyne whistle, waterfall spectrogram, and Morse cipher.' },
            { id: 'markov', name: 'Markov Cellular Automata Matrix', code: 'PR-049', desc: '8x8 interactive generative acoustic sequencer with Conway Life evolution and microtonal chimes.' },
            { id: 'shepard', name: 'Continuous Shepard Pitch Spiral', code: 'PR-033', desc: 'Perpetual ascending/descending auditory illusion with binaural entrainment and 4.2Hz anomaly.' },
            { id: 'raytracer', name: '2D Acoustic Ray-Tracer Convolver', code: 'PR-065', desc: 'Interactive room geometry tracing 48 ray bounces with audible multi-tap impulse response.' },
            { id: 'microtonal', name: 'Bio-Magnetic Myoelectric Transducer', code: 'PR-081', desc: 'Microtonal Bohlen-Pierce and Partch keyboard driven by simulated mycelial action potential spikes.' }
          ].map((bench) => (
            <div
              key={bench.id}
              onClick={() => onNavigateTab('bench')}
              className="p-3.5 bg-[#0b1019] border border-slate-800 rounded hover:border-cyan-500/70 transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-center text-[10px] mb-1">
                <span className="text-cyan-400 font-bold">{bench.code}</span>
                <span className="px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded text-[9px] group-hover:bg-cyan-950 group-hover:text-cyan-300">
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
            <span className="font-insignia text-xs text-amber-400 font-bold tracking-wider">
              CLEARANCE MATRIX & ARCHIVAL MANDATE
            </span>
            <Shield className="w-4 h-4 text-amber-400" />
          </div>

          <div className="space-y-2.5 text-[11px]">
            <div className="p-2.5 bg-[#0e1420] border-l-2 border-emerald-500 rounded-r">
              <span className="font-bold text-emerald-400 block">LEVEL I // PUBLIC CIVIC INFRASTRUCTURE</span>
              <p className="text-slate-400 mt-0.5">
                Declassified for municipal acoustic installations, public sound pavilions, and museum exhibitions.
              </p>
            </div>

            <div className="p-2.5 bg-[#0e1420] border-l-2 border-cyan-500 rounded-r">
              <span className="font-bold text-cyan-400 block">LEVEL II // INTERNAL FELLOWSHIP BENCH</span>
              <p className="text-slate-400 mt-0.5">
                Standard experimental apparatus operated within ZIAA Rotterdam laboratories and remote field stations.
              </p>
            </div>

            <div className="p-2.5 bg-[#0e1420] border-l-2 border-amber-500 rounded-r">
              <span className="font-bold text-amber-400 block">LEVEL III // RESTRICTED SPECULATIVE EMBARGO</span>
              <p className="text-slate-400 mt-0.5">
                High-power cavitation systems, quantum phononics, and biological transduction interfaces.
              </p>
            </div>

            <div className="p-2.5 bg-[#0e1420] border-l-2 border-red-500 rounded-r">
              <span className="font-bold text-red-400 block">LEVEL IV // BLACK VAULT CONTAINMENT</span>
              <p className="text-slate-400 mt-0.5">
                Decommissioned prototypes exhibiting structural rupture, soil liquefaction, or persistent somatic hazards.
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Corporate Provenance */}
        <div className="lg:col-span-5 border border-slate-800 bg-[#0a0d14] p-5 rounded-sm space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="font-insignia text-xs text-slate-300 font-bold tracking-wider">
                CORPORATE PROVENANCE
              </span>
              <span className="text-[10px] text-slate-400">LLC CHARTER #2021-998</span>
            </div>

            <p className="font-academic text-sm text-slate-300 leading-relaxed mb-3">
              The <strong>Zazie Institute of Applied Anomalies</strong> was chartered in January 2021 as the autonomous speculative physics and experimental audio engineering division of <strong>Zazie Productions LLC</strong>.
            </p>

            <p className="font-academic text-xs text-slate-400 leading-relaxed">
              All patent claims, prototypes, and field recordings published in this archive represent non-commercial speculative research conducted under institutional oversight.
            </p>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
            <span>OFFICIAL ARCHIVE REVISION 5.4.1</span>
            <span className="text-amber-400 font-bold">ZAZIE PRODUCTIONS LLC</span>
          </div>
        </div>
      </div>
    </div>
  );
};
