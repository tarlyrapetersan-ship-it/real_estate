import { useState } from 'react';
import { Sparkles, ArrowRight, X, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

interface AICopilotProps {
  contextLabel?: string;
  suggestedPrompts?: string[];
}

export default function AICopilot({ contextLabel, suggestedPrompts }: AICopilotProps) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'prompts' | 'chat'>(suggestedPrompts?.length ? 'prompts' : 'chat');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: "Hi Sofia, I'm your Feasibility Co-Pilot. Ask me about land classification, heritage buffers, zoning envelopes, or estimated returns for any parcel in your portfolio.",
    },
  ]);

  const openWidget = () => {
    setMode(suggestedPrompts?.length ? 'prompts' : 'chat');
    setOpen(true);
  };

  const sendText = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [
      ...m,
      { role: 'user', text },
      {
        role: 'assistant',
        text: 'This is a demo response — connect this widget to your feasibility model API to return live, parcel-specific answers.',
      },
    ]);
    setMode('chat');
  };

  const send = () => {
    sendText(input);
    setInput('');
  };

  if (!open) {
    return (
      <button
        onClick={openWidget}
        className="fixed bottom-6 right-6 z-30 flex w-80 items-center gap-3 rounded-xl bg-[#0e1015] px-4 py-3 text-left text-white shadow-xl transition-transform hover:-translate-y-0.5"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500">
          <Sparkles size={16} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold">AI Feasibility Co-Pilot</span>
          <span className="block truncate text-xs text-slate-400">
            Ask about land classification, heritage buffers, or...
          </span>
        </span>
        <ArrowRight size={16} className="shrink-0 text-slate-400" />
      </button>
    );
  }

  if (mode === 'prompts' && suggestedPrompts?.length) {
    return (
      <div className="fixed bottom-6 right-6 z-30 w-80 overflow-hidden rounded-2xl border border-white/10 bg-[#0e1015] shadow-2xl">
        <div className="flex items-start gap-3 px-4 py-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500">
            <Sparkles size={16} className="text-white" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-white">AI Feasibility Co-Pilot</div>
            {contextLabel && (
              <div className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Active on {contextLabel}
              </div>
            )}
          </div>
          <button onClick={() => setOpen(false)} className="rounded-md p-1 text-slate-400 hover:bg-white/10 hover:text-white">
            <X size={16} />
          </button>
        </div>

        <div className="border-t border-white/10 px-4 py-3">
          <div className="mb-2 text-[10px] font-semibold tracking-wide text-slate-500">SUGGESTED PROMPTS</div>
          <div className="space-y-1.5">
            {suggestedPrompts.map((p) => (
              <button
                key={p}
                onClick={() => sendText(p)}
                className="flex w-full items-center justify-between gap-2 rounded-lg bg-white/5 px-3 py-2.5 text-left text-[13px] text-slate-200 hover:bg-white/10"
              >
                <span className="truncate">{p}</span>
                <ArrowRight size={13} className="shrink-0 text-slate-500" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-30 flex h-[520px] w-96 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
      <div className="flex items-center gap-3 bg-[#0e1015] px-4 py-3.5 text-white">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500">
          <Sparkles size={15} />
        </span>
        <span className="flex-1 text-sm font-semibold">AI Feasibility Co-Pilot</span>
        <button onClick={() => setOpen(false)} className="rounded-md p-1 text-slate-400 hover:bg-white/10 hover:text-white">
          <X size={17} />
        </button>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
              m.role === 'assistant'
                ? 'bg-white text-slate-700 shadow-sm'
                : 'ml-auto bg-emerald-600 text-white'
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-slate-200 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Ask about heritage buffers, zoning..."
          className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:outline-none"
        />
        <button
          onClick={send}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
        >
          <Send size={15} />
        </button>
      </div>
    </div>
  );
}
