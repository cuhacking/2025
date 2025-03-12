import { Button } from '@cuhacking/shared/ui/button'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text'
import { Typography } from '@cuhacking/shared/ui/typography'
import { Link, useLoaderData } from '@remix-run/react'
import { Socials } from '@website/shared/ui/socials'

interface Media {
  src: string
  alt: string
}

interface IntroProps {
  socials: { link: string, media: Media, name: string }[]
}

export function Welcome({ socials }: IntroProps) {
  const { title, organization, callToAction, date, buttonText, link } = useLoaderData<typeof loader>()

  const welcomeData = {
    title,
    organization,
    date,
    callToAction,
  }

  return (
    welcomeData
      ? (
          <GlassmorphicCard
            variant="default"
            className="flex flex-col items-start px-2.5 py-10 sm:px-5 gap-y-2.5"
          >
            <Typography variant="h3">
              <h2>{welcomeData.title}</h2>
            </Typography>
            <div className="w-full">
              <TerminalText className="text-base">
                <p>
                  <span className="text-transparent bg-greendiant bg-clip-text">
                    {welcomeData.organization}
                  </span>
                  {' '}
                  is coming to you
                  <span className="text-transparent bg-greendiant bg-clip-text">
                    {' '}
                    {welcomeData.date}
                  </span>
                </p>
              </TerminalText>
              <TerminalText className="text-base">
                <p>{welcomeData.callToAction}</p>
              </TerminalText>
              <TerminalText className="text-base">
                <Socials socials={socials} className="justify-center grid grid-cols-4 sm:flex" />
              </TerminalText>

              <Link
                to={link}
                target="_blank"
                aria-label="registration link"
                className="block w-fit h-fit m-auto"
              >
                <Button variant="secondary" className="mt-4 px-8 sm:px-16 max-w-full">
                  <Typography variant="h6">
                    <p>{buttonText}</p>
                  </Typography>
                </Button>
              </Link>
            </div>
          </GlassmorphicCard>
        )
      : null
  )
}
