import { cn } from '@cuhacking/shared/utils/cn'
import { Link } from '@remix-run/react'
import { cva } from 'class-variance-authority'
import React from 'react'
// TODO: Refactor to use <Link> from Remix
const navItemStyles = cva('text-xs font-bold', {
  variants: {
    index: {
      0: 'text-blue-400',
      1: 'text-lime-500',
      2: 'text-yellow-500',
      3: 'text-red-500',
    },
  },
})
export function NavItem({ index, link, name }) {
  return (
    <Link to={link}>
      <p
        className="relative text-base before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-0 before:bg-current before:transition-all before:duration-300
                    before:origin-center hover:before:w-full hover:before:left-0"
      >
        <span className={cn(navItemStyles({ index }))}>
          {String(index + 1).padStart(2, '0')}
          /
        </span>
        {name}
      </p>
    </Link>
  )
}
