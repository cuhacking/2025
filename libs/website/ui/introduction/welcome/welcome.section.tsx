import { SplineComponent } from '@website/shared/ui/spline/spline.client'
import React from 'react'
import { ClientOnly } from 'remix-utils/client-only'
import { WELCOME_CONSTATNTS } from '../constants/welcome.constants'
import { Welcome } from './welcome'

export function WelcomeSection() {
  return (
    <section className="relative flex justify-center w-full mx-auto lg:mx-0">
      <ClientOnly>
        {() => (
          <SplineComponent
            className="absolute -bottom-16 lg:left-0 lg:top-0 lg:scale-[1.2]"
            link="https://prod.spline.design/nnjZJFW1wThAacUS/scene.splinecode"
          />
        )}
      </ClientOnly>
      <div className="w-full h-screen max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
        <section className="w-full lg:w-3/5">
          <Welcome socials={WELCOME_CONSTATNTS.SOCIALS} />
        </section>
      </div>
    </section>
  )
}
