import Spline from '@splinetool/react-spline'
import React from 'react'

export function SplineWelcome() {
  return (
    <div className="absolute top-40 w-screen overflow-x-hidden">
      <Spline
        className=" !w-[calc(100%+30em)] !translate-x-[-20em]"
        scene="https://prod.spline.design/nnjZJFW1wThAacUS/scene.splinecode"
      />
    </div>
  )
}
