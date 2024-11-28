import type { Sponsor } from './sponsorship.model'
import { Button } from '@cuhacking/shared/ui/button'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text'
import { Link } from '@remix-run/react'
import React from 'react'
import { SponsorPresenter } from '../sponsor-presenter/sponsor.presenter'

interface SponsorshipContainerProps {
  text: { content: string, isCallToAction: boolean }[]
  sponsors: { present: Sponsor[], past: Sponsor[] }
}
export function SponsorshipPresenter({
  text,
  sponsors,
}: SponsorshipContainerProps) {
  const packageLink
    = 'https://drive.google.com/file/d/1mchFDm7D8lqmVO7Y8H3WOvE2yYwNWUOm/view?usp=sharing'
  return (
    <GlassmorphicCard
      variant="default"
      className="flex flex-col p-3.5 sm:p-6 gap-y-6"
    >
      <h1 className="text-4xl">Sponsorship</h1>
      <div className="flex flex-col pb-0.5">
        {text.map(({ content, isCallToAction }) => (
          <TerminalText key={content} callToAction={isCallToAction}>
            <p>{content}</p>
          </TerminalText>
        ))}
      </div>
      <div className="flex flex-col justify-center gap-2 py-2 lg:flex-row">
        {/* TODO add once we have Toasts */}
        {/* <Button variant="default" size="lg">
          <p>COPY SPONSORSHIP@CUHACKING.CA</p>
        </Button>
  */}
        <Link to={packageLink} target="_blank">
          <Button variant="default" size="lg" className="w-full">
            <p>OUR SPONSORSHIP PACKAGE</p>
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-y-5">
        {sponsors.present.length
          ? (
              <SponsorPresenter isPresent sponsors={sponsors.present} />
            )
          : null}
        {sponsors.past.length
          ? (
              <SponsorPresenter isPresent={false} sponsors={sponsors.past} />
            )
          : null}
      </div>
    </GlassmorphicCard>
  )
}
