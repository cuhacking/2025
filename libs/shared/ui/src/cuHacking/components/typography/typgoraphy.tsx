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
      'h1': 'text-6xl font-bold font-sans',
      'h2': 'text-5xl font-normal font-sans',
      'h3': 'font-sans font-medium leading-10 font-sans text-4xl tracking-normal uppercase no-underline',
      'h4': 'text-2xl font-normal font-sans',
      'h5': 'text-lg font-normal font-sans',
      'h6': 'font-sans font-medium leading-5 text-sm tracking-normal uppercase no-underline',
      'paragraph-base': 'text-base font-normal font-sans',
      'paragraph-sm': 'text-sm font-normal font-sans',
      'paragraph-xs': 'text-xs font-normal font-sans',
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
