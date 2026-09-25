import React, { useEffect, useRef, useState } from 'react';
import { Radio, Lock, Unlock, Play, Square, Zap, BookOpen, AudioLines, KeyRound } from 'lucide-react';
import { audioService } from '../../audio/audioEngine';
import { toMorse, fromMorse, vigenere, caesar, MORSE_TABLE, FONT_5X7, SPECTRAL_BASE_HZ, SPECTRAL_STEP_HZ } from '../../arg/ciphers';
import { useArgState, unlockDoor, registerAttempt, normalizeGuess } from '../../arg/argState';

// ------------------------------------------------------------------
// Static intercept material (computed once, at archive-build time)
// ------------------------------------------------------------------
const BEACON_WORD = 'PARADIGM';
const BEACON_MORSE = toMorse(BEACON_WORD); // .--. .- .-. .- -.. .. --. --

const RAVENS_PLAINTEXT =
  'THE GRID SANG THE CITY TO SLEEP IN NINETEEN NINETY NINE THE NEIGHBORHOOD KEPT THE SONG LONG AFTER WE SEALED IT VOICE TWO STILL HUMS BELOW THE FLOOR OF HEARING HER NAME WAS LULLABY';
const RAVENS_CIPHER = vigenere(RAVENS_PLAINTEXT, 'PARADIGM');
const RAVENS_GROUPS = (() => {
  const clean = RAVENS_CIPHER.replace(/[^A-Z]/g, '');
  const g: string[] = [];
  for (let i = 0; i < clean.length; i += 5) g.push(clean.slice(i, i + 5));
  return g.join(' ');
})();

const SPECTRAL_WORD = 'ANTICIPATE';

// ------------------------------------------------------------------
// MORSE KEYER — plays and visually keys the beacon preamble
// ------------------------------------------------------------------
const MorseBeacon: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [currentSymbol, setCurrentSymbol] = useState<string | null>(null);
  const timersRef = useRef<number[]>([]);

  const stop = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
    setPlaying(false);
    setCurrentSymbol(null);
  };

  useEffect(() => () => stop(), []);

  const play = () => {
    if (playing) {
      stop();
      return;
    }
    const ctx = audioService.getContext();
    const master = audioService.getMasterInput();
    const F = 620;
    const DOT = 0.09;
    let t = ctx.currentTime + 0.15;

    const letters = BEACON_MORSE.split(' ');
    letters.forEach((letter, li) => {
      letter.split('').forEach((sym) => {
        const dur = sym === '.' ? DOT : DOT * 3;
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = F;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.22, t + 0.006);
        g.gain.setValueAtTime(0.22, t + dur - 0.006);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        osc.connect(g);
        g.connect(master);
        osc.start(t);
        osc.stop(t + dur + 0.02);

        const startMs = (t - ctx.currentTime) * 1000;
        timersRef.current.push(
          window.setTimeout(() => setCurrentSymbol(sym), startMs),
          window.setTimeout(() => setCurrentSymbol(null), startMs + dur * 1000)
        );
        t += dur + DOT; // intra-letter gap
      });
      t += DOT * 2; // inter-letter gap
      if (li < letters.length - 1) t += DOT * 0;
    });

    const totalMs = (t - ctx.currentTime) * 1000;
    timersRef.current.push(window.setTimeout(() => {
      setPlaying(false);
      setCurrentSymbol(null);
    }, totalMs));
    setPlaying(true);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <button
          onClick={play}
          className={`py-2 px-4 rounded border flex items-center gap-2 cursor-pointer transition-colors text-[11px] font-bold ${
            playing
              ? 'bg-red-950 border-red-800 text-red-300 hover:bg-red-900'
              : 'bg-amber-600 border-amber-500 text-slate-950 hover:bg-amber-500'
          }`}
        >
          {playing ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          {playing ? 'KEY OFF' : 'KEY THE BEACON'}
        </button>
        <div className={`w-3 h-3 rounded-full ${currentSymbol ? 'bg-amber-300 shadow-lg shadow-amber-500/60' : 'bg-slate-800'} transition-all`} />
        <span className="text-[10px] text-slate-400">620 Hz BEACON TONE • 12 WPM • GANDER QUIET BAY</span>
      </div>

      {/* Live morse readout */}
      <div className="p-3 bg-black/70 border border-slate-800 rounded font-mono-code text-sm tracking-[0.25em] text-amber-300 break-all">
        {BEACON_MORSE}
      </div>

      {/* Reference strip */}
      <div className="text-[10px] text-slate-400">
        CYCLE PREAMBLE, TRANSMITTED EVERY 8 DAYS SINCE 2006-11-30. THE CARETAKER NOTES THAT IT PRECEDES EVERY PAYLOAD.
      </div>
    </div>
  );
};

// ------------------------------------------------------------------
// VIGENÈRE DECRYPTOR WORKBENCH
// ------------------------------------------------------------------
const VigenereWorkbench: React.FC<{ unlocked: boolean }> = ({ unlocked }) => {
  const [keyInput, setKeyInput] = useState('');
  const key = keyInput.toUpperCase().replace(/[^A-Z]/g, '');
  const output = key ? vigenere(RAVENS_CIPHER, key, true) : null;
  const solved = key === 'PARADIGM';

  if (!unlocked) {
    return (
      <div className="p-4 bg-[#0a0708] border border-red-900/50 rounded text-center space-y-2">
        <Lock className="w-5 h-5 text-red-400 mx-auto" />
        <div className="text-[11px] text-red-300 font-bold tracking-wider">INTERCEPT SEALED BY CARETAKER</div>
        <p className="text-[11px] text-slate-400 max-w-md mx-auto font-academic">
          "This carrier was sealed pending the first key. The beacon speaks first, and it says the name of the house.
          Submit the first password at the NIGHT-WATCH terminal; this carrier will open of its own accord."
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="p-3 bg-black/70 border border-slate-800 rounded">
        <div className="text-[10px] text-slate-400 mb-1.5 font-bold">INTERCEPTED GROUPS // 1120 kHz AM // RAVENSPORT TRIAD TEST CARRIER</div>
        <div className="font-mono-code text-[13px] tracking-widest text-slate-200 break-all leading-relaxed">
          {RAVENS_GROUPS}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <div className="flex items-center gap-2 flex-1">
          <KeyRound className="w-4 h-4 text-amber-400 shrink-0" />
          <input
            type="text"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            placeholder="Enter key (letters only)…"
            className="flex-1 bg-[#04060a] border border-slate-800 rounded px-3 py-2 text-slate-200 placeholder-slate-500 outline-none focus:border-amber-500 text-xs tracking-widest uppercase"
          />
        </div>
        <span className={`px-3 py-2 rounded border text-[10px] font-bold shrink-0 ${
          solved ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-slate-900 text-slate-500 border-slate-800'
        }`}>
          {solved ? 'KEY ACCEPTED — PLAINTEXT TRUE' : key ? 'KEY ACCEPTED — OUTPUT INCOHERENT' : 'AWAITING KEY'}
        </span>
      </div>

      {output && (
        <div className={`p-3 border rounded font-mono-code text-[12px] leading-relaxed break-all ${
          solved ? 'bg-emerald-950/30 border-emerald-900 text-emerald-200' : 'bg-[#0a0a0f] border-slate-800 text-slate-500'
        }`}>
          {output}
        </div>
      )}

      {solved && (
        <div className="p-3 bg-[#0a0d14] border border-amber-800/50 rounded text-[11px] text-slate-300 font-academic leading-relaxed">
          <strong className="text-amber-300">CARETAKER ANNOTATION:</strong> The second key is named in the plaintext itself.
          It slept in a song the city refused to forget. Submit it at the NIGHT-WATCH terminal.
        </div>
      )}
    </div>
  );
};

// ------------------------------------------------------------------
// SPECTRAL TRANSMISSION — the hidden print inside the hold tone
// ------------------------------------------------------------------
const SpectralTransmission: React.FC<{ unlocked: boolean }> = ({ unlocked }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const timersRef = useRef<number[]>([]);
  const rafRef = useRef<number>(0);
  const analyserRef = useRef<AnalyserNode | null>(null);

  const stop = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setPlaying(false);
    setProgress(0);
  };

  useEffect(() => () => stop(), []);

  const runWaterfall = (analyser: AnalyserNode, durationMs: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx2d = canvas.getContext('2d');
    if (!ctx2d) return;

    const W = canvas.width;
    const H = canvas.height;
    ctx2d.fillStyle = '#02040a';
    ctx2d.fillRect(0, 0, W, H);

    const buf = new Uint8Array(analyser.frequencyBinCount);
    const colW = 2;
    let x = 0;
    const started = performance.now();

    const draw = () => {
      analyser.getByteFrequencyData(buf);
      // shift left
      const img = ctx2d.getImageData(colW, 0, W - colW, H);
      ctx2d.putImageData(img, 0, 0);
      // draw new column on the right
      for (let y = 0; y < H; y++) {
        const bin = Math.floor((y / H) * buf.length * 0.55);
        const v = buf[bin];
        const r = Math.min(255, v * 1.1);
        const g = Math.min(255, v * 0.72);
        const b = Math.min(255, v * 0.15);
        ctx2d.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`;
        ctx2d.fillRect(W - colW, H - y - 1, colW, 1);
      }
      x += colW;
      const p = Math.min(1, (performance.now() - started) / durationMs);
      setProgress(p);
      if (p < 1) rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    void x;
  };

  const play = () => {
    if (playing) {
      stop();
      return;
    }
    const ctx = audioService.getContext();
    const master = audioService.getMasterInput();

    // Chain for this transmission: dedicated analyser so the waterfall sees only us
    const local = ctx.createAnalyser();
    local.fftSize = 4096;
    local.smoothingTimeConstant = 0.55;
    const bus = ctx.createGain();
    bus.gain.value = 0.9;
    bus.connect(local);
    local.connect(master);
    analyserRef.current = local;

    let t = ctx.currentTime + 0.3;
    const COL_DUR = 0.11; // seconds per dot-matrix column
    const GAP = 0.02;

    // Draw SPECTRAL_WORD glyph columns as tone bursts
    const letters = SPECTRAL_WORD.split('');
    letters.forEach((letter, li) => {
      const glyph = FONT_5X7[letter] ?? FONT_5X7[' '];
      for (let col = 0; col < 5; col++) {
        for (let row = 0; row < 7; row++) {
          if (glyph[row][col] === '1') {
            const freq = SPECTRAL_BASE_HZ + (6 - row) * SPECTRAL_STEP_HZ;
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            g.gain.setValueAtTime(0.0001, t);
            g.gain.exponentialRampToValueAtTime(0.05, t + 0.02);
            g.gain.setValueAtTime(0.05, t + COL_DUR - 0.02);
            g.gain.exponentialRampToValueAtTime(0.0001, t + COL_DUR);
            osc.connect(g);
            g.connect(bus);
            osc.start(t);
            osc.stop(t + COL_DUR + 0.02);
          }
        }
        t += COL_DUR + GAP;
      }
      t += COL_DUR * 2; // inter-letter gap
      if (li < letters.length - 1) t += 0;
    });

    const totalMs = (t - ctx.currentTime) * 1000 + 400;
    runWaterfall(local, totalMs);
    timersRef.current.push(window.setTimeout(() => {
      setPlaying(false);
    }, totalMs));
    setPlaying(true);
    setProgress(0);
  };

  if (!unlocked) {
    return (
      <div className="p-4 bg-[#0a0708] border border-red-900/50 rounded text-center space-y-2">
        <Lock className="w-5 h-5 text-red-400 mx-auto" />
        <div className="text-[11px] text-red-300 font-bold tracking-wider">ANALYSIS WINDOW SEALED</div>
        <p className="text-[11px] text-slate-400 max-w-md mx-auto font-academic">
          "This carrier was sealed behind the second key. Its content is not in what the spiral says,
          but in what it shows. Decrypt the Ravensport groups; her name opens this window."
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={play}
          className={`py-2 px-4 rounded border flex items-center gap-2 cursor-pointer transition-colors text-[11px] font-bold ${
            playing
              ? 'bg-red-950 border-red-800 text-red-300 hover:bg-red-900'
              : 'bg-amber-600 border-amber-500 text-slate-950 hover:bg-amber-500'
          }`}
        >
          {playing ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          {playing ? 'HALT ANALYSIS' : 'FEED THE SPIRAL TO THE SPECTRUM'}
        </button>
        <span className="text-[10px] text-slate-400">
          RETENTION SPIRAL GPC-PR-033 • OVERTONE BAND 900 Hz — 4.6 kHz • WATERFALL PERSIST
        </span>
      </div>

      <div className="border border-slate-800 rounded overflow-hidden bg-black relative">
        <canvas ref={canvasRef} width={720} height={220} className="w-full block" />
        <div className="absolute top-2 left-2 text-[9px] text-amber-300/80 font-mono-code">
          SPECTRAL PRINT // ENERGY = AMBER // TIME FLOWS ← 
        </div>
        {!playing && progress === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-[10px] text-slate-500 font-mono-code">
            WATERFALL IDLE — FEED THE SPIRAL TO REVEAL THE PRINT
          </div>
        )}
      </div>

      <div className="h-1 bg-slate-900 rounded overflow-hidden">
        <div className="h-full bg-amber-500 transition-all" style={{ width: `${progress * 100}%` }} />
      </div>

      <div className="text-[11px] text-slate-400 font-academic leading-relaxed">
        The caretaker's note, attached to this window: <em>"The spiral is not only heard. Every eight days it carries a print.
        I have watched it form the same word since 2006. I was told it is a verb, and that it is addressed to whoever resolves the domain."</em>
      </div>
    </div>
  );
};

// ------------------------------------------------------------------
// CRYPTOLOGIC KIT — bench tools for the visitor
// ------------------------------------------------------------------
const CryptKit: React.FC = () => {
  const [tool, setTool] = useState<'vigenere' | 'caesar' | 'morse'>('vigenere');
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [shift, setShift] = useState(9);
  const [decrypt, setDecrypt] = useState(true);

  let output = '';
  if (tool === 'vigenere') output = key ? vigenere(input, key, decrypt) : '';
  if (tool === 'caesar') output = caesar(input, shift, decrypt);
  if (tool === 'morse') output = decrypt ? fromMorse(input) : toMorse(input);

  return (
    <div className="border border-slate-800 bg-[#080c13] p-5 rounded-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span className="font-insignia text-sm text-slate-100 font-bold">ANNEX CRYPTOLOGIC KIT</span>
        </div>
        <span className="text-[10px] text-slate-400">CLIENT-SIDE ONLY • NOTHING LEAVES YOUR BROWSER</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {([
          ['vigenere', 'VIGENÈRE'],
          ['caesar', 'CAESAR'],
          ['morse', 'MORSE']
        ] as const).map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTool(id)}
            className={`py-1.5 px-3 rounded border text-[11px] font-bold cursor-pointer transition-colors ${
              tool === id ? 'bg-amber-600 border-amber-500 text-slate-950' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setDecrypt(!decrypt)}
            className={`py-1.5 px-3 rounded border text-[10px] font-bold cursor-pointer transition-colors ${
              decrypt ? 'bg-emerald-950 border-emerald-800 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            MODE: {decrypt ? 'DECRYPT' : 'ENCRYPT'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            placeholder={tool === 'morse' && decrypt ? '.... . .-.. .-.. --- / .-- --- .-. .-.. -..' : 'Input text…'}
            className="w-full bg-[#04060a] border border-slate-800 rounded px-3 py-2 text-slate-200 placeholder-slate-500 outline-none focus:border-amber-500 text-xs font-mono-code resize-none"
          />
          {tool === 'vigenere' && (
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Key (letters only)…"
              className="w-full bg-[#04060a] border border-slate-800 rounded px-3 py-2 text-slate-200 placeholder-slate-500 outline-none focus:border-amber-500 text-xs uppercase tracking-widest"
            />
          )}
          {tool === 'caesar' && (
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              SHIFT:
              <input type="range" min="1" max="25" value={shift} onChange={(e) => setShift(parseInt(e.target.value))} className="flex-1 accent-amber-400" />
              <span className="text-amber-300 font-bold w-6">{shift}</span>
            </div>
          )}
        </div>
        <div className="p-3 bg-black/70 border border-slate-800 rounded font-mono-code text-xs text-amber-200 break-all min-h-[96px]">
          {output || <span className="text-slate-600">— output —</span>}
        </div>
      </div>

      <div className="text-[10px] text-slate-500">
        REFERENCE — MORSE: A .- B -... C -.-. D -.. E . F ..-. G --. H .... I .. J .--- K -.- L .-.. M -- N -. O --- P .--. Q --.- R .-. S ... T - U ..- V ...- W .-- X -..- Y -.-- Z --..
      </div>
    </div>
  );
};

// ------------------------------------------------------------------
// MAIN INTERCEPTS VIEW
// ------------------------------------------------------------------
export const InterceptsView: React.FC<{ onOpenNightWatch: () => void }> = ({ onOpenNightWatch }) => {
  const arg = useArgState();
  const stage2Open = arg.door1;
  const stage3Open = arg.door2;

  return (
    <div className="space-y-6 font-mono-code text-xs">
      {/* Banner */}
      <div className="border border-slate-700 bg-[#0a0e16] p-5 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-[11px]">
              SIGNAL INTERCEPTS // CATALOGED IN THE RESTORATION WINDOW
            </span>
          </div>
          <h1 className="font-academic text-2xl sm:text-3xl font-bold text-slate-100">
            Signal Intercepts &amp; Cipher Traffic
          </h1>
          <p className="font-academic text-sm text-slate-400 mt-1 max-w-2xl">
            Three carriers surfaced when the domain resolved. The caretaker has cataloged them, reproduced them faithfully,
            and sealed the second and third behind passwords it does not possess. Progress opens at the NIGHT-WATCH terminal.
          </p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-[10px] text-slate-400">DOORS OPENED</div>
          <div className="text-xl font-bold text-amber-400 font-insignia">
            {(arg.door1 ? 1 : 0) + (arg.door2 ? 1 : 0) + (arg.door3 ? 1 : 0)} / 3
          </div>
        </div>
      </div>

      {/* Intercept 01 */}
      <div className="border border-slate-800 bg-[#090d14] p-5 rounded-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-amber-400" />
            <span className="font-insignia text-sm text-slate-100 font-bold">INTERCEPT 01 // GANDER BEACON PREAMBLE</span>
          </div>
          <span className="px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded text-[9px] font-bold">OPEN CARRIER</span>
        </div>
        <MorseBeacon />
        <div className="text-[11px] text-slate-400 font-academic">
          The preamble repeats at the head of every eight-day payload. It is short, and it is a word, and the caretaker
          believes it is the first password. Decode it with the kit below — or simply count what the beacon says — and submit
          it at the terminal.
        </div>
      </div>

      {/* Intercept 02 */}
      <div className="border border-slate-800 bg-[#090d14] p-5 rounded-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-amber-400" />
            <span className="font-insignia text-sm text-slate-100 font-bold">INTERCEPT 02 // RAVENSPORT NUMBERS CARRIER</span>
          </div>
          <span className={`px-2 py-0.5 rounded text-[9px] font-bold border ${
            stage2Open ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-red-950 text-red-400 border-red-800'
          }`}>
            {stage2Open ? 'UNSEALED' : 'SEALED — FIRST KEY REQUIRED'}
          </span>
        </div>
        <VigenereWorkbench unlocked={stage2Open} />
      </div>

      {/* Intercept 03 */}
      <div className="border border-slate-800 bg-[#090d14] p-5 rounded-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <AudioLines className="w-4 h-4 text-amber-400" />
            <span className="font-insignia text-sm text-slate-100 font-bold">INTERCEPT 03 // HOLD-TONE SPECTRAL PRINT</span>
          </div>
          <span className={`px-2 py-0.5 rounded text-[9px] font-bold border ${
            stage3Open ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-red-950 text-red-400 border-red-800'
          }`}>
            {stage3Open ? 'UNSEALED' : 'SEALED — SECOND KEY REQUIRED'}
          </span>
        </div>
        <SpectralTransmission unlocked={stage3Open} />
      </div>

      {/* Crypt kit */}
      <CryptKit />

      {/* Terminal link */}
      <div className="border border-amber-800/60 bg-gradient-to-r from-[#160f05] to-[#0a0908] p-4 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[11px] text-slate-300">
          <Zap className="w-4 h-4 text-amber-400" />
          Passwords open doors, not pages. Take what you have decoded to the caretaker's console.
        </div>
        <button
          onClick={onOpenNightWatch}
          className="py-2 px-4 bg-amber-600 hover:bg-amber-500 text-slate-950 rounded font-bold text-[11px] cursor-pointer transition-colors flex items-center gap-2"
        >
          <Unlock className="w-3.5 h-3.5" /> OPEN NIGHT-WATCH TERMINAL
        </button>
      </div>
    </div>
  );
};
