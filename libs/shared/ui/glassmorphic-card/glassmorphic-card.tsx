import type { ReactNode } from 'react'
import InfoIcon from '@cuhacking/shared/assets/icons/general/info-1.svg'
import { Popover, PopoverContent, PopoverTrigger } from '@cuhacking/shared/ui/popover'
import { cn } from '@cuhacking/shared/utils/cn'
import { cva } from 'class-variance-authority'

interface GlassmorphicCardProps {
  children: ReactNode
  variant?: 'default' | 'nested' | 'info'
  className?: string
  info?: ReactNode
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

export function GlassmorphicCard({
  children,
  variant = 'default',
  className,
  info,
}: GlassmorphicCardProps) {
  return (
    <div className={cn(glassmorphicCardVariants({ variant, className }))}>
      {variant === 'info' && info
        ? (
            <Popover>
              <PopoverTrigger asChild>
                <div className="absolute top-1.5 right-1.5 cursor-pointer">
                  <img src={InfoIcon} alt="Info" />
                </div>
              </PopoverTrigger>
              <PopoverContent align="center" className="p-2 w-48 bg-background text-sm">
                {info}
              </PopoverContent>
            </Popover>
          )
        : null}
      {children}
    </div>
  )
}
