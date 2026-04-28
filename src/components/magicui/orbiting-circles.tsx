import React from "react"

import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed
  return (
    <>
      {path && (
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const count = React.Children.count(children)
        const animationDelay = `${-(calculatedDuration / count) * index}s`
        return (
          <div
            style={
              {
                "--orbit-radius": radius,
                "--orbit-angle": 0,
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginLeft: `-${iconSize / 2}px`,
                marginTop: `-${iconSize / 2}px`,
                animation: `orbit ${calculatedDuration}s linear ${animationDelay} infinite`,
                animationDirection: reverse ? 'reverse' : 'normal',
              } as React.CSSProperties
            }
            className={cn(
              'flex items-center justify-center rounded-full',
              className
            )}
            {...props}
          >
            {child}
          </div>
        )
      })}
    </>
  )
}
