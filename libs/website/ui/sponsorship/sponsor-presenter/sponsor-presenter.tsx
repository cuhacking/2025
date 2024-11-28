import type { Sponsor } from '../../types/sponsorship'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text'
import React from 'react'
import { SponsorItem } from './sponsor-item'

interface SponsorDisplayProps {
  isPresent: boolean
  sponsors: Sponsor[]
}
export function SponsorPresenter({ isPresent, sponsors }: SponsorDisplayProps) {
  return (
    <div className="flex flex-col gap-y-5">
      <TerminalText>
        {isPresent ? <h2> Present </h2> : <h2> Past </h2>}
      </TerminalText>
      <main className="flex flex-row">
        {sponsors.map(sponsor => (
          <div key={sponsor.name} className="pl-9">
            <SponsorItem sponsor={sponsor} isPresent={isPresent} />
          </div>
        ))}
      </main>
    </div>
  )
}
