import type { Sponsor } from '../types/sponsorship'
import { GlassmorphicCard } from '@cuhacking/shared/ui/src/cuHacking/components/glassmorphic-card'
import { cn } from '@cuhacking/shared/utils/cn'
import { cva } from 'class-variance-authority'
import React from 'react'

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
export function SponsorItem({ sponsor, isPresent }: SponsorPresenterProps) {
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
        <img
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          loading="lazy"
          className={cn(sponsorPresenterVariation({ isPresent }))}
        />
      </a>
    </GlassmorphicCard>
  )
}
