import { Link } from '@remix-run/react'
import React from 'react'

interface MobileNavItemProps {
  link: string
  name: string
  onClick: () => void
}
export function MobileNavItem({ link, name, onClick }: MobileNavItemProps) {
  return (
    <div onClick={onClick} className="p-2.5">
      <Link to={link} className="block" aria-label={`Navigate to ${name}`}>
        <h2 className="text-[48px] font-extrabold">{name}</h2>
      </Link>
    </div>
  )
}
