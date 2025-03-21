import type { SponsorDisplayProps } from './sponsor.presenter'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text'
import { SponsorItem } from './sponsor-item'

export function SponsorPresenter({ isPresent, sponsors }: SponsorDisplayProps) {
  return (
    <div className="flex flex-col gap-y-5">
      <TerminalText>
        {isPresent ? <h2> Present </h2> : <h2> Past </h2>}
      </TerminalText>
      <main className="flex flex-row flex-wrap gap-3 justify-center md:justify-start lg:items-start">
        {sponsors.map(sponsor => (
          <div key={sponsor.name} className="lg:pl-9">
            <SponsorItem sponsor={sponsor} isPresent={isPresent} />
          </div>
        ))}
      </main>
    </div>
  )
}
