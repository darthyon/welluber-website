const steps = [
  { number: 1, label: 'Policy Basics', state: 'complete' },
  { number: 2, label: 'Benefit Groups', state: 'complete' },
  { number: 3, label: 'Review & Activate', state: 'active' },
] as const

export function TabPanelHR() {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white">
      {/* Stepper */}
      <div className="flex items-center gap-0 border-b border-gray-200 bg-gray-50 px-5 py-4">
        {steps.map((step, i) => (
          <div key={step.number} className="flex items-center">
            <div className="flex items-center gap-1.5">
              {/* Step indicator */}
              {step.state === 'complete' ? (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ) : (
                <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand bg-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                </div>
              )}
              <span
                className={`font-inter text-[10px] font-medium whitespace-nowrap ${
                  step.state === 'active' ? 'text-brand' : 'text-gray-500'
                }`}
              >
                {step.label}
              </span>
            </div>
            {/* Connector */}
            {i < steps.length - 1 && (
              <div className="mx-2 h-px w-6 bg-gray-200" />
            )}
          </div>
        ))}
      </div>

      {/* Review card */}
      <div className="px-4 py-4">
        <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-3">
          {/* Policy name */}
          <div>
            <p className="font-inter text-[9px] font-medium uppercase tracking-widest text-gray-400 mb-1">
              Policy Name
            </p>
            <p className="font-inter text-[12px] font-medium text-gray-900">
              Comprehensive Health 2026
            </p>
          </div>

          {/* Benefit groups */}
          <div>
            <p className="font-inter text-[9px] font-medium uppercase tracking-widest text-gray-400 mb-1.5">
              Benefit Groups
            </p>
            <div className="flex gap-1.5 flex-wrap">
              <span className="rounded bg-brand-faint px-2 py-0.5 font-inter text-[10px] font-medium text-brand">
                Fitness RM 300
              </span>
              <span className="rounded bg-brand-faint px-2 py-0.5 font-inter text-[10px] font-medium text-brand">
                Medical RM 500
              </span>
            </div>
          </div>

          {/* Employee coverage */}
          <div>
            <p className="font-inter text-[9px] font-medium uppercase tracking-widest text-gray-400 mb-1">
              Employee Coverage
            </p>
            <p className="font-inter text-[11px] text-gray-500">
              450 employees · Full-time
            </p>
          </div>

          {/* CTA */}
          <button className="mt-1 w-full rounded-lg bg-brand py-2 font-inter text-[11px] font-medium text-white text-center">
            Activate Policy →
          </button>
        </div>
      </div>
    </div>
  )
}
