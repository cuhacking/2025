import type { ReactNode } from 'react'
import InfoIcon from '@cuhacking/ui/assets/icons/info-1.svg'
import { cn } from '@cuhacking/utils'
import { cva } from 'class-variance-authority'

interface GlassmorphicCardProps {
  children: ReactNode
  variant?: 'default' | 'nested' | 'info'
  className?: string
}

const glassmorphicCardVariants = cva(
  'relative border backdrop-blur-md rounded-xl shadow-dropShadow border-border',
  {
    variants: {
      variant: {
        default: 'bg-card',
        nested: 'bg-card-nested',
        info: 'bg-card',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

// HALP --> RESOLVE THE ISSUE WITH SVGS AND HOW I'M IMPORTING THEM
// HALP --> ADD JSDOC COMMENTS
function GlassmorphicCard({ children, variant = 'default', className }: GlassmorphicCardProps) {
  return (
    <div className={cn(glassmorphicCardVariants({ variant, className }))}>
      {variant === 'info'
        ? (
            <div className="absolute top-1.5 right-1.5">
              <img src={InfoIcon.src} />
            </div>
          )
        : null}
      {children}
    </div>
  )
}

export default GlassmorphicCard
