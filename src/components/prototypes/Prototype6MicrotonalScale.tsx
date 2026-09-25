import React, { useState, useEffect, useRef } from 'react';
import { audioService } from '../../audio/audioEngine';
import { Activity, Zap, Play, Square, Volume2, Sparkles, Sliders } from 'lucide-react';

interface ScaleDefinition {
  name: string;
  description: string;
  baseFreq: number;
  ratios: number[];
  noteLabels: string[];
}

const SCALES: Record<string, ScaleDefinition> = {
  bohlenPierce: {
    name: 'Bohlen-Pierce (Tritave 3:1)',
    description: 'Non-octave tuning dividing a 3:1 frequency ratio into 13 equal or consonant steps.',
    baseFreq: 220,
    ratios: [1.0, 1.088, 1.184, 1.289, 1.403, 1.527, 1.662, 1.809, 1.969, 2.143, 2.333, 2.539, 2.764, 3.0],
    noteLabels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'TRITAVE']
  },
  justIntonation: {
    name: 'Harry Partch 43-Tone Just Selection',
    description: 'Pure rational intervals based on primes 3, 5, 7, and 11 without tempered beating.',
    baseFreq: 196, // G3
    ratios: [1.0, 16/15, 9/8, 6/5, 5/4, 4/3, 7/5, 3/2, 8/5, 5/3, 7/4, 15/8, 2.0],
    noteLabels: ['1/1', '16/15', '9/8', '6/5', '5/4', '4/3', '7/5', '3/2', '8/5', '5/3', '7/4', '15/8', '2/1']
  },
  edo19: {
    name: '19-Tone Equal Temperament (19-EDO)',
    description: 'Superior 3rd and 6th harmonic approximations that eliminate Pythagorean comma dissonance.',
    baseFreq: 261.63, // Middle C
    ratios: Array.from({ length: 19 }, (_, i) => Math.pow(2, i / 19)),
    noteLabels: ['C', 'C♯', 'D♭', 'D', 'D♯', 'E♭', 'E', 'E♯', 'F', 'F♯', 'G♭', 'G', 'G♯', 'A♭', 'A', 'A♯', 'B♭', 'B', 'B♯']
  },
  seismicSub: {
    name: 'Sub-Harmonic Seismo-Acoustic',
    description: 'Deep fundamental divisions modeling tectonic shear waves and basalt fractures.',
    baseFreq: 55, // A1
    ratios: [1.0, 1.125, 1.25, 1.333, 1.5, 1.667, 1.875, 2.0, 2.25, 2.5, 2.75, 3.0],
    noteLabels: ['FLT-1', 'FLT-2', 'FLT-3', 'FLT-4', 'FLT-5', 'FLT-6', 'FLT-7', 'FLT-8', 'FLT-9', 'FLT-10', 'FLT-11', 'FLT-12']
  }
};

export const Prototype6MicrotonalScale: React.FC = () => {
  const [selectedScaleKey, setSelectedScaleKey] = useState<string>('bohlenPierce');
  const [activeNote, setActiveNote] = useState<number | null>(null);
  const [bioVoltage, setBioVoltage] = useState(1.42); // mV
  const [continuousDrone, setContinuousDrone] = useState(false);
  const [timbreMode, setTimbreMode] = useState<'hyphae' | 'collagen' | 'metallic'>('hyphae');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const droneOscRef = useRef<OscillatorNode | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);
  const droneFilterRef = useRef<BiquadFilterNode | null>(null);

  const scale = SCALES[selectedScaleKey];

  // Play a single microtonal key
  const playKey = (ratio: number, idx: number) => {
    setActiveNote(idx);
    try {
      const ctx = audioService.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      const freq = scale.baseFreq * ratio * (1 + (bioVoltage - 1.0) * 0.02);

      osc.type = timbreMode === 'hyphae' ? 'triangle' : timbreMode === 'collagen' ? 'sine' : 'sawtooth';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(freq * 3.2, ctx.currentTime);
      filter.Q.setValueAtTime(4.0, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioService.getMasterInput());

      osc.start();
      osc.stop(ctx.currentTime + 0.75);

      setTimeout(() => {
        setActiveNote((prev) => (prev === idx ? null : prev));
      }, 400);
    } catch {
      // AudioContext state
    }
  };

  // Continuous drone mode
  const toggleDrone = () => {
    if (continuousDrone) {
      if (droneGainRef.current) {
        const ctx = audioService.getContext();
        droneGainRef.current.gain.setValueAtTime(droneGainRef.current.gain.value, ctx.currentTime);
        droneGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);
        setTimeout(() => {
          droneOscRef.current?.stop();
          droneOscRef.current?.disconnect();
          droneOscRef.current = null;
        }, 120);
      }
      setContinuousDrone(false);
    } else {
      try {
        const ctx = audioService.getContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(scale.baseFreq, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(scale.baseFreq * 2.8, ctx.currentTime);
        filter.Q.setValueAtTime(6.0, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.1);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioService.getMasterInput());

        osc.start();

        droneOscRef.current = osc;
        droneGainRef.current = gain;
        droneFilterRef.current = filter;

        setContinuousDrone(true);
      } catch {
        // audio context
      }
    }
  };

  // Inject bio-voltage action potential spike
  const injectSpike = () => {
    setBioVoltage(3.85); // Spike up
    if (droneOscRef.current && droneFilterRef.current) {
      const ctx = audioService.getContext();
      droneOscRef.current.frequency.setTargetAtTime(scale.baseFreq * 1.08, ctx.currentTime, 0.05);
      droneFilterRef.current.frequency.setTargetAtTime(scale.baseFreq * 6.5, ctx.currentTime, 0.05);
      setTimeout(() => {
        droneOscRef.current?.frequency.setTargetAtTime(scale.baseFreq, ctx.currentTime + 0.4, 0.2);
        droneFilterRef.current?.frequency.setTargetAtTime(scale.baseFreq * 2.8, ctx.currentTime + 0.4, 0.2);
        setBioVoltage(1.42);
      }, 500);
    } else {
      setTimeout(() => setBioVoltage(1.42), 600);
    }
    audioService.playBlip(540, 'triangle', 0.15);
  };

  // Canvas Bio-Voltage Waveform simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let offset = 0;
    let animId: number;

    const render = () => {
      offset += 0.05;
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = '#080c12';
      ctx.fillRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += 20) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Draw simulated mycelial action potential curve
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#10b981';
      ctx.shadowBlur = 6;
      ctx.beginPath();

      const centerY = height / 2;
      for (let x = 0; x < width; x++) {
        // Slow biological baseline wander + occasional spike burst
        const wander = Math.sin((x * 0.02) + offset * 0.5) * 12;
        const noise = (Math.random() - 0.5) * 3;
        const spike = bioVoltage > 2.0 && Math.abs(x - width * 0.6) < 40
          ? Math.sin(((x - width * 0.6) / 40) * Math.PI) * (bioVoltage * 15)
          : 0;

        const y = centerY - wander - noise - spike;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [bioVoltage]);

  return (
    <div className="border border-slate-800 bg-[#090d14] p-5 rounded-sm shadow-xl font-mono-code text-xs">
      <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-slate-800 gap-2">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-insignia text-sm tracking-wider text-slate-100 font-bold">
            SYSTEMS BENCH 06 // COMPLIANCE INTERVAL KEYBOARD
          </span>
          <span className="px-2 py-0.5 text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 rounded">
            GPC-PR-081
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400">MEMBRANE POTENTIAL:</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
            {bioVoltage.toFixed(2)} mV [POLARIZED]
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Scale Tuning Keyboard & Canvas */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Bio Potential Oscilloscope Canvas */}
          <div className="relative border border-slate-800 bg-black rounded-sm overflow-hidden min-h-[140px] mb-3">
            <canvas ref={canvasRef} width={500} height={140} className="w-full h-full block" />
            <div className="absolute top-2 left-2 text-[10px] text-emerald-400 font-mono-code bg-black/60 px-1.5 py-0.5 rounded">
              MYCELIAL HYPHAE ACTION POTENTIAL // ELECTROPHYSIOLOGY BUFFER
            </div>
            <div className="absolute top-2 right-2 text-[10px] text-amber-400 font-mono-code bg-black/60 px-1.5 py-0.5 rounded">
              BASE: {scale.baseFreq.toFixed(1)} Hz
            </div>
          </div>

          {/* Interactive Microtonal Keyboard Tiles */}
          <div className="border border-slate-800 p-2.5 bg-black/50 rounded-sm">
            <div className="text-[10px] text-slate-400 mb-2 flex justify-between">
              <span>PLAYABLE MICROTONAL INTERVALS ({scale.name}):</span>
              <span className="text-emerald-400">CLICK/TAP KEY TO TRIGGER</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {scale.ratios.map((ratio, idx) => {
                const noteFreq = (scale.baseFreq * ratio).toFixed(1);
                const isPressed = activeNote === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => playKey(ratio, idx)}
                    className={`flex-1 min-w-[42px] py-3 px-1 rounded-sm text-center border transition-all cursor-pointer ${
                      isPressed
                        ? 'bg-emerald-400 text-slate-950 border-white shadow-lg shadow-emerald-400/50 scale-105 font-bold'
                        : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-emerald-500/60 hover:text-white'
                    }`}
                  >
                    <div className="text-[11px] font-bold truncate">{scale.noteLabels[idx] || idx + 1}</div>
                    <div className="text-[9px] text-slate-400 truncate mt-0.5">{noteFreq}Hz</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Microtonal Engine Parameters */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3 bg-[#080b12] p-3.5 border border-slate-800/80 rounded-sm">
          {/* Tuning selector */}
          <div>
            <span className="text-slate-400 block mb-1.5">MICROTONAL TUNING MATRIX:</span>
            <div className="space-y-1">
              {Object.entries(SCALES).map(([key, sc]) => (
                <button
                  key={key}
                  onClick={() => setSelectedScaleKey(key)}
                  className={`w-full p-2 text-left rounded border transition-all ${
                    selectedScaleKey === key
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/70 font-bold'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <div className="font-semibold text-[11px]">{sc.name}</div>
                  <div className="text-[9px] text-slate-400 truncate">{sc.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Timbre synthesis mode */}
          <div>
            <span className="text-slate-400 block mb-1">TRANSDUCTION SUBSTRATE:</span>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'hyphae' as const, name: 'Fungal Hyphae' },
                { id: 'collagen' as const, name: 'Bio-Collagen' },
                { id: 'metallic' as const, name: 'Bismuth Alloy' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTimbreMode(t.id)}
                  className={`py-1 text-center rounded text-[10px] border transition-all ${
                    timbreMode === t.id
                      ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500 font-bold'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          {/* Action triggers */}
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={toggleDrone}
              className={`flex-1 py-2 px-3 rounded font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                continuousDrone
                  ? 'bg-red-600 hover:bg-red-500 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-900/30'
              }`}
            >
              {continuousDrone ? <Square className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-slate-950" />}
              {continuousDrone ? 'CUT DRONE' : 'ROOT DRONE'}
            </button>

            <button
              onClick={injectSpike}
              className="py-2 px-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/60 rounded font-semibold flex items-center gap-1.5 cursor-pointer"
              title="Inject depolarizing current burst"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" /> INJECT SPIKE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
