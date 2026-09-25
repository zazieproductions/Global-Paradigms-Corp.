import React, { useState, useEffect, useRef } from 'react';
import { audioService } from '../../audio/audioEngine';
import { Radio, Volume2, Square, Play, Sparkles, Compass, AlertCircle } from 'lucide-react';

export const Prototype2SignalArchaeology: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [carrierFreq, setCarrierFreq] = useState(4625); // Famous UVB-76 "Buzzer" frequency in kHz / Hz
  const [bfoOffset, setBfoOffset] = useState(700); // 700 Hz heterodyne whistle
  const [noiseLevel, setNoiseLevel] = useState(0.25);
  const [demodMode, setDemodMode] = useState<'AM' | 'USB' | 'LSB' | 'TELLURIC'>('USB');
  const [activeStation, setActiveStation] = useState<string>('UVB-76 (The Buzzer)');
  const [morseActive, setMorseActive] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const waterfallHistoryRef = useRef<ImageData | null>(null);

  const audioRefs = useRef<{
    carrierOsc: OscillatorNode | null;
    bfoOsc: OscillatorNode | null;
    noiseNode: AudioBufferSourceNode | null;
    bandpass: BiquadFilterNode | null;
    mainGain: GainNode | null;
    noiseGain: GainNode | null;
    analyser: AnalyserNode | null;
  }>({
    carrierOsc: null,
    bfoOsc: null,
    noiseNode: null,
    bandpass: null,
    mainGain: null,
    noiseGain: null,
    analyser: null
  });

  const animRef = useRef<number | null>(null);

  // Generate white/pink noise buffer for static
  const createNoiseBuffer = (ctx: AudioContext) => {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // Pinkish atmospheric noise
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2 + white * 0.5362) * 0.11;
    }
    return buffer;
  };

  const startDemodulator = () => {
    try {
      const ctx = audioService.getContext();
      stopDemodulator();

      const carrierOsc = ctx.createOscillator();
      const bfoOsc = ctx.createOscillator();

      const carrierGain = ctx.createGain();
      const bfoGain = ctx.createGain();

      const bandpass = ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(carrierFreq % 4000 + 400, ctx.currentTime);
      bandpass.Q.setValueAtTime(8, ctx.currentTime);

      // Noise source
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = createNoiseBuffer(ctx);
      noiseSource.loop = true;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(1400, ctx.currentTime);
      noiseFilter.Q.setValueAtTime(1.5, ctx.currentTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(noiseLevel * 0.35, ctx.currentTime);

      noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);

      // Carrier & BFO configuration
      carrierOsc.type = 'triangle';
      const audibleCarrier = 300 + (carrierFreq % 1800);
      carrierOsc.frequency.setValueAtTime(audibleCarrier, ctx.currentTime);
      carrierGain.gain.setValueAtTime(0.18, ctx.currentTime);

      bfoOsc.type = 'sine';
      bfoOsc.frequency.setValueAtTime(audibleCarrier + bfoOffset, ctx.currentTime);
      bfoGain.gain.setValueAtTime(0.12, ctx.currentTime);

      carrierOsc.connect(bandpass);
      bfoOsc.connect(bandpass);

      const mainGain = ctx.createGain();
      mainGain.gain.setValueAtTime(0.001, ctx.currentTime);
      mainGain.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + 0.1);

      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;

      bandpass.connect(mainGain);
      noiseGain.connect(mainGain);
      mainGain.connect(analyser);
      mainGain.connect(audioService.getMasterInput());

      carrierOsc.start();
      bfoOsc.start();
      noiseSource.start();

      audioRefs.current = {
        carrierOsc,
        bfoOsc,
        noiseNode: noiseSource,
        bandpass,
        mainGain,
        noiseGain,
        analyser
      };

      setIsPlaying(true);
    } catch (e) {
      console.error(e);
    }
  };

  const stopDemodulator = () => {
    const refs = audioRefs.current;
    if (refs.mainGain) {
      try {
        const ctx = audioService.getContext();
        refs.mainGain.gain.setValueAtTime(refs.mainGain.gain.value, ctx.currentTime);
        refs.mainGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
        setTimeout(() => {
          refs.carrierOsc?.stop();
          refs.bfoOsc?.stop();
          refs.noiseNode?.stop();
          refs.carrierOsc?.disconnect();
          refs.bfoOsc?.disconnect();
          refs.noiseNode?.disconnect();
        }, 90);
      } catch {
        // cleanup
      }
    }
    audioRefs.current = {
      carrierOsc: null,
      bfoOsc: null,
      noiseNode: null,
      bandpass: null,
      mainGain: null,
      noiseGain: null,
      analyser: null
    };
    setIsPlaying(false);
  };

  // Trigger Morse Numbers Station Burst
  const triggerNumbersBurst = () => {
    if (morseActive) return;
    setMorseActive(true);
    const ctx = audioService.getContext();
    const sequence = [
      { d: 0.1, p: 0.08 }, // dot
      { d: 0.1, p: 0.08 }, // dot
      { d: 0.3, p: 0.08 }, // dash
      { d: 0.1, p: 0.15 }, // dot
      { d: 0.3, p: 0.08 }, // dash
      { d: 0.3, p: 0.08 }, // dash
      { d: 0.1, p: 0.25 }, // word space
      { d: 0.3, p: 0.08 },
      { d: 0.1, p: 0.08 },
      { d: 0.3, p: 0.08 }
    ];

    let t = ctx.currentTime + 0.05;
    sequence.forEach((item) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1020, t);
      g.gain.setValueAtTime(0.001, t);
      g.gain.linearRampToValueAtTime(0.22, t + 0.005);
      g.gain.setValueAtTime(0.22, t + item.d - 0.005);
      g.gain.linearRampToValueAtTime(0.0001, t + item.d);

      osc.connect(g);
      g.connect(audioService.getMasterInput());

      osc.start(t);
      osc.stop(t + item.d);
      t += item.d + item.p;
    });

    setTimeout(() => {
      setMorseActive(false);
    }, (t - ctx.currentTime) * 1000 + 100);
  };

  // Real-time Waterfall Spectrogram
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const render = () => {
      // Shift existing canvas image down by 1px
      const currentImage = ctx.getImageData(0, 0, width, height - 1);
      ctx.putImageData(currentImage, 0, 1);

      const analyser = audioRefs.current.analyser;
      if (isPlaying && analyser) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        // Draw top 1px line of waterfall
        for (let x = 0; x < width; x++) {
          const bin = Math.floor((x / width) * bufferLength);
          const val = dataArray[bin]; // 0 to 255
          
          let r = 0, g = 0, b = 0;
          if (val > 180) {
            r = 255;
            g = 220;
            b = Math.floor((val - 180) * 3);
          } else if (val > 100) {
            r = Math.floor((val - 100) * 3);
            g = 180;
            b = 220;
          } else if (val > 20) {
            r = 10;
            g = Math.floor(val * 1.5);
            b = Math.floor(val * 2.2);
          } else {
            r = 8;
            g = 12;
            b = 18;
          }
          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.fillRect(x, 0, 1, 1);
        }
      } else {
        // Idle ambient scan line
        for (let x = 0; x < width; x++) {
          const n = Math.random() * 25;
          ctx.fillStyle = `rgb(${Math.floor(n)}, ${Math.floor(n * 1.3)}, ${Math.floor(n * 1.8)})`;
          ctx.fillRect(x, 0, 1, 1);
        }
      }

      animRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPlaying]);

  const selectStation = (station: string, freq: number, bfo: number, mode: 'AM' | 'USB' | 'LSB' | 'TELLURIC') => {
    setActiveStation(station);
    setCarrierFreq(freq);
    setBfoOffset(bfo);
    setDemodMode(mode);
    if (isPlaying) {
      startDemodulator();
    }
  };

  return (
    <div className="border border-slate-800 bg-[#090d13] p-5 rounded-sm shadow-xl font-mono-code text-xs">
      <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-slate-800 gap-2">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-insignia text-sm tracking-wider text-slate-100 font-bold">
            PROTOTYPE BENCH 02 // SIGNAL ARCHAEOLOGY SPECTRAL DEMODULATOR
          </span>
          <span className="px-2 py-0.5 text-[10px] bg-amber-950 text-amber-300 border border-amber-800 rounded">
            ZIAA-PR-017
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400">TUNER LOCK:</span>
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isPlaying ? 'bg-amber-950 text-amber-400 border border-amber-800' : 'bg-slate-800 text-slate-400'}`}>
            {isPlaying ? `${carrierFreq} kHz [LOCKED]` : 'UNLOCKED'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Waterfall Spectrogram */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative border border-slate-800 bg-black rounded-sm overflow-hidden flex-1 min-h-[220px]">
            <canvas ref={canvasRef} width={500} height={230} className="w-full h-full block" />
            <div className="absolute top-2 left-2 text-[10px] text-amber-400/90 font-mono-code bg-black/60 px-1.5 py-0.5 rounded">
              WATERFALL SPECTROGRAM // RF DEMODULATION RACK
            </div>
            <div className="absolute top-2 right-2 text-[10px] text-cyan-400 font-mono-code bg-black/60 px-1.5 py-0.5 rounded">
              MODE: {demodMode} // BFO: {bfoOffset} Hz
            </div>
            <div className="absolute bottom-2 left-2 text-[10px] text-slate-400 font-mono-code bg-black/60 px-1.5 py-0.5 rounded">
              CURRENT TARGET: {activeStation}
            </div>
          </div>

          {/* Historic Radio Frequencies Presets */}
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { name: 'UVB-76 (The Buzzer)', freq: 4625, bfo: 750, mode: 'USB' as const },
              { name: 'Lincolnshire Poacher', freq: 11545, bfo: 1120, mode: 'AM' as const },
              { name: 'Svalbard VLF Sferics', freq: 820, bfo: 440, mode: 'TELLURIC' as const },
              { name: 'Chernobyl Duga Radar', freq: 3260, bfo: 610, mode: 'USB' as const }
            ].map((st) => (
              <button
                key={st.name}
                onClick={() => selectStation(st.name, st.freq, st.bfo, st.mode)}
                className={`p-2 text-left rounded text-[11px] transition-all border ${
                  activeStation === st.name
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/70 font-semibold'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <div className="truncate font-semibold">{st.name}</div>
                <div className="text-[10px] text-slate-400">{st.freq} kHz • {st.mode}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Dial & Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3 bg-[#080c12] p-3.5 border border-slate-800/80 rounded-sm">
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">CARRIER TUNER FREQUENCY:</span>
              <span className="text-amber-400 font-bold">{carrierFreq} kHz</span>
            </div>
            <input
              type="range"
              min="100"
              max="15000"
              step="5"
              value={carrierFreq}
              onChange={(e) => setCarrierFreq(parseInt(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">BFO HETERODYNE OFFSET:</span>
              <span className="text-cyan-400 font-bold">{bfoOffset} Hz</span>
            </div>
            <input
              type="range"
              min="100"
              max="2400"
              step="10"
              value={bfoOffset}
              onChange={(e) => setBfoOffset(parseInt(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">ATMOSPHERIC NOISE & CRACKLE:</span>
              <span className="text-slate-300 font-bold">{(noiseLevel * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={noiseLevel}
              onChange={(e) => setNoiseLevel(parseFloat(e.target.value))}
              className="w-full accent-slate-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          {/* Demodulation Selector */}
          <div>
            <span className="text-slate-400 block mb-1.5">DEMODULATION ALGORITHM:</span>
            <div className="grid grid-cols-4 gap-1.5">
              {(['AM', 'USB', 'LSB', 'TELLURIC'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setDemodMode(mode)}
                  className={`py-1 text-center text-[10px] rounded border transition-all ${
                    demodMode === mode
                      ? 'bg-amber-400/20 text-amber-300 border-amber-400 font-bold'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Control Buttons */}
          <div className="pt-2 flex items-center gap-3">
            {!isPlaying ? (
              <button
                onClick={startDemodulator}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded transition-all shadow-lg shadow-amber-900/30 cursor-pointer"
              >
                <Radio className="w-4 h-4 fill-slate-950" /> RECEIVE CARRIER
              </button>
            ) : (
              <button
                onClick={stopDemodulator}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-red-600 hover:bg-red-500 text-slate-100 font-bold rounded transition-all shadow-lg shadow-red-900/30 cursor-pointer"
              >
                <Square className="w-4 h-4 fill-slate-100" /> CUT ANTENNA
              </button>
            )}

            <button
              onClick={triggerNumbersBurst}
              disabled={morseActive}
              className={`py-2 px-3 rounded border transition-colors flex items-center gap-1.5 ${
                morseActive
                  ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 animate-pulse'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700 cursor-pointer'
              }`}
              title="Transmit simulated Numbers Station Morse Code cipher"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {morseActive ? 'BURST ACTIVE' : 'CW CIPHER'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
