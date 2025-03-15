import type { UserDetails } from '@cuhacking/portal/types/user'
import type { LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { QrPage } from '@cuhacking/portal/pages/qr'
import { redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')
  const baseUrl
    = process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000'
      : 'https://axiom.cuhacking.ca'

  try {
    const userRes = await fetch(`${baseUrl}/api/users/me`, {
      credentials: 'include',
      headers: { Cookie: cookie || '' },
    })

    if (!userRes.ok) {
      throw new Error('Not Authenticated')
    }

    const { user } = await userRes.json()

    if (!user || !user.agreedToTerms) {
      return redirect('/')
    }

    const eventsRes = await fetch(`${baseUrl}/api/events`, {
      credentials: 'include',
      headers: { Cookie: cookie || '' },
    })

    const { events } = await eventsRes.json()

    return { user, events }
  }
  catch {
    return redirect('/')
  }
}

export default function QR() {
  const { user, events } = useLoaderData<{ user: UserDetails, events: any }>()

  return <QrPage user={user} events={events} />
}
