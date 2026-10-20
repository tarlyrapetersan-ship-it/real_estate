import { CheckCircle2, BarChart3, Sparkles, User, AlertTriangle } from 'lucide-react';
import type { DataSource } from '../types';

const CONFIG: Record<DataSource, { label: string; className: string; icon: React.ReactNode }> = {
  verified: {
    label: 'VERIFIED DATA',
    className: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: <CheckCircle2 size={11} strokeWidth={2.5} />,
  },
  estimated: {
    label: 'ESTIMATED DATA',
    className: 'bg-slate-100 text-slate-600 border-slate-200',
    icon: <BarChart3 size={11} strokeWidth={2.5} />,
  },
  ai: {
    label: 'AI ASSUMPTION',
    className: 'bg-violet-50 text-violet-700 border-violet-200',
    icon: <Sparkles size={11} strokeWidth={2.5} />,
  },
  user: {
    label: 'USER INPUT',
    className: 'bg-teal-50 text-teal-700 border-teal-200',
    icon: <User size={11} strokeWidth={2.5} />,
  },
  review: {
    label: 'PROF. VERIFICATION REQUIRED',
    className: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: <AlertTriangle size={11} strokeWidth={2.5} />,
  },
};

export default function DataBadge({ source }: { source: DataSource }) {
  const cfg = CONFIG[source];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide whitespace-nowrap ${cfg.className}`}
    >
      {cfg.icon}
      {cfg.label}
    </span>
  );
}
