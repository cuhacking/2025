import { SplineComponent } from '@website/shared/ui/spline/spline.client'
import React from 'react'
import { ClientOnly } from 'remix-utils/client-only'
import { EVENT_CONSTANTS } from '../constants/event.constants.ts'
import { EventPresenter } from './event-presenter/event-presenter'

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
          <SplineComponent
            link="https://prod.spline.design/ApEljaMrr9NQtUwP/scene.splinecode"
            className="absolute -bottom-[15vh] lg:-bottom-[5vh] left-0 scale-1 md:scale-[1.2] z-[-1]"
          />
        )}
      </ClientOnly>
    </section>
  )
}
