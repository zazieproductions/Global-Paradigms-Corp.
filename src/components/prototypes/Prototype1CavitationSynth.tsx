import React, { useState, useEffect, useRef } from 'react';
import { audioService } from '../../audio/audioEngine';
import { Play, Square, RefreshCw, Volume2, Activity, Zap, Layers } from 'lucide-react';

export const Prototype1CavitationSynth: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [fundamentalFreq, setFundamentalFreq] = useState(136.1); // Earth frequency OM
  const [couplingFactor, setCouplingFactor] = useState(0.45);
  const [filterCutoff, setFilterCutoff] = useState(850);
  const [filterResonance, setFilterResonance] = useState(6.5);
  const [delayTime, setDelayTime] = useState(0.28);
  const [delayFeedback, setDelayFeedback] = useState(0.55);
  const [driveSaturation, setDriveSaturation] = useState(3.2);
  const [activePreset, setActivePreset] = useState('Void Resonator');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioNodesRef = useRef<{
    osc1: OscillatorNode | null;
    osc2: OscillatorNode | null;
    subOsc: OscillatorNode | null;
    shaper: WaveShaperNode | null;
    filter: BiquadFilterNode | null;
    delay: DelayNode | null;
    delayGain: GainNode | null;
    mainGain: GainNode | null;
    analyser: AnalyserNode | null;
  }>({
    osc1: null,
    osc2: null,
    subOsc: null,
    shaper: null,
    filter: null,
    delay: null,
    delayGain: null,
    mainGain: null,
    analyser: null
  });

  const animFrameRef = useRef<number | null>(null);

  const makeDistortionCurve = (amount: number) => {
    const k = typeof amount === 'number' ? amount : 50;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  };

  const startSynth = () => {
    try {
      const ctx = audioService.getContext();
      stopSynth();

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const subOsc = ctx.createOscillator();

      const osc1Gain = ctx.createGain();
      const osc2Gain = ctx.createGain();
      const subGain = ctx.createGain();

      const shaper = ctx.createWaveShaper();
      shaper.curve = makeDistortionCurve(driveSaturation * 15);
      shaper.oversample = '4x';

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(filterCutoff, ctx.currentTime);
      filter.Q.setValueAtTime(filterResonance, ctx.currentTime);

      const delay = ctx.createDelay(2.0);
      delay.delayTime.setValueAtTime(delayTime, ctx.currentTime);

      const delayGain = ctx.createGain();
      delayGain.gain.setValueAtTime(delayFeedback, ctx.currentTime);

      const mainGain = ctx.createGain();
      mainGain.gain.setValueAtTime(0.001, ctx.currentTime);
      mainGain.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.1);

      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;

      // Oscillators setup
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(fundamentalFreq, ctx.currentTime);

      osc2.type = 'triangle';
      // Non-Hermitian slight detune and frequency coupling
      osc2.frequency.setValueAtTime(fundamentalFreq * (1 + couplingFactor * 0.15), ctx.currentTime);

      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(fundamentalFreq / 2, ctx.currentTime);

      osc1Gain.gain.value = 0.4;
      osc2Gain.gain.value = 0.35;
      subGain.gain.value = 0.5;

      osc1.connect(osc1Gain);
      osc2.connect(osc2Gain);
      subOsc.connect(subGain);

      const mixer = ctx.createGain();
      osc1Gain.connect(mixer);
      osc2Gain.connect(mixer);
      subGain.connect(mixer);

      mixer.connect(shaper);
      shaper.connect(filter);

      // Delay feedback loop
      filter.connect(delay);
      delay.connect(delayGain);
      delayGain.connect(delay);
      delayGain.connect(mainGain);
      filter.connect(mainGain);

      mainGain.connect(analyser);
      mainGain.connect(audioService.getMasterInput());

      osc1.start();
      osc2.start();
      subOsc.start();

      audioNodesRef.current = {
        osc1,
        osc2,
        subOsc,
        shaper,
        filter,
        delay,
        delayGain,
        mainGain,
        analyser
      };

      setIsPlaying(true);
    } catch (e) {
      console.error("Audio initialization error:", e);
    }
  };

  const stopSynth = () => {
    const nodes = audioNodesRef.current;
    if (nodes.mainGain) {
      try {
        const ctx = audioService.getContext();
        nodes.mainGain.gain.setValueAtTime(nodes.mainGain.gain.value, ctx.currentTime);
        nodes.mainGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
        setTimeout(() => {
          nodes.osc1?.stop();
          nodes.osc2?.stop();
          nodes.subOsc?.stop();
          nodes.osc1?.disconnect();
          nodes.osc2?.disconnect();
          nodes.subOsc?.disconnect();
        }, 90);
      } catch {
        // cleanup
      }
    }
    audioNodesRef.current = {
      osc1: null,
      osc2: null,
      subOsc: null,
      shaper: null,
      filter: null,
      delay: null,
      delayGain: null,
      mainGain: null,
      analyser: null
    };
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying && audioNodesRef.current.osc1 && audioNodesRef.current.filter) {
      const ctx = audioService.getContext();
      audioNodesRef.current.osc1.frequency.setTargetAtTime(fundamentalFreq, ctx.currentTime, 0.05);
      audioNodesRef.current.osc2?.frequency.setTargetAtTime(fundamentalFreq * (1 + couplingFactor * 0.15), ctx.currentTime, 0.05);
      audioNodesRef.current.subOsc?.frequency.setTargetAtTime(fundamentalFreq / 2, ctx.currentTime, 0.05);
      audioNodesRef.current.filter.frequency.setTargetAtTime(filterCutoff, ctx.currentTime, 0.05);
      audioNodesRef.current.filter.Q.setTargetAtTime(filterResonance, ctx.currentTime, 0.05);
      if (audioNodesRef.current.delay) {
        audioNodesRef.current.delay.delayTime.setTargetAtTime(delayTime, ctx.currentTime, 0.05);
      }
      if (audioNodesRef.current.delayGain) {
        audioNodesRef.current.delayGain.gain.setTargetAtTime(delayFeedback, ctx.currentTime, 0.05);
      }
    }
  }, [fundamentalFreq, couplingFactor, filterCutoff, filterResonance, delayTime, delayFeedback, isPlaying]);

  // Canvas visualizer loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const render = () => {
      time += 0.03;
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = '#0a0d14';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle oscilloscope grid
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += 30) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += 25) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Center crosshair
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();
      ctx.setLineDash([]);

      const analyser = audioNodesRef.current.analyser;
      if (isPlaying && analyser) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteTimeDomainData(dataArray);

        // Waveform trace
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffb000';
        ctx.shadowColor = '#ffb000';
        ctx.shadowBlur = 8;
        ctx.beginPath();

        const sliceWidth = width / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const v = dataArray[i] / 128.0;
          const y = (v * height) / 2;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          x += sliceWidth;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw frequency spectrum in lower quarter
        const freqArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(freqArray);
        const barWidth = (width / (bufferLength / 2)) * 1.8;
        let barX = 0;
        ctx.fillStyle = 'rgba(212, 163, 89, 0.35)';
        for (let i = 0; i < bufferLength / 2; i++) {
          const barHeight = (freqArray[i] / 255) * (height * 0.45);
          ctx.fillRect(barX, height - barHeight, barWidth - 1, barHeight);
          barX += barWidth;
        }
      } else {
        // Idle ambient Lissajous pattern
        ctx.strokeStyle = 'rgba(212, 163, 89, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let t = 0; t < Math.PI * 2; t += 0.05) {
          const px = width / 2 + Math.sin(t * 3 + time) * (width * 0.35);
          const py = height / 2 + Math.cos(t * 2 + time * 0.7) * (height * 0.35);
          if (t === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('STATUS: OSCILLATOR OFFLINE // CLICK AUDITION TO ENGAGE', width / 2, height / 2 + 55);
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  const applyPreset = (presetName: string) => {
    setActivePreset(presetName);
    if (presetName === 'Void Resonator') {
      setFundamentalFreq(72.4);
      setCouplingFactor(0.65);
      setFilterCutoff(420);
      setFilterResonance(8.2);
      setDelayTime(0.42);
      setDelayFeedback(0.68);
      setDriveSaturation(4.5);
    } else if (presetName === 'Sub-Basement Cistern 04') {
      setFundamentalFreq(44.0);
      setCouplingFactor(0.2);
      setFilterCutoff(280);
      setFilterResonance(3.5);
      setDelayTime(0.85);
      setDelayFeedback(0.82);
      setDriveSaturation(1.8);
    } else if (presetName === 'Ferrofluid Flutter') {
      setFundamentalFreq(185.0);
      setCouplingFactor(0.88);
      setFilterCutoff(1450);
      setFilterResonance(11.0);
      setDelayTime(0.12);
      setDelayFeedback(0.4);
      setDriveSaturation(6.0);
    } else if (presetName === 'Bismuth Whispering Gallery') {
      setFundamentalFreq(311.1);
      setCouplingFactor(0.35);
      setFilterCutoff(2200);
      setFilterResonance(9.5);
      setDelayTime(0.32);
      setDelayFeedback(0.75);
      setDriveSaturation(2.5);
    }
  };

  return (
    <div className="border border-slate-800 bg-[#0c1017] p-5 rounded-sm shadow-xl font-mono-code text-xs">
      <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-slate-800 gap-2">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-insignia text-sm tracking-wider text-slate-100 font-bold">
            SYSTEMS BENCH 01 // CONSENSUS OSCILLATOR ARRAY
          </span>
          <span className="px-2 py-0.5 text-[10px] bg-amber-950 text-amber-300 border border-amber-800 rounded">
            GPC-PR-002
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400">TELEMETRY:</span>
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isPlaying ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-800 text-slate-400'}`}>
            {isPlaying ? 'ACTIVE EMISSION' : 'STANDBY'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Canvas Visualizer Screen */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative border border-slate-800 bg-black rounded-sm overflow-hidden flex-1 min-h-[220px]">
            <canvas ref={canvasRef} width={540} height={240} className="w-full h-full block" />
            <div className="absolute top-2 left-2 text-[10px] text-amber-400/70 font-mono-code pointer-events-none">
              CH-1 OSCILLOSCOPE // REAL-TIME LISSAJOUS PHASE
            </div>
            <div className="absolute top-2 right-2 text-[10px] text-cyan-400/80 font-mono-code pointer-events-none">
              SPECTRUM DENSITY: {filterCutoff} Hz CUTOFF
            </div>
          </div>

          {/* Quick Presets */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-[11px] flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> RESIDUAL PRESETS:
            </span>
            {['Void Resonator', 'Sub-Basement Cistern 04', 'Ferrofluid Flutter', 'Bismuth Whispering Gallery'].map((preset) => (
              <button
                key={preset}
                onClick={() => applyPreset(preset)}
                className={`px-2.5 py-1 text-[11px] rounded transition-all ${
                  activePreset === preset
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/60 font-semibold'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Parameter Sliders */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3 bg-[#080b11] p-3.5 border border-slate-800/80 rounded-sm">
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">FUNDAMENTAL FREQUENCY (f₀):</span>
              <span className="text-amber-400 font-bold">{fundamentalFreq.toFixed(1)} Hz</span>
            </div>
            <input
              type="range"
              min="24"
              max="660"
              step="0.5"
              value={fundamentalFreq}
              onChange={(e) => setFundamentalFreq(parseFloat(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">NON-HERMITIAN COUPLING (κ):</span>
              <span className="text-cyan-400 font-bold">{(couplingFactor * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={couplingFactor}
              onChange={(e) => setCouplingFactor(parseFloat(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">BIQUAD FILTER CUTOFF (Hz):</span>
              <span className="text-amber-400 font-bold">{filterCutoff} Hz</span>
            </div>
            <input
              type="range"
              min="80"
              max="4500"
              step="10"
              value={filterCutoff}
              onChange={(e) => setFilterCutoff(parseInt(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">RESONANCE Q COEFFICIENT:</span>
              <span className="text-purple-400 font-bold">{filterResonance.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="18"
              step="0.2"
              value={filterResonance}
              onChange={(e) => setFilterResonance(parseFloat(e.target.value))}
              className="w-full accent-purple-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">DELAY TIME & FEEDBACK:</span>
              <span className="text-emerald-400 font-bold">{(delayTime * 1000).toFixed(0)} ms / {(delayFeedback * 100).toFixed(0)}%</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="range"
                min="0.05"
                max="1.2"
                step="0.01"
                value={delayTime}
                onChange={(e) => setDelayTime(parseFloat(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded"
              />
              <input
                type="range"
                min="0"
                max="0.88"
                step="0.02"
                value={delayFeedback}
                onChange={(e) => setDelayFeedback(parseFloat(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded"
              />
            </div>
          </div>

          {/* Master Control Buttons */}
          <div className="pt-2 flex items-center gap-3">
            {!isPlaying ? (
              <button
                onClick={startSynth}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold rounded transition-all shadow-lg shadow-amber-900/30 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" /> ENGAGE TRANSDUCTION
              </button>
            ) : (
              <button
                onClick={stopSynth}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-red-600 hover:bg-red-500 text-slate-100 font-bold rounded transition-all shadow-lg shadow-red-900/30 cursor-pointer"
              >
                <Square className="w-4 h-4 fill-slate-100" /> HALT EMISSION
              </button>
            )}

            <button
              onClick={() => {
                audioService.playAnomalyPing();
              }}
              className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5"
              title="Inject test acoustic ping"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" /> TEST PING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
