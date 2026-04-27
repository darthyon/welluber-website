const transactions = [
  {
    name: 'FitMalaysia Gyms',
    category: 'Fitness',
    amount: 'RM 4,200',
    badge: 'Paid',
    badgeStyle: { bg: 'var(--color-emerald-100, #DCFCE7)', text: 'var(--color-emerald-700, #15803D)' },
    check: true,
  },
  {
    name: 'MindCare Clinic',
    category: 'Wellness',
    amount: 'RM 3,200',
    badge: 'Processing',
    badgeStyle: { bg: 'var(--color-amber-100, #FEF3C7)', text: 'var(--color-amber-700, #92400E)' },
    check: false,
  },
]

export function TabPanelSP() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden rounded-xl border border-gray-200 bg-white">
      {/* Settlement status card */}
      <div className="px-4 py-3">
        {/* Header row */}
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-inter text-[13px] font-medium text-gray-900">
            Settlement status · Active
          </span>
        </div>

        {/* Amount */}
        <p className="mt-1.5 font-bricolage text-[20px] font-bold text-gray-900 leading-none">
          RM 12,400.00
        </p>
        <p className="mt-0.5 font-inter text-[11px] text-gray-400">
          Next payout on May 01, 2026
        </p>

        {/* Progress bar + label */}
        <div className="mt-2">
          <div className="h-1 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full rounded-full bg-brand" style={{ width: '72%' }} />
          </div>
          <p className="mt-1 text-right font-inter text-[11px] text-gray-400">
            26 days elapsed
          </p>
        </div>
      </div>

      {/* Transaction rows */}
      <div className="border-t border-gray-200">
        {transactions.map((t, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-5 py-3 ${
              i < transactions.length - 1 ? 'border-b border-gray-200' : ''
            }`}
          >
            <div>
              <p className="font-inter text-[12px] font-medium text-gray-900">{t.name}</p>
              <p className="font-inter text-[10px] text-gray-400">{t.category}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-inter text-[12px] font-medium text-gray-900">{t.amount}</span>
              <span
                className="rounded-full px-2 py-0.5 font-inter text-[10px] font-medium"
                style={{ backgroundColor: t.badgeStyle.bg, color: t.badgeStyle.text }}
              >
                {t.badge}{t.check ? ' ✓' : ''}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
    </div>
  )
}
