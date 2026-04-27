import { cn } from '@/lib/utils'

interface AvatarItem {
  initials: string
  bg: string
  color?: string
}

interface AvatarCirclesProps {
  avatars: AvatarItem[]
  numPeople?: number
  className?: string
  size?: number
  overlap?: number
}

export function AvatarCircles({
  avatars,
  numPeople,
  className,
  size = 40,
  overlap = 12,
}: AvatarCirclesProps) {
  return (
    <div className={cn('flex items-center', className)}>
      {avatars.map((avatar, i) => (
        <div
          key={i}
          className="flex items-center justify-center rounded-full border-2 border-white font-geist font-semibold"
          style={{
            width: size,
            height: size,
            fontSize: size * 0.3,
            backgroundColor: avatar.bg,
            color: avatar.color ?? '#fff',
            marginLeft: i === 0 ? 0 : -overlap,
            zIndex: avatars.length - i,
          }}
        >
          {avatar.initials}
        </div>
      ))}
      {numPeople !== undefined && (
        <div
          className="flex items-center justify-center rounded-full border-2 border-white bg-gray-200 font-geist font-semibold text-gray-600"
          style={{
            width: size,
            height: size,
            fontSize: size * 0.28,
            marginLeft: -overlap,
          }}
        >
          +{numPeople}
        </div>
      )}
    </div>
  )
}
