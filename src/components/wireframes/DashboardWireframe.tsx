export function DashboardWireframe() {
  return (
    <div className="flex h-[380px] w-full overflow-hidden bg-white">
      {/* Sidebar */}
      <div className="flex w-[148px] shrink-0 flex-col bg-[#1E1B2E] px-3 py-4">
        {/* Logo area */}
        <div className="mb-6 flex items-center gap-2 px-1">
          <div className="h-6 w-6 rounded bg-[#4F46E5]" />
          <div className="h-3 w-16 rounded bg-white/20" />
        </div>
        {/* Nav items */}
        <div className="flex flex-col gap-1">
          {/* Active item */}
          <div className="flex items-center gap-2 rounded-md bg-[#4F46E5] px-3 py-2">
            <div className="h-3.5 w-3.5 rounded-sm bg-white/80" />
            <div className="h-2.5 w-14 rounded bg-white/80" />
          </div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 rounded-md px-3 py-2">
              <div className="h-3.5 w-3.5 rounded-sm bg-white/20" />
              <div className="h-2.5 w-12 rounded bg-white/20" />
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden bg-white">
        {/* Search bar row */}
        <div className="flex items-center gap-3 border-b border-[#E5E7EB] px-5 py-3">
          <div className="flex h-7 flex-1 items-center gap-2 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-3">
            <div className="h-3 w-3 rounded-full bg-[#E5E7EB]" />
            <div className="h-2.5 w-24 rounded bg-[#E5E7EB]" />
          </div>
          <div className="h-7 w-7 rounded-full bg-[#F3F4F6]" />
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-4 gap-3 px-5 py-4">
          {[
            { label: 'Active Members', value: '128,492' },
            { label: 'Organizations', value: '342' },
            { label: 'Service Providers', value: '1,204' },
            { label: 'Profitability', value: '68%' },
          ].map((card, i) => (
            <div
              key={i}
              className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-3"
            >
              <div className="mb-2 h-2 w-16 rounded bg-[#E5E7EB]" />
              <div className="h-4 w-14 rounded bg-[#D1D5DB]" />
              {i === 3 && (
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
                  <div className="h-full w-[68%] rounded-full bg-[#4F46E5]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom: chart + settlement */}
        <div className="flex flex-1 gap-3 overflow-hidden px-5 pb-4">
          {/* Bar chart */}
          <div className="flex flex-1 flex-col rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-4">
            <div className="mb-3 h-3 w-24 rounded bg-[#E5E7EB]" />
            <div className="flex flex-1 items-end gap-1">
              {['#C7D2FE', '#818CF8', '#C7D2FE', '#818CF8', '#C7D2FE', '#818CF8', '#C7D2FE', '#818CF8', '#C7D2FE', '#818CF8', '#4F46E5', '#C7D2FE'].map(
                (color, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      backgroundColor: color,
                      height: `${35 + ((i * 17 + 20) % 50)}%`,
                    }}
                  />
                )
              )}
            </div>
            <div className="mt-1.5 flex justify-between">
              {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map(
                (m) => (
                  <span key={m} className="font-inter text-[8px] text-[#9CA3AF]">
                    {m}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Settlement panel */}
          <div className="flex w-[130px] flex-col justify-between rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-4">
            <div>
              <div className="mb-1 flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                <div className="h-2 w-16 rounded bg-[#E5E7EB]" />
              </div>
              <div className="mb-1 h-2 w-20 rounded bg-[#E5E7EB]" />
              <div className="mt-3 font-inter text-base font-semibold text-[#111827]">
                RM 18.2M
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
                <div className="h-full w-[72%] rounded-full bg-[#4F46E5]" />
              </div>
            </div>
            <div className="mt-3 flex w-full items-center justify-center rounded bg-[#4F46E5] px-2 py-1.5">
              <span className="font-inter text-[9px] font-medium text-white">
                Trigger Payout →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
