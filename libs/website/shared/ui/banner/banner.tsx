import type { Media } from '@cuhacking/shared/types/media'
import { cn } from '@cuhacking/shared/utils/cn'
import { Link } from '@remix-run/react'

interface BannerProps {
  banner: {
    link: string
    media: Media
    name: string
  }[]
  className: string
}
// TODO: update social media props to incldue social media name --> aria-label improvement
export function Banner({ banner, className }: BannerProps) {
  return (
    <div className={cn('flex flex-wrap gap-x-5 gap-y-3', className)}>
      {banner.map(({ link, media, name }) => (
        <Link
          target="_blank"
          key={link}
          to={link}
          aria-label={name}
        >
          <img src={media.src} alt={media.alt} />
        </Link>
      ))}
    </div>
  )
}
