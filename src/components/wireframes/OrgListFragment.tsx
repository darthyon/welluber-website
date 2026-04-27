export function OrgListFragment() {
  const orgs = [
    { name: 'TechCorp Malaysia',  branch: 'HQ · Kuala Lumpur', members: '1,240 members', status: 'Active',  util: '74%' },
    { name: 'Axiata Ventures',    branch: 'Cyberjaya Office',   members: '856 members',   status: 'Active',  util: '61%' },
    { name: 'GreenPulse Sdn Bhd', branch: 'Penang Branch',     members: '312 members',   status: 'Pending', util: '—'   },
  ]

  const statusColors: Record<string, string> = {
    Active:    'bg-emerald-100 text-emerald-800',
    Pending:   'bg-amber-100 text-amber-800',
    Suspended: 'bg-red-100 text-red-800',
  }

  return (
    <div className="h-full overflow-hidden">
      <div className="flex items-center border-b border-gray-200 bg-gray-50 px-4 py-2">
        {['Organisation', 'Branch', 'Status', 'Wallet Utilisation'].map((h) => (
          <span key={h} className="flex-1 font-inter text-[9px] font-semibold uppercase tracking-wider text-gray-400">
            {h}
          </span>
        ))}
      </div>
      {orgs.map((org, i) => (
        <div key={i} className="flex items-center border-b border-gray-100 px-4 py-3">
          <div className="flex-1">
            <div className="font-inter text-[10px] font-medium text-gray-900">{org.name}</div>
            <div className="font-inter text-[9px] text-gray-400">{org.members}</div>
          </div>
          <div className="flex-1 font-inter text-[9px] text-gray-500">{org.branch}</div>
          <div className="flex-1">
            <span className={`rounded-full px-2 py-0.5 font-inter text-[8px] font-medium ${statusColors[org.status]}`}>
              {org.status}
            </span>
          </div>
          <div className="flex-1 font-inter text-[10px] font-medium text-gray-900">{org.util}</div>
        </div>
      ))}
    </div>
  )
}
