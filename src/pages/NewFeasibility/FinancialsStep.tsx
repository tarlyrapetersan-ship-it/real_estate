import DataBadge from '../../components/DataBadge';
import { cashFlowForecast, sensitivityDeck } from '../../data/mockData';

const BAR_COLOR: Record<string, string> = {
  capital: 'bg-red-400',
  construction: 'bg-amber-400',
  marketing: 'bg-blue-400',
  exit: 'bg-emerald-500',
};

const SENSITIVITY_TONE: Record<string, string> = {
  good: 'text-emerald-600',
  neutral: 'text-slate-800',
  bad: 'text-red-600',
  warn: 'text-amber-600',
};

export default function FinancialsStep() {
  return (
    <div>
      <div>
        <h2 className="text-xl font-bold text-slate-900">Financial Modelling &amp; Capital Structure</h2>
        <p className="mt-1 text-sm text-slate-500">Macro cash flow tracking, equity thresholds, and profitability metrics.</p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile label="Estimated GDV" value="€19.40M" hint="Gross Development Value on exit" source="verified" />
        <StatTile label="Est. Profit on Cost" value="32.2%" hint="Benchmark profitability ratio" source="ai" />
        <StatTile label="Equity Required" value="€4.40M" hint="30% development equity stake" source="estimated" />
        <StatTile label="Debt Required" value="€10.28M" hint="70% development facility loan" source="estimated" />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-[15px] font-semibold text-slate-900">Project Cash Flow Forecast (Simulated quarterly cycle)</h3>

          <div className="mt-6 flex h-56 items-end gap-6 px-2">
            {cashFlowForecast.map((q) => (
              <div key={q.label} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-medium text-slate-500">{q.amountLabel}</span>
                <div className="flex h-40 w-full items-end justify-center">
                  <div
                    className={`w-10 rounded-t-sm ${BAR_COLOR[q.kind]}`}
                    style={{ height: `${q.heightPct}%` }}
                  />
                </div>
                <span className="text-xs text-slate-400">{q.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400" /> Outflow (Capital)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-400" /> Outflow (Construction)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-400" /> Outflow (Marketing)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Inflow (Exit Revenue)
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-[15px] font-semibold text-slate-900">Sensitivity Control Deck</h3>

          <div className="mt-3 divide-y divide-slate-100">
            {sensitivityDeck.map((row) => (
              <div key={row.label} className="flex items-center justify-between py-3 text-sm">
                <span className="text-slate-500">{row.label}</span>
                <span className={`font-semibold ${SENSITIVITY_TONE[row.tone]}`}>{row.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg bg-red-50 p-4">
            <div className="text-xs font-medium text-red-700">Simulated Sensitivity IRR</div>
            <div className="mt-1 text-xl font-bold text-red-600">14.2% (Reduced from 24.3%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatTile({
  label,
  value,
  hint,
  source,
}: {
  label: string;
  value: string;
  hint: string;
  source: Parameters<typeof DataBadge>[0]['source'];
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-2">
        <span className="text-[13px] font-medium text-slate-500">{label}</span>
        <DataBadge source={source} />
      </div>
      <div className="mt-3 text-2xl font-bold text-slate-900">{value}</div>
      <div className="mt-2 text-xs text-slate-400">{hint}</div>
    </div>
  );
}
