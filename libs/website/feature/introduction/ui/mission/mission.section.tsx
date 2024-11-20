import React from 'react'
import { ClientOnly } from 'remix-utils/client-only'
import { MISSION_CONSTANTS } from '../../constants/mission.constants'
import { Mission } from './mission'
import { SplineMission } from './spline-mission.client'

export function MissionSection() {
  return (
    <section id="#about" className="relative flex justify-center w-full">
      <ClientOnly>
        {() => (
          <SplineMission />
        )}
      </ClientOnly>
      <main className="max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
        <div id="about" className="relative min-h-[160vh] lg:min-h-screen w-full">
          <Mission logo={MISSION_CONSTANTS.LOGO} />
        </div>
      </main>
    </section>
  )
}
