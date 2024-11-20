import Spline from '@splinetool/react-spline'
import React from 'react'

export function SplineMission() {
  return (
    <div className="overflow-x-hidden">
      <Spline
        className="absolute -bottom-[15vh] lg:-bottom-[5vh] left-0 scale-1 md:scale-[1.2]"
        scene="https://prod.spline.design/TGlqj05806lq8PRV/scene.splinecode"
      />
    </div>

  )
}
