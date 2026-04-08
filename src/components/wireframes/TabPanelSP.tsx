const transactions = [
  {
    name: 'FitMalaysia Gyms',
    category: 'Fitness',
    amount: 'RM 4,200',
    badge: 'Paid',
    badgeStyle: { bg: '#DCFCE7', text: '#15803D' },
    check: true,
  },
  {
    name: 'MindCare Clinic',
    category: 'Wellness',
    amount: 'RM 3,200',
    badge: 'Processing',
    badgeStyle: { bg: '#FEF3C7', text: '#92400E' },
    check: false,
  },
]

export function TabPanelSP() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white">
      {/* Settlement status card */}
      <div className="px-4 py-3">
        {/* Header row */}
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#10B981]" />
          <span className="font-inter text-[13px] font-medium text-[#111827]">
            Settlement status · Active
          </span>
        </div>

        {/* Amount */}
        <p className="mt-1.5 font-bricolage text-[20px] font-bold text-[#111827] leading-none">
          RM 12,400.00
        </p>
        <p className="mt-0.5 font-inter text-[11px] text-[#9CA3AF]">
          Next payout on May 01, 2026
        </p>

        {/* Progress bar + label */}
        <div className="mt-2">
          <div className="h-1 w-full overflow-hidden rounded-full bg-[#F3F4F6]">
            <div className="h-full rounded-full bg-[#4F46E5]" style={{ width: '72%' }} />
          </div>
          <p className="mt-1 text-right font-inter text-[11px] text-[#9CA3AF]">
            26 days elapsed
          </p>
        </div>
      </div>

      {/* Transaction rows */}
      <div className="border-t border-[#E5E7EB]">
        {transactions.map((t, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-5 py-3 ${
              i < transactions.length - 1 ? 'border-b border-[#E5E7EB]' : ''
            }`}
          >
            <div>
              <p className="font-inter text-[12px] font-medium text-[#111827]">{t.name}</p>
              <p className="font-inter text-[10px] text-[#9CA3AF]">{t.category}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-inter text-[12px] font-medium text-[#111827]">{t.amount}</span>
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
