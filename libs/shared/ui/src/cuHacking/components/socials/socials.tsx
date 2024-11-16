import type { EIcons } from '@cuhacking/utils/enums/icons'
import Icon from '@cuhacking/ui/components/icons/icon'
import { cn } from '@cuhacking/utils/cn'

interface SocialsProps {
  socials: {
    link: string
    icon: EIcons
  }[]
  className: string
}

function Socials({ socials, className }: SocialsProps) {
  return (
    <div className={cn('flex flex-wrap gap-x-5 gap-y-3', className)}>
      {socials.map(({ link, icon }) => (
        <a key={link} href={link}>
          <Icon variant={icon} prefix="/socials" />
        </a>
      ))}
    </div>
  )
}

export default Socials
