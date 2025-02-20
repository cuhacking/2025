import BgKeyboard from '@website/assets/ui/introduction/bg-keyboard-1.webp'
import { Banner } from '@website/shared/ui/banner'
import { NAVBAR_CONSTANTS } from '@website/shared/ui/navigation'
import { SplineComponent } from '@website/shared/ui/spline/spline-component.client'
import { ClientOnly } from 'remix-utils/client-only'
import { WELCOME_CONSTANTS } from '../constants/welcome.constants'
import { Welcome } from './welcome'

export function WelcomeSection() {
  return (
    <section className="relative flex justify-center w-full mx-auto lg:mx-0">
      <div className="absolute -top-2 -right-2 lg:top-0 lg:right-72 z-50 max-w-[100px] md:max-w-[120px] lg:max-w-[130px]">
        <Banner
          banner={NAVBAR_CONSTANTS.MLH_BANNER}
          className="scale-[0.5] md:scale-[0.6] lg:scale-[0.9] transform-gpu"
        />
      </div>

      <ClientOnly>
        {() => (
          <SplineComponent
            imgSrc={BgKeyboard}
            className="absolute -bottom-24 md:bottom-8 lg:left-0 lg:top-0 scale-[0.85] lg:scale-[1.2]"
            link={WELCOME_CONSTANTS.SPLINE_LINK}
          />
        )}
      </ClientOnly>
      <div className="w-full h-screen max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
        <section className="w-full lg:w-3/5">
          <Welcome socials={WELCOME_CONSTANTS.SOCIALS} />
        </section>
      </div>
    </section>
  )
}
