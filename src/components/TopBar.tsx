import { useState } from 'react';
import { Search, Share2, Download, Bell, ChevronDown } from 'lucide-react';

const PROJECTS = ['Lisbon Urban Portfolio', 'New Screening Portugal', 'Rua do Arsenal Redevelopment', 'Porto Riverside Residential'];

export default function TopBar({ activeProject = PROJECTS[0] }: { activeProject?: string }) {
  const [project, setProject] = useState(activeProject);
  const [open, setOpen] = useState(false);

  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b border-slate-200 bg-white px-6">
      <div className="relative flex-1 max-w-md">
        <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search property, coordinates, parcel..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100"
        />
      </div>

      <div className="flex items-center gap-2 text-sm text-slate-600">
        <span className="text-slate-400">Project:</span>
        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-50"
          >
            {project}
            <ChevronDown size={14} />
          </button>
          {open && (
            <div className="absolute right-0 z-20 mt-1 w-64 rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
              {PROJECTS.map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setProject(p);
                    setOpen(false);
                  }}
                  className="block w-full truncate px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50"
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
          <Share2 size={15} />
          Share
        </button>
        <button className="flex items-center gap-1.5 rounded-lg bg-[#0e1015] px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
          <Download size={15} />
          Export PDF
        </button>
        <button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-50">
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  );
}
