import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import DataBadge from '../../components/DataBadge';
import { costBreakdown, costSensitivity } from '../../data/mockData';

const SCENARIOS = ['Low', 'Base Model', 'High'];

const SENSITIVITY_TONE: Record<string, string> = {
  good: 'text-emerald-600',
  neutral: 'text-slate-800',
  bad: 'text-red-600',
};

export default function CostsStep() {
  const [scenario, setScenario] = useState('Base Model');

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Detailed Cost Triage &amp; Estimator</h2>
          <p className="mt-1 text-sm text-slate-500">Budget allocation, cost per m² benchmarks, and sensitivity warnings.</p>
        </div>
        <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
          {SCENARIOS.map((s) => (
            <button
              key={s}
              onClick={() => setScenario(s)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                scenario === s ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3.5">
        <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-500" />
        <p className="text-sm font-medium text-amber-800">
          Estimated sensitivity warning: If construction costs increase by 10%, overall estimated development profit
          decreases by €780,000.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-semibold text-slate-900">Capital Cost Allocation</h3>
            <DataBadge source="estimated" />
          </div>

          <div className="mt-4 space-y-4">
            {costBreakdown.map((c) => (
              <div key={c.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">{c.label}</span>
                  <span className="font-semibold text-slate-800">
                    {c.amount} <span className="font-normal text-slate-400">({c.pct}%)</span>
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-slate-800" style={{ width: `${c.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-sm font-bold uppercase tracking-wide text-slate-700">Total Development Cost</span>
            <span className="text-xl font-bold text-emerald-600">€14,680,000</span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-[15px] font-semibold text-slate-900">Benchmarks &amp; Metrics</h3>

          <div className="mt-4 rounded-lg bg-slate-50 p-4">
            <div className="text-xs text-slate-500">Development Unit Rate</div>
            <div className="mt-1 text-2xl font-bold text-slate-900">€2,367/m²</div>
            <div className="mt-1 text-xs text-slate-400">Calculated over 6,200m² Gross Floor Area (GFA)</div>
          </div>

          <div className="mt-5">
            <h4 className="text-sm font-semibold text-slate-800">Construction Cost Sensitivity Curve</h4>
            <div className="mt-2 divide-y divide-slate-100">
              {costSensitivity.map((row) => (
                <div key={row.label} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="text-slate-500">{row.label}</span>
                  <span className={`font-semibold ${SENSITIVITY_TONE[row.tone]}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
