import { cn } from '@cuhacking/utils'
import { EIcons } from '@cuhacking/utils/enums/icons'
import useIcons from '@cuhacking/utils/hooks/use-icons.hook'
import { cva } from 'class-variance-authority'

interface IconProps {
  variant: EIcons
  className?: string
  prefix?: string
}

function Icon({ variant, className, prefix }: IconProps) {
  function getIconPostfix(variant: string) {
    switch (variant) {
      case EIcons.ARROW:
        return 'arrow-1.svg'
      case EIcons.LINK:
        return 'link-1.svg'
      case EIcons.CALENDAR:
        return 'calendar-1.svg'
      case EIcons.CHEVRON_DOWN:
        return 'chevron-down-1.svg'
      case EIcons.PHONE:
        return 'phone-1.svg'
      case EIcons.CHEVRON_UP:
        return 'chevron-up-1.svg'
      case EIcons.HAMBURGER:
        return 'hamburger-1.svg'
      case EIcons.GITHUB_GREEN:
        return 'github-green-1.svg'
      case EIcons.INSTAGRAM_GREEN:
        return 'instagram-green-1.svg'
      case EIcons.LINKEDIN_GREEN:
        return 'linkedin-green-1.svg'
      case EIcons.LINKTREE_GREEN:
        return 'linktree-green-1.svg'
      case EIcons.EMAIL_GREEN:
        return 'email-green-1.svg'
      case EIcons.DISCORD_GREEN:
        return 'discord-green-1.svg'
      case EIcons.DOCS_GREEN:
        return 'docs-green-1.svg'
      case EIcons.FIGMA_GREEN:
        return 'figma-green-1.svg'
      case EIcons.GITHUB_WHITE:
        return 'github-white-1.svg'
      case EIcons.INSTAGRAM_WHITE:
        return 'instagram-white-1.svg'
      case EIcons.LINKEDIN_WHITE:
        return 'linkedin-white-1.svg'
      case EIcons.LINKTREE_WHITE:
        return 'linktree-white-1.svg'
      case EIcons.EMAIL_WHITE:
        return 'email-white-1.svg'
      case EIcons.DISCORD_WHITE:
        return 'discord-white-1.svg'
      case EIcons.DOCS_WHITE:
        return 'docs-white-1.svg'
      case EIcons.FIGMA_WHITE:
        return 'figma-white-1.svg'
      default:
        return 'arrow-1.svg'
    }
  }

  const { image } = useIcons({ fileName: getIconPostfix(variant), prefix })
  const buttonVariants = cva(
    'p-1',
  )

  return (
    <>
      { image
        ? (
            <img
              src={image}
              loading="lazy"
              alt={variant}
              className={cn(buttonVariants({ className }))}
            />
          )
        : null}
    </>

  )
}

export default Icon
