import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import React from 'react'
import { StatItem } from '../stat-item/stat-item'

interface StatContainerProps {
  stats: { imgUrl: string, title: string }[]
}
export function StatPresenter({ stats }: StatContainerProps) {
  return (
    <GlassmorphicCard variant="default" className="grid grid-cols-1 gap-24 px-5 py-12 sm:grid-cols-2 xl:grid-cols-4 ">
      {stats.map(({ imgUrl, title }) => <StatItem key={title} imgUrl={imgUrl} title={title} />)}
    </GlassmorphicCard>
  )
}
