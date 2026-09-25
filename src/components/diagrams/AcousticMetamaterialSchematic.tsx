import React from 'react';

export const AcousticMetamaterialSchematic: React.FC = () => {
  return (
    <div className="border border-slate-700 bg-[#070a10] p-4 text-slate-300 font-mono-code text-xs rounded-sm">
      <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-3 text-[11px] text-slate-400">
        <div>
          <span className="font-bold text-amber-400">FIG. 4-B</span> — PHONONIC DISPERSION & NEGATIVE-INDEX REFRACTION
        </div>
        <div className="text-emerald-400 font-bold">
          ANISOTROPIC TENSOR [C_ijkl]
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Dispersion Relation Diagram */}
        <div className="bg-[#04060a] border border-slate-800 p-2.5 rounded">
          <div className="text-[10px] text-slate-400 mb-1 text-center font-bold">
            PHONONIC BAND STRUCTURE // BRILLOUIN ZONE (Γ → X → M → Γ)
          </div>
          <svg viewBox="0 0 260 140" className="w-full h-28">
            {/* Grid & Axis */}
            <line x1="30" y1="120" x2="250" y2="120" stroke="#334155" strokeWidth="1" />
            <line x1="30" y1="10" x2="30" y2="120" stroke="#334155" strokeWidth="1" />
            <text x="15" y="65" fill="#64748b" fontSize="8">ω (kHz)</text>
            <text x="30" y="132" fill="#64748b" fontSize="8">Γ</text>
            <text x="100" y="132" fill="#64748b" fontSize="8">X</text>
            <text x="175" y="132" fill="#64748b" fontSize="8">M</text>
            <text x="245" y="132" fill="#64748b" fontSize="8">Γ</text>

            {/* Complete Phononic Bandgap Shaded Area */}
            <rect x="30" y="45" width="220" height="28" fill="rgba(255, 77, 77, 0.12)" stroke="rgba(255, 77, 77, 0.4)" strokeDasharray="3 3" />
            <text x="95" y="62" fill="#ff4d4d" fontSize="8" fontWeight="bold">COMPLETE BANDGAP (3.2–4.8 kHz)</text>

            {/* Acoustic mode branches */}
            <path d="M 30 120 Q 65 95 100 80 Q 135 76 175 90 Q 210 105 250 120" fill="none" stroke="#ffb000" strokeWidth="1.5" />
            <path d="M 30 120 Q 65 110 100 95 Q 135 90 175 102 Q 210 115 250 120" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 2" />

            {/* Optical phononic branches above gap */}
            <path d="M 30 40 Q 65 32 100 25 Q 135 22 175 35 Q 210 40 250 42" fill="none" stroke="#d4a359" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Negative Refraction Ray Demonstration */}
        <div className="bg-[#04060a] border border-slate-800 p-2.5 rounded">
          <div className="text-[10px] text-slate-400 mb-1 text-center font-bold">
            NEGATIVE-INDEX ACOUSTIC REFRACTION (n_eff = -1.42)
          </div>
          <svg viewBox="0 0 260 140" className="w-full h-28">
            {/* Metamaterial interface line */}
            <line x1="20" y1="70" x2="240" y2="70" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="25" y="62" fill="#64748b" fontSize="8">AIR (n = +1.0)</text>
            <text x="25" y="85" fill="#a855f7" fontSize="8">METASURFACE (n = -1.42)</text>

            {/* Normal line */}
            <line x1="130" y1="20" x2="130" y2="120" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />

            {/* Incident ray */}
            <line x1="50" y1="20" x2="130" y2="70" stroke="#ffb000" strokeWidth="2" />
            <polygon points="90,42 98,47 91,52" fill="#ffb000" />
            <text x="60" y="38" fill="#ffb000" fontSize="8">k_incident</text>

            {/* Negative refracted ray (bends to the SAME side of normal) */}
            <line x1="130" y1="70" x2="70" y2="120" stroke="#ff4d4d" strokeWidth="2" />
            <polygon points="102,91 97,98 107,98" fill="#ff4d4d" />
            <text x="45" y="112" fill="#ff4d4d" fontSize="8">k_anomalous</text>

            {/* Classical Snell ray (ghosted) */}
            <line x1="130" y1="70" x2="175" y2="120" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
            <text x="180" y="112" fill="#475569" fontSize="7">Classical Snell</text>
          </svg>
        </div>
      </div>
    </div>
  );
};
