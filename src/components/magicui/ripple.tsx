import { cn } from '@/lib/utils'

interface RippleProps {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
  className?: string
}

export function Ripple({
  mainCircleSize = 64,
  mainCircleOpacity = 0.24,
  numCircles = 5,
  className,
}: RippleProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 flex items-center justify-center',
        className,
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 52
        const opacity = mainCircleOpacity - i * 0.04
        const animationDelay = `${i * 0.4}s`
        const borderStyle = i === numCircles - 1 ? 'dashed' : 'solid'
        const borderOpacity = 0.4 + i * 0.1

        return (
          <div
            key={i}
            className="absolute rounded-full border bg-[#4F46E5] [animation:ripple_2s_ease_infinite]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay,
              borderStyle,
              borderColor: `rgba(79, 70, 229, ${borderOpacity})`,
              backgroundColor: `rgba(79, 70, 229, ${opacity * 0.5})`,
            }}
          />
        )
      })}
    </div>
  )
}
