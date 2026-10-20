import { useState } from 'react';
import { MapPin, PenLine, MousePointerClick, UploadCloud } from 'lucide-react';

const IDENTIFICATION_TABS = ['Address', 'Coordinates', 'Property Ref', 'Map Selection'];

export default function PropertyStep({ onAnalyse }: { onAnalyse: () => void }) {
  const [tab, setTab] = useState('Address');
  const [tool, setTool] = useState<'pin' | 'boundary' | 'parcel'>('boundary');

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
      <div className="space-y-6">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-slate-800">GIS Parcel Workspace &amp; Boundary Definition</h3>
            <div className="flex gap-2">
              <ToolButton icon={MapPin} label="Drop a pin" active={tool === 'pin'} onClick={() => setTool('pin')} />
              <ToolButton
                icon={PenLine}
                label="Draw site boundary"
                active={tool === 'boundary'}
                onClick={() => setTool('boundary')}
              />
              <ToolButton
                icon={MousePointerClick}
                label="Select parcel"
                active={tool === 'parcel'}
                onClick={() => setTool('parcel')}
              />
            </div>
          </div>

          <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-lg bg-slate-800">
            <SatelliteMock />
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="mb-3 text-sm font-semibold text-slate-800">Upload Property and Architectural Records</h3>
          <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-200 py-10 text-center hover:border-emerald-300 hover:bg-emerald-50/30">
            <input type="file" multiple className="hidden" />
            <UploadCloud size={22} className="text-slate-400" />
            <span className="text-sm font-medium text-slate-600">Drag &amp; drop feasibility documents</span>
            <span className="text-xs text-slate-400">
              Supports Property Registry (Certidão Permanente), Municipal Planning Files, CAD/PDF surveys (Max 50MB)
            </span>
          </label>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-[15px] font-semibold text-slate-900">Property Identification</h3>
        <p className="mt-1 text-xs text-slate-500">Verify cadastral and physical site criteria for initial triage.</p>

        <div className="mt-4 flex gap-1 rounded-lg bg-slate-100 p-1">
          {IDENTIFICATION_TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
                tab === t ? 'bg-[#0e1015] text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-3.5">
          <Field label="Property Address" defaultValue="Rua do Arsenal 14, Lisbon" />
          <div className="grid grid-cols-2 gap-3">
            <Field label="Municipality" defaultValue="Lisboa" />
            <Field label="District" defaultValue="Lisboa" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Parish (Freguesia)" defaultValue="Santa Maria Maior" />
            <Field label="Property Type" defaultValue="Mixed Use Building" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Site Area (m²)" defaultValue="2,850" />
            <Field label="Existing GFA (m²)" defaultValue="4,100" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Ownership Status" defaultValue="Private (Single Owner)" />
            <Field label="Asking Price (€)" defaultValue="12,800,000" />
          </div>
        </div>

        <button
          onClick={onAnalyse}
          className="mt-5 w-full rounded-lg bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Analyse Property Potential
        </button>
      </div>
    </div>
  );
}

function ToolButton({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: typeof MapPin;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium ${
        active
          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
      }`}
    >
      <Icon size={13} />
      {label}
    </button>
  );
}

function Field({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-slate-500">{label}</span>
      <input
        defaultValue={defaultValue}
        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
      />
    </label>
  );
}

function SatelliteMock() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <defs>
        <pattern id="roofs" width="40" height="30" patternUnits="userSpaceOnUse">
          <rect width="40" height="30" fill="#8a6a52" />
          <rect width="40" height="30" fill="#7a5b46" fillOpacity="0.4" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="#5c7d63" />
      {Array.from({ length: 10 }).map((_, r) =>
        Array.from({ length: 13 }).map((__, c) => (
          <rect
            key={`${r}-${c}`}
            x={c * 32 + ((r % 2) * 10)}
            y={r * 32}
            width={26}
            height={24}
            rx={2}
            fill={(r + c) % 3 === 0 ? '#9c6b4a' : '#b98255'}
            opacity={0.9}
          />
        ))
      )}
      <rect x="140" y="90" width="130" height="110" fill="#c9a876" stroke="#00000022" />
      <polygon
        points="130,80 280,80 280,210 130,210"
        fill="none"
        stroke="#34d399"
        strokeWidth="4"
        strokeDasharray="2 0"
        style={{ filter: 'drop-shadow(0 0 6px rgba(52,211,153,0.9))' }}
      />
      <circle cx="130" cy="80" r="4" fill="#34d399" />
      <circle cx="280" cy="80" r="4" fill="#34d399" />
      <circle cx="280" cy="210" r="4" fill="#34d399" />
      <circle cx="130" cy="210" r="4" fill="#34d399" />
      <path d="M0,230 L400,230 L400,300 L0,300 Z" fill="#3f6b8f" opacity="0.7" />
      <text x="10" y="292" fill="#e2e8f0" fontSize="10" opacity="0.8">
        Rio Tejo
      </text>
    </svg>
  );
}
