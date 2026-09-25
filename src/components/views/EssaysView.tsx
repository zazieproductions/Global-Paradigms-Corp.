import React from 'react';
import { TECHNICAL_ESSAYS_ARCHIVE } from '../../data/essaysData';
import { TechnicalEssay } from '../../types/archive';
import { BookOpen, ExternalLink, FileText, ChevronRight } from 'lucide-react';

interface EssaysViewProps {
  onSelectEssay: (essay: TechnicalEssay) => void;
}

export const EssaysView: React.FC<EssaysViewProps> = ({ onSelectEssay }) => {
  return (
    <div className="space-y-6 font-mono-code text-xs">
      {/* Top Banner */}
      <div className="border border-slate-700 bg-[#0a0e16] p-5 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-purple-400 font-bold uppercase tracking-widest text-[11px]">
              INTERNAL WHITE PAPERS // 8 MONOGRAPHS
            </span>
          </div>
          <h1 className="font-academic text-2xl sm:text-3xl font-bold text-slate-100">
            White Papers (1999–2006)
          </h1>
          <p className="font-academic text-sm text-slate-400 mt-1 max-w-2xl">
            The corporation's doctrinal record: the anticipatory enterprise, the muster doctrine, the unbroken voice, crowd arithmetic, the managed atrium, the floor of hearing, opinion surfaces — and the final paper, filed eight months before Directive 99, describing exactly how this archive would outlive its author.
          </p>
        </div>

        <div className="text-right shrink-0">
          <div className="text-[10px] text-slate-400">FILED MONOGRAPHS</div>
          <div className="text-xl font-bold text-purple-400 font-insignia">
            8 PAPERS
          </div>
        </div>
      </div>

      {/* Essays Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TECHNICAL_ESSAYS_ARCHIVE.map((essay) => (
          <div
            key={essay.id}
            onClick={() => onSelectEssay(essay)}
            className="p-5 bg-[#090d14] border border-slate-800 hover:border-purple-500/70 rounded-sm transition-all cursor-pointer flex flex-col justify-between group hover:bg-[#0c101c]"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] mb-2">
                <span className="font-bold text-purple-400 font-mono-code">{essay.doi}</span>
                <span className="text-slate-400">{essay.date}</span>
              </div>

              <h3 className="font-academic text-xl font-bold text-slate-100 group-hover:text-purple-300 transition-colors mb-2 leading-snug">
                {essay.title}
              </h3>

              <div className="text-[11px] text-slate-400 italic mb-3 font-academic">
                {essay.authors.join(', ')}
              </div>

              <p className="font-academic text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                {essay.abstract}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
              <div className="flex flex-wrap gap-1">
                {essay.tags.slice(0, 3).map((t) => (
                  <span key={t} className="px-1.5 py-0.5 bg-slate-800 text-slate-400 rounded text-[9px]">
                    #{t}
                  </span>
                ))}
              </div>
              <span className="text-purple-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0 ml-2">
                READ PAPER <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
