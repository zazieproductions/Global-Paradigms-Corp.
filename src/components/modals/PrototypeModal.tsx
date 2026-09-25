import React from 'react';
import { PrototypeRecord } from '../../types/archive';
import { PatentSchematic } from '../diagrams/PatentSchematic';
import { AcousticMetamaterialSchematic } from '../diagrams/AcousticMetamaterialSchematic';
import { X, Play, FileText, Shield, ExternalLink, Cpu, Tag } from 'lucide-react';
import { audioService } from '../../audio/audioEngine';

interface PrototypeModalProps {
  prototype: PrototypeRecord | null;
  onClose: () => void;
  onLaunchBench?: (preset: string) => void;
  onSelectPatent?: (patentId: string) => void;
  onSelectLog?: (logId: string) => void;
}

export const PrototypeModal: React.FC<PrototypeModalProps> = ({
  prototype,
  onClose,
  onLaunchBench,
  onSelectPatent,
  onSelectLog
}) => {
  if (!prototype) return null;

  const isRestricted = prototype.clearance.includes('Restricted') || prototype.clearance.includes('Continuity Vault');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#090d14] border border-slate-700 shadow-2xl rounded-sm my-8 overflow-hidden text-slate-300 font-mono-code text-xs">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d121c] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="font-insignia text-lg text-slate-100 font-bold tracking-wider">
              GPC PROGRAM DOSSIER // {prototype.code}
            </span>
            <span className={`px-2 py-0.5 text-[10px] rounded font-bold ${
              prototype.clearance.includes('Continuity Vault')
                ? 'bg-red-950 text-red-400 border border-red-800'
                : prototype.clearance.includes('Restricted')
                ? 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                : 'bg-amber-950 text-amber-300 border border-amber-800'
            }`}>
              {prototype.clearance}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Title & Division Info */}
          <div>
            <div className="text-[11px] text-amber-400 uppercase tracking-widest font-bold mb-1">
              {prototype.domain} • FISCAL YEAR {prototype.year}
            </div>
            <h2 className="text-2xl font-academic font-bold text-slate-100 mb-2">
              {prototype.name}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
              <div><strong className="text-slate-300">LEAD FELLOW:</strong> {prototype.lead}</div>
              <div><strong className="text-slate-300">STATUS:</strong> <span className="text-emerald-400">{prototype.status}</span></div>
              <div><strong className="text-slate-300">ID:</strong> {prototype.id}</div>
            </div>
          </div>

          {/* Classification Banner if restricted */}
          {isRestricted && (
            <div className="p-3 bg-red-950/20 border-l-4 border-red-500 text-red-200/90 rounded-r text-[11px] flex items-center justify-between">
              <div>
                <strong className="text-red-400 tracking-wider">RESTRICTED DISCLOSURE:</strong> This program is subject to Vault procedure D-99. Output requires containment baffles and an engagement letter.
              </div>
              <div className="stamp-classified text-[10px]">RESTRICTED</div>
            </div>
          )}

          {/* Abstract / Summary */}
          <div className="space-y-2">
            <h3 className="font-insignia text-xs text-cyan-400 tracking-wider font-bold">
              1.0 PROGRAM ABSTRACT & OPERATIONAL MANDATE
            </h3>
            <p className="font-academic text-base text-slate-300 leading-relaxed bg-[#0c1018] p-4 rounded border border-slate-800/80">
              {prototype.summary} Certified against Charter Standard ES-77 under the Applied Futures Directorate, this apparatus evaluates the interplay between institutional impedance, anticipatory resonance, and non-linear directive feedback across extreme contingency differentials.
            </p>
          </div>

          {/* Technical Schematic Drawing */}
          <div className="space-y-2">
            <h3 className="font-insignia text-xs text-amber-400 tracking-wider font-bold">
              2.0 TECHNICAL VECTOR SCHEMATIC
            </h3>
            <PatentSchematic
              type={prototype.schematicType as any}
              patentNumber={prototype.crossReferences[0] || 'GPC-PAT-2003-018'}
              figureNumber={1}
              title={`${prototype.name} [Assembly Layout]`}
            />
            {prototype.domain === 'Ambient Soundscaping' && (
              <div className="mt-4">
                <AcousticMetamaterialSchematic />
              </div>
            )}
          </div>

          {/* Specifications Table */}
          <div className="space-y-2">
            <h3 className="font-insignia text-xs text-emerald-400 tracking-wider font-bold">
              3.0 INSTRUMENTATION & BENCH SPECIFICATIONS
            </h3>
            <div className="border border-slate-800 rounded overflow-hidden">
              <table className="w-full text-left">
                <tbody>
                  {Object.entries(prototype.specifications).map(([key, val], idx) => (
                    <tr
                      key={key}
                      className={idx % 2 === 0 ? 'bg-[#0b0f17]' : 'bg-[#080c13]'}
                    >
                      <td className="px-4 py-2.5 font-bold text-slate-400 w-1/3 border-b border-slate-800/60">
                        {key}
                      </td>
                      <td className="px-4 py-2.5 text-amber-300 border-b border-slate-800/60">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cross References */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-[#0c1019] border border-slate-800 rounded">
              <div className="text-[11px] text-cyan-400 font-bold mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> LINKED PATENT FILING
              </div>
              <div className="text-slate-300 font-semibold">{prototype.crossReferences[0]}</div>
              <p className="text-[10px] text-slate-400 mt-1">
                Formal filing containing contingency boundary descriptions and device claims.
              </p>
              {onSelectPatent && (
                <button
                  onClick={() => onSelectPatent(prototype.crossReferences[0])}
                  className="mt-2 text-[10px] text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Inspect Filing Dossier →
                </button>
              )}
            </div>

            <div className="p-3 bg-[#0c1019] border border-slate-800 rounded">
              <div className="text-[11px] text-amber-400 font-bold mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> PRIMARY LEDGER ENTRY
              </div>
              <div className="text-slate-300 font-semibold">{prototype.crossReferences[1]}</div>
              <p className="text-[10px] text-slate-400 mt-1">
                Primary chronological instrumentation record and deviation readings.
              </p>
              {onSelectLog && (
                <button
                  onClick={() => onSelectLog(prototype.crossReferences[1])}
                  className="mt-2 text-[10px] text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  View Ledger Entry →
                </button>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            {prototype.tags.map((t) => (
              <span key={t} className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[10px] rounded">
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d121c] border-t border-slate-800">
          <div className="text-[10px] text-slate-400">
            
          </div>
          <div className="flex items-center gap-3">
            {prototype.audioEnginePreset && onLaunchBench && (
              <button
                onClick={() => {
                  onLaunchBench(prototype.audioEnginePreset!);
                  onClose();
                }}
                className="py-2 px-4 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold rounded flex items-center gap-2 cursor-pointer transition-all shadow-md shadow-amber-950"
              >
                <Play className="w-4 h-4 fill-slate-950" /> LAUNCH IN SYSTEMS BENCH
              </button>
            )}
            <button
              onClick={onClose}
              className="py-2 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded cursor-pointer transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
