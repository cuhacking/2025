import { cn } from '@cuhacking/shared/utils/cn'
import { cva } from 'class-variance-authority'
import React from 'react'

interface TypographyProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'paragraph-sm'
    | 'paragraph-base'
    | 'paragraph-xs'
  children: React.ReactNode
  className: string
}

const typographyVariants = cva('', {
  variants: {
    variant: {
      'h1': 'text-6xl font-bold',
      'h2': 'text-5xl font-normal',
      'h3': 'font-medium leading-10 text-4xl tracking-normal uppercase no-underline',
      'h4': 'text-2xl font-normal',
      'h5': 'text-lg font-normal',
      'h6': 'font-medium leading-5 text-sm tracking-normal uppercase no-underline',
      'paragraph-base': 'text-base font-normal',
      'paragraph-sm': 'text-sm font-normal',
      'paragraph-xs': 'text-xs font-normal',
    },
  },
})

export function Typography({ variant, className, children }: TypographyProps) {
  return (
    <div className={cn(typographyVariants({ variant }), className)}>
      {children}
    </div>
  )
}
