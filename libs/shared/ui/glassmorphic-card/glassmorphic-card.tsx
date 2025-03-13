import type { ReactNode } from 'react'
import InfoIcon from '@cuhacking/shared/assets/icons/general/info-1.svg'
import LinkedInIcon from '@cuhacking/shared/assets/icons/socials/linkedin-white-1.svg'
import { Popover, PopoverContent, PopoverTrigger } from '@cuhacking/shared/ui/popover'
import { Typography } from '@cuhacking/shared/ui/typography'
import { cn } from '@cuhacking/shared/utils/cn'
import { cva } from 'class-variance-authority'

interface GlassmorphicCardProps {
  children: ReactNode
  variant?: 'default' | 'nested' | 'info'
  infoIcon?: 'info' | 'linkedin'
  className?: string
  info?: ReactNode
  pathTitle?: string
  minimize?: boolean
  maximize?: boolean
  close?: boolean
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
  infoIcon,
  pathTitle,
  minimize,
  maximize,
  close,
}: GlassmorphicCardProps) {
  const icon = (infoIcon === 'linkedin' ? LinkedInIcon : InfoIcon)

  return (
    <div className={cn(glassmorphicCardVariants({ variant, className }))}>
      {pathTitle && (
        <div className={cn('flex justify-between item-center p-2 h-9 w-full !rounded-b-[0px] border-bottom', glassmorphicCardVariants({ variant }), className)}>
          <Typography variant="paragraph-xs">{pathTitle}</Typography>
          <div>
            {minimize && (<div>-</div>)}
            {maximize && (<div>+</div>)}
            {close && (<div>x</div>)}
          </div>
        </div>
      )}
      {variant === 'info' && info
        ? (
            <Popover>
              <PopoverTrigger asChild>
                <div className="absolute top-1.5 right-1.5 cursor-pointer rounded-md hover:bg-card">
                  <img src={icon} alt="Info" className="size-5" />
                </div>
              </PopoverTrigger>
              <PopoverContent align="end" side="top" className="p-2 w-48 bg-background text-sm">
                {info}
              </PopoverContent>
            </Popover>
          )
        : null}
      {children}
    </div>
  )
}
