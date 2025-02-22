import type { Media } from '@cuhacking/shared/types/media'
import { cn } from '@cuhacking/shared/utils/cn'
import { Link } from '@remix-run/react'

interface BannerProps {
  banner: {
    link: string
    media: Media
    name: string
  }
  className: string
}
// TODO: update social media props to incldue social media name --> aria-label improvement
export function Banner({ banner, className }: BannerProps) {
  return (
    <Link
      target="_blank"
      to={banner.link}
      aria-label={banner.name}
    >
      <img className={cn(className)} src={banner.media.src} alt={banner.media.alt} />
    </Link>
  )
}
