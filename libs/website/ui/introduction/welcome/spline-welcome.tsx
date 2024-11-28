import React, { Suspense } from 'react'

const Spline = React.lazy(() => import('@splinetool/react-spline'))

export function SplineWelcome() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Spline
        className="absolute top-0 lg:scale-[1.2]"
        scene="https://prod.spline.design/nnjZJFW1wThAacUS/scene.splinecode"
      />
    </Suspense>
  )
}
