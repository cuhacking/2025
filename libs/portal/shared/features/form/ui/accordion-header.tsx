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
    <div className="inline-flex justify-start items-center gap-2 cursor-pointer transition-transform duration-200 ease-out hover:scale-105 active:scale-95 hover:shadow-lg">
      <img src={icon} alt={`${name} icon`} className="w-6 h-6" />
      <Typography variant="h4" className="text-primary">
        <h4>{name}</h4>
      </Typography>
    </div>
  )
}
