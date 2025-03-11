import { Button } from '@cuhacking/shared/ui/button'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text'
import { Link, useLoaderData } from '@remix-run/react'
import { SponsorPresenter } from '../sponsor-presenter/sponsor.presenter'

export function SponsorshipPresenter() {
  const sponsorshipData = useLoaderData<typeof loader>()

  const packageLink
    = 'https://drive.google.com/file/d/1mchFDm7D8lqmVO7Y8H3WOvE2yYwNWUOm/view?usp=sharing'

  if (!sponsorshipData || Object.keys(sponsorshipData.sponsors).length === 0) {
    return (
      <GlassmorphicCard variant="default" className="flex flex-col p-3.5 sm:p-6 gap-y-6">
        <h1 className="text-4xl font-bold uppercase">Sponsorship</h1>
        <p>Error loading sponsors. Please try again later.</p>
      </GlassmorphicCard>
    )
  }

  const { text, sponsors, partners } = sponsorshipData

  return (
    <GlassmorphicCard variant="default" className="flex flex-col p-3.5 sm:p-6 gap-y-6">
      <h1 className="text-4xl font-bold uppercase">Sponsorship</h1>
      <div className="flex flex-col pb-0.5">
        {text.map(({ content, isCallToAction }) => (
          <TerminalText key={content} callToAction={isCallToAction}>
            <p>{content}</p>
          </TerminalText>
        ))}
      </div>
      <div className="flex flex-col justify-center gap-2 py-2 lg:flex-row">
        <Link to={packageLink} target="_blank">
          <Button aria-label="Sponsorship Package" variant="default" size="lg" className="w-full">
            <p>OUR SPONSORSHIP PACKAGE</p>
          </Button>
        </Link>
      </div>
      <div className="bg-border h-0.5 rounded w-[95%] m-auto"></div>
      <div className="flex flex-col gap-y-5">
        {sponsors && <SponsorPresenter sponsors={sponsors} title="Our Scrumptious Sponsors!" />}
        {partners && <SponsorPresenter sponsors={partners} title="Pretty Partners" />}
      </div>
    </GlassmorphicCard>
  )
}
