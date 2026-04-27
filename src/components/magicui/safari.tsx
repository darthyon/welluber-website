import { cn } from '@/lib/utils'

interface SafariProps {
  url?: string
  className?: string
  children?: React.ReactNode
  overlay?: React.ReactNode
  width?: number
  height?: number
}

export function Safari({
  url = 'welluber.com',
  className,
  children,
  overlay,
}: SafariProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[14px] border border-gray-200 bg-white',
        className,
      )}
    >
      {/* Browser chrome */}
      <div className="flex h-7 items-center gap-2 bg-dark-surface px-3">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <div className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <div className="h-2 w-2 rounded-full bg-[#28C840]" />
        </div>
        <div className="mx-auto flex h-5 w-40 items-center justify-center rounded bg-white/10 px-3">
          <span className="font-geist text-[10px] text-white/60">{url}</span>
        </div>
      </div>
      {/* Content */}
      <div className="overflow-hidden">{children}</div>
      {overlay}
    </div>
  )
}
