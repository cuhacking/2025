import { cn } from '@cuhacking/shared/utils/cn'
import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: React.ReactNode
  isLoading?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefix, isLoading, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {/* Prefix Icon */}
        {prefix && (
          <div
            className={cn(
              'absolute left-3 top-1/2 -translate-y-1/2',
              isLoading && 'opacity-50',
            )}
          >
            {prefix}
          </div>
        )}

        {/* Input Field */}
        <input
          type={type}
          disabled={isLoading}
          className={cn(
            'flex w-full bg-transparent py-0.5 text-base transition-colors',
            'placeholder:text-white/50 placeholder:font-normal',
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
