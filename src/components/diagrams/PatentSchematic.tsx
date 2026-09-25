import React from 'react';

interface PatentSchematicProps {
  type?: 'transducer' | 'resonator' | 'interferometer' | 'circuit' | 'waveguide' | 'matrix';
  patentNumber?: string;
  figureNumber?: number;
  title?: string;
}

export const PatentSchematic: React.FC<PatentSchematicProps> = ({
  type = 'transducer',
  patentNumber = 'ZIAA-PAT-2021-001',
  figureNumber = 1,
  title = 'Acoustic Wavefront Manipulation Assembly'
}) => {
  return (
    <div className="border border-slate-700 bg-[#06090e] p-4 text-slate-300 font-mono-code text-xs relative select-none shadow-inner">
      {/* Patent Blueprint Header */}
      <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-3 text-[11px] text-slate-400">
        <div>
          <span className="font-bold text-slate-200">FIG. {figureNumber}</span> — SPECIFICATION SHEET
        </div>
        <div className="text-amber-400/90 font-bold tracking-widest font-mono-code">
          {patentNumber}
        </div>
        <div className="text-[10px] text-slate-400">
          ZAZIE PRODUCTIONS LLC // CLASSIFIED
        </div>
      </div>

      {/* SVG Canvas Blueprint */}
      <div className="w-full h-[280px] bg-[#03060a] border border-slate-800/80 rounded relative flex items-center justify-center overflow-hidden">
        {/* Subtle engineering grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <defs>
            <pattern id={`pat-grid-${type}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00e5ff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pat-grid-${type})`} />
        </svg>

        {/* Blueprint drawings based on type */}
        {type === 'transducer' && (
          <svg viewBox="0 0 500 240" className="w-full h-full p-2">
            {/* Backing mass 10 */}
            <rect x="60" y="70" width="60" height="100" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="80" y="125" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">10</text>
            
            {/* Piezoelectric stack 12 */}
            <rect x="120" y="80" width="50" height="80" fill="#0f172a" stroke="#00e5ff" strokeWidth="1.5" />
            <line x1="130" y1="80" x2="130" y2="160" stroke="#00e5ff" strokeDasharray="3 3" />
            <line x1="145" y1="80" x2="145" y2="160" stroke="#00e5ff" strokeDasharray="3 3" />
            <line x1="160" y1="80" x2="160" y2="160" stroke="#00e5ff" strokeDasharray="3 3" />
            <text x="140" y="125" fill="#00e5ff" fontSize="10" fontFamily="JetBrains Mono">12</text>

            {/* Horn transformer 14 */}
            <path d="M 170 80 L 320 30 L 320 210 L 170 160 Z" fill="#131d2e" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="235" y="125" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono">14</text>

            {/* Front matching layer 16 */}
            <rect x="320" y="30" width="30" height="180" fill="#1e293b" stroke="#d4a359" strokeWidth="1.5" />
            <text x="330" y="125" fill="#d4a359" fontSize="10" fontFamily="JetBrains Mono">16</text>

            {/* Radiated acoustic beam lines 18 */}
            <path d="M 360 40 Q 420 120 360 200" fill="none" stroke="#00e5ff" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M 390 30 Q 460 120 390 210" fill="none" stroke="#00e5ff" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M 420 20 Q 500 120 420 220" fill="none" stroke="#00e5ff" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="440" y="125" fill="#00e5ff" fontSize="10" fontFamily="JetBrains Mono">18</text>

            {/* Electrodes & Callout pointers */}
            <line x1="145" y1="80" x2="145" y2="40" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="145" cy="40" r="2.5" fill="#cbd5e1" />
            <text x="140" y="30" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono">20 (+V)</text>

            <line x1="145" y1="160" x2="145" y2="200" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="145" cy="200" r="2.5" fill="#cbd5e1" />
            <text x="140" y="215" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono">22 (GND)</text>

            {/* Centerline */}
            <line x1="40" y1="120" x2="480" y2="120" stroke="#64748b" strokeWidth="0.75" strokeDasharray="6 3 2 3" />
          </svg>
        )}

        {type === 'resonator' && (
          <svg viewBox="0 0 500 240" className="w-full h-full p-2">
            {/* Primary Cavity */}
            <rect x="80" y="50" width="160" height="140" rx="8" fill="#131d2e" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="150" y="125" fill="#cbd5e1" fontSize="11" fontFamily="JetBrains Mono">CAV-01</text>
            
            {/* Neck / Iris Waveguide */}
            <rect x="240" y="95" width="70" height="50" fill="#0f172a" stroke="#00e5ff" strokeWidth="1.5" />
            <text x="268" y="125" fill="#00e5ff" fontSize="10" fontFamily="JetBrains Mono">32</text>

            {/* Secondary Resonant Cavity */}
            <circle cx="370" cy="120" r="60" fill="#1e293b" stroke="#d4a359" strokeWidth="1.5" />
            <text x="355" y="125" fill="#d4a359" fontSize="11" fontFamily="JetBrains Mono">CAV-02</text>

            {/* Porous Foam Baffles 34 */}
            <line x1="100" y1="60" x2="100" y2="180" stroke="#94a3b8" strokeDasharray="4 2" strokeWidth="2" />
            <line x1="120" y1="60" x2="120" y2="180" stroke="#94a3b8" strokeDasharray="4 2" strokeWidth="2" />
            <text x="105" y="42" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">34</text>

            {/* Standing wave visualization inside Cavity 1 */}
            <path d="M 80 120 Q 120 70 160 120 Q 200 170 240 120" fill="none" stroke="#00e5ff" strokeWidth="1.5" opacity="0.8" />
            <text x="145" y="175" fill="#00e5ff" fontSize="9" fontFamily="JetBrains Mono">λ/2 STANDING MODE</text>
          </svg>
        )}

        {type === 'interferometer' && (
          <svg viewBox="0 0 500 240" className="w-full h-full p-2">
            {/* Acoustic Input */}
            <line x1="40" y1="120" x2="130" y2="120" stroke="#00e5ff" strokeWidth="2" />
            <polygon points="120,115 130,120 120,125" fill="#00e5ff" />
            <text x="50" y="105" fill="#00e5ff" fontSize="10" fontFamily="JetBrains Mono">IN (k_0)</text>

            {/* Beam Splitter 40 */}
            <line x1="110" y1="140" x2="150" y2="100" stroke="#d4a359" strokeWidth="2.5" />
            <text x="115" y="90" fill="#d4a359" fontSize="10" fontFamily="JetBrains Mono">40 (50/50)</text>

            {/* Path A (Upper Arm) */}
            <path d="M 130 120 L 130 50 L 370 50 L 370 120" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
            <circle cx="250" cy="50" r="16" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
            <text x="238" y="54" fill="#a855f7" fontSize="10" fontFamily="JetBrains Mono">Δφ (42)</text>

            {/* Path B (Lower Arm) */}
            <path d="M 130 120 L 130 190 L 370 190 L 370 120" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
            <circle cx="250" cy="190" r="16" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
            <text x="236" y="194" fill="#10b981" fontSize="10" fontFamily="JetBrains Mono">REF (44)</text>

            {/* Recombiner Beam Splitter 46 */}
            <line x1="350" y1="140" x2="390" y2="100" stroke="#d4a359" strokeWidth="2.5" />
            <text x="375" y="90" fill="#d4a359" fontSize="10" fontFamily="JetBrains Mono">46</text>

            {/* Output Detectors */}
            <line x1="370" y1="120" x2="450" y2="120" stroke="#00e5ff" strokeWidth="2" />
            <rect x="450" y="105" width="30" height="30" fill="#0f172a" stroke="#00e5ff" strokeWidth="1.5" />
            <text x="455" y="124" fill="#00e5ff" fontSize="10" fontFamily="JetBrains Mono">DET</text>
          </svg>
        )}

        {type === 'circuit' && (
          <svg viewBox="0 0 500 240" className="w-full h-full p-2">
            {/* Op-amp triangle 50 */}
            <polygon points="180,60 180,180 280,120" fill="#131d2e" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="190" y="100" fill="#cbd5e1" fontSize="12" fontFamily="JetBrains Mono">-</text>
            <text x="190" y="150" fill="#cbd5e1" fontSize="12" fontFamily="JetBrains Mono">+</text>
            <text x="220" y="125" fill="#cbd5e1" fontSize="11" fontFamily="JetBrains Mono">A1 (50)</text>

            {/* Feedback Loop */}
            <line x1="160" y1="95" x2="180" y2="95" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="160" y1="95" x2="160" y2="40" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="160" y1="40" x2="330" y2="40" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="330" y1="40" x2="330" y2="120" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Resistor in Feedback */}
            <rect x="220" y="32" width="50" height="16" fill="#1e293b" stroke="#00e5ff" strokeWidth="1.5" />
            <text x="232" y="44" fill="#00e5ff" fontSize="9" fontFamily="JetBrains Mono">R_f (52)</text>

            {/* Input Resistor and Piezo Source */}
            <line x1="60" y1="95" x2="110" y2="95" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="110" y="87" width="40" height="16" fill="#1e293b" stroke="#d4a359" strokeWidth="1.5" />
            <text x="120" y="99" fill="#d4a359" fontSize="9" fontFamily="JetBrains Mono">R_in</text>
            <circle cx="50" cy="95" r="10" fill="#0f172a" stroke="#ff4d4d" strokeWidth="1.5" />
            <text x="44" y="99" fill="#ff4d4d" fontSize="9" fontFamily="JetBrains Mono">PIEZO</text>

            {/* Ground on positive pin */}
            <line x1="160" y1="145" x2="180" y2="145" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="160" y1="145" x2="160" y2="175" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="150" y1="175" x2="170" y2="175" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="154" y1="180" x2="166" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="157" y1="185" x2="163" y2="185" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Output */}
            <line x1="280" y1="120" x2="420" y2="120" stroke="#00e5ff" strokeWidth="2" />
            <circle cx="420" cy="120" r="3" fill="#00e5ff" />
            <text x="428" y="124" fill="#00e5ff" fontSize="10" fontFamily="JetBrains Mono">V_OUT</text>
          </svg>
        )}

        {type === 'waveguide' && (
          <svg viewBox="0 0 500 240" className="w-full h-full p-2">
            {/* Pentamode Metamaterial Lattice */}
            <g stroke="#00e5ff" strokeWidth="1.5" opacity="0.8">
              {[0, 1, 2, 3, 4].map((col) =>
                [0, 1, 2].map((row) => {
                  const cx = 80 + col * 80;
                  const cy = 60 + row * 60;
                  return (
                    <g key={`${col}-${row}`}>
                      <polygon points={`${cx},${cy-22} ${cx+20},${cy-10} ${cx+20},${cy+14} ${cx},${cy+26} ${cx-20},${cy+14} ${cx-20},${cy-10}`} fill="#101726" stroke="#00e5ff" />
                      <circle cx={cx} cy={cy} r="3" fill="#d4a359" />
                    </g>
                  );
                })
              )}
            </g>

            {/* Wave propagation path along protected edge */}
            <path d="M 60 38 L 420 38" fill="none" stroke="#ff4d4d" strokeWidth="2.5" strokeDasharray="5 3" />
            <polygon points="415,33 425,38 415,43" fill="#ff4d4d" />
            <text x="180" y="28" fill="#ff4d4d" fontSize="10" fontFamily="JetBrains Mono">PROTECTED TOPOLOGICAL EDGE MODE</text>

            <text x="360" y="210" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">LATTICE: a = 24.5 mm</text>
          </svg>
        )}

        {type === 'matrix' && (
          <svg viewBox="0 0 500 240" className="w-full h-full p-2">
            {/* 6x4 Crossbar Array */}
            {[60, 110, 160, 210, 260, 310, 360, 410].map((x, i) => (
              <line key={`x-${i}`} x1={x} y1="30" x2={x} y2="210" stroke="#334155" strokeWidth="1.5" />
            ))}
            {[50, 95, 140, 185].map((y, j) => (
              <line key={`y-${j}`} x1="40" y1={y} x2={430} y2={y} stroke="#334155" strokeWidth="1.5" />
            ))}

            {/* Active Nodes */}
            {[[60, 50], [160, 95], [260, 140], [360, 185], [110, 185], [310, 50], [410, 95]].map(([nx, ny], k) => (
              <g key={`node-${k}`}>
                <circle cx={nx} cy={ny} r="7" fill="#0f172a" stroke="#00e5ff" strokeWidth="2" />
                <circle cx={nx} cy={ny} r="2.5" fill="#d4a359" />
              </g>
            ))}

            <text x="50" y="230" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">
              ACOUSTIC CROSSBAR ADDRESS MATRIX // 32 COUPLING NODES
            </text>
          </svg>
        )}
      </div>

      {/* Blueprint Footer */}
      <div className="mt-3 flex flex-wrap justify-between items-center text-[10px] text-slate-400 border-t border-slate-800/80 pt-2">
        <div className="text-slate-300 font-bold">{title}</div>
        <div>SCALE: 1:1 METRIC (mm) // ISO 10209 CLASSIFIED ARCHIVE</div>
      </div>
    </div>
  );
};
