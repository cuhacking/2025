import { cn } from '@cuhacking/shared/utils/cn'
/* import { ErrorBoundary } from '@cuhacking/shared/utils/ErrorBoundary' */
/* import { lazy } from 'react' */
import Spline from '@splinetool/react-spline'
/* const Spline = lazy(() => import('@splinetool/react-spline')) */

interface SplineComponentProps {
  link: string
  className: string
  imgSrc: string
}

/* function useIsMobile() {
*   const [isMobile, setIsMobile] = useState(false)
*
*   useEffect(() => {
*     const checkMobile = () => {
*       setIsMobile(window.innerWidth <= 768)
*     }
*
*     checkMobile()
*     window.addEventListener('resize', checkMobile)
*
*     return () => {
*       window.removeEventListener('resize', checkMobile)
*     }
*   }, [])
*
*   return isMobile
* } */

// eslint-disable-next-line unused-imports/no-unused-vars
export function SplineComponent({ link, className, imgSrc }: SplineComponentProps) {
  /* const isMobile = useIsMobile() */

  return (

    <div className="overflow-x-hidden">
      {/* <ErrorBoundary> */}
      {/* {isMobile
        ? (
            <img className="absolute left-0 bottom-8" src={imgSrc} />
          )
        : (
            <Suspense fallback={<img className={cn(className)} src={imgSrc} />}>
              <Spline className={cn(className)} scene={link} />
            </Suspense>
          )} */}
      <Spline

        className={cn(className)}
        scene={link}
      />
      {/* </ErrorBoundary> */}
    </div>
  )
}
