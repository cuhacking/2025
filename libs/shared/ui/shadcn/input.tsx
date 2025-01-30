import { cn } from '@cuhacking/shared/utils/cn'
import * as React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefix, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {prefix && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            {prefix}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'flex w-full bg-transparent py-0.5 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium font-["JetBrains Mono"]',
            'placeholder:text-white/50 placeholder:font-normal placeholder:text-base',
            'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            prefix ? 'pl-12 pr-3' : 'px-3',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
