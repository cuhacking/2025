import { NavigationMenuLink } from '@cuhacking/shared/ui/src/cuHacking/components/navigation-menu'
// import { Link } from '@remix-run/react'
import React from 'react'
// TODO: Refactor to use <Link> from Remix
export function NavItem({ index, link, name }) {
  return (
    <NavigationMenuLink href={link}>
      <span className="text-xs text-border">
        {String(index + 1).padStart(2, '0')}
        /
      </span>
      {name}
    </NavigationMenuLink>
  )
}
