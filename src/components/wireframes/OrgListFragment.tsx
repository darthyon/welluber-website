export function OrgListFragment() {
  const orgs = [
    { name: 'TechCorp Malaysia',  branch: 'HQ · Kuala Lumpur', members: '1,240 members', status: 'Active',  util: '74%' },
    { name: 'Axiata Ventures',    branch: 'Cyberjaya Office',   members: '856 members',   status: 'Active',  util: '61%' },
    { name: 'GreenPulse Sdn Bhd', branch: 'Penang Branch',     members: '312 members',   status: 'Pending', util: '—'   },
  ]

  const statusColors: Record<string, string> = {
    Active:    'bg-[#D1FAE5] text-[#065F46]',
    Pending:   'bg-[#FEF3C7] text-[#92400E]',
    Suspended: 'bg-[#FEE2E2] text-[#991B1B]',
  }

  return (
    <div className="h-full overflow-hidden">
      <div className="flex items-center border-b border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2">
        {['Organisation', 'Branch', 'Status', 'Wallet Utilisation'].map((h) => (
          <span key={h} className="flex-1 font-inter text-[9px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
            {h}
          </span>
        ))}
      </div>
      {orgs.map((org, i) => (
        <div key={i} className="flex items-center border-b border-[#F3F4F6] px-4 py-3">
          <div className="flex-1">
            <div className="font-inter text-[10px] font-medium text-[#111827]">{org.name}</div>
            <div className="font-inter text-[9px] text-[#9CA3AF]">{org.members}</div>
          </div>
          <div className="flex-1 font-inter text-[9px] text-[#6B7280]">{org.branch}</div>
          <div className="flex-1">
            <span className={`rounded-full px-2 py-0.5 font-inter text-[8px] font-medium ${statusColors[org.status]}`}>
              {org.status}
            </span>
          </div>
          <div className="flex-1 font-inter text-[10px] font-medium text-[#111827]">{org.util}</div>
        </div>
      ))}
    </div>
  )
}
