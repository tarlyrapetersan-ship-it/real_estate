import { AlertTriangle } from 'lucide-react';
import DataBadge from '../../components/DataBadge';
import { criticalRisk, riskMatrix } from '../../data/mockData';

const SEVERITY_STYLE: Record<string, string> = {
  Low: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Medium: 'bg-amber-50 text-amber-700 border-amber-200',
  High: 'bg-red-50 text-red-700 border-red-200',
};

export default function RisksStep() {
  const high = riskMatrix.filter((r) => r.severity === 'High').length;
  const medium = riskMatrix.filter((r) => r.severity === 'Medium').length;

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Development Risk Diagnostic</h2>
          <p className="mt-1 text-sm text-slate-500">
            Comprehensive feasibility risk mapping, Pombaline historic core restrictions, and municipal mitigation states.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700">
            High Severity ({high})
          </span>
          <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
            Medium Severity ({medium})
          </span>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-100 px-5 py-4">
          <h3 className="text-[15px] font-semibold text-slate-900">Feasibility Risk Heat Matrix</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {riskMatrix.map((r) => (
            <div key={r.id} className="flex flex-wrap items-center gap-4 px-5 py-4">
              <span className="w-40 shrink-0 text-sm font-semibold text-slate-800">{r.label}</span>
              <span
                className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${SEVERITY_STYLE[r.severity]}`}
              >
                {r.severity}
              </span>
              <span className="flex-1 min-w-[240px] text-sm text-slate-500">{r.description}</span>
              <DataBadge source={r.source} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50/40 p-5">
        <div className="flex items-center gap-2">
          <AlertTriangle size={16} className="text-amber-500" />
          <h3 className="text-sm font-bold uppercase tracking-wide text-amber-700">{criticalRisk.title}</h3>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Identified Issue</div>
            <p className="mt-1 text-sm font-medium text-slate-800">{criticalRisk.issue}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Potential Impact</div>
            <p className="mt-1 text-sm font-medium text-amber-700">{criticalRisk.impact}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Recommended Mitigation</div>
            <p className="mt-1 text-sm font-medium text-slate-800">{criticalRisk.mitigation}</p>
          </div>
        </div>

        <div className="mt-4 border-t border-amber-200/60 pt-3 text-sm text-slate-600">
          Risk Owner: <span className="font-semibold text-slate-800">{criticalRisk.owner}</span>
        </div>
      </div>
    </div>
  );
}
