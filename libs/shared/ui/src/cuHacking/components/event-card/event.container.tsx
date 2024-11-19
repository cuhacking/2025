import type { IEvent } from 'libs/website/feature/events/models/event'
import GlassmorphicCard from '../glassmorphic-card/glassmorphic-card'
import EventCard from './event-card'

interface EventContainerProps {
  events: IEvent[]
}

export default function EventContainer({ events }: EventContainerProps) {
  return (
    <GlassmorphicCard variant="default" className="p-3.5 sm:p-6 flex flex-col gap-6">
      <h2 className="font-sans text-4xl text-left">
        EVENTS
      </h2>
      <section className="grid gap-4 grid-col-1 md:grid-cols-2">
        {events.map(event =>
          <EventCard key={event.title} event={event} className="w-full lg:basis-[calc(50%-0.5rem)]" />,
        )}
      </section>
    </GlassmorphicCard>
  )
}
