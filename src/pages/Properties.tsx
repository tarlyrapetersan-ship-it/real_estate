import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { assessments } from '../data/mockData';

export default function Properties() {
  const navigate = useNavigate();
  return (
    <Layout>
      <h1 className="text-xl font-bold text-slate-900">Properties</h1>
      <p className="mt-1 text-sm text-slate-500">All screened and analysed properties across your active projects.</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {assessments.map((a) => (
          <button
            key={a.id}
            onClick={() => navigate('/properties/' + a.id)}
            className="rounded-xl border border-slate-200 bg-white p-5 text-left hover:border-emerald-300 hover:shadow-sm"
          >
            <div className="text-sm font-semibold text-slate-800">{a.project}</div>
            <div className="mt-1 text-xs text-slate-400">
              {a.location} &middot; {a.type}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-slate-500">Site Area</span>
              <span className="font-medium text-slate-800">{a.siteArea}</span>
            </div>
            <div className="mt-1.5 flex items-center justify-between text-sm">
              <span className="text-slate-500">Score</span>
              <span className="font-semibold text-emerald-600">{a.score}/100</span>
            </div>
          </button>
        ))}
      </div>
    </Layout>
  );
}
