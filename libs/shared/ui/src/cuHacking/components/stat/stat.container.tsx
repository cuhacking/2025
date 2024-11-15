import GlassmorphicCard from '@cuhacking/ui/components/glassmorphic-card/glassmorphic-card'
import Stat from './stat'

interface StatContainerProps {
  stats: { imgUrl: string, title: string }[]
}
function StatContainer({ stats }: StatContainerProps) {
  return (
    <GlassmorphicCard variant="default" className="flex flex-col px-20 py-12 gap-x-24 lg:flex-row">
      {stats.map(({ imgUrl, title }) => <Stat key={title} imgUrl={imgUrl} title={title} />)}
    </GlassmorphicCard>
  )
}

export default StatContainer
