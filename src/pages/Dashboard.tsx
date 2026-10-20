import { useNavigate } from 'react-router-dom';
import { MapPin, Plus } from 'lucide-react';
import Layout from '../components/Layout';
import StatCard from '../components/StatCard';
import PortugalMap from '../components/PortugalMap';
import { assessments, currentUser, stats } from '../data/mockData';

const STATUS_STYLE: Record<string, string> = {
  'Conditional Go': 'bg-amber-50 text-amber-700 border-amber-200',
  Go: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'No Go': 'bg-red-50 text-red-700 border-red-200',
  'Under Review': 'bg-slate-100 text-slate-600 border-slate-200',
};

export default function Dashboard() {
  const navigate = useNavigate();
  const firstName = currentUser.name.split(' ')[0];

  return (
    <Layout>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Good morning, {firstName}.</h1>
          <p className="mt-1 text-sm text-slate-500">Evaluate development opportunities across Portugal.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <MapPin size={15} />
            Search Map
          </button>
          <button
            onClick={() => navigate('/new-feasibility')}
            className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700"
          >
            <Plus size={15} />
            Analyse New Property
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} hint={s.hint} source={s.source} />
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-[15px] font-semibold text-slate-900">National Opportunity Mapping &amp; Constraints</h2>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> High Feasibility (&gt;75)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-400" /> Conditional / Buffer Zone
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400" /> High Constraint / Protected
            </span>
          </div>
        </div>
        <div className="mt-4">
          <PortugalMap />
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-100 px-5 py-4">
          <h2 className="text-[15px] font-semibold text-slate-900">Recent Feasibility Assessments</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
                <th className="px-5 py-3 font-medium">Project</th>
                <th className="px-5 py-3 font-medium">Location</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Site Area</th>
                <th className="px-5 py-3 font-medium">Potential GFA</th>
                <th className="px-5 py-3 font-medium">Est. Cost</th>
                <th className="px-5 py-3 font-medium">Potential GDV</th>
                <th className="px-5 py-3 font-medium">Score</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {assessments.map((a) => (
                <tr
                  key={a.id}
                  onClick={() => navigate('/properties/' + a.id)}
                  className="cursor-pointer border-b border-slate-50 last:border-0 hover:bg-slate-50"
                >
                  <td className="px-5 py-3.5 font-semibold text-slate-800">{a.project}</td>
                  <td className="px-5 py-3.5 text-slate-500">{a.location}</td>
                  <td className="px-5 py-3.5 text-slate-500">{a.type}</td>
                  <td className="px-5 py-3.5 text-slate-500">{a.siteArea}</td>
                  <td className="px-5 py-3.5 text-slate-500">{a.potentialGfa}</td>
                  <td className="px-5 py-3.5 text-slate-500">{a.estCost}</td>
                  <td className="px-5 py-3.5 text-slate-500">{a.potentialGdv}</td>
                  <td className="px-5 py-3.5 font-semibold text-slate-800">
                    {a.score} <span className="font-normal text-slate-400">/100</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${STATUS_STYLE[a.status]}`}
                    >
                      {a.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
