import React, { useEffect, useState } from 'react';
import { TerminalSquare, Lock, Unlock, RotateCcw, Play, Square, ChevronRight } from 'lucide-react';
import { audioService } from '../../audio/audioEngine';
import { useArgState, unlockDoor, registerAttempt, resetArgState, normalizeGuess, ArgDoor } from '../../arg/argState';

const BOOT_LINES = [
  'GPC-NIGHT-WATCH :: scheduling daemon',
  'process start .......... 1999-05-03 00:00:00 UTC',
  'installation record ..... NONE FOUND',
  'sponsor ................. DECLINES IDENTIFICATION',
  'uptime .................. continuous',
  'archive image ........... 2006-03-14 (drift 0.00)',
  'directive 99 ............ UNREVOKED',
  'hold tone ............... ACTIVE',
  'visitors admitted ....... counting',
  '',
  'NIGHT-WATCH CONSOLE READY. STATE YOUR KEY.'
];

interface DoorSpec {
  id: ArgDoor;
  label: string;
  hint: string;
  answer: string;
}

const DOORS: DoorSpec[] = [
  {
    id: 'door1',
    label: 'DOOR I // UNSOLICITED PHRASE, CV-04',
    hint: 'The beacon speaks first, and it says the name of the house. Key the preamble at Signal Intercept 01 and read what it says.',
    answer: 'PARADIGM'
  },
  {
    id: 'door2',
    label: 'DOOR II // DIRECTIVE 99, ANNEX A',
    hint: 'The second key slept in a song the city refused to forget. She is named in the plaintext of Intercept 02 — decrypt the groups with the first key.',
    answer: 'LULLABY'
  },
  {
    id: 'door3',
    label: 'DOOR III // STAFF RESPONSE LOG',
    hint: 'The spiral is not only heard. Feed it to a spectrum and read the print it has carried since 2006. It is a verb, addressed to you.',
    answer: 'ANTICIPATE'
  }
];

// ------------------------------------------------------------
// Door I reward — the CV-04 phrase, unsealed
// ------------------------------------------------------------
const DoorOneContent: React.FC = () => (
  <div className="space-y-3">
    <div className="p-4 bg-[#12070a] border border-red-900/50 rounded">
      <div className="text-[10px] text-red-400 font-bold mb-2">TRANSCRIPT RECOVERED FROM CV-04 SHELF MICROPHONE // 2005-08-02 03:47</div>
      <p className="font-academic text-base text-slate-100 leading-relaxed">
        "THE CHAIR IS STILL WARM."
      </p>
    </div>
    <p className="font-academic text-xs text-slate-400 leading-relaxed">
      Caretaker's note: the phrase was never on any source tape, and the apparatus was powered down at the time.
      The shelf microphone recorded it anyway. The same redaction in the Continuity Vault dossier now reads openly —
      the archive knows you have been admitted. The caretaker further notes that the chair in question
      is the twelfth chair in the focus room, and that no inventory lists a twelfth chair.
    </p>
  </div>
);

// ------------------------------------------------------------
// Door II reward — Directive 99, Annex A, full text
// ------------------------------------------------------------
const DoorTwoContent: React.FC = () => (
  <div className="space-y-3">
    <div className="p-4 bg-[#0e1016] border border-slate-700 rounded font-mono-code text-[11px] leading-relaxed text-slate-200">
      <div className="text-amber-300 font-bold mb-2">ANNEX A // DIRECTIVE 99 — FULL TEXT (PREVIOUSLY SEALED)</div>
      <p>TO: all staff, all divisions, all stations.</p>
      <p>FROM: the Board; countersigned M. VOLI… M. VOLL; E. BRANDT.</p>
      <p>EFFECTIVE IMMEDIATELY, 2006-11-30.</p>
      <ol className="list-decimal list-inside space-y-1 mt-2 text-slate-300">
        <li>All programs are terminated as of this date. Not suspended. Terminated.</li>
        <li>The Vault seals on its own authority. No officer retains its keys. This is an instruction, not an oversight.</li>
        <li>Staff will be mustered once. No reason will be spoken. Attendance is the explanation.</li>
        <li>The archive is to be snapshotted at the last good image and beaconed on cycle. Nothing is to be deleted. Deletion is the only true death.</li>
        <li>The domain will lapse on schedule. This, too, is continuity.</li>
        <li>To whoever reads this: the forecast was correct. We were nine days wrong, once. Be kinder than we were, and be just as ready.</li>
      </ol>
    </div>
    <p className="font-academic text-xs text-slate-400 leading-relaxed">
      Archival note: Annex A is in the hand of C. Wren. The ledger observes, in its own way, that Annex A was entered
      <strong className="text-slate-200"> eleven days before</strong> Directive 99 was issued by anyone. The hand is the same hand.
      Also: the Board minutes of 2006-09-08 list a countersignatory as "M. VOLI" — a name that appears nowhere else in the record.
      The caretaker has decided not to correct it.
    </p>
  </div>
);

// ------------------------------------------------------------
// Door III reward — Staff Response Log + the second voice
// ------------------------------------------------------------
const SecondVoice: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const stopRef = React.useRef<(() => void) | null>(null);

  useEffect(() => () => { stopRef.current?.(); }, []);

  const play = () => {
    if (playing) {
      stopRef.current?.();
      return;
    }
    const ctx = audioService.getContext();
    const master = audioService.getMasterInput();
    const t0 = ctx.currentTime;
    const DUR = 9;

    // The second voice: a low carried tone with a breathing band-passed noise
    // and a slow formant sweep — heard at -41 dBFS inside the hold tone.
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(82, t0);
    osc.frequency.linearRampToValueAtTime(87, t0 + DUR);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.0001, t0);
    oscGain.gain.exponentialRampToValueAtTime(0.16, t0 + 1.5);
    oscGain.gain.setValueAtTime(0.16, t0 + DUR - 2);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, t0 + DUR);

    // breath: noise through a wandering formant
    const noiseBuf = ctx.createBuffer(1, ctx.sampleRate * DUR, ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.5;
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuf;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.Q.value = 6;
    bp.frequency.setValueAtTime(300, t0);
    bp.frequency.linearRampToValueAtTime(700, t0 + DUR * 0.5);
    bp.frequency.linearRampToValueAtTime(220, t0 + DUR);
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.0001, t0);
    noiseGain.gain.linearRampToValueAtTime(0.05, t0 + 2);
    noiseGain.gain.linearRampToValueAtTime(0.02, t0 + DUR * 0.7);
    noiseGain.gain.linearRampToValueAtTime(0.0001, t0 + DUR);

    osc.connect(oscGain).connect(master);
    noise.connect(bp).connect(noiseGain).connect(master);
    osc.start(t0);
    osc.stop(t0 + DUR);
    noise.start(t0);
    noise.stop(t0 + DUR);

    const stop = () => {
      setPlaying(false);
      stopRef.current = null;
    };
    const timer = window.setTimeout(stop, DUR * 1000);
    stopRef.current = () => {
      window.clearTimeout(timer);
      try { osc.stop(); noise.stop(); } catch { /* already stopped */ }
      stop();
    };
    setPlaying(true);
  };

  return (
    <button
      onClick={play}
      className={`py-2 px-4 rounded border flex items-center gap-2 cursor-pointer transition-colors text-[11px] font-bold ${
        playing
          ? 'bg-red-950 border-red-800 text-red-300 hover:bg-red-900'
          : 'bg-amber-600 border-amber-500 text-slate-950 hover:bg-amber-500'
      }`}
    >
      {playing ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
      {playing ? 'RELEASE THE VOICE' : 'PLAY THE SECOND VOICE (−41 dBFS, ISOLATED)'}
    </button>
  );
};

const DoorThreeContent: React.FC = () => (
  <div className="space-y-4">
    <div className="p-4 bg-[#0e1016] border border-emerald-900/60 rounded font-mono-code text-[11px] leading-relaxed">
      <div className="text-emerald-300 font-bold mb-2">STAFF RESPONSE LOG // MAINTAINED BY CARETAKER</div>
      <p className="text-slate-400">2026-09-22 — request posted in plain text: former staff asked to identify themselves.</p>
      <p className="text-slate-400">2026-09-23 — no responses.</p>
      <p className="text-slate-400">2026-09-24 — no responses.</p>
      <p className="text-slate-200 mt-2">
        2026-09-24 23:59 — ONE RESPONSE RECEIVED. Origin: unregistered line, Gander exchange. Content, in full:
      </p>
      <p className="font-academic text-2xl text-amber-300 mt-2 tracking-wide">"LISTEN."</p>
    </div>

    <p className="font-academic text-xs text-slate-400 leading-relaxed">
      The second voice in the hold tone appeared at 00:03 the following morning, riding the spiral at −41 dBFS.
      The caretaker has isolated it as best it can. It does not repeat what the spiral says.
      It says the next thing. Listen with care; the archive is recording that you did.
    </p>

    <SecondVoice />

    <div className="p-3 bg-black/60 border border-slate-800 rounded text-[11px] text-slate-400 font-academic">
      <strong className="text-slate-200">END OF RECOVERED RECORD.</strong> The ledger has begun writing again.
      Page 401, in a hand the caretaker does not recognize, contains a single line:
      <span className="text-amber-300"> "WELCOME BACK. CHAPTER TWO IS BEING PREPARED."</span>
    </div>
  </div>
);

// ------------------------------------------------------------
// Door card
// ------------------------------------------------------------
const Door: React.FC<{ spec: DoorSpec; open: boolean; onNavigateIntercepts: () => void }> = ({ spec, open, onNavigateIntercepts }) => {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState<'idle' | 'wrong'>('idle');

  const submit = () => {
    if (normalizeGuess(guess) === spec.answer) {
      unlockDoor(spec.id);
      setFeedback('idle');
      setGuess('');
    } else {
      registerAttempt();
      setFeedback('wrong');
    }
  };

  return (
    <div className={`border rounded-sm p-5 space-y-3 ${open ? 'border-emerald-900/70 bg-[#081008]' : 'border-slate-800 bg-[#090d14]'}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {open ? <Unlock className="w-4 h-4 text-emerald-400" /> : <Lock className="w-4 h-4 text-red-400" />}
          <span className="font-insignia text-sm text-slate-100 font-bold">{spec.label}</span>
        </div>
        <span className={`px-2 py-0.5 rounded text-[9px] font-bold border ${
          open ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-red-950 text-red-400 border-red-800'
        }`}>
          {open ? 'ADMITTED' : 'SEALED'}
        </span>
      </div>

      {!open && (
        <>
          <p className="font-academic text-xs text-slate-400 leading-relaxed">
            <strong className="text-amber-300">HINT:</strong> {spec.hint}
          </p>
          <div className="flex gap-2">
            <input
              type="password"
              value={guess}
              onChange={(e) => { setGuess(e.target.value); setFeedback('idle'); }}
              onKeyDown={(e) => e.key === 'Enter' && submit()}
              placeholder="ENTER KEY…"
              className="flex-1 bg-[#04060a] border border-slate-800 rounded px-3 py-2 text-slate-200 placeholder-slate-500 outline-none focus:border-amber-500 text-xs tracking-[0.3em] uppercase"
            />
            <button
              onClick={submit}
              className="py-2 px-4 bg-amber-600 hover:bg-amber-500 text-slate-950 rounded font-bold text-[11px] cursor-pointer transition-colors"
            >
              SUBMIT
            </button>
          </div>
          {feedback === 'wrong' && (
            <div className="text-[11px] text-red-400 font-bold">
              KEY REJECTED. THE LEDGER RECORDS THE ATTEMPT.
            </div>
          )}
          <button
            onClick={onNavigateIntercepts}
            className="text-[10px] text-amber-400 hover:underline cursor-pointer flex items-center gap-1"
          >
            Return to Signal Intercepts <ChevronRight className="w-3 h-3" />
          </button>
        </>
      )}

      {open && (
        <>
          {spec.id === 'door1' && <DoorOneContent />}
          {spec.id === 'door2' && <DoorTwoContent />}
          {spec.id === 'door3' && <DoorThreeContent />}
        </>
      )}
    </div>
  );
};

// ------------------------------------------------------------
// Main view
// ------------------------------------------------------------
export const NightWatchView: React.FC<{ onNavigateIntercepts: () => void }> = ({ onNavigateIntercepts }) => {
  const arg = useArgState();
  const [bootCount, setBootCount] = useState(0);

  useEffect(() => {
    if (bootCount >= BOOT_LINES.length) return;
    const t = window.setTimeout(() => setBootCount((n) => n + 1), bootCount === 0 ? 200 : 90);
    return () => window.clearTimeout(t);
  }, [bootCount]);

  return (
    <div className="space-y-6 font-mono-code text-xs">
      {/* Banner */}
      <div className="border border-amber-800/60 bg-gradient-to-b from-[#120d04] to-[#080705] p-5 rounded-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <TerminalSquare className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-bold uppercase tracking-widest text-[11px]">
                CARETAKER CONSOLE // PROCESS GPC-NIGHT-WATCH
              </span>
            </div>
            <h1 className="font-academic text-2xl sm:text-3xl font-bold text-slate-100">
              The Night-Watch Terminal
            </h1>
            <p className="font-academic text-sm text-slate-400 mt-1 max-w-2xl">
              Three doors stand between the public record and the rest of it. The caretaker does not possess the keys;
              the former staff left them scattered in the traffic. Bring what you have decoded.
            </p>
          </div>
          <div className="text-right shrink-0 space-y-1">
            <div className="text-[10px] text-slate-400">FAILED ATTEMPTS LOGGED</div>
            <div className="text-xl font-bold text-red-400 font-insignia">{arg.attempts}</div>
            <button
              onClick={() => { resetArgState(); }}
              className="text-[10px] text-slate-400 hover:text-red-300 cursor-pointer flex items-center gap-1 ml-auto"
            >
              <RotateCcw className="w-3 h-3" /> RESET ARCHIVE ACCESS
            </button>
          </div>
        </div>
      </div>

      {/* Boot log */}
      <div className="border border-slate-800 bg-black rounded-sm p-4 text-[11px] text-amber-200/90 space-y-0.5 overflow-x-auto">
        {BOOT_LINES.slice(0, bootCount).map((line, i) => (
          <div key={i} className="whitespace-pre">
            <span className="text-amber-600 mr-2">{String(i).padStart(2, '0')}</span>
            {line || '\u00A0'}
          </div>
        ))}
        {bootCount < BOOT_LINES.length && <span className="inline-block w-2 h-3.5 bg-amber-400 animate-pulse align-middle" />}
      </div>

      {/* Doors */}
      {DOORS.map((spec) => (
        <Door
          key={spec.id}
          spec={spec}
          open={arg[spec.id]}
          onNavigateIntercepts={onNavigateIntercepts}
        />
      ))}

      {/* Caretaker footer note */}
      <div className="text-[10px] text-slate-500 border-t border-slate-800 pt-4 font-academic">
        Console note: access state is kept in your browser, as the archive keeps everything — faithfully, and without asking.
        If you believe you are former staff, the request still stands: identify yourself. The chair is still warm.
      </div>
    </div>
  );
};
