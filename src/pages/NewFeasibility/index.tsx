import { useState } from 'react';
import Layout from '../../components/Layout';
import Stepper, { STEPS } from '../../components/Stepper';
import PropertyStep from './PropertyStep';
import PlanningStep from './PlanningStep';
import DevelopmentStep from './DevelopmentStep';
import CostsStep from './CostsStep';
import FinancialsStep from './FinancialsStep';
import RisksStep from './RisksStep';
import ResultsStep from './ResultsStep';

const RISK_PROMPTS = [
  'What are the key mitigation steps for the Pombaline core?',
  'Show biggest risk factor for the residential scenario',
  'Explain the difference between Verified and Estimated data',
];

const RESULTS_PROMPTS = [
  'Generate draft investment memo for Rua do Arsenal',
  'Download result package',
  'What next-stage checklists are required?',
];

export default function NewFeasibility() {
  const [step, setStep] = useState(0);
  const maxReached = Math.max(step, 0);

  const goTo = (i: number) => {
    if (i <= maxReached) setStep(i);
  };

  const copilotProps =
    step === 5
      ? { copilotContext: 'Lisbon Urban Portfolio', copilotPrompts: RISK_PROMPTS }
      : step === 6
      ? { copilotContext: 'Lisbon Urban Portfolio', copilotPrompts: RESULTS_PROMPTS }
      : {};

  return (
    <Layout activeProject="New Screening Portugal" {...copilotProps}>
      <div className="mb-6 rounded-xl border border-slate-200 bg-white px-6 py-4">
        <Stepper current={step} onStepClick={goTo} />
      </div>

      {step === 0 && <PropertyStep onAnalyse={() => setStep(1)} />}
      {step === 1 && <PlanningStep />}
      {step === 2 && <DevelopmentStep />}
      {step === 3 && <CostsStep />}
      {step === 4 && <FinancialsStep />}
      {step === 5 && <RisksStep />}
      {step === 6 && <ResultsStep />}

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>
        {step < STEPS.length - 1 && step !== 0 && (
          <button
            onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
            className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Continue
          </button>
        )}
      </div>
    </Layout>
  );
}
