import { AlertTriangle, ExternalLink, Info } from 'lucide-react';
import DataBadge from '../../components/DataBadge';
import { developmentPotential, planningConditions, hardConstraints } from '../../data/mockData';
import type { DataField } from '../../types';

function ConstraintCard({
  title,
  dotColor,
  fields,
}: {
  title: string;
  dotColor: string;
  fields: DataField[];
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${dotColor}`} />
        <h3 className="text-[13px] font-bold tracking-wide text-slate-800">{title}</h3>
      </div>
      <div className="space-y-4">
        {fields.map((f) => (
          <div key={f.label}>
            <div className="mb-1 flex items-center justify-between gap-2">
              <span className="text-xs text-slate-400">{f.label}</span>
              {f.source && <DataBadge source={f.source} />}
            </div>
            <p className="text-sm font-medium text-slate-800">{f.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PlanningStep() {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Planning Potential &amp; Constraints Analysis</h2>
          <p className="mt-1 text-sm text-slate-500">
            Lisbon Municipal Master Plan (PDM) alignment and regulatory diagnostics.
          </p>
        </div>
        <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
          <ExternalLink size={14} />
          View Planning Source
        </button>
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5">
        <AlertTriangle size={18} className="mt-0.5 shrink-0 text-red-500" />
        <div>
          <p className="text-sm font-semibold text-red-800">Heritage protection zone detected (DGPC Buffer Zone)</p>
          <p className="mt-0.5 text-sm text-red-700">
            The building resides within the Pombaline historic zone. Additional architectural approvals and alignment
            with DGPC rules are mandatory.
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <ConstraintCard title="DEVELOPMENT POTENTIAL" dotColor="bg-emerald-500" fields={developmentPotential} />
        <ConstraintCard title="PLANNING CONDITIONS" dotColor="bg-amber-500" fields={planningConditions} />
        <ConstraintCard title="HARD CONSTRAINTS" dotColor="bg-red-500" fields={hardConstraints} />
      </div>

      <div className="mt-5 flex items-start gap-2 rounded-xl bg-slate-100 px-4 py-3 text-xs text-slate-500">
        <Info size={14} className="mt-0.5 shrink-0" />
        Planning information is provided for early-stage feasibility screening and must be independently confirmed
        with the relevant municipality and professional advisers.
      </div>
    </div>
  );
}
