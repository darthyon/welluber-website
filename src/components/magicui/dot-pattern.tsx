import { cn } from '@/lib/utils'

interface DotPatternProps {
  width?: number
  height?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
}

export function DotPattern({
  width = 16,
  height = 16,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps & React.SVGProps<SVGSVGElement>) {
  const id = 'dot-pattern'
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
      {...props}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse">
          <circle cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  )
}
