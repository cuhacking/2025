import type {
  MotionProps,
  MotionValue,
} from 'motion/react'
import { cn } from '@cuhacking/shared/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'
import React, { useRef } from 'react'

// Responsive default values
const DEFAULT_SIZE = 40
const DEFAULT_MAGNIFICATION = 60
const SMALL_SCREEN_SIZE = 36
const SMALL_SCREEN_MAGNIFICATION = 40
const DEFAULT_DISTANCE = 140

const dockVariants = cva(
  'supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md',
)

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string
  iconSize?: number
  iconMagnification?: number
  iconDistance?: number
  direction?: 'top' | 'middle' | 'bottom'
  children: React.ReactNode
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize,
      iconMagnification,
      iconDistance = DEFAULT_DISTANCE,
      direction = 'middle',
      ...props
    },
    ref,
  ) => {
    const [isSmallScreen, setIsSmallScreen] = React.useState<boolean>(false)

    React.useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth <= 400)
      }

      // Run on mount
      checkScreenSize()

      window.addEventListener('resize', checkScreenSize)
      return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    // Use the provided props if available, otherwise pick the responsive default
    const effectiveIconSize
      = iconSize !== undefined
        ? iconSize
        : isSmallScreen
          ? SMALL_SCREEN_SIZE
          : DEFAULT_SIZE
    const effectiveIconMagnification
      = iconMagnification !== undefined
        ? iconMagnification
        : isSmallScreen
          ? SMALL_SCREEN_MAGNIFICATION
          : DEFAULT_MAGNIFICATION

    const mouseX = useMotionValue(Infinity)

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX,
            size: effectiveIconSize,
            magnification: effectiveIconMagnification,
            distance: iconDistance,
          })
        }
        return child
      })
    }

    return (
      <motion.div
        ref={ref}
        onMouseMove={e => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), {
          'items-start': direction === 'top',
          'items-center': direction === 'middle',
          'items-end': direction === 'bottom',
        })}
      >
        {renderChildren()}
      </motion.div>
    )
  },
)

Dock.displayName = 'Dock'

export interface DockIconProps
  extends Omit<MotionProps & React.HTMLAttributes<HTMLDivElement>, 'children'> {
  size?: number
  magnification?: number
  distance?: number
  mouseX?: MotionValue<number>
  className?: string
  children?: React.ReactNode
}

function DockIcon({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null)
  const padding = Math.max(6, size * 0.2)
  const defaultMouseX = useMotionValue(Infinity)

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size],
  )

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        'flex aspect-square cursor-pointer items-center justify-center rounded-full',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

DockIcon.displayName = 'DockIcon'

export { Dock, DockIcon, dockVariants }
