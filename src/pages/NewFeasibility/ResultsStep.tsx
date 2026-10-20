import { Check, AlertTriangle, FileCheck2, GitCompare, PlayCircle } from 'lucide-react';
import { executiveSummary } from '../../data/mockData';

export default function ResultsStep() {
  const s = executiveSummary;

  return (
    <div>
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600">{s.label}</div>
            <h2 className="mt-1 text-xl font-bold text-slate-900">{s.title}</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
              {s.status.toUpperCase()}
            </span>
            <span className="text-2xl font-bold text-slate-900">
              {s.score} <span className="text-sm font-normal text-slate-400">/100</span>
            </span>
          </div>
        </div>
        <p className="mt-3 max-w-3xl text-sm italic text-slate-500">&ldquo;{s.quote}&rdquo;</p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {s.stats.map((st) => (
          <div key={st.label} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-xs text-slate-400">{st.label}</div>
            <div className="mt-1 text-lg font-bold text-slate-900">{st.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-xs font-bold uppercase tracking-wide text-emerald-600">Main Value Drivers</h3>
          <ul className="mt-3 space-y-2.5">
            {s.valueDrivers.map((v) => (
              <li key={v} className="flex items-start gap-2 text-sm text-slate-700">
                <Check size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                {v}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-xs font-bold uppercase tracking-wide text-amber-600">Key Risks</h3>
          <ul className="mt-3 space-y-2.5">
            {s.keyRisks.map((v) => (
              <li key={v} className="flex items-start gap-2 text-sm text-slate-700">
                <AlertTriangle size={15} className="mt-0.5 shrink-0 text-amber-500" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">Required Next Steps</h3>
        <ol className="mt-3 space-y-2.5">
          {s.nextSteps.map((step, i) => (
            <li key={step} className="flex items-center gap-3 text-sm text-slate-700">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <PlayCircle size={15} />
            Start Due Diligence
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-[#0e1015] px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">
            <FileCheck2 size={15} />
            Create Investment Memo
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <GitCompare size={15} />
            Compare Scenario
          </button>
        </div>
      </div>
    </div>
  );
}
