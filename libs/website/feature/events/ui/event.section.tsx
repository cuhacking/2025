import React from 'react'
import { ClientOnly } from 'remix-utils/client-only'
import { EVENT_CONSTANTS } from '../constants/event.constants.ts'
import { EventPresenter } from './event-presenter/event-presenter'
import { SplineEvent } from './spline-event.client.tsx'

export function EventSection() {
  return (
    <section id="events" className="relative flex justify-center w-full">
      <div className="w-full max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
        <div className="w-full">
          <EventPresenter events={EVENT_CONSTANTS.EVENTS} />
        </div>
      </div>
      <ClientOnly>
        {() => (
          <SplineEvent />
        )}
      </ClientOnly>
    </section>
  )
}
