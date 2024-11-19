import type { EIcons } from '@cuhacking/utils/enums/icons'
import Icon from '@cuhacking/ui/components/icons/icon'
import { cn } from '@cuhacking/utils/cn'

interface Media {
  src: string
  alt: string
}
interface SocialsProps {
  socials: {
    link: string
    media: Media
  }[]
  className: string
}

function Socials({ socials, className }: SocialsProps) {
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

export default Socials
