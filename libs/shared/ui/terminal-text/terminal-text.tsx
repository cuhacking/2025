import type Media from '@cuhacking/types/media'
import type { ReactNode } from 'react'
import { cn } from '@cuhacking/shared/utils/cn'
import { cva } from 'class-variance-authority'
import { Icon } from '../icon/icon'

interface TerminalTextProps {
  children: ReactNode
  icon?: Media
  className?: string
  callToAction?: boolean
}

const callToActionVariation = cva('', {
  variants: {
    callToAction: {
      true: 'bg-greendiant bg-clip-text text-transparent',
      false: '',
    },
  },
})

const terminalTextVariation = cva(
  'flex flex-row gap-x-2 pb-1.5',
)

export function TerminalText({
  icon,
  children,
  className = '',
  callToAction,
}: TerminalTextProps) {
  return (
    <div className={cn(terminalTextVariation({ className }))}>
      {!icon ? <div className="flex-shrink-0 text-muted  w-[24px] ">~</div> : <Icon media={icon} />}
      <div className={cn(callToActionVariation({ callToAction }))}>
        {children}
      </div>
    </div>
  )
}
