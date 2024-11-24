import { Link } from '@remix-run/react'
import React from 'react'

export function MobileNavItem({ link, name }) {
  return (
    <div className="p-2.5">
      <Link to={link} className="block" aria-label={`Navigate to ${name}`}>
        <h2 className="text-[48px] font-extrabold">{name}</h2>
      </Link>
    </div>
  )
}
