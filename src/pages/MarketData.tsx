import { useState } from 'react';
import Layout from '../components/Layout';
import DataBadge from '../components/DataBadge';
import { amenityLayers, comparables, marketStats } from '../data/mockData';

const MARKET_PROMPTS = [
  'Compare Lisbon rents to the historic center',
  'What is the average tourist occupancy rate nearby?',
  'Are there major infrastructure plans in Arsenal?',
];

export default function MarketData() {
  const [activeLayer, setActiveLayer] = useState('Tourism');

  return (
    <Layout
      activeProject="Rua do Arsenal Redevelopment"
      copilotContext="Lisbon Urban Portfolio"
      copilotPrompts={MARKET_PROMPTS}
    >
      <h1 className="text-xl font-bold text-slate-900">Market &amp; Location Intelligence</h1>
      <p className="mt-1 text-sm text-slate-500">
        Rua do Arsenal micro-location yield, transaction records, and nearby context indicators.
      </p>

      <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-[15px] font-semibold text-slate-900">Local GIS Infrastructure &amp; Amenities Layer</h3>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            HIGH CONFIDENCE
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {amenityLayers.map((layer) => (
            <button
              key={layer}
              onClick={() => setActiveLayer(layer)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                activeLayer === layer
                  ? 'border-emerald-600 bg-emerald-600 text-white'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>

        <div className="relative mt-4 aspect-[16/8] overflow-hidden rounded-lg bg-[#6b5643]">
          <LocationAerial />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {marketStats.map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-start justify-between gap-2">
              <span className="text-[13px] font-medium text-slate-500">{s.label}</span>
              <DataBadge source={s.source} />
            </div>
            <div className="mt-3 text-2xl font-bold text-slate-900">{s.value}</div>
            <div className="mt-2 text-xs text-slate-400">{s.hint}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-100 px-5 py-4">
          <h3 className="text-[15px] font-semibold text-slate-900">Recent Comparable Local Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
                <th className="px-5 py-3 font-medium">Development Project</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Size (GFA)</th>
                <th className="px-5 py-3 font-medium">Scope</th>
                <th className="px-5 py-3 font-medium">Price / Value</th>
                <th className="px-5 py-3 font-medium">Completion</th>
              </tr>
            </thead>
            <tbody>
              {comparables.map((c) => (
                <tr key={c.project} className="border-b border-slate-50 last:border-0">
                  <td className="px-5 py-3.5 font-semibold text-slate-800">{c.project}</td>
                  <td className="px-5 py-3.5 text-slate-500">{c.type}</td>
                  <td className="px-5 py-3.5 text-slate-500">{c.size}</td>
                  <td className="px-5 py-3.5 text-slate-500">{c.scope}</td>
                  <td className="px-5 py-3.5 font-medium text-emerald-600">{c.priceValue}</td>
                  <td className="px-5 py-3.5 text-slate-500">{c.completion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

function LocationAerial() {
  return (
    <svg viewBox="0 0 800 340" className="h-full w-full">
      <rect width="800" height="340" fill="#6b5643" />
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 20 }).map((__, c) => (
          <rect
            key={`${r}-${c}`}
            x={c * 40 + (r % 2) * 12}
            y={r * 56}
            width={34}
            height={48}
            rx={2}
            fill={(r + c) % 2 === 0 ? '#9c6b4a' : '#b98255'}
            opacity={0.9}
          />
        ))
      )}
      <rect x="290" y="80" width="220" height="180" fill="#c9a876" stroke="#00000022" />
      <polygon
        points="280,70 510,70 510,260 280,260"
        fill="none"
        stroke="#34d399"
        strokeWidth="4"
        style={{ filter: 'drop-shadow(0 0 6px rgba(52,211,153,0.9))' }}
      />
      <text x="230" y="180" fill="#f1f5f9" fontSize="13" fontWeight="600" transform="rotate(-90 230,180)">
        RUA DO OURO
      </text>
      <text x="560" y="180" fill="#f1f5f9" fontSize="13" fontWeight="600" transform="rotate(-90 560,180)">
        RUA DA ALFÂNDEGA
      </text>
      <text x="640" y="60" fill="#f1f5f9" fontSize="13" fontWeight="600">
        PRAÇA DO COMÉRCIO
      </text>
      <text x="330" y="300" fill="#f1f5f9" fontSize="13" fontWeight="600">
        RUA DO ARSENAL
      </text>
    </svg>
  );
}
