export function WalletFragment() {
  return (
    <div className="flex h-full flex-col justify-center px-4 py-3">
      <span className="font-inter text-[10px] text-[#9CA3AF]">Available Balance</span>
      <span className="mt-1 font-inter text-2xl font-semibold text-[#111827]">
        RM 2,450<span className="text-base text-[#9CA3AF]">.00</span>
      </span>
      <div className="mt-3 space-y-1">
        <div className="flex justify-between">
          <span className="font-inter text-[9px] text-[#9CA3AF]">Spent this month</span>
          <span className="font-inter text-[9px] font-medium text-[#111827]">RM 1,550</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#EEF2FF]">
          <div className="h-full w-[60%] rounded-full bg-[#4F46E5]" />
        </div>
        <div className="flex justify-between">
          <span className="font-inter text-[9px] text-[#9CA3AF]">60% utilised</span>
          <span className="font-inter text-[9px] text-[#9CA3AF]">of RM 4,000 allocation</span>
        </div>
      </div>
    </div>
  )
}
