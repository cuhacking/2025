import { Layout } from '@cuhacking/portal/ui/layout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@cuhacking/shared/ui/accordion'
import { Button } from '@cuhacking/shared/ui/button'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text/terminal-text'
import { Typography } from '@cuhacking/shared/ui/typography'
import React from 'react'
import SVG from 'react-inlinesvg'

interface Data {
  id: number
  title: string
  pathTitle: string
  sponsor: {
    symbol: { url: string, alt: string }

  }
  codeBlock?: any[]
}

export function ChallengesPage({ data }: { data: Data[] }) {
  return (
    <Layout isCompleteProfile>

      <section className="max-w-screen-xl mx-auto p-5 sm:px-10 py-40 pt-10">
        <GlassmorphicCard className="row-span-2 p-5 text-center mb-5">
          <Typography variant="h2">
            CHALLENGES
          </Typography>
        </GlassmorphicCard>
        <div className="grid sm:grid-cols-2 gap-5">
          {data.map(challenge => (
            <GlassmorphicCard key={challenge.id} pathTitle={challenge.pathTitle} minimize maximize close>
              <div className="flex flex-col p-4">
                <SVG src={challenge.sponsor.symbol.url} title={challenge.sponsor.symbol.alt} className="h-28" />
                <Typography variant="h5">{challenge.title}</Typography>
                <ChallengeAccordion challenge={challenge} />
              </div>
            </GlassmorphicCard>
          ))}
        </div>
      </section>
    </Layout>
  )
}

function ChallengeAccordion({ challenge }: { challenge: Data }) {
  // Manage state for this accordion item. Default open is set to 'item-1'
  const [openItems, setOpenItems] = React.useState<string[]>(['item-1'])

  return (
    <Accordion
      type="multiple"
      defaultValue={['item-1']}
      value={openItems}
      onValueChange={items => setOpenItems(items)}
    >
      <AccordionItem value="item-1">
        <AccordionContent>
          <div className="flex flex-col gap-2">
            {challenge.challengeBlock
            && challenge.challengeBlock.map(block =>
              block.blockType === 'info'
                ? (
                    <ChallangeBlockBullet key={block.id} blockData={block} />
                  )
                : (
                    <ChallangeBlockButtons key={block.id} blockData={block} />
                  ),
            )}
          </div>
        </AccordionContent>
        <AccordionTrigger noChevron className="flex !justify-end">
          <Button>
            {openItems.includes('item-1') ? 'LESS...' : 'MORE...'}
          </Button>
        </AccordionTrigger>
      </AccordionItem>
    </Accordion>
  )
}

function ChallangeBlockBullet({ blockData }) {
  return (
    <div>
      <TerminalText className="pb-0">
        <p className="text-primary">{blockData.title}</p>
      </TerminalText>
      {blockData.bullets.map(bullet => (
        <TerminalText key={bullet.id} className="pb-0">{bullet.point}</TerminalText>
      ),
      )}
    </div>
  )
}

function ChallangeBlockButtons({ blockData }) {
  return (
    <div>
      <TerminalText className="pb-0">
        <p className="text-primary">{blockData.title}</p>
      </TerminalText>
      <TerminalText className="pb-0">
        {blockData.buttons.map(btn => (
          <a href={btn.link} key={btn.id}>
            <Button variant="secondary">
              {btn.title}
            </Button>
          </a>
        ),
        )}
      </TerminalText>
    </div>
  )
}
