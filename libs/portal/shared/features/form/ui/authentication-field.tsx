import type { Provider } from '@cuhacking/shared/types/auth'
import behance from '@cuhacking/shared/assets/icons/socials/behance-white-1.svg'
import discord from '@cuhacking/shared/assets/icons/socials/discord-white-1.svg'
import github from '@cuhacking/shared/assets/icons/socials/github-white-1.svg'
import google from '@cuhacking/shared/assets/icons/socials/google-white-1.svg'
import instagram from '@cuhacking/shared/assets/icons/socials/instagram-white-1.svg'
import linkedin from '@cuhacking/shared/assets/icons/socials/linkedin-white-1.svg'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { cn } from '@cuhacking/shared/utils/cn'
import { Link } from '@remix-run/react'

const providerStyles = {
  google: 'hover:bg-[#DB4437]',
  discord: 'hover:bg-[#7289DA]',
  instagram: 'hover:bg-[#E4405F]',
  behance: 'hover:bg-[#1769FF]',
  linkedin: 'hover:bg-[#0077B5]',
  github: 'hover:bg-[#181717]',
}

const providerLogos = {
  google,
  discord,
  instagram,
  behance,
  linkedin,
  github,

}
interface AuthenticationFieldProps {
  provider: Provider
  link: string
  userTag?: string
}

export function AuthenticationField({ provider, userTag, link }: AuthenticationFieldProps) {
  return (
    <GlassmorphicCard className="max-h-min">
      <Link
        target="_blank"
        key={link}
        to={link}
        aria-label={`to ${provider} authentication`}
      >
        <div
          className={cn(
            'flex w-full bg-transparent rounded-xl justify-start gap-3 p-2 transition-colors duration-300',
            providerStyles[provider],
          )}
        >
          <img src={providerLogos[provider]} alt={`${provider} logo`} className="w-6 h-6" />
          <p className={cn('text-white text-base', userTag && providerStyles[provider])}>
            {userTag || provider.charAt(0).toUpperCase() + provider.slice(1)}
          </p>
        </div>
      </Link>
    </GlassmorphicCard>
  )
}
