import type { Sponsor } from './sponsorship.model'
import GlassmorphicCard from '@cuhacking/ui/components/glassmorphic-card/glassmorphic-card'
import { cn } from '@cuhacking/utils'
import { cva } from 'class-variance-authority'

interface SponsorPresenterProps {
  sponsor: Sponsor
  isPresent: boolean
}

const sponsorPresenterVariation = cva(
  'p-2.5 hover:scale-105 transition-transform',
  {
    variants: {
      isPresent: {
        true: 'h-32 min-w-24',
        false: 'h-24 min-w-16',
      },
    },
  },
)
function SponsorPresenter({ sponsor, isPresent }: SponsorPresenterProps) {
  return (
    <GlassmorphicCard variant="nested" className="p-2.5 hover:scale-105 transition-transform">
      <a
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${sponsor.name}'s website`}
      >
        <img src={sponsor.logo} alt={`${sponsor.name} logo`} loading="lazy" className={cn(sponsorPresenterVariation({ isPresent }))} />
      </a>
    </GlassmorphicCard>
  )
}

export default SponsorPresenter
