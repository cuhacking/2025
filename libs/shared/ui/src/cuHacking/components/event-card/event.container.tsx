import type { IEvent } from 'libs/website/feature/events/models/event'
import GlassmorphicCard from '../glassmorphic-card/glassmorphic-card'
import EventCard from './event-card'

interface EventContainerProps {
  events: IEvent[]
}

export default function EventContainer({ events }: EventContainerProps) {
  return (
    <GlassmorphicCard variant="default" className="px-2.5 py-3.5 flex flex-col gap-6">
      <h2 className="font-sans text-4xl text-left">
        UPCOMING EVENTS
      </h2>
      <section className="flex flex-col flex-wrap justify-start gap-4 lg:flex-row">
        {events.map(event =>
          <EventCard key={event.title} event={event} className="w-full lg:basis-[calc(50%-0.5rem)]" />,
        )}
      </section>
    </GlassmorphicCard>
  )
}
