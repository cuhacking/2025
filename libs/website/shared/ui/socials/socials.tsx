import type { Media } from '@cuhacking/shared/types/media'
import { Icon } from '@cuhacking/shared/ui/src/cuHacking/components/icon'
import { cn } from '@cuhacking/shared/utils/cn'
import React from 'react'

interface SocialsProps {
  socials: {
    link: string
    media: Media
  }[]
  className: string
}

export function Socials({ socials, className }: SocialsProps) {
  return (
    <div className={cn('flex flex-wrap gap-x-5 gap-y-3', className)}>
      {socials.map(({ link, media }) => (
        <a key={link} href={link}>
          <Icon media={media} prefix="/socials" />
        </a>
      ))}
    </div>
  )
}
