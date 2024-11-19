import GlassmorphicCard from '@cuhacking/ui/components/glassmorphic-card/glassmorphic-card'
import Stat from './stat'

interface StatContainerProps {
  stats: { imgUrl: string, title: string }[]
}
function StatContainer({ stats }: StatContainerProps) {
  return (
    <GlassmorphicCard variant="default" className="grid grid-cols-1 gap-24 px-5 py-12 sm:grid-cols-2 xl:grid-cols-4 ">
      {stats.map(({ imgUrl, title }) => <Stat key={title} imgUrl={imgUrl} title={title} />)}
    </GlassmorphicCard>
  )
}

export default StatContainer
