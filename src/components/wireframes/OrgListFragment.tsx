export function OrgListFragment() {
  const rows = [
    { status: 'Active', util: '74%', trend: '+4%' },
    { status: 'Active', util: '61%', trend: '+2%' },
    { status: 'Pending', util: '—', trend: null },
  ]

  const statusColors: Record<string, string> = {
    Active:    'bg-emerald-100 text-emerald-800',
    Pending:   'bg-amber-100 text-amber-800',
    Suspended: 'bg-red-100 text-red-800',
  }

  return (
    <div className="h-full overflow-hidden">
      {/* Table header */}
      <div className="flex items-center border-b border-gray-200 bg-gray-50 px-4 py-2">
        {['Organisation', 'Branch', 'Status', 'Utilisation'].map((h) => (
          <span key={h} className="flex-1 font-[family-name:var(--font-inter)] text-[9px] font-semibold uppercase tracking-wider text-gray-400">
            {h}
          </span>
        ))}
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div key={i} className="flex items-center border-b border-gray-100 px-4 py-3">
          {/* Organisation */}
          <div className="flex-1 min-w-0">
            <div className="h-3 w-24 rounded bg-gray-200" />
            <div className="mt-1 h-2 w-16 rounded bg-gray-100" />
          </div>
          {/* Branch */}
          <div className="flex-1 min-w-0">
            <div className="h-2 w-20 rounded bg-gray-100" />
          </div>
          {/* Status */}
          <div className="flex-1 min-w-0">
            <span className={`inline-block rounded-full px-2 py-0.5 font-[family-name:var(--font-inter)] text-[8px] font-medium ${statusColors[row.status]}`}>
              {row.status}
            </span>
          </div>
          {/* Utilisation + trend */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-[family-name:var(--font-inter)] text-[10px] font-medium text-gray-900">{row.util}</span>
              {row.trend && (
                <span className="font-[family-name:var(--font-inter)] text-[9px] font-medium text-emerald-500">{row.trend}</span>
              )}
            </div>
            {row.trend && (
              <div className="mt-1 h-1 w-16 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-emerald-400"
                  style={{ width: row.util }}
                />
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Summary footer */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50/50">
        <span className="font-[family-name:var(--font-inter)] text-[9px] text-gray-400">3 organisations total</span>
        <div className="flex items-center gap-1">
          <span className="font-[family-name:var(--font-inter)] text-[9px] text-gray-400">Combined</span>
          <div className="h-3 w-10 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  )
}
