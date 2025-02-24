import type { IconVariant } from '@cuhacking/shared/types/icon'
import cellPhoneIcon from '@cuhacking/shared/assets/icons/general/cell-phone-1.svg'
import contactBookIcon from '@cuhacking/shared/assets/icons/general/contact-book-green-1.svg'
import educationIcon from '@cuhacking/shared/assets/icons/general/education-green-1.svg'
import lockIcon from '@cuhacking/shared/assets/icons/general/lock-green-1.svg'
import profileIcon from '@cuhacking/shared/assets/icons/general/profile-green-1.svg'
import shieldIcon from '@cuhacking/shared/assets/icons/general/shield-green-1.svg'
import warningIcon from '@cuhacking/shared/assets/icons/general/warning-green-1.svg'
import { Typography } from '@cuhacking/shared/ui/typography'

interface HeaderProps {
  name: string
  iconVariant: IconVariant
}

export function AccordionHeader({ name, iconVariant }: HeaderProps) {
  let icon

  switch (iconVariant) {
    case 'profile':
      icon = profileIcon
      break
    case 'cell-phone':
      icon = cellPhoneIcon
      break
    case 'shield':
      icon = shieldIcon
      break
    case 'lock':
      icon = lockIcon
      break
    case 'warning':
      icon = warningIcon
      break
    case 'contact-book':
      icon = contactBookIcon
      break
    case 'education':
      icon = educationIcon
      break
    default:
      icon = null
  }
  return (
    <div className="relative inline-flex justify-start items-center gap-2 cursor-pointer transition-transform duration-200 ease-out hover:scale-105 active:scale-95">
      <div className="absolute w-full h-full blur-xl bg-background top-0 left-0 z-[-1]" />
      <div className="relative">
        <div className="absolute size-2 blur-lg bg-background top-2 left-2 z-[-1]" />
        <img src={icon} alt={`${name} icon`} className="size-6" />
      </div>
      <Typography variant="h4" className="relative text-primary">
        <h4>{name}</h4>
        <h4 className="absolute font-black w-full h-full blur text-background top-0 left-0 z-[-1]">{name}</h4>
      </Typography>
    </div>
  )
}
