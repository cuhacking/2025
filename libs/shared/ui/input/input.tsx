import { cn } from '@cuhacking/shared/utils/cn'

import * as React from 'react'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Default flex-based styles for layout
          'flex h-auto w-auto bg-transparent text-base text-white font-thin font-["JetBrains Mono"] leading-normal',

          // Match the placeholder styling from your mockup
          'opacity-70 placeholder:text-white/50',

          // Remove decorative borders, padding, and focus outlines
          'border-0 shadow-none px-0 py-0 focus-visible:outline-none focus-visible:ring-0',

          '[appearance:textfield]',
          '[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
          // Allow custom styles to override defaults
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
