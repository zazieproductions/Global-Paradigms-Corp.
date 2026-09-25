import React from 'react';
import { TechnicalEssay } from '../../types/archive';
import { X, BookOpen, Share2, Download, Printer } from 'lucide-react';

interface EssayModalProps {
  essay: TechnicalEssay | null;
  onClose: () => void;
}

export const EssayModal: React.FC<EssayModalProps> = ({ essay, onClose }) => {
  if (!essay) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
      <div className="relative w-full max-w-4xl bg-[#090d14] border border-slate-700 shadow-2xl rounded-sm my-8 overflow-hidden text-slate-300 font-mono-code text-xs print:border-none print:bg-white print:text-black">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d121c] border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-3">
            <span className="font-insignia text-sm text-cyan-400 font-bold tracking-widest">
              GPC WHITE PAPER // {essay.doi}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="py-1 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> PRINT PAPER
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Content */}
        <div className="p-8 max-h-[80vh] overflow-y-auto space-y-6 print:max-h-none print:p-4">
          {/* Header Metadata */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <div className="text-[10px] text-amber-400 print:text-slate-600 tracking-wider uppercase font-bold mb-1">
              PEER-REVIEWED ARCHIVAL MONOGRAPH • {essay.date}
            </div>
            <h1 className="text-2xl sm:text-3xl font-academic font-bold text-slate-100 print:text-black leading-tight mb-3">
              {essay.title}
            </h1>
            <div className="text-sm font-academic text-slate-300 print:text-black italic mb-2">
              {essay.authors.join('; ')}
            </div>
            <div className="text-[10px] text-slate-400 print:text-slate-600">
              Applied Futures Directorate, Global Paradigms Corp., Palais des Paradigmes, Geneva
            </div>
            <div className="text-[10px] text-cyan-400/90 font-mono-code mt-1">
              DOI: {essay.doi}
            </div>
          </div>

          {/* Abstract */}
          <div className="p-4 bg-[#0c1018] print:bg-transparent border-l-2 border-cyan-500/80 rounded-r">
            <span className="font-insignia text-[11px] text-cyan-400 font-bold block mb-1">
              ABSTRACT
            </span>
            <p className="font-academic text-base text-slate-300 print:text-black leading-relaxed">
              {essay.abstract}
            </p>
          </div>

          {/* Paper Sections */}
          <div className="space-y-6">
            {essay.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-academic text-lg font-bold text-slate-100 print:text-black">
                  {section.heading}
                </h3>
                <p className="font-academic text-base text-slate-300 print:text-black leading-relaxed">
                  {section.content}
                </p>
                {section.equation && (
                  <div className="my-3 p-3 bg-black/60 print:bg-slate-100 border border-slate-800 print:border-slate-300 text-center font-mono-code text-amber-300 print:text-black text-sm rounded">
                    {section.equation}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* References */}
          <div className="border-t border-slate-800 print:border-black pt-4 space-y-2">
            <h4 className="font-insignia text-xs text-slate-400 font-bold tracking-wider">
              REFERENCES & FOOTNOTES
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-slate-400 print:text-slate-800 font-academic text-xs">
              {essay.references.map((ref, idx) => (
                <li key={idx} className="leading-normal">{ref}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d121c] border-t border-slate-800 print:hidden">
          <div className="text-[10px] text-slate-400">
            GLOBAL PARADIGMS WHITE PAPER SERIES // DECLASSIFIED 2026
          </div>
          <button
            onClick={onClose}
            className="py-2 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded cursor-pointer"
          >
            CLOSE PAPER
          </button>
        </div>
      </div>
    </div>
  );
};
