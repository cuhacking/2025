import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { Typography } from '@cuhacking/shared/ui/typography'
import { cn } from '@cuhacking/shared/utils/cn'

interface StatProps {
  className?: string
  label: string
  value: string
  statColor?: string
}

export function Stat({ className, label, value, statColor }: StatProps) {
  return (
    <GlassmorphicCard className={cn('flex flex-col gap-y-1 p-3 w-auto', className)}>
      <Typography variant="h6" className="">{label}</Typography>
      <Typography variant="h2" className={cn('text-center m-auto', statColor)}>{value}</Typography>
    </GlassmorphicCard>
  )
}
