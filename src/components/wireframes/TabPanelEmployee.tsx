import { Barbell, Sparkle, FlowerLotus, Person, Heart } from '@phosphor-icons/react'

const benefits = [
  { icon: <Barbell size={14} weight="bold" />, name: 'Fitness', limit: 'RM 300', used: 'RM 120' },
  { icon: <FlowerLotus size={14} weight="bold" />, name: 'Wellness', limit: 'RM 200', used: 'RM 0' },
  { icon: <Sparkle size={14} weight="bold" />, name: 'Lifestyle', limit: 'RM 150', used: 'RM 45' },
]

const providers = [
  { icon: <Barbell size={11} weight="bold" />, name: 'FitMalaysia' },
  { icon: <FlowerLotus size={11} weight="bold" />, name: 'YogaFlow' },
  { icon: <Person size={11} weight="bold" />, name: 'RunClub' },
]

export function TabPanelEmployee() {
  return (
    <div className="relative flex h-[300px] w-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
      {/* Top header */}
      <div className="relative bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] px-5 pb-4 pt-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-white/20">
              <svg width="10" height="10" viewBox="0 0 512 512" fill="none" className="text-white">
                <path d="M217 39C217 17.46 234.46 0 256 0C277.54 0 295 17.46 295 39V157C295 178.54 277.54 196 256 196C234.46 196 217 178.54 217 157V39Z" fill="currentColor"/>
                <path d="M472 217C493.54 217 511 234.46 511 256C511 277.54 493.54 295 472 295H354C332.46 295 315 277.54 315 256C315 234.46 332.46 217 354 217H472Z" fill="currentColor"/>
                <path d="M437 382C451.91 396.91 451.91 421.09 437 436C422.09 450.91 397.91 450.91 383 436L298 351C283.09 336.09 283.09 311.91 298 297C312.91 282.09 337.09 282.09 352 297L437 382Z" fill="currentColor"/>
                <path d="M295 472C295 493.54 277.54 511 256 511C234.46 511 217 493.54 217 472V354C217 332.46 234.46 315 256 315C277.54 315 295 332.46 295 354V472Z" fill="currentColor"/>
                <path d="M129 436C114.09 450.91 89.91 450.91 75 436C60.09 421.09 60.09 396.91 75 382L160 297C174.91 282.09 199.09 282.09 214 297C228.91 311.91 228.91 336.09 214 351L129 436Z" fill="currentColor"/>
                <path d="M39 295C17.46 295 0 277.54 0 256C0 234.46 17.46 217 39 217H157C178.54 217 196 234.46 196 256C196 277.54 178.54 295 157 295H39Z" fill="currentColor"/>
                <path d="M75 129C60.09 114.09 60.09 89.91 75 75C89.91 60.09 114.09 60.09 129 75L214 160C228.91 174.91 228.91 199.09 214 214C199.09 228.91 174.91 228.91 160 214L75 129Z" fill="currentColor"/>
              </svg>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">
              My Benefits
            </p>
          </div>
          <span className="text-[18px] font-bold font-poppins">RM 485</span>
        </div>
        <p className="mt-0.5 text-[11px] opacity-70">Available balance</p>
      </div>

      <div className="flex flex-1 flex-col px-5 pt-4 pb-4">
        {/* Benefit pool */}
        <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
          Benefit Pool
        </p>
        <div className="mt-2 space-y-2">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-brand">{b.icon}</span>
                <span className="text-[11px] font-medium text-gray-700">{b.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-16 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-brand"
                    style={{ width: `${Math.round((parseInt(b.used.replace(/\D/g, '')) / parseInt(b.limit.replace(/\D/g, ''))) * 100)}%` }}
                  />
                </div>
                <span className="text-[10px] text-gray-400">
                  {b.used}/{b.limit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Providers */}
        <div className="mt-auto border-t border-dashed border-gray-200 pt-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
            Verified Providers
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {providers.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-1 rounded-md border border-gray-200 bg-gray-50 px-2 py-1"
              >
                <span className="text-brand">{p.icon}</span>
                <span className="text-[10px] font-medium text-gray-700">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
