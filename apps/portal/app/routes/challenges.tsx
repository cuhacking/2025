import type { LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { ChallengesPage } from '@cuhacking/portal/pages/challenges'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')

  try {
    const API_URL
      = process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'https://axiom.cuhacking.ca'

    let allChallenges: any[] = []
    let page = 1
    let hasNextPage = true

    while (hasNextPage) {
      const req = await fetch(`${API_URL}/api/challenges?page=${page}&limit=100`, {
        credentials: 'include',
        headers: { Cookie: cookie || '' },
      })

      if (!req.ok) {
        throw new Error('Error fetching challenges')
      }

      const data = await req.json()
      allChallenges = [...allChallenges, ...data.docs]
      hasNextPage = data.hasNextPage
      page = data.nextPage
    }

    return allChallenges.map(challenge => ({
      id: challenge.id || Math.random(),
      title: challenge.title || 'Untitled Challenge',
      pathTitle: challenge.pathTitle || '',
      sponsor: {
        symbol: {
          url: challenge.sponsor?.symbol?.url || '',
          alt: challenge.sponsor?.symbol?.alt || 'No Sponsor',
        },
      },
      challengeBlock: challenge.challengeBlock || [],
    }))
  }
  catch (error) {
    console.error('Error fetching challenges', error)
    return []
  }
}

export default function Challenges() {
  const data = useLoaderData<typeof loader>()

  return <ChallengesPage data={data} />
}
