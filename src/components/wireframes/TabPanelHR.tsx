const steps = [
  { number: 1, label: 'Policy Basics', state: 'complete' },
  { number: 2, label: 'Benefit Groups', state: 'complete' },
  { number: 3, label: 'Review & Activate', state: 'active' },
] as const

export function TabPanelHR() {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-[#E5E7EB] bg-white">
      {/* Stepper */}
      <div className="flex items-center gap-0 border-b border-[#E5E7EB] bg-[#F9FAFB] px-5 py-4">
        {steps.map((step, i) => (
          <div key={step.number} className="flex items-center">
            <div className="flex items-center gap-1.5">
              {/* Step indicator */}
              {step.state === 'complete' ? (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4F46E5]">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ) : (
                <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#4F46E5] bg-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
                </div>
              )}
              <span
                className={`font-inter text-[10px] font-medium whitespace-nowrap ${
                  step.state === 'active' ? 'text-[#4F46E5]' : 'text-[#6B7280]'
                }`}
              >
                {step.label}
              </span>
            </div>
            {/* Connector */}
            {i < steps.length - 1 && (
              <div className="mx-2 h-px w-6 bg-[#E5E7EB]" />
            )}
          </div>
        ))}
      </div>

      {/* Review card */}
      <div className="px-4 py-4">
        <div className="rounded-xl border border-[#E5E7EB] bg-white p-4 space-y-3">
          {/* Policy name */}
          <div>
            <p className="font-inter text-[9px] font-medium uppercase tracking-widest text-[#9CA3AF] mb-1">
              Policy Name
            </p>
            <p className="font-inter text-[12px] font-medium text-[#111827]">
              Comprehensive Health 2026
            </p>
          </div>

          {/* Benefit groups */}
          <div>
            <p className="font-inter text-[9px] font-medium uppercase tracking-widest text-[#9CA3AF] mb-1.5">
              Benefit Groups
            </p>
            <div className="flex gap-1.5 flex-wrap">
              <span className="rounded bg-[#EEF2FF] px-2 py-0.5 font-inter text-[10px] font-medium text-[#4F46E5]">
                Fitness RM 300
              </span>
              <span className="rounded bg-[#EEF2FF] px-2 py-0.5 font-inter text-[10px] font-medium text-[#4F46E5]">
                Medical RM 500
              </span>
            </div>
          </div>

          {/* Employee coverage */}
          <div>
            <p className="font-inter text-[9px] font-medium uppercase tracking-widest text-[#9CA3AF] mb-1">
              Employee Coverage
            </p>
            <p className="font-inter text-[11px] text-[#6B7280]">
              450 employees · Full-time
            </p>
          </div>

          {/* CTA */}
          <button className="mt-1 w-full rounded-lg bg-[#4F46E5] py-2 font-inter text-[11px] font-medium text-white text-center">
            Activate Policy →
          </button>
        </div>
      </div>
    </div>
  )
}
