import Spline from '@splinetool/react-spline'
import React from 'react'

export function SplineMission() {
  return (
    <div className="absolute -bottom-[15vh] w-screen overflow-x-hidden">
      <Spline
        className="!w-[calc(100%+40em)] !translate-x-[-20em]"
        scene="https://prod.spline.design/FgSgCtcB4no42JfA/scene.splinecode"
      />
    </div>
  )
}
