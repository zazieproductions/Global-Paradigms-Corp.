import React, { useState, useEffect, useRef } from 'react';
import { audioService } from '../../audio/audioEngine';
import { Play, Square, Shuffle, Dna, Volume2, Sparkles, RefreshCw } from 'lucide-react';

const ROWS = 8;
const COLS = 8;

// Harmonic series frequencies for the 8 rows (from deep sub-harmonic to microtonal high chime)
const ROW_FREQUENCIES = [
  55.0,   // A1 Sub Bass
  110.0,  // A2 Fundamental
  165.0,  // E3 Perfect 5th
  220.0,  // A3 Octave
  330.0,  // E4 High 5th
  440.0,  // A4 Concert Pitch
  587.3,  // D5 Minor 7th
  880.0   // A5 Shimmer
];

const ROW_NAMES = ['SUB-55', 'RES-110', 'HARM-165', 'OCT-220', 'MID-330', 'PITCH-440', 'AIR-587', 'SHIMMER-880'];

export const Prototype3MarkovMatrix: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [bpm, setBpm] = useState(112);
  const [decayTime, setDecayTime] = useState(0.35);
  const [stochasticDrift, setStochasticDrift] = useState(15); // % chance of auto-mutation
  const [activePreset, setActivePreset] = useState('Turing Reaction');

  // 8x8 boolean grid: grid[row][col]
  const [grid, setGrid] = useState<boolean[][]>(() => {
    // Initial interesting pattern (pulsar / glider)
    const initial = Array(ROWS).fill(false).map(() => Array(COLS).fill(false));
    initial[0][0] = true;
    initial[0][4] = true;
    initial[1][2] = true;
    initial[1][6] = true;
    initial[2][1] = true;
    initial[2][5] = true;
    initial[3][3] = true;
    initial[3][7] = true;
    initial[4][0] = true;
    initial[5][2] = true;
    initial[6][4] = true;
    initial[7][6] = true;
    return initial;
  });

  const timerRef = useRef<number | null>(null);
  const currentStepRef = useRef(0);
  currentStepRef.current = currentStep;

  const toggleCell = (r: number, c: number) => {
    const next = grid.map((rowArr, rowIndex) =>
      rowArr.map((cell, colIndex) => (rowIndex === r && colIndex === c ? !cell : cell))
    );
    setGrid(next);
    // Play preview tone
    triggerTone(ROW_FREQUENCIES[ROWS - 1 - r], 0.15, r);
  };

  const triggerTone = (freq: number, dur: number, rowIdx: number) => {
    try {
      const ctx = audioService.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Timbre varies based on row
      if (rowIdx < 2) {
        osc.type = 'triangle';
      } else if (rowIdx < 5) {
        osc.type = 'sine';
      } else {
        osc.type = 'sawtooth';
      }

      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const peakGain = rowIdx < 2 ? 0.35 : 0.18;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(peakGain, ctx.currentTime + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);

      // Lowpass filter to smooth edges
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(freq * 3.5, ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioService.getMasterInput());

      osc.start();
      osc.stop(ctx.currentTime + dur);
    } catch {
      // AudioContext state
    }
  };

  // Step sequencer ticker
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const intervalMs = (60 / bpm / 2) * 1000; // 8th note steps

    timerRef.current = window.setInterval(() => {
      const nextStep = (currentStepRef.current + 1) % COLS;
      setCurrentStep(nextStep);

      // Trigger active cells in this column
      for (let r = 0; r < ROWS; r++) {
        const rowFromBottom = ROWS - 1 - r;
        if (grid[r][nextStep]) {
          triggerTone(ROW_FREQUENCIES[rowFromBottom], decayTime, rowFromBottom);
        }
      }

      // Check stochastic mutation
      if (Math.random() * 100 < stochasticDrift) {
        setGrid((prevGrid) => {
          const randR = Math.floor(Math.random() * ROWS);
          const randC = Math.floor(Math.random() * COLS);
          return prevGrid.map((row, ri) =>
            row.map((cell, ci) => (ri === randR && ci === randC ? !cell : cell))
          );
        });
      }
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, bpm, decayTime, stochasticDrift, grid]);

  // Cellular automata Conway Life iteration step
  const evolveLifeStep = () => {
    setGrid((prev) => {
      const next = prev.map((row) => [...row]);
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          let neighbors = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              if (dr === 0 && dc === 0) continue;
              const nr = (r + dr + ROWS) % ROWS;
              const nc = (c + dc + COLS) % COLS;
              if (prev[nr][nc]) neighbors++;
            }
          }
          if (prev[r][c]) {
            next[r][c] = neighbors === 2 || neighbors === 3;
          } else {
            next[r][c] = neighbors === 3;
          }
        }
      }
      return next;
    });
    audioService.playBlip(750, 'sawtooth', 0.05);
  };

  const randomizeGrid = () => {
    setGrid(
      Array(ROWS).fill(false).map(() =>
        Array(COLS).fill(false).map(() => Math.random() > 0.72)
      )
    );
    audioService.playBlip(920, 'sine', 0.08);
  };

  const clearGrid = () => {
    setGrid(Array(ROWS).fill(false).map(() => Array(COLS).fill(false)));
  };

  const applyMatrixPreset = (name: string) => {
    setActivePreset(name);
    const newG = Array(ROWS).fill(false).map(() => Array(COLS).fill(false));
    if (name === 'Turing Reaction') {
      [0, 2, 4, 6].forEach((r) => [1, 3, 5, 7].forEach((c) => (newG[r][c] = true)));
      setBpm(118);
      setDecayTime(0.35);
    } else if (name === 'Fibonacci Pulse') {
      newG[0][0] = true;
      newG[1][1] = true;
      newG[2][2] = true;
      newG[3][3] = true;
      newG[4][5] = true;
      newG[7][0] = true;
      newG[7][4] = true;
      setBpm(132);
      setDecayTime(0.2);
    } else if (name === 'Sub-Seismic Drone') {
      newG[7][0] = true;
      newG[7][2] = true;
      newG[7][4] = true;
      newG[7][6] = true;
      newG[6][1] = true;
      newG[6][5] = true;
      setBpm(64);
      setDecayTime(0.75);
    } else if (name === 'Glider Stream') {
      newG[1][2] = true;
      newG[2][3] = true;
      newG[3][1] = true;
      newG[3][2] = true;
      newG[3][3] = true;
      setBpm(140);
      setDecayTime(0.18);
    }
    setGrid(newG);
  };

  return (
    <div className="border border-slate-800 bg-[#090d14] p-5 rounded-sm shadow-xl font-mono-code text-xs">
      <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-slate-800 gap-2">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-insignia text-sm tracking-wider text-slate-100 font-bold">
            PROTOTYPE BENCH 03 // MARKOV CELLULAR ACOUSTIC AUTOMATA
          </span>
          <span className="px-2 py-0.5 text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 rounded">
            ZIAA-PR-049
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400">STATE SCANNER:</span>
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isPlaying ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-800 text-slate-400'}`}>
            {isPlaying ? `STEP ${currentStep + 1} / ${COLS} [${bpm} BPM]` : 'PAUSED'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* 8x8 Interactive Grid */}
        <div className="lg:col-span-8 flex flex-col">
          <div className="border border-slate-800 bg-black/80 p-3 rounded-sm">
            <div className="grid grid-rows-8 gap-1.5">
              {grid.map((row, rIdx) => {
                const label = ROW_NAMES[ROWS - 1 - rIdx];
                return (
                  <div key={rIdx} className="flex items-center gap-2">
                    <span className="w-20 text-[10px] text-slate-400 truncate text-right">
                      {label}
                    </span>
                    <div className="grid grid-cols-8 gap-1.5 flex-1">
                      {row.map((active, cIdx) => {
                        const isCurrentCol = currentStep === cIdx && isPlaying;
                        return (
                          <button
                            key={cIdx}
                            onClick={() => toggleCell(rIdx, cIdx)}
                            className={`h-7 rounded-sm transition-all duration-75 relative cursor-pointer border ${
                              active
                                ? isCurrentCol
                                  ? 'bg-emerald-300 border-white shadow-lg shadow-emerald-400/50 scale-105'
                                  : 'bg-emerald-600/60 border-emerald-400/80 hover:bg-emerald-500/70'
                                : isCurrentCol
                                ? 'bg-slate-800/80 border-cyan-500/40'
                                : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                            }`}
                          >
                            {active && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className={`w-1.5 h-1.5 rounded-full ${isCurrentCol ? 'bg-black' : 'bg-white'}`} />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Step cursor indicator */}
            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-800">
              <span className="w-20 text-[9px] text-slate-400 text-right">CLOCK:</span>
              <div className="grid grid-cols-8 gap-1.5 flex-1 text-center text-[10px]">
                {Array(8).fill(0).map((_, i) => (
                  <div
                    key={i}
                    className={`py-0.5 rounded font-bold ${
                      currentStep === i && isPlaying
                        ? 'bg-cyan-500 text-black'
                        : 'text-slate-400'
                    }`}
                  >
                    0{i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preset Buttons */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-[11px]">MATRICES:</span>
            {['Turing Reaction', 'Fibonacci Pulse', 'Sub-Seismic Drone', 'Glider Stream'].map((p) => (
              <button
                key={p}
                onClick={() => applyMatrixPreset(p)}
                className={`px-2.5 py-1 text-[11px] rounded transition-all border ${
                  activePreset === p
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 font-semibold'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Sequencer Engine Controls */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-3 bg-[#080c13] p-3.5 border border-slate-800/80 rounded-sm">
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">AUTOMATA TEMPO (BPM):</span>
              <span className="text-emerald-400 font-bold">{bpm} BPM</span>
            </div>
            <input
              type="range"
              min="40"
              max="180"
              value={bpm}
              onChange={(e) => setBpm(parseInt(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">ACOUSTIC RING DECAY:</span>
              <span className="text-cyan-400 font-bold">{(decayTime * 1000).toFixed(0)} ms</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="1.2"
              step="0.05"
              value={decayTime}
              onChange={(e) => setDecayTime(parseFloat(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">ENTROPY MUTATION DRIFT:</span>
              <span className="text-amber-400 font-bold">{stochasticDrift}% / STEP</span>
            </div>
            <input
              type="range"
              min="0"
              max="60"
              value={stochasticDrift}
              onChange={(e) => setStochasticDrift(parseInt(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          {/* Cellular operations */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={evolveLifeStep}
              className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 flex items-center justify-center gap-1.5 cursor-pointer"
              title="Compute one Game of Life generation"
            >
              <Dna className="w-3.5 h-3.5 text-emerald-400" /> EVOLVE LIFE
            </button>
            <button
              onClick={randomizeGrid}
              className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5 text-cyan-400" /> RANDOMIZE
            </button>
          </div>

          {/* Master Transport */}
          <div className="pt-2 flex items-center gap-2">
            {!isPlaying ? (
              <button
                onClick={() => setIsPlaying(true)}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold rounded transition-all shadow-lg shadow-emerald-900/30 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" /> RUN AUTOMATA
              </button>
            ) : (
              <button
                onClick={() => setIsPlaying(false)}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-red-600 hover:bg-red-500 text-slate-100 font-bold rounded transition-all shadow-lg shadow-red-900/30 cursor-pointer"
              >
                <Square className="w-4 h-4 fill-slate-100" /> HALT
              </button>
            )}

            <button
              onClick={clearGrid}
              className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded border border-slate-700 cursor-pointer"
              title="Clear all nodes"
            >
              CLEAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
