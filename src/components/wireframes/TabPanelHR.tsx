export function TabPanelHR() {
  return (
    <div className="relative flex h-[300px] w-full flex-col overflow-hidden rounded-2xl bg-[#0F172A] shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent" />

      <div className="relative flex flex-1 flex-col p-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand">
              <svg width="12" height="12" viewBox="0 0 512 512" fill="none" className="text-white">
                <path d="M217 39C217 17.46 234.46 0 256 0C277.54 0 295 17.46 295 39V157C295 178.54 277.54 196 256 196C234.46 196 217 178.54 217 157V39Z" fill="currentColor"/>
                <path d="M472 217C493.54 217 511 234.46 511 256C511 277.54 493.54 295 472 295H354C332.46 295 315 277.54 315 256C315 234.46 332.46 217 354 217H472Z" fill="currentColor"/>
                <path d="M437 382C451.91 396.91 451.91 421.09 437 436C422.09 450.91 397.91 450.91 383 436L298 351C283.09 336.09 283.09 311.91 298 297C312.91 282.09 337.09 282.09 352 297L437 382Z" fill="currentColor"/>
                <path d="M295 472C295 493.54 277.54 511 256 511C234.46 511 217 493.54 217 472V354C217 332.46 234.46 315 256 315C277.54 315 295 332.46 295 354V472Z" fill="currentColor"/>
                <path d="M129 436C114.09 450.91 89.91 450.91 75 436C60.09 421.09 60.09 396.91 75 382L160 297C174.91 282.09 199.09 282.09 214 297C228.91 311.91 228.91 336.09 214 351L129 436Z" fill="currentColor"/>
                <path d="M39 295C17.46 295 0 277.54 0 256C0 234.46 17.46 217 39 217H157C178.54 217 196 234.46 196 256C196 277.54 178.54 295 157 295H39Z" fill="currentColor"/>
                <path d="M75 129C60.09 114.09 60.09 89.91 75 75C89.91 60.09 114.09 60.09 129 75L214 160C228.91 174.91 228.91 199.09 214 214C199.09 228.91 174.91 228.91 160 214L75 129Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              New Policy
            </span>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[9px] font-semibold text-emerald-400">Draft</span>
          </div>
        </div>

        {/* Stepper */}
        <div className="mt-4 flex items-center gap-2">
          {[
            { num: 1, label: 'Benefit', state: 'done' },
            { num: 2, label: 'Target', state: 'active' },
            { num: 3, label: 'Review', state: 'pending' },
          ].map((step, i, arr) => (
            <div key={step.num} className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold ${
                    step.state === 'done'
                      ? 'bg-emerald-500 text-white'
                      : step.state === 'active'
                        ? 'border-2 border-brand bg-white/[0.06] text-brand'
                        : 'border border-white/10 bg-white/[0.03] text-slate-500'
                  }`}
                >
                  {step.state === 'done' ? '✓' : step.num}
                </div>
                <span
                  className={`text-[10px] font-medium ${
                    step.state === 'active' ? 'text-white' : 'text-slate-500'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {i < arr.length - 1 && <div className="h-px w-4 bg-white/10" />}
            </div>
          ))}
        </div>

        {/* Target selection */}
        <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Assign to
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              { label: 'All Staff', checked: true },
              { label: 'Engineering', checked: true },
              { label: 'Sales', checked: false },
              { label: 'Managers', checked: true },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${
                  item.checked
                    ? 'border-brand/30 bg-brand/10'
                    : 'border-white/[0.06] bg-white/[0.02]'
                }`}
              >
                <div
                  className={`flex h-3.5 w-3.5 items-center justify-center rounded-sm border ${
                    item.checked
                      ? 'border-brand bg-brand'
                      : 'border-white/20'
                  }`}
                >
                  {item.checked && (
                    <svg width="8" height="6" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className={`text-[11px] ${item.checked ? 'text-white' : 'text-slate-500'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Policy preview */}
        <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-3">
          <div>
            <p className="text-[10px] text-slate-500">Policy</p>
            <p className="text-[12px] font-medium text-white">Fitness Flexi · RM 300</p>
          </div>
          <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-medium text-brand">
            3 groups selected
          </span>
        </div>
      </div>
    </div>
  )
}
