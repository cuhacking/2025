import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { Typography } from '@cuhacking/shared/ui/typography'
import { cn } from '@cuhacking/shared/utils/cn'
import { Link } from '@remix-run/react'

interface StatIconProps {
  className?: string
  label: string
  icon: any
}

export function StatIcon({ className, label, route, icon }: StatIconProps) {
  return (
    <Link
      to={route}
      aria-label={label}
    >
      <GlassmorphicCard className={cn('flex flex-col gap-y-2 p-3 w-auto hover:animate-shake', className)}>
        <Typography variant="h6" className="">{label}</Typography>
        {icon && <img src={icon} alt={label} className="size-9 m-auto hover:rotate-30 transition-transform duration-300" />}
      </GlassmorphicCard>
    </Link>
  )
}
