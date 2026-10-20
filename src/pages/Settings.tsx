import { AlertTriangle, Check, X } from 'lucide-react';
import Layout from '../components/Layout';
import DataBadge from '../components/DataBadge';
import { confidenceLevelsGuide, platformLabelsLegend, systemCapabilities } from '../data/mockData';

const SETTINGS_PROMPTS = [
  'Can you explain the difference between Verified and Estimated?',
  'How can I initiate municipality verification?',
  'Show next-stage checklists',
];

const CONFIDENCE_TONE: Record<string, string> = {
  good: 'bg-emerald-500',
  neutral: 'bg-blue-500',
  warn: 'bg-amber-500',
};

export default function Settings() {
  return (
    <Layout
      activeProject="Rua do Arsenal Redevelopment"
      copilotContext="Lisbon Urban Portfolio"
      copilotPrompts={SETTINGS_PROMPTS}
    >
      <h1 className="text-xl font-bold text-slate-900">System Limits &amp; Control</h1>
      <p className="mt-1 text-sm text-slate-500">This platform is designed to support early-stage development decision-making.</p>

      <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3.5">
        <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-500" />
        <div>
          <p className="text-sm font-semibold text-amber-800">AI Verification Disclaimer</p>
          <p className="mt-0.5 text-sm italic text-amber-700">
            &ldquo;AI-generated information must be independently verified before being used for investment, legal,
            planning, construction or financing decisions.&rdquo;
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-600">What The System Can Do</h3>
          <ul className="mt-3 space-y-2.5">
            {systemCapabilities.can.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-slate-700">
                <Check size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-red-600">What The System Cannot Do</h3>
          <ul className="mt-3 space-y-2.5">
            {systemCapabilities.cannot.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-slate-700">
                <X size={15} className="mt-0.5 shrink-0 text-red-500" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-[15px] font-semibold text-slate-900">Data Classification &amp; Confidence Framework</h3>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400">Platform Labels Legend</h4>
            <div className="mt-3 space-y-3">
              {platformLabelsLegend.map((item) => (
                <div key={item.source} className="flex items-start gap-3">
                  <DataBadge source={item.source} />
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400">Confidence Levels Guide</h4>
            <div className="mt-3 space-y-3">
              {confidenceLevelsGuide.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                    <span className={`h-2 w-2 rounded-full ${CONFIDENCE_TONE[item.tone]}`} />
                    {item.label}
                  </span>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
