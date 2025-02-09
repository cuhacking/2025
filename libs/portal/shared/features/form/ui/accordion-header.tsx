import type { IconVariant } from '@cuhacking/shared/types/icon'
import cellPhoneIcon from '@cuhacking/shared/assets/icons/general/cell-phone-1.svg'
import contactBookIcon from '@cuhacking/shared/assets/icons/general/contact-book-green-1.svg'
import educationIcon from '@cuhacking/shared/assets/icons/general/education-green-1.svg'
import lockIcon from '@cuhacking/shared/assets/icons/general/lock-green-1.svg'
import profileIcon from '@cuhacking/shared/assets/icons/general/profile-green-1.svg'
import shieldIcon from '@cuhacking/shared/assets/icons/general/shield-green-1.svg'
import warningIcon from '@cuhacking/shared/assets/icons/general/warning-green-1.svg'

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
    <div className="h-7 justify-start items-center gap-1 inline-flex">
      <div className="w-6 h-6 justify-center items-center flex overflow-hidden">
        <div className="w-6 h-6 relative flex-col justify-start items-start flex overflow-hidden">
          <img src={icon} alt={`${name} icon`} />
        </div>
      </div>
      <div className="text-[#34df29] text-xl font-extrabold">{name}</div>
    </div>
  )
}
