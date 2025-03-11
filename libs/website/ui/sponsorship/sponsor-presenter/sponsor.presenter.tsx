import type { Sponsor } from '../../types/sponsorship'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text'
import { cn } from '@cuhacking/shared/utils/cn'
import { SponsorItem } from './sponsor-item'

interface SponsorDisplayProps {
  sponsors: any
  title: string
}

const size = {
  tera: 'h-54 w-auto max-w-full',
  kilo: 'h-28 w-auto max-w-full',
  centi: 'h-18 w-auto max-w-full',
  partner: 'h-10 w-auto max-w-full',
}

export function SponsorPresenter({ sponsors, title }: SponsorDisplayProps) {
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <TerminalText>
          <h2>{title}</h2>
        </TerminalText>
        {Object.keys(sponsors).map(key => (
          <div key={key} className="flex flex-row flex-wrap gap-3 justify-center md:justify-start lg:items-start">
            {sponsors[key].map((sponsor: Sponsor) => (
              <div key={sponsor.name}>
                <SponsorItem sponsor={sponsor} className={cn(size[key])} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
