import { Ticket, Barbell, Sparkle, FlowerLotus } from '@phosphor-icons/react'

const barcodeBars = [2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2]

const providers = [
  { icon: <Barbell size={11} weight="bold" />, name: 'FitMalaysia' },
  { icon: <FlowerLotus size={11} weight="bold" />, name: 'YogaFlow' },
  { icon: <Sparkle size={11} weight="bold" />, name: 'WellSpa' },
]

export function TabPanelEmployee() {
  return (
    <div className="flex flex-col items-center gap-3 p-4">
      {/* Voucher card */}
      <div className="flex w-full overflow-hidden rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)]" style={{ height: 152 }}>
        {/* Left stub — indigo */}
        <div className="relative flex w-[30%] flex-shrink-0 flex-col items-center justify-center gap-2 bg-[#4F46E5]">
          <Ticket size={16} weight="fill" color="white" style={{ opacity: 0.7 }} />
          <span
            className="font-inter text-[10px] font-bold tracking-[0.18em] text-white"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.18em' }}
          >
            WELLUBER
          </span>
          {/* Perforated edge — right side of stub */}
          <div
            className="absolute right-0 top-0 h-full"
            style={{
              borderRight: '2px dashed #6366F1',
            }}
          />
          {/* Notch top */}
          <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[#F9FAFB]" />
        </div>

        {/* Right body — white */}
        <div className="flex flex-1 flex-col justify-between bg-white px-4 py-3">
          {/* Top content */}
          <div>
            <p className="font-inter text-[13px] font-semibold text-[#111827]">FitMalaysia Gyms</p>
            <p className="font-inter text-[11px] text-[#6B7280]">1 Month Unlimited Access</p>
            <p className="mt-1.5 font-inter text-[20px] font-bold text-[#4F46E5]">RM 150.00</p>
          </div>

          {/* Bottom row */}
          <div className="flex items-end justify-between">
            <div>
              {/* Barcode simulation */}
              <div className="mb-1 flex items-end gap-px" style={{ height: 20 }}>
                {barcodeBars.map((w, i) => (
                  <div
                    key={i}
                    className="bg-[#D1D5DB]"
                    style={{ width: w, height: i % 3 === 0 ? 20 : 14 }}
                  />
                ))}
              </div>
              <p className="font-inter text-[9px] text-[#9CA3AF]">Valid until 31 Dec 2026</p>
            </div>
            <span className="font-inter text-[11px] font-semibold text-[#4F46E5]">REDEEM →</span>
          </div>
        </div>
      </div>

      {/* Provider pills */}
      <div className="flex items-center gap-2">
        {providers.map((p, i) => (
          <div
            key={i}
            className="flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1"
          >
            <span className="text-[#4F46E5]">{p.icon}</span>
            <span className="font-inter text-[10px] font-medium text-[#374151]">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
