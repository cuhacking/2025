import type { Sponsor } from '../types/sponsorship'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { cn } from '@cuhacking/shared/utils/cn'
import SVG from 'react-inlinesvg'

interface SponsorPresenterProps {
  sponsor: Sponsor
  className?: string
}

export function SponsorItem({ sponsor, className }: SponsorPresenterProps) {
  return (
    <GlassmorphicCard
      variant="nested"
      className="p-2.5 hover:scale-105 transition-transform"
    >
      <a
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${sponsor.name}'s website`}
      >
        <SVG
          src={sponsor.logo}
          title={`${sponsor.name} logo`}
          className={cn(className || 'h-32 min-w-24')}
        />
      </a>
    </GlassmorphicCard>
  )
}
