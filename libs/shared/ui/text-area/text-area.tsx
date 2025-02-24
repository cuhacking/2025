import { cn } from '@cuhacking/shared/utils/cn'
import React from 'react'

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, onInput, ...props }, ref) => {
  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget
    target.style.height = 'auto'
    target.style.height = `${target.scrollHeight}px`
    if (onInput) {
      onInput(e)
    }
  }

  return (
    <textarea
      {...props}
      ref={ref}
      onInput={handleInput}
      className={cn(
        // Default flex-based styles for layout
        'flex h-auto w-auto bg-transparent font-light text-base py-1.5',
        // Match the placeholder styling from your mockup
        'placeholder:text-muted placeholder:italic placeholder:font-thin',
        // Remove decorative borders, padding, and focus outlines
        'border-0 shadow-none px-0 py-0 focus-visible:outline-none focus-visible:ring-0',
        'disabled:text-muted',
        '[appearance:textfield]',
        '[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        // Allow custom styles to override defaults
        className,
      )}
    />
  )
})

export default TextArea

export { TextArea }
