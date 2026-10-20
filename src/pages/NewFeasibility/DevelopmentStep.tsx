import { useState } from 'react';
import { Plus, GitCompare, Sparkles } from 'lucide-react';
import { scenarios } from '../../data/mockData';

const MASSING_HEIGHT: Record<string, number> = { short: 70, medium: 85, tall: 78 };

export default function DevelopmentStep() {
  const [selected, setSelected] = useState('c');
  const recommended = scenarios.find((s) => s.recommended)!;
  const metricKeys = Object.keys(scenarios[0].metrics);
  const financialKeys = Object.keys(scenarios[0].financials);

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Development Scenario Modelling</h2>
          <p className="mt-1 text-sm text-slate-500">
            Compare structural zoning massing, program assumptions, and estimated returns.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Plus size={15} />
            Add Scenario
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-[#0e1015] px-3.5 py-2 text-sm font-medium text-white hover:bg-slate-800">
            <GitCompare size={15} />
            Compare Scenarios
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
        <span className="flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2 py-0.5 text-[10px] font-semibold text-violet-700">
          <Sparkles size={11} /> AI ASSUMPTION
        </span>
        <p className="text-sm font-medium text-emerald-800">
          Recommended: Scenario {recommended.key} {recommended.name} yields the highest estimated Return on Cost (
          {recommended.financials['Return on Equity (ROC)']}) while mitigating ground-floor commercial vacancy risk.
        </p>
      </div>

      <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="w-48 px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Key Metrics
              </th>
              {scenarios.map((s) => (
                <th
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  className={`cursor-pointer px-5 py-4 align-top ${
                    selected === s.id ? 'bg-emerald-50/60' : ''
                  }`}
                >
                  <div className={`text-sm font-bold ${selected === s.id ? 'text-emerald-700' : 'text-slate-800'}`}>
                    {s.key}: {s.name}
                  </div>
                  <div className="text-xs font-normal text-slate-400">{s.subtitle}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100">
              <td className="px-5 py-4 text-xs font-medium text-slate-400 align-bottom">Volume Massing</td>
              {scenarios.map((s) => (
                <td key={s.id} className={`px-5 py-4 ${selected === s.id ? 'bg-emerald-50/60' : ''}`}>
                  <div className="flex h-24 items-end justify-center">
                    <div
                      className={`w-14 rounded-t-sm ${selected === s.id ? 'bg-emerald-300' : 'bg-slate-300'}`}
                      style={{ height: `${MASSING_HEIGHT[s.floors]}%` }}
                    />
                  </div>
                  <div className="text-center text-xs text-slate-500">{s.massing}</div>
                </td>
              ))}
            </tr>

            <SectionRow label="ZONING & PHYSICAL PARAMETERS" span={scenarios.length + 1} />
            {metricKeys.map((k) => (
              <tr key={k} className="border-b border-slate-50">
                <td className="px-5 py-3 text-slate-500">{k}</td>
                {scenarios.map((s) => (
                  <td
                    key={s.id}
                    className={`px-5 py-3 font-medium text-slate-800 ${selected === s.id ? 'bg-emerald-50/60' : ''}`}
                  >
                    {s.metrics[k]}
                  </td>
                ))}
              </tr>
            ))}

            <SectionRow label="PRO-FORMA FINANCIAL SUMMARY" span={scenarios.length + 1} />
            {financialKeys.map((k) => {
              const isTotal = k === 'Total Development Cost';
              const isBold = isTotal || k.startsWith('Estimated') || k.startsWith('Profit') || k.startsWith('Return');
              return (
                <tr key={k} className="border-b border-slate-50">
                  <td className={`px-5 py-3 ${isBold ? 'font-semibold text-slate-700' : 'text-slate-500'}`}>{k}</td>
                  {scenarios.map((s) => (
                    <td
                      key={s.id}
                      className={`px-5 py-3 ${isBold ? 'font-bold text-slate-900' : 'font-medium text-slate-800'} ${
                        selected === s.id ? 'bg-emerald-50/60' : ''
                      }`}
                    >
                      {s.financials[k]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SectionRow({ label, span }: { label: string; span: number }) {
  return (
    <tr>
      <td colSpan={span} className="bg-slate-50 px-5 py-2.5 text-xs font-bold tracking-wide text-slate-500">
        {label}
      </td>
    </tr>
  );
}
