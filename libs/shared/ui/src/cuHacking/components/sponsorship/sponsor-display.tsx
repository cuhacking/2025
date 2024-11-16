import type { Sponsor } from './sponsorship.model'
import TerminalText from '@cuhacking/ui/components/terminal-text/terminal-text'
import SponsorPresenter from './sponsor.presenter'

interface SponsorDisplayProps {
  isPresent: boolean
  sponsors: Sponsor[]
}
function SponsorDisplay({ isPresent, sponsors }: SponsorDisplayProps) {
  return (
    <div className="flex flex-col gap-y-5">
      <TerminalText>
        {isPresent ? <h2> Present </h2> : <h2> Past </h2>}
      </TerminalText>
      <div className="flex flex-row">
        {sponsors.map(sponsor => (
          <div key={sponsor.name} className="pl-9">
            <SponsorPresenter sponsor={sponsor} isPresent={isPresent} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SponsorDisplay
