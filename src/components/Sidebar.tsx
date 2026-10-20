import { NavLink } from 'react-router-dom';
import {
  LayoutGrid,
  CirclePlus,
  Folder,
  Map,
  Building2,
  BarChart2,
  DollarSign,
  FileText,
  Bookmark,
  Layers,
  Settings,
  HelpCircle,
} from 'lucide-react';
import { currentUser } from '../data/mockData';

const NAV_ITEMS = [
  { to: '/', label: 'Dashboard', icon: LayoutGrid, end: true },
  { to: '/new-feasibility', label: 'New Feasibility', icon: CirclePlus },
  { to: '/projects', label: 'Projects', icon: Folder },
  { to: '/map', label: 'Map', icon: Map },
  { to: '/properties', label: 'Properties', icon: Building2 },
  { to: '/market-data', label: 'Market Data', icon: BarChart2 },
  { to: '/financial-models', label: 'Financial Models', icon: DollarSign },
  { to: '/reports', label: 'Reports', icon: FileText },
  { to: '/saved-opportunities', label: 'Saved Opportunities', icon: Bookmark },
  { to: '/documents', label: 'Documents', icon: Layers },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col bg-[#0e1015] text-slate-300">
      <div className="flex items-center gap-2.5 px-6 py-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-sm font-bold text-white">
          P
        </div>
        <div className="leading-tight">
          <div className="text-sm font-bold tracking-wide text-white">PORTA LAND</div>
          <div className="text-[9px] tracking-[0.15em] text-slate-500">FEASIBILITY ENGINE</div>
        </div>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-2">
        {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition-colors ${
                isActive
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'
              }`
            }
          >
            <Icon size={17} strokeWidth={2} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-white/10 px-3 py-3">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium text-slate-400 hover:bg-white/5 hover:text-slate-100">
          <HelpCircle size={17} strokeWidth={2} />
          Help &amp; Support
        </button>
        <div className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold text-white">
            {currentUser.initials}
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-[13px] font-semibold text-white">{currentUser.name}</div>
            <div className="truncate text-[11px] text-slate-500">{currentUser.company}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
