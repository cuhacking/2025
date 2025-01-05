import BgKeyboard from '@website/assets/ui/introduction/bg-keyboard-1.webp'
import { SplineComponent } from '@website/shared/ui/spline/spline-component'
import React from 'react'
import { WELCOME_CONSTANTS } from '../constants/welcome.constants'
import { Welcome } from './welcome'

export function WelcomeSection() {
  return (
    <section className="relative flex justify-center w-full mx-auto lg:mx-0">

      <SplineComponent
        imgSrc={BgKeyboard}
        className="absolute -bottom-24 md:bottom-8 scale:-[0.85] lg:left-0 lg:top-0 lg:scale-[1.2]"
        link={WELCOME_CONSTANTS.SPLINE_LINK}
      />
      <div className="w-full h-screen max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
        <section className="w-full lg:w-3/5">
          <Welcome socials={WELCOME_CONSTANTS.SOCIALS} />
        </section>
      </div>
    </section>
  )
}
