import BgKeyCaps from '@website/assets/ui/introduction/bg-keycap-1.webp'
import { SplineComponent } from '@website/shared/ui/spline/spline-component.client'
import { ClientOnly } from 'remix-utils/client-only'
import { MISSION_CONSTANTS } from '../constants/mission.constants'
import { Mission } from './mission'

export function MissionSection() {
  return (
    <section id="about" className="relative flex justify-center w-full">
      <ClientOnly>
        {() => (
          <SplineComponent
            className="absolute bottom-[14vh] lg:-bottom-[5vh] left-0 scale-1 md:scale-[1.2]"
            link={MISSION_CONSTANTS.SPLINE_LINK}
            imgSrc={BgKeyCaps}
          />
        )}
      </ClientOnly>
      <main className="max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
        <div
          className="relative min-h-[160vh] lg:min-h-screen w-full"
        >
          <Mission logo={MISSION_CONSTANTS.LOGO} />
        </div>
      </main>
    </section>
  )
}
