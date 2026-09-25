import React from 'react';
import { PatentDossier } from '../../types/archive';
import { PatentSchematic } from '../diagrams/PatentSchematic';
import { X, Printer, ExternalLink, ShieldCheck, Bookmark, FileText } from 'lucide-react';

interface PatentModalProps {
  patent: PatentDossier | null;
  onClose: () => void;
  onSelectPrototype?: (protoId: string) => void;
}

export const PatentModal: React.FC<PatentModalProps> = ({
  patent,
  onClose,
  onSelectPrototype
}) => {
  if (!patent) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
      <div className="relative w-full max-w-4xl bg-[#0a0d14] border border-slate-700 shadow-2xl rounded-sm my-8 overflow-hidden text-slate-300 font-mono-code text-xs print:border-none print:shadow-none print:text-black print:bg-white">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d121c] border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-3">
            <span className="font-insignia text-lg text-slate-100 font-bold tracking-wider">
              OFFICIAL SPECULATIVE PATENT DOSSIER
            </span>
            <span className={`px-2 py-0.5 text-[10px] rounded font-bold ${
              patent.status === 'Granted'
                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                : patent.status === 'Speculative Embargo'
                ? 'bg-amber-950 text-amber-400 border border-amber-800'
                : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
            }`}>
              {patent.status.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="py-1 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print formal patent specification document"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" /> PRINT DOSSIER
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Patent Content */}
        <div className="p-8 max-h-[80vh] overflow-y-auto space-y-6 print:max-h-none print:p-4">
          {/* Official Patent Form Header Box */}
          <div className="border-2 border-slate-700 p-5 bg-[#07090f] print:border-black print:bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-slate-800 print:border-black">
              <div>
                <div className="text-[10px] text-slate-400 print:text-slate-600">SPECULATIVE PATENT PUBLICATION</div>
                <div className="text-xl font-bold text-amber-400 print:text-black font-mono-code tracking-wider">
                  {patent.patentNumber}
                </div>
                <div className="text-[11px] text-slate-400 print:text-slate-700 mt-1">
                  FILING DATE: <strong>{patent.filingDate}</strong> | GRANT DATE: <strong>{patent.grantDate}</strong>
                </div>
              </div>

              <div className="text-right print:text-right">
                <div className="text-[10px] text-slate-400 print:text-slate-600">CPC CLASSIFICATION</div>
                <div className="text-sm font-bold text-cyan-400 print:text-black font-mono-code">
                  {patent.cpcClassification}
                </div>
                <div className="text-[11px] text-slate-400 print:text-slate-700 mt-1">
                  JURISDICTION: <strong>INTERNATIONAL SPECULATIVE ACOUSTICS REGISTRY</strong>
                </div>
              </div>
            </div>

            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px]">
              <div>
                <span className="text-slate-400 print:text-slate-600">INVENTORS:</span>
                <div className="font-bold text-slate-200 print:text-black mt-0.5">
                  {patent.inventors.join(', ')}
                </div>
              </div>
              <div>
                <span className="text-slate-400 print:text-slate-600">ASSIGNEE:</span>
                <div className="font-bold text-slate-200 print:text-black mt-0.5">
                  {patent.assignee}
                </div>
              </div>
            </div>
          </div>

          {/* Patent Title */}
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
              INVENTION SPECIFICATION
            </div>
            <h1 className="text-2xl font-academic font-bold text-slate-100 print:text-black leading-tight">
              {patent.title}
            </h1>
          </div>

          {/* Technical Drawing FIG 1 */}
          <div className="space-y-2">
            <h3 className="font-insignia text-xs text-amber-400 print:text-black tracking-wider font-bold">
              PATENT DRAWING // {patent.diagramTitle}
            </h3>
            <PatentSchematic
              type={patent.schematicType}
              patentNumber={patent.patentNumber}
              figureNumber={1}
              title={patent.title}
            />
            <p className="text-[11px] text-slate-400 print:text-slate-700 italic">
              {patent.diagramDescription}
            </p>
          </div>

          {/* Abstract */}
          <div className="space-y-2">
            <h3 className="font-insignia text-xs text-cyan-400 print:text-black tracking-wider font-bold">
              ABSTRACT
            </h3>
            <p className="font-academic text-base text-slate-300 print:text-black leading-relaxed bg-[#0c1018] print:bg-transparent p-4 rounded border border-slate-800/80 print:border-none">
              {patent.abstract}
            </p>
          </div>

          {/* Independent & Dependent Claims */}
          <div className="space-y-4">
            <h3 className="font-insignia text-xs text-emerald-400 print:text-black tracking-wider font-bold">
              CLAIMS OF THE INVENTION
            </h3>

            <div className="space-y-3 font-academic text-sm text-slate-300 print:text-black">
              {patent.independentClaims.map((claim, idx) => (
                <div key={idx} className="p-3 bg-[#0a0e16] print:bg-transparent border border-slate-800 print:border-slate-300 rounded leading-relaxed">
                  <span className="font-bold text-amber-400 print:text-black font-mono-code text-xs block mb-1">
                    INDEPENDENT CLAIM {idx + 1}:
                  </span>
                  {claim}
                </div>
              ))}

              {patent.dependentClaims.map((claim, idx) => (
                <div key={idx} className="p-3 bg-[#080b12] print:bg-transparent border border-slate-800/60 print:border-slate-300 rounded leading-relaxed">
                  <span className="font-bold text-cyan-400 print:text-black font-mono-code text-xs block mb-1">
                    DEPENDENT CLAIM {idx + 3}:
                  </span>
                  {claim}
                </div>
              ))}
            </div>
          </div>

          {/* Prior Art Citations */}
          <div className="space-y-2">
            <h3 className="font-insignia text-xs text-slate-400 print:text-black tracking-wider font-bold">
              PRIOR ART & PRECEDENT CITATIONS
            </h3>
            <ul className="list-disc list-inside space-y-1 text-slate-400 print:text-slate-800">
              {patent.priorArt.map((art, idx) => (
                <li key={idx} className="text-[11px]">{art}</li>
              ))}
            </ul>
          </div>

          {/* Linked Prototype */}
          {patent.linkedPrototypeId && onSelectPrototype && (
            <div className="p-4 bg-cyan-950/20 border border-cyan-900/50 rounded flex items-center justify-between print:hidden">
              <div>
                <span className="text-[10px] text-cyan-400 font-bold">CORRELATED PROTOTYPE APPARATUS</span>
                <div className="text-slate-200 font-semibold">{patent.linkedPrototypeId.toUpperCase()}</div>
              </div>
              <button
                onClick={() => onSelectPrototype(patent.linkedPrototypeId)}
                className="py-1.5 px-3 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold rounded flex items-center gap-1 text-[11px] cursor-pointer"
              >
                Inspect Prototype Dossier →
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d121c] border-t border-slate-800 print:hidden">
          <div className="text-[10px] text-slate-400">
            ZAZIE INSTITUTE OF APPLIED ANOMALIES // CONFIDENTIAL PATENT STUDY
          </div>
          <button
            onClick={onClose}
            className="py-2 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded cursor-pointer transition-colors"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};
