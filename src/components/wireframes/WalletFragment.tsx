export function WalletFragment() {
  return (
    <div className="flex h-full flex-col justify-center px-4 py-3">
      <span className="font-inter text-[10px] text-gray-400">Available Balance</span>
      <span className="mt-1 font-inter text-2xl font-semibold text-gray-900">
        RM 2,450<span className="text-base text-gray-400">.00</span>
      </span>
      <div className="mt-3 space-y-1">
        <div className="flex justify-between">
          <span className="font-inter text-[9px] text-gray-400">Spent this month</span>
          <span className="font-inter text-[9px] font-medium text-gray-900">RM 1,550</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-brand-faint">
          <div className="h-full w-[60%] rounded-full bg-brand" />
        </div>
        <div className="flex justify-between">
          <span className="font-inter text-[9px] text-gray-400">60% utilised</span>
          <span className="font-inter text-[9px] text-gray-400">of RM 4,000 allocation</span>
        </div>
      </div>
    </div>
  )
}
