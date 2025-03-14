import { Layout } from '@cuhacking/portal/ui/layout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@cuhacking/shared/ui/accordion'
import { Button } from '@cuhacking/shared/ui/button'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text/terminal-text'
import { Typography } from '@cuhacking/shared/ui/typography'

export function ChallengesPage({ data }) {
  return (
    <Layout isCompleteProfile={false}>
      <section className="max-w-screen-xl mx-auto grid sm:grid-cols-2 gap-5 p-5 sm:px-10 py-40 pt-20">
        {data.map(challenge => (
          <GlassmorphicCard key={challenge.id} pathTitle={challenge.pathTitle} minimize>
            <div className="flex flex-col p-4">
              <img src={challenge.sponsor.symbol.url} alt={challenge.sponsor.symbol.alt} />
              <Typography variant="h5">{challenge.title}</Typography>
              <Accordion type="multiple">
                <AccordionItem value="a">
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                      {challenge.challengeBlock && challenge.challengeBlock.map(block =>
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
                      SEE MORE
                    </Button>
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            </div>
          </GlassmorphicCard>
        ))}
      </section>
    </Layout>
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
