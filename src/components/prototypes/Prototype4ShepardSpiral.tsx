import React, { useState, useEffect, useRef } from 'react';
import { audioService } from '../../audio/audioEngine';
import { Play, Square, Compass, Eye, ShieldAlert, Disc, Sliders } from 'lucide-react';

export const Prototype4ShepardSpiral: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [glissSpeed, setGlissSpeed] = useState(-0.35); // negative = falling forever, positive = rising forever
  const [binauralDiff, setBinauralDiff] = useState(4.2); // 4.2 Hz ZIAA Infrasonic Anomaly
  const [activeEntrainment, setActiveEntrainment] = useState('Sub-Audible 4.2Hz Anomaly');
  const [centerFreq, setCenterFreq] = useState(440);
  const [spectralSpread, setSpectralSpread] = useState(3.0); // octaves standard deviation

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const phaseRef = useRef(0);

  // 8 oscillator voices
  const voicesRef = useRef<{
    oscsL: OscillatorNode[];
    oscsR: OscillatorNode[];
    gainsL: GainNode[];
    gainsR: GainNode[];
    pannerL: StereoPannerNode | null;
    pannerR: StereoPannerNode | null;
    masterGain: GainNode | null;
  }>({
    oscsL: [],
    oscsR: [],
    gainsL: [],
    gainsR: [],
    pannerL: null,
    pannerR: null,
    masterGain: null
  });

  const NUM_VOICES = 8;

  const startShepard = () => {
    try {
      const ctx = audioService.getContext();
      stopShepard();

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.15);

      const pannerL = ctx.createStereoPanner();
      pannerL.pan.setValueAtTime(-0.85, ctx.currentTime);

      const pannerR = ctx.createStereoPanner();
      pannerR.pan.setValueAtTime(0.85, ctx.currentTime);

      const oscsL: OscillatorNode[] = [];
      const oscsR: OscillatorNode[] = [];
      const gainsL: GainNode[] = [];
      const gainsR: GainNode[] = [];

      for (let i = 0; i < NUM_VOICES; i++) {
        const oscL = ctx.createOscillator();
        const oscR = ctx.createOscillator();
        const gL = ctx.createGain();
        const gR = ctx.createGain();

        oscL.type = 'sine';
        oscR.type = 'sine';

        gL.gain.setValueAtTime(0.001, ctx.currentTime);
        gR.gain.setValueAtTime(0.001, ctx.currentTime);

        oscL.connect(gL);
        gL.connect(pannerL);

        oscR.connect(gR);
        gR.connect(pannerR);

        oscL.start();
        oscR.start();

        oscsL.push(oscL);
        oscsR.push(oscR);
        gainsL.push(gL);
        gainsR.push(gR);
      }

      pannerL.connect(masterGain);
      pannerR.connect(masterGain);
      masterGain.connect(audioService.getMasterInput());

      voicesRef.current = {
        oscsL,
        oscsR,
        gainsL,
        gainsR,
        pannerL,
        pannerR,
        masterGain
      };

      setIsPlaying(true);
    } catch (e) {
      console.error(e);
    }
  };

  const stopShepard = () => {
    const v = voicesRef.current;
    if (v.masterGain) {
      try {
        const ctx = audioService.getContext();
        v.masterGain.gain.setValueAtTime(v.masterGain.gain.value, ctx.currentTime);
        v.masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);
        setTimeout(() => {
          v.oscsL.forEach((o) => {
            o.stop();
            o.disconnect();
          });
          v.oscsR.forEach((o) => {
            o.stop();
            o.disconnect();
          });
        }, 120);
      } catch {
        // cleanup
      }
    }
    voicesRef.current = {
      oscsL: [],
      oscsR: [],
      gainsL: [],
      gainsR: [],
      pannerL: null,
      pannerR: null,
      masterGain: null
    };
    setIsPlaying(false);
  };

  // Continuous pitch modulation loop
  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      const updateInterval = 40; // ms
      interval = window.setInterval(() => {
        const v = voicesRef.current;
        if (!v.masterGain) return;
        const ctx = audioService.getContext();

        // Increment phase
        phaseRef.current = (phaseRef.current + glissSpeed * (updateInterval / 1000)) % 1;
        if (phaseRef.current < 0) phaseRef.current += 1;

        // Calculate frequency and Gaussian amplitude for each voice
        for (let i = 0; i < NUM_VOICES; i++) {
          const voicePhase = (phaseRef.current + i / NUM_VOICES) % 1;
          // Octave relative to center frequency: range -4 to +4 octaves
          const octaveOffset = (voicePhase - 0.5) * 8;
          const freqL = centerFreq * Math.pow(2, octaveOffset);
          const freqR = (centerFreq + binauralDiff) * Math.pow(2, octaveOffset);

          // Gaussian bell curve envelope centered at octaveOffset = 0
          const weight = Math.exp(-Math.pow(octaveOffset / spectralSpread, 2));
          const amp = Math.max(0.0001, weight * 0.18);

          if (v.oscsL[i] && v.oscsR[i]) {
            v.oscsL[i].frequency.setTargetAtTime(Math.max(10, freqL), ctx.currentTime, 0.04);
            v.oscsR[i].frequency.setTargetAtTime(Math.max(10, freqR), ctx.currentTime, 0.04);
            v.gainsL[i].gain.setTargetAtTime(amp, ctx.currentTime, 0.04);
            v.gainsR[i].gain.setTargetAtTime(amp, ctx.currentTime, 0.04);
          }
        }
      }, 40);
    }
    return () => clearInterval(interval);
  }, [isPlaying, glissSpeed, binauralDiff, centerFreq, spectralSpread]);

  // Archimedean Spiral Canvas Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let localAngle = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;

      ctx.fillStyle = '#080a0f';
      ctx.fillRect(0, 0, width, height);

      // Draw polar rings
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1;
      for (let r = 25; r < cx; r += 25) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw spiral path
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const turns = 4;
      const maxR = cx - 15;
      for (let theta = 0; theta < Math.PI * 2 * turns; theta += 0.05) {
        const radius = (theta / (Math.PI * 2 * turns)) * maxR;
        const x = cx + radius * Math.cos(theta);
        const y = cy + radius * Math.sin(theta);
        if (theta === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw the 8 pitch voice nodes
      localAngle += glissSpeed * 0.03;
      for (let i = 0; i < NUM_VOICES; i++) {
        const voiceFrac = ((phaseRef.current + i / NUM_VOICES) % 1);
        const theta = voiceFrac * Math.PI * 2 * turns;
        const radius = voiceFrac * maxR;

        const x = cx + radius * Math.cos(theta);
        const y = cy + radius * Math.sin(theta);

        const octaveOffset = (voiceFrac - 0.5) * 8;
        const weight = Math.exp(-Math.pow(octaveOffset / spectralSpread, 2));

        // Node circle
        ctx.beginPath();
        ctx.arc(x, y, 3 + weight * 5, 0, Math.PI * 2);
        ctx.fillStyle = isPlaying
          ? `rgba(0, 229, 255, ${0.2 + weight * 0.8})`
          : 'rgba(100, 116, 139, 0.4)';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Frequency readout label
        if (isPlaying && weight > 0.35) {
          ctx.fillStyle = '#cbd5e1';
          ctx.font = '9px "JetBrains Mono", monospace';
          const voiceHz = (centerFreq * Math.pow(2, octaveOffset)).toFixed(0);
          ctx.fillText(`${voiceHz}Hz`, x + 8, y + 3);
        }
      }

      // Center vortex marker
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ff4d4d';
      ctx.fill();

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, glissSpeed, centerFreq, spectralSpread]);

  const selectEntrainment = (name: string, diff: number) => {
    setActiveEntrainment(name);
    setBinauralDiff(diff);
  };

  return (
    <div className="border border-slate-800 bg-[#0a0d14] p-5 rounded-sm shadow-xl font-mono-code text-xs">
      <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-slate-800 gap-2">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="font-insignia text-sm tracking-wider text-slate-100 font-bold">
            PROTOTYPE BENCH 04 // CONTINUOUS SHEPARD-RISSET PITCH SPIRAL
          </span>
          <span className="px-2 py-0.5 text-[10px] bg-purple-950 text-purple-300 border border-purple-800 rounded">
            ZIAA-PR-033
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400">SPIRAL TORSION:</span>
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isPlaying ? 'bg-purple-950 text-purple-400 border border-purple-800' : 'bg-slate-800 text-slate-400'}`}>
            {isPlaying ? (glissSpeed < 0 ? 'INFINITE DESCENT' : 'INFINITE ASCENT') : 'REST'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Canvas Visualizer Screen */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative border border-slate-800 bg-black rounded-sm overflow-hidden flex-1 min-h-[220px]">
            <canvas ref={canvasRef} width={500} height={230} className="w-full h-full block" />
            <div className="absolute top-2 left-2 text-[10px] text-purple-400/90 font-mono-code bg-black/60 px-1.5 py-0.5 rounded">
              PERPETUAL PITCH MANIFOLD // ARCHIMEDEAN SPIRAL
            </div>
            <div className="absolute top-2 right-2 text-[10px] text-cyan-400 font-mono-code bg-black/60 px-1.5 py-0.5 rounded">
              BINAURAL OFFSET: Δf = {binauralDiff.toFixed(1)} Hz
            </div>
          </div>

          {/* Brainwave entrainment buttons */}
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-1.5">
            {[
              { name: 'Delta (2.1 Hz)', diff: 2.1 },
              { name: 'Sub-4.2Hz Anomaly', diff: 4.2 },
              { name: 'Theta (5.5 Hz)', diff: 5.5 },
              { name: 'Alpha (10.2 Hz)', diff: 10.2 },
              { name: 'Gamma (40.0 Hz)', diff: 40.0 }
            ].map((ent) => (
              <button
                key={ent.name}
                onClick={() => selectEntrainment(ent.name, ent.diff)}
                className={`py-1.5 px-1 text-center rounded text-[10px] truncate border transition-all ${
                  binauralDiff === ent.diff
                    ? 'bg-purple-600/30 text-purple-300 border-purple-500 font-bold'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                {ent.name}
              </button>
            ))}
          </div>
        </div>

        {/* Pitch Engine Parameters */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3 bg-[#080b12] p-3.5 border border-slate-800/80 rounded-sm">
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">GLISSANDO DRIFT RATE:</span>
              <span className={`font-bold ${glissSpeed < 0 ? 'text-amber-400' : 'text-cyan-400'}`}>
                {glissSpeed > 0 ? '+' : ''}{glissSpeed.toFixed(2)} octaves/sec
              </span>
            </div>
            <input
              type="range"
              min="-1.5"
              max="1.5"
              step="0.05"
              value={glissSpeed}
              onChange={(e) => setGlissSpeed(parseFloat(e.target.value))}
              className="w-full accent-purple-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
            <div className="flex justify-between text-[9px] text-slate-400 mt-0.5">
              <span>← Continuous Fall</span>
              <span>Static</span>
              <span>Continuous Rise →</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">CENTER SPECTRAL MEDIAN (f_c):</span>
              <span className="text-purple-400 font-bold">{centerFreq} Hz</span>
            </div>
            <input
              type="range"
              min="110"
              max="880"
              step="10"
              value={centerFreq}
              onChange={(e) => setCenterFreq(parseInt(e.target.value))}
              className="w-full accent-purple-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">GAUSSIAN BELL SPREAD (σ):</span>
              <span className="text-slate-300 font-bold">{spectralSpread.toFixed(1)} Octaves</span>
            </div>
            <input
              type="range"
              min="1.2"
              max="4.5"
              step="0.1"
              value={spectralSpread}
              onChange={(e) => setSpectralSpread(parseFloat(e.target.value))}
              className="w-full accent-slate-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          <div className="p-2 bg-purple-950/20 border border-purple-900/40 rounded text-[11px] text-purple-200/80 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-purple-300">SAFETY NOTICE:</strong> Continuous descent into the sub-audible 4.2 Hz boundary creates vestibular illusion. Use headphones for full binaural effect.
            </div>
          </div>

          {/* Master Transport */}
          <div className="pt-2 flex items-center gap-3">
            {!isPlaying ? (
              <button
                onClick={startShepard}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-purple-600 hover:bg-purple-500 text-slate-100 font-bold rounded transition-all shadow-lg shadow-purple-900/30 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-100" /> ENGAGE SPIRAL
              </button>
            ) : (
              <button
                onClick={stopShepard}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-red-600 hover:bg-red-500 text-slate-100 font-bold rounded transition-all shadow-lg shadow-red-900/30 cursor-pointer"
              >
                <Square className="w-4 h-4 fill-slate-100" /> COLLAPSE TORSION
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
