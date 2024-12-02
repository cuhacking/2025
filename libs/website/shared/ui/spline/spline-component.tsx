import { cn } from '@cuhacking/shared/utils/cn'
import { ErrorBoundary } from '@cuhacking/shared/utils/ErrorBoundary'
import { lazy, Suspense } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export function SplineComponent({ link, className }: { link: string, className: string }) {
  return (
    <div className="overflow-x-hidden">
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Spline className={cn(className)} scene={link} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
