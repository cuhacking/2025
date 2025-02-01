import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { Typography } from '@cuhacking/shared/ui/typography'

export function Stat({ label, value }: { label: string, value: string }) {
  return (
    <GlassmorphicCard className="gap-y-1 p-3 text-center w-auto">
      <p>{label}</p>
      <Typography variant="h2" className="text-center">{value}</Typography>
    </GlassmorphicCard>
  )
}
