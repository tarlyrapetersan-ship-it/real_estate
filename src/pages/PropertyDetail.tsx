import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import DataBadge from '../components/DataBadge';
import { assessments, coreProperty, evolutionHistory } from '../data/mockData';

export default function PropertyDetail() {
  const { id } = useParams();
  const [view, setView] = useState<'satellite' | 'cadastral'>('satellite');
  const property = assessments.find((a) => a.id === id) ?? assessments[0];
  const shortAddress = property.project.split(' ').slice(0, 3).join(' ');

  return (
    <Layout activeProject={property.project}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Property Intelligence: {shortAddress}</h1>
          <p className="mt-1 text-sm text-slate-500">Deep cadastral records, physical context, and historical tracking.</p>
        </div>
        <DataBadge source="verified" />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-800">High-Resolution Satellite GIS Outlines</h3>
            <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
              {(['satellite', 'cadastral'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium capitalize ${
                    view === v ? 'bg-[#0e1015] text-white' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {v === 'satellite' ? 'Satellite' : 'Cadastral Vector'}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3 aspect-[4/3] overflow-hidden rounded-lg bg-slate-800">
            <AerialMock cadastral={view === 'cadastral'} />
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-[15px] font-semibold text-slate-900">Core Property Identification</h3>
          <div className="mt-4 divide-y divide-slate-100">
            {coreProperty.map((f) => (
              <div key={f.label} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
                <div>
                  <div className="text-xs text-slate-400">{f.label}</div>
                  <div className="text-sm font-semibold text-slate-800">{f.value}</div>
                </div>
                {f.source && <DataBadge source={f.source} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-semibold text-slate-900">Property &amp; Area Evolution History</h3>
          <DataBadge source="estimated" />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {evolutionHistory.map((e) => (
            <div
              key={e.year}
              className={`rounded-lg border p-3 ${
                e.current ? 'border-emerald-400 bg-emerald-50/50' : 'border-slate-200 bg-slate-50'
              }`}
            >
              <div className={`text-sm font-bold ${e.current ? 'text-emerald-700' : 'text-slate-800'}`}>{e.year}</div>
              <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-400">{e.tag}</div>
              <p className="mt-1.5 text-xs leading-snug text-slate-500">{e.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <InfoBlock
            title="Previous Land Uses"
            text="Maritime customs storage (pre-19th C), financial offices, and pombaline retail base units."
          />
          <InfoBlock
            title="Past Planning Applications"
            text="Three commercial zoning applications registered (1994, 2008, 2018). One approved with conditions."
          />
          <InfoBlock
            title="Neighbourhood Transformation"
            text="High volume of tourist and premium residential conversion within a 300m radius over the last decade."
          />
        </div>
      </div>
    </Layout>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}

function AerialMock({ cadastral }: { cadastral: boolean }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <rect width="400" height="300" fill={cadastral ? '#0f172a' : '#6b5643'} />
      {Array.from({ length: 8 }).map((_, r) =>
        Array.from({ length: 11 }).map((__, c) => (
          <rect
            key={`${r}-${c}`}
            x={c * 38 + (r % 2) * 12}
            y={r * 38}
            width={32}
            height={30}
            rx={2}
            fill={cadastral ? 'none' : (r + c) % 2 === 0 ? '#9c6b4a' : '#b98255'}
            stroke={cadastral ? '#38bdf8' : 'none'}
            strokeWidth={cadastral ? 1 : 0}
            opacity={cadastral ? 0.6 : 0.9}
          />
        ))
      )}
      <text x="12" y="20" fill="#e2e8f0" fontSize="11" opacity="0.7">
        Baixa Pombalina, Lisboa
      </text>
    </svg>
  );
}
