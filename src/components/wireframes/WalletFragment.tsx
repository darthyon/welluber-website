export function WalletFragment() {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      {/* Available Balance */}
      <div>
        <span className="font-geist text-[10px] text-gray-400">Available Balance</span>
        <div className="mt-1.5 flex items-baseline gap-2">
          <div className="h-6 w-28 rounded-md bg-gray-200" />
          <div className="h-3.5 w-10 rounded bg-gray-100" />
        </div>
      </div>

      {/* Utilisation breakdown */}
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-geist text-[10px] text-gray-400">Budget utilisation</span>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-10 rounded bg-gray-200" />
            <span className="font-geist text-[9px] text-gray-400">spent</span>
          </div>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div className="h-full w-[60%] rounded-full bg-brand" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-brand" />
            <span className="font-geist text-[9px] text-gray-500">Used</span>
            <div className="h-2.5 w-10 rounded bg-gray-200" />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-gray-200" />
            <span className="font-geist text-[9px] text-gray-500">Remaining</span>
            <div className="h-2.5 w-10 rounded bg-gray-100" />
          </div>
        </div>
      </div>

      {/* Monthly allocation */}
      <div className="mt-3 rounded-xl bg-gray-50 p-3">
        <div className="flex items-center justify-between">
          <span className="font-geist text-[10px] text-gray-400">Monthly allocation</span>
          <div className="h-3 w-14 rounded bg-gray-200" />
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-geist text-[9px] text-gray-500">On track</span>
        </div>
      </div>
    </div>
  )
}
