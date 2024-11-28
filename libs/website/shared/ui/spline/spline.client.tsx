import { cn } from '@cuhacking/shared/utils/cn'
import { ErrorBoundary } from '@cuhacking/shared/utils/ErrorBoundary'
import Spline from '@splinetool/react-spline'
import React, { Suspense } from 'react'

interface SplineComponentProps {
  link: string
  className: string
}
export function SplineComponent({ link, className }: SplineComponentProps) {
  return (
    <div className="overflow-x-hidden">
      <ErrorBoundary>
        <Suspense>
          <Spline className={cn(className)} scene={link} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
