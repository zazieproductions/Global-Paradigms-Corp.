import React, { useState, useEffect, useRef } from 'react';
import { Prototype1CavitationSynth } from '../prototypes/Prototype1CavitationSynth';
import { Prototype2SignalArchaeology } from '../prototypes/Prototype2SignalArchaeology';
import { Prototype3MarkovMatrix } from '../prototypes/Prototype3MarkovMatrix';
import { Prototype4ShepardSpiral } from '../prototypes/Prototype4ShepardSpiral';
import { Prototype5AcousticRayTracer } from '../prototypes/Prototype5AcousticRayTracer';
import { Prototype6MicrotonalScale } from '../prototypes/Prototype6MicrotonalScale';
import { audioService } from '../../audio/audioEngine';
import { Volume2, VolumeX, Play, Zap, Activity, Radio, Cpu, Compass, Layers, ShieldCheck } from 'lucide-react';

interface InteractiveBenchViewProps {
  initialBenchId?: string;
}

export const InteractiveBenchView: React.FC<InteractiveBenchViewProps> = ({
  initialBenchId = 'cavitation'
}) => {
  const [activeBench, setActiveBench] = useState<string>(initialBenchId);
  const [masterVol, setMasterVol] = useState(audioService.getVolume());
  const [isMuted, setIsMuted] = useState(audioService.getMuted());

  const spectrumCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleVolumeChange = (v: number) => {
    setMasterVol(v);
    audioService.setVolume(v);
  };

  const handleToggleMute = () => {
    const muted = audioService.toggleMute();
    setIsMuted(muted);
  };

  // Real-time Master Analyser Spectrum
  useEffect(() => {
    const canvas = spectrumCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = '#06090e';
      ctx.fillRect(0, 0, width, height);

      const analyser = audioService.getAnalyser();
      if (analyser) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        const barWidth = (width / 64) * 1.5;
        let x = 0;

        for (let i = 0; i < 64; i++) {
          const val = dataArray[i * 2] || 0;
          const barHeight = (val / 255) * height;

          // Gradient color from amber to cyan
          const r = Math.floor((val / 255) * 255);
          const g = Math.floor(180 + (val / 255) * 50);
          const b = Math.floor(255 - (val / 255) * 200);

          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.fillRect(x, height - barHeight, barWidth - 1, barHeight);

          x += barWidth;
        }
      } else {
        // Flatline
        ctx.strokeStyle = 'rgba(255, 176, 0, 0.2)';
        ctx.beginPath();
        ctx.moveTo(0, height - 2);
        ctx.lineTo(width, height - 2);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  const benches = [
    { id: 'cavitation', name: '01 // Consensus Oscillator', code: 'GPC-PR-002', icon: Activity },
    { id: 'archaeology', name: '02 // Emergency Demodulator', code: 'GPC-PR-049', icon: Radio },
    { id: 'markov', name: '03 // Crowd-Flow Automata', code: 'GPC-PR-065', icon: Cpu },
    { id: 'shepard', name: '04 // Hold-Tone Spiral', code: 'GPC-PR-033', icon: Compass },
    { id: 'raytracer', name: '05 // Atrium Ray-Tracer', code: 'GPC-PR-097', icon: Layers },
    { id: 'microtonal', name: '06 // Compliance Keyboard', code: 'GPC-PR-081', icon: Zap }
  ];

  return (
    <div className="space-y-6 font-mono-code text-xs">
      {/* Master Institutional Audio Telemetry Bar */}
      <div className="border border-slate-700 bg-[#0a0e16] p-4 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-950/60 border border-amber-800 rounded">
            <Volume2 className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-insignia text-sm text-slate-100 font-bold">
                MASTER AUDIO TELEMETRY CONSOLE
              </span>
              <span className="px-1.5 py-0.5 text-[9px] bg-emerald-950 text-emerald-400 border border-emerald-800 rounded font-bold">
                LOW-LATENCY DSP
              </span>
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">
              NATIVE WEB AUDIO API • 48.0 kHz 32-BIT FLOAT • SAFETY LIMITER: -12 dB
            </div>
          </div>
        </div>

        {/* Real-time spectrum monitor & Master controls */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Miniature spectrum canvas */}
          <div className="border border-slate-800 rounded overflow-hidden h-8 w-36 bg-black">
            <canvas ref={spectrumCanvasRef} width={144} height={32} className="w-full h-full block" />
          </div>

          {/* Volume slider */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleMute}
              className={`p-1.5 rounded border transition-colors cursor-pointer ${
                isMuted
                  ? 'bg-red-950 border-red-800 text-red-400'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
              }`}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : masterVol}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-24 accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded"
              title={`Master Gain: ${(masterVol * 100).toFixed(0)}%`}
            />
          </div>

          <button
            onClick={() => audioService.playAnomalyPing()}
            className="py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer text-[11px]"
          >
            <Zap className="w-3.5 h-3.5 text-cyan-400" /> INJECT TEST TONE
          </button>
        </div>
      </div>

      {/* Bench Instrument Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {benches.map((b) => {
          const IconC = b.icon;
          const isActive = activeBench === b.id;
          return (
            <button
              key={b.id}
              onClick={() => setActiveBench(b.id)}
              className={`p-3 text-left rounded-sm border transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-[#101726] border-amber-500 shadow-md shadow-amber-950/40 text-white'
                  : 'bg-[#090d14] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className="font-bold text-amber-400">{b.code}</span>
                <IconC className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
              </div>
              <div className="font-bold text-[11px] truncate">
                {b.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Prototype Playable Component */}
      <div>
        {activeBench === 'cavitation' && <Prototype1CavitationSynth />}
        {activeBench === 'archaeology' && <Prototype2SignalArchaeology />}
        {activeBench === 'markov' && <Prototype3MarkovMatrix />}
        {activeBench === 'shepard' && <Prototype4ShepardSpiral />}
        {activeBench === 'raytracer' && <Prototype5AcousticRayTracer />}
        {activeBench === 'microtonal' && <Prototype6MicrotonalScale />}
      </div>

      {/* Safety & Protocol Instructions */}
      <div className="border border-slate-800/80 bg-[#070a10] p-4 rounded-sm text-[11px] text-slate-400 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-200">SYSTEMS BENCH PROTOCOL:</strong> All six engines are recovered apparatus, synthesized in real time on the client Web Audio graph without external streaming. These engines were found in a runnable state in the 2006 archive image; the caretaker has made no modifications. Ensure master volume is set to a comfortable level before engaging continuous high-Q resonances — particularly the hold tone, which is noted for its retention characteristics.
        </div>
      </div>
    </div>
  );
};
