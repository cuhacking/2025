import type { IEvent } from '../../../../../../website/feature/events/models/event'
import { Button } from '@cuhacking/ui/components/button/button'
import GlassmorphicCard from '@cuhacking/ui/components/glassmorphic-card/glassmorphic-card'
import { Separator } from '@cuhacking/ui/components/separator/separator'
import TerminalText from '@cuhacking/ui/components/terminal-text/terminal-text'
import { cn } from '@cuhacking/utils'
import { getDatePostfix, getDayOfMonth, getMonth } from '../../../../../../website/utils/helpers/date.helpers'

interface EventProps {
  event: IEvent
  className: string
}
function EventCard({ event, className }: EventProps) {
  const date = event.date
  const day = getDayOfMonth(date)
  const month = getMonth(date)
  const datePostfix = getDatePostfix(date)

  return (
    <GlassmorphicCard variant="nested" className={cn('flex flex-col lg:flex-row px-3 py-4 gap-x-3 gap-y-2.5 items-center h-full', className)}>
      <section className="flex flex-col items-center">
        <time className="text-3xl">
          {day}
          <sup>{datePostfix}</sup>
        </time>
        <time className="text-xs">
          {month}
        </time>
      </section>
      <Separator orientation="vertical" className="self-stretch hidden h-auto lg:block" decorative />
      <Separator orientation="horizontal" className="block w-full lg:hidden" decorative />
      <article className="flex flex-col">
        <header className="px-2">
          <h4 className="text-2xl">{event.title}</h4>
        </header>
        <main>
          <TerminalText className="text-sm">{event.description}</TerminalText>
        </main>
        <div className="flex justify-end w-full text-xl">
          <Button variant="default" size="sm">REGISTER NOW</Button>
        </div>
      </article>
    </GlassmorphicCard>
  )
}

export default EventCard
