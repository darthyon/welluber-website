export function DashboardWireframe() {
  return (
    <div className="flex h-[380px] w-full overflow-hidden bg-white">
      {/* Sidebar */}
      <div className="flex w-[148px] shrink-0 flex-col bg-dark-surface px-3 py-4">
        {/* Logo area */}
        <div className="mb-6 flex items-center gap-2 px-1">
          <div className="h-6 w-6 rounded bg-brand" />
          <div className="h-3 w-16 rounded bg-white/20" />
        </div>
        {/* Nav items */}
        <div className="flex flex-col gap-1">
          {/* Active item */}
          <div className="flex items-center gap-2 rounded-md bg-brand px-3 py-2">
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
        <div className="flex items-center gap-3 border-b border-gray-200 px-5 py-3">
          <div className="flex h-7 flex-1 items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-3">
            <div className="h-3 w-3 rounded-full bg-gray-200" />
            <div className="h-2.5 w-24 rounded bg-gray-200" />
          </div>
          <div className="h-7 w-7 rounded-full bg-gray-100" />
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
              className="rounded-lg border border-gray-200 bg-gray-50 p-3"
            >
              <div className="mb-2 h-2 w-16 rounded bg-gray-200" />
              <div className="h-4 w-14 rounded bg-gray-300" />
              {i === 3 && (
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-[68%] rounded-full bg-brand" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom: chart + settlement */}
        <div className="flex flex-1 gap-3 overflow-hidden px-5 pb-4">
          {/* Bar chart */}
          <div className="flex flex-1 flex-col rounded-lg border border-gray-200 bg-gray-50 p-4">
            <div className="mb-3 h-3 w-24 rounded bg-gray-200" />
            <div className="flex flex-1 items-end gap-1">
              {['var(--color-brand-mid)', 'var(--color-brand-muted)', 'var(--color-brand-mid)', 'var(--color-brand-muted)', 'var(--color-brand-mid)', 'var(--color-brand-muted)', 'var(--color-brand-mid)', 'var(--color-brand-muted)', 'var(--color-brand-mid)', 'var(--color-brand-muted)', 'var(--color-brand)', 'var(--color-brand-mid)'].map(
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
                  <span key={m} className="font-geist text-[8px] text-gray-400">
                    {m}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Settlement panel */}
          <div className="flex w-[130px] flex-col justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
            <div>
              <div className="mb-1 flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <div className="h-2 w-16 rounded bg-gray-200" />
              </div>
              <div className="mb-1 h-2 w-20 rounded bg-gray-200" />
              <div className="mt-3 font-geist text-base font-semibold text-gray-900">
                RM 18.2M
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[72%] rounded-full bg-brand" />
              </div>
            </div>
            <div className="mt-3 flex w-full items-center justify-center rounded bg-brand px-2 py-1.5">
              <span className="font-geist text-[9px] font-medium text-white">
                Trigger Payout →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
