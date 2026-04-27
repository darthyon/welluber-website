const settlements = [
  {
    org: 'Acme Corp',
    amount: 'RM 4,200',
    status: 'paid',
    date: 'Apr 15',
  },
  {
    org: 'TechStart Sdn Bhd',
    amount: 'RM 3,200',
    status: 'paid',
    date: 'Apr 12',
  },
  {
    org: 'Global Health Inc',
    amount: 'RM 5,100',
    status: 'unpaid',
    date: 'May 01',
  },
]

export function TabPanelSP() {
  const totalPaid = settlements
    .filter((s) => s.status === 'paid')
    .reduce((sum, s) => sum + parseInt(s.amount.replace(/\D/g, '')), 0)

  return (
    <div className="relative flex h-[300px] w-full flex-col overflow-hidden rounded-2xl bg-[#F9F7F2] shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      <div className="flex flex-1 flex-col p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
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
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Settlements
            </span>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-semibold text-emerald-600">Active</span>
          </div>
        </div>

        {/* Total */}
        <div className="mt-3 flex items-baseline gap-1">
          <span className="font-poppins text-xl font-bold text-gray-900">
            RM {totalPaid.toLocaleString()}
          </span>
          <span className="text-[11px] text-gray-400">received this month</span>
        </div>

        {/* Org list */}
        <div className="mt-4 flex-1 space-y-2">
          {settlements.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2.5"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${
                    s.status === 'paid' ? 'bg-emerald-500' : 'bg-amber-400'
                  }`}
                />
                <div>
                  <p className="text-[12px] font-medium text-gray-900">{s.org}</p>
                  <p className="text-[10px] text-gray-400">{s.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-medium text-gray-900">{s.amount}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${
                    s.status === 'paid'
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'bg-amber-50 text-amber-600'
                  }`}
                >
                  {s.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-center pt-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-600">
              Auto-Settled
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
