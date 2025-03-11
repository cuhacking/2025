import { Button } from '@cuhacking/shared/ui/button'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text'
import { Typography } from '@cuhacking/shared/ui/typography'
import { Link } from '@remix-run/react'
import { Socials } from '@website/shared/ui/socials'

interface Media {
  src: string
  alt: string
}

/* import { useEffect, useState } from 'react'
* import { fetchWelcomeData } from './api/welcome.api'
*
* interface WelcomeData {
>>>>>>> 7f5d3da7 (refactor(web): scaffold CMS to website connection)
*   title: string
*   organization: string
*   date: string
*   callToAction: string
<<<<<<< HEAD
* }
*
*
=======
* } */

/*
*  async function fetchWelcomeData(): Promise<WelcomeData | null> {
*    const query = `
*      query {
*        Welcomes {
*          docs {
*            title
*            organization
*            date
*            callToAction
*          }
*        }
*      }
*    `
*
*    try {
*      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/graphql`, {
*        method: 'POST',
*        headers: {
*          'Content-Type': 'application/json',
*        },
*        body: JSON.stringify({ query }),
*      })
*
*      if (!response.ok) {
*        throw new Error(`HTTP error! status: ${response.status}`)
*      }
*
*      const data = await response.json()
*      const welcomeData = data.data.Welcomes.docs[0] // Assuming only one document or taking the first one
*      return {
*        title: welcomeData.title,
*        organization: welcomeData.organization,
*        date: welcomeData.date,
*        callToAction: welcomeData.callToAction,
*      }
*    }
*    catch (error) {
*      console.error('Failed to fetch welcome data:', error)
*      return null
*    }
*  }
*  */
interface IntroProps {
  socials: { link: string, media: Media, name: string }[]
}

export function Welcome({ socials }: IntroProps) {
  const welcomeData = {
    title: 'Join Us',
    organization: 'cuHacking',
    date: 'Mar 14th - 16th',
    callToAction: 'In the meantime, check out some cool stuff :)',
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

              {/* welcomeData.registrationLink */ }
              <Link
                to="https://portal.cuhacking.ca/login"
                target="_blank"
                aria-label="registration link"
                className="block w-fit h-fit m-auto"
              >
                <Button variant="secondary" className="mt-4 px-8 sm:px-16 max-w-full">
                  <Typography variant="h6">
                    <p>!! Register Now !!</p>
                  </Typography>
                </Button>
              </Link>
            </div>
          </GlassmorphicCard>
        )
      : null
  )
}
