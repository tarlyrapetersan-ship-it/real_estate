import { Check } from 'lucide-react';

export const STEPS = ['Property', 'Planning', 'Development', 'Costs', 'Financials', 'Risks', 'Results'];

export default function Stepper({
  current,
  onStepClick,
}: {
  current: number;
  onStepClick?: (index: number) => void;
}) {
  return (
    <div className="flex items-center">
      {STEPS.map((label, i) => {
        const state = i < current ? 'done' : i === current ? 'active' : 'todo';
        return (
          <div key={label} className="flex flex-1 items-center last:flex-none">
            <button
              onClick={() => onStepClick?.(i)}
              disabled={!onStepClick}
              className="flex items-center gap-2 disabled:cursor-default"
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                  state === 'done'
                    ? 'bg-emerald-600 text-white'
                    : state === 'active'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {state === 'done' ? <Check size={13} /> : i + 1}
              </span>
              <span
                className={`whitespace-nowrap text-[13px] font-medium ${
                  state === 'todo' ? 'text-slate-400' : 'text-slate-800'
                }`}
              >
                {label}
              </span>
            </button>
            {i < STEPS.length - 1 && (
              <div className={`mx-3 h-px flex-1 ${i < current ? 'bg-emerald-500' : 'bg-slate-200'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
