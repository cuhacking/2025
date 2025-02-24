import { Slot } from '@radix-ui/react-slot'

import * as React from 'react'
// TODO: Refactor button components to use buttonVariants from different file
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        style={{ backgroundColor: '#89ED10' }}
        className=" border border-black rounded-md bg-[#89ED10]
          transition-transform duration-200 focus:scale-95
          hover:shadow-md px-4 py-2"
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button } // shadcn generated file
