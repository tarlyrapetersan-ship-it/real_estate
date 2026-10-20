import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import AICopilot from './AICopilot';

export default function Layout({
  children,
  activeProject,
  copilotContext,
  copilotPrompts,
}: {
  children: ReactNode;
  activeProject?: string;
  copilotContext?: string;
  copilotPrompts?: string[];
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f5f6f8]">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar activeProject={activeProject} />
        <main className="flex-1 overflow-y-auto px-8 py-7">{children}</main>
      </div>
      <AICopilot contextLabel={copilotContext} suggestedPrompts={copilotPrompts} />
    </div>
  );
}
