import { cn } from '@cuhacking/shared/utils/cn'
import { lazy, Suspense } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineComponentProps {
  link: string
  className: string
  imgSrc: string
}

export function SplineComponent({ link, imgSrc, className }: SplineComponentProps) {
  return (
    <div className="overflow-x-hidden">
      <Suspense fallback={<img className={cn(className)} src={imgSrc} />}>
        <Spline className={cn(className)} scene={link} />
      </Suspense>
    </div>
  )
}
