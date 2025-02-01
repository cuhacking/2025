import type Media from '@cuhacking/types/media'
import { cn } from '@cuhacking/shared/utils/cn'

interface IconProps {
  media: Media
  className?: string
  prefix?: string
}

export function Icon({ media, className }: IconProps) {
  return (
    <>
      {media
        ? (
            <img
              src={media.src}
              loading="lazy"
              alt={media.alt}
              className={cn(' w-6', className)}
            />
          )
        : null}
    </>
  )
}
