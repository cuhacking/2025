import type { LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { SchedulePage } from '@cuhacking/portal/pages/schedule'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')

  try {
    const API_URL
      = process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000'
        : 'https://axiom.cuhacking.ca'

    let allEvents: any[] = []
    let page = 1
    let hasNextPage = true

    while (hasNextPage) {
      const req = await fetch(`${API_URL}/api/events?page=${page}&limit=100`, {
        credentials: 'include',
        headers: { Cookie: cookie || '' },
      })

      if (!req.ok) {
        throw new Response('Error fetching events', { status: req.status })
      }

      const data = await req.json()
      allEvents = [...allEvents, ...data.docs]
      hasNextPage = data.hasNextPage
      page = data.nextPage
    }

    return allEvents
  }
  catch (error) {
    console.error(`Error fetching events`, error)
    throw new Response('Internal Server Error', { status: 500 })
  }
}

export default function Schedule() {
  const data = useLoaderData<typeof loader>()

  return <SchedulePage data={data} />
}
