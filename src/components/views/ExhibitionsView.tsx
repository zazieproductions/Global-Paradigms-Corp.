import React from 'react';
import { EXHIBITIONS_ARCHIVE } from '../../data/exhibitionsData';
import { Globe, Calendar, MapPin, Award, Layers, ExternalLink } from 'lucide-react';

export const ExhibitionsView: React.FC = () => {
  return (
    <div className="space-y-6 font-mono-code text-xs">
      {/* Top Banner */}
      <div className="border border-slate-700 bg-[#0a0e16] p-5 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-[11px]">
              CIVIC DISSEMINATION // 16 INTERNATIONAL EXHIBITIONS
            </span>
          </div>
          <h1 className="font-academic text-2xl sm:text-3xl font-bold text-slate-100">
            Public Listening Infrastructure & Exhibitions
          </h1>
          <p className="font-academic text-sm text-slate-400 mt-1 max-w-2xl">
            Large-scale architectural sound pavilions, civic acoustic shadow benches in Rotterdam, subterranean cistern installations at the Venice Biennale, and museum retrospectives across Europe, the Americas, and Asia.
          </p>
        </div>

        <div className="text-right shrink-0">
          <div className="text-[10px] text-slate-400">GLOBAL INSTALLATIONS</div>
          <div className="text-xl font-bold text-cyan-400 font-insignia">
            16 COMMISSIONED
          </div>
        </div>
      </div>

      {/* Exhibitions Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {EXHIBITIONS_ARCHIVE.map((exh) => (
          <div
            key={exh.id}
            className="p-5 bg-[#090d14] border border-slate-800 rounded-sm space-y-4 hover:border-cyan-500/60 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] text-cyan-400 font-bold mb-1">
                <span>{exh.venue}</span>
                <span className="text-slate-400 font-mono-code">{exh.year}</span>
              </div>

              <h2 className="font-academic text-xl font-bold text-slate-100 mb-1">
                {exh.title}
              </h2>

              <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{exh.city}</span> • <span className="text-slate-300">Curator: {exh.curator}</span>
              </div>

              <p className="font-academic text-sm text-slate-300 leading-relaxed mb-3">
                {exh.description}
              </p>
            </div>

            {/* Technical setup */}
            <div className="p-3 bg-black/60 border border-slate-800 rounded text-[11px]">
              <span className="text-slate-400 font-bold block mb-0.5">TECHNICAL ARCHITECTURE:</span>
              <span className="text-slate-300">{exh.technicalSetup}</span>
            </div>

            {/* Reception */}
            <div className="text-[11px] text-slate-400 italic">
              <strong>Reception:</strong> {exh.audienceReception}
            </div>

            {/* Archival Artifacts */}
            <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-1.5">
              <span className="text-slate-400 text-[10px]">ARTIFACTS:</span>
              {exh.archivalArtifacts.map((art, i) => (
                <span key={i} className="px-2 py-0.5 bg-[#0e1420] border border-slate-800 text-slate-300 rounded text-[10px]">
                  {art}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
