import { mapPoints } from '../data/mockData';

const LEVEL_COLOR: Record<string, string> = {
  feasible: '#34d399',
  conditional: '#fbbf24',
  constrained: '#f87171',
};

const PORTUGAL_PATH =
  'M 40,5 L 50,10 L 55,20 L 58,32 L 60,45 L 55,52 L 58,60 L 54,68 L 57,74 L 48,80 L 42,88 L 33,93 L 24,88 L 17,80 L 20,72 L 14,64 L 18,56 L 12,48 L 16,38 L 14,28 L 20,17 Z';

export default function PortugalMap() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-[#0a0e17]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,189,248,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative flex justify-center py-6">
        <svg viewBox="0 0 100 100" className="h-[360px] w-auto drop-shadow-[0_0_25px_rgba(56,189,248,0.15)]">
          <defs>
            <linearGradient id="landFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#132036" />
              <stop offset="100%" stopColor="#0c1626" />
            </linearGradient>
            <filter id="glow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="1.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d={PORTUGAL_PATH}
            fill="url(#landFill)"
            stroke="#38bdf8"
            strokeWidth="0.4"
            strokeOpacity="0.7"
          />

          {mapPoints.map((p) => (
            <g key={p.id} filter="url(#glow)">
              <circle cx={p.x} cy={p.y} r="2.6" fill={LEVEL_COLOR[p.level]} fillOpacity="0.18" />
              <circle cx={p.x} cy={p.y} r="1.15" fill={LEVEL_COLOR[p.level]} stroke="#0a0e17" strokeWidth="0.3" />
            </g>
          ))}
        </svg>
      </div>

      <div className="absolute bottom-4 left-5 rounded-lg bg-black/30 px-3 py-2 text-[10px] font-medium text-slate-300 backdrop-blur-sm">
        <div className="mb-1 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Prime Investment Zone
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Stable Development
        </div>
      </div>
    </div>
  );
}
