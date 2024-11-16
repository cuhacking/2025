import type { Sponsor } from './sponsorship.model'
import { Button } from '@cuhacking/ui/components/button/button'
import GlassmorphicCard from '@cuhacking/ui/components/glassmorphic-card/glassmorphic-card'
import TerminalText from '@cuhacking/ui/components/terminal-text/terminal-text'
import SponsorDiplay from './sponsor-display'

interface SponsorshipContainerProps {
  text: { content: string, isCallToAction: boolean }[]
  sponsors: { present: Sponsor[], past: Sponsor[] }
}
function SponsorshipContainer({ text, sponsors }: SponsorshipContainerProps) {
  return (
    <GlassmorphicCard variant="default" className="flex flex-col px-5 py-6 gap-y-6">
      <h1 className="text-4xl">Sponsorship</h1>
      <div className="flex flex-col pb-0.5">
        {text.map(({ content, isCallToAction }, index) => (
          <TerminalText key={index} callToAction={isCallToAction}><p>{content}</p></TerminalText>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-x-0.5 py-2 justify-center">
        <Button variant="default" size="lg"><p>COPY SPONSORSHIP@CUHACKING.CA</p></Button>
        <Button variant="link" size="lg"><p>OUR SPONSORSHIP PACKAGE</p></Button>
      </div>
      <div className="flex flex-col gap-y-5">
        { sponsors.present.length ? <SponsorDiplay isPresent sponsors={sponsors.present} /> : null}
        { sponsors.past.length ? <SponsorDiplay isPresent={false} sponsors={sponsors.past} /> : null}
      </div>
    </GlassmorphicCard>
  )
}

export default SponsorshipContainer
