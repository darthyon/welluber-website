export function AnalyticsFragment() {
  const bars = [
    { day: 'M', height: 55, active: false },
    { day: 'T', height: 70, active: false },
    { day: 'W', height: 45, active: false },
    { day: 'T', height: 80, active: false },
    { day: 'F', height: 90, active: true },
    { day: 'S', height: 60, active: false },
    { day: 'S', height: 35, active: false },
  ]

  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="mb-1 font-inter text-[10px] font-semibold text-[#111827]">Utilisation</div>
      <div className="mb-2 font-inter text-[9px] text-[#9CA3AF]">This week</div>
      <div className="flex h-20 items-end gap-1.5">
        {bars.map((bar, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full rounded-t"
              style={{
                height: `${bar.height * 0.55}px`,
                backgroundColor: bar.active ? '#4F46E5' : '#C7D2FE',
              }}
            />
            <span className="font-inter text-[8px] text-[#9CA3AF]">{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
