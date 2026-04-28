export function AnalyticsFragment() {
  const bars = [
    { height: 55, active: false },
    { height: 70, active: false },
    { height: 45, active: false },
    { height: 80, active: false },
    { height: 90, active: true },
    { height: 60, active: false },
    { height: 35, active: false },
  ]

  return (
    <div className="flex h-full flex-col px-4 py-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="font-geist text-[10px] font-semibold text-gray-900">Utilisation</div>
          <div className="mt-0.5 font-geist text-[9px] text-gray-400">This week</div>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-geist text-[9px] font-semibold text-emerald-600">+12%</span>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-2 flex h-16 items-end gap-1.5">
        {bars.map((bar, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full rounded-t transition-all"
              style={{
                height: `${bar.height * 0.45}px`,
                backgroundColor: bar.active ? 'var(--color-brand)' : 'var(--color-brand-mid)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Insights */}
      <div className="mt-3 space-y-1.5">
        <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-1.5">
          <span className="font-geist text-[10px] text-gray-500">Peak day</span>
          <div className="flex items-center gap-1">
            <span className="font-geist text-[10px] font-semibold text-gray-900">Friday</span>
            <span className="font-geist text-[9px] text-emerald-500">+24%</span>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-1.5">
          <span className="font-geist text-[10px] text-gray-500">Avg. daily</span>
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-10 rounded bg-gray-200" />
            <span className="font-geist text-[9px] text-gray-400">claims</span>
          </div>
        </div>
      </div>
    </div>
  )
}
