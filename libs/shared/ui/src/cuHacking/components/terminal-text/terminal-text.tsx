import type { EIcons } from '@cuhacking/utils/enums/icons'
import type { ReactNode } from 'react'
import Icon from '@cuhacking/ui/components/icons/icon'
import { cn } from '@cuhacking/utils'
import { cva } from 'class-variance-authority'

interface TerminalTextProps {
  children: ReactNode
  icon?: EIcons
  className?: string
  callToAction?: boolean
}

const callToActionVariation = cva(
  '',
  {
    variants: {
      callToAction: {
        true: 'bg-greendiant bg-clip-text text-transparent',
        false: '',
      },
    },
  },
)

const terminalTextVariation = cva(
  'flex flex-row gap-x-3 font-sans items-center',
)

function TerminalText({ icon, children, className = '', callToAction }: TerminalTextProps) {
  return (
    <div className={cn(terminalTextVariation({ className }))}>
      { !icon
        ? (
            <div className="text-muted">
              ~
            </div>
          )
        : <Icon variant={icon} />}
      <div className={cn(callToActionVariation({ callToAction }))}>
        {children}
      </div>
    </div>
  )
}

export default TerminalText
