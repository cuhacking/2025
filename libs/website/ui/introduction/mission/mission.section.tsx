import BgKeyCaps from '@website/assets/ui/introduction/bg-keycap-1.webp'
import { SplineComponent } from '@website/shared/ui/spline/spline-component'
import { MISSION_CONSTANTS } from '../constants/mission.constants'
import { Mission } from './mission'

export function MissionSection() {
  return (
    <section id="#about" className="relative flex justify-center w-full">
      <SplineComponent
        className="absolute bottom-[14vh] lg:-bottom-[5vh] left-0 scale-1 md:scale-[1.2]"
        link="https://prod.spline.design/9iGB68CM6hGlQYOQ/scene.splinecode"
        imgSrc={BgKeyCaps}
      />
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
