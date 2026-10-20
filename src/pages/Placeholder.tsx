import type { LucideIcon } from 'lucide-react';
import Layout from '../components/Layout';

export default function Placeholder({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Layout>
      <h1 className="text-xl font-bold text-slate-900">{title}</h1>
      <p className="mt-1 text-sm text-slate-500">{description}</p>

      <div className="mt-6 flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
          <Icon size={24} className="text-emerald-600" />
        </div>
        <h3 className="mt-4 text-base font-semibold text-slate-800">Coming soon</h3>
        <p className="mt-1.5 max-w-sm text-sm text-slate-500">
          This section of Porta Land is being built out next.
        </p>
      </div>
    </Layout>
  );
}
