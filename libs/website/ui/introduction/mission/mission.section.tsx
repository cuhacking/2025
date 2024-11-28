import { SplineComponent } from '@website/shared/ui/spline/spline.client'
import React from 'react'
import { ClientOnly } from 'remix-utils/client-only'
import { MISSION_CONSTANTS } from '../constants/mission.constants'
import { Mission } from './mission'

export function MissionSection() {
  return (
    <section id="#about" className="relative flex justify-center w-full">
      <ClientOnly>
        {() => (
          <SplineComponent
            className="absolute -bottom-[15vh] lg:-bottom-[5vh] left-0 scale-1 md:scale-[1.2]"
            link="https://prod.spline.design/TGlqj05806lq8PRV/scene.splinecode"
          />
        )}
      </ClientOnly>
      <main className="max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
        <div
          id="about"
          className="relative min-h-[160vh] lg:min-h-screen w-full"
        >
          <Mission logo={MISSION_CONSTANTS.LOGO} />
        </div>
      </main>
    </section>
  )
}
