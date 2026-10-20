import DataBadge from './DataBadge';
import type { DataSource } from '../types';

export default function StatCard({
  label,
  value,
  hint,
  source,
}: {
  label: string;
  value: string;
  hint: string;
  source: DataSource;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-2">
        <span className="text-[13px] font-medium text-slate-500">{label}</span>
        <DataBadge source={source} />
      </div>
      <div className="mt-3 text-[28px] font-bold leading-none text-slate-900">{value}</div>
      <div className="mt-2 text-xs text-slate-400">{hint}</div>
    </div>
  );
}
