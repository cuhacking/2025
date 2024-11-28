import type { Media } from '@cuhacking/shared/types/media'
import { Icon } from '@cuhacking/shared/ui/icon'
import { cn } from '@cuhacking/shared/utils/cn'
import { Link } from '@remix-run/react'
import React from 'react'

interface SocialsProps {
  socials: {
    link: string
    media: Media
  }[]
  className: string
}
// TODO: update social media props to incldue social media name --> aria-label improvement
export function Socials({ socials, className }: SocialsProps) {
  return (
    <div className={cn('flex flex-wrap gap-x-5 gap-y-3', className)}>
      {socials.map(({ link, media }) => (
        <Link
          target="_blank"
          key={link}
          to={link}
          aria-label="social media link"
        >
          <Icon
            media={media}
            prefix="/socials"
            className="transition-transform duration-300 hover:scale-[1.2]"
          />
        </Link>
      ))}
    </div>
  )
}
