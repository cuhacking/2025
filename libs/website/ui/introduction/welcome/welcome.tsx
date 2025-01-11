import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text'
import Socials from '@website/shared/ui/socials'
import { useEffect, useState } from 'react'

interface WelcomeData {
  title: string
  organization: string
  date: string
  callToAction: string
}

interface Media {
  src: string
  alt: string
}

interface IntroProps {
  socials: { link: string, media: Media, name: string }[]
}

async function fetchWelcomeData(): Promise<WelcomeData | null> {
  const query = `
    query {
      Welcomes {
        docs {
          title
          organization
          date
          callToAction
        }
      }
    }
  `

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    const welcomeData = data.data.Welcomes.docs[0] // Assuming only one document or taking the first one
    return {
      title: welcomeData.title,
      organization: welcomeData.organization,
      date: welcomeData.date,
      callToAction: welcomeData.callToAction,
    }
  }
  catch (error) {
    console.error('Failed to fetch welcome data:', error)
    return null
  }
}

export function Welcome({ socials }: IntroProps) {
  const [welcomeData, setWelcomeData] = useState<WelcomeData | null>(null)

  useEffect(() => {
    async function getData() {
      const data = await fetchWelcomeData()
      setWelcomeData(data)
    }
    getData()
  }, [])

  return (
    welcomeData
      ? (
          <GlassmorphicCard
            variant="default"
            className="flex flex-col items-start p-3.5 sm:p-6 gap-y-2.5"
          >
            <h2 className="text-2xl font-bold text-center">{welcomeData.title}</h2>
            <div>
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
              <Socials socials={socials} className="justify-center pt-5" />
            </div>
          </GlassmorphicCard>
        )
      : null
  )
}
