import type { UserDetails } from '@cuhacking/portal/types/user'
import type { LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { ProfilePage } from '@cuhacking/portal/pages/profile'
import { json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')

  const baseUrl
  = process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://axiom.cuhacking.ca'

  const API_URL = baseUrl
  try {
    const res = await fetch(`${API_URL}/api/users/me`, {
      credentials: 'include',
      headers: { Cookie: cookie || '' },
    })

    if (!res.ok) {
      throw new Error('Not Authenticated')
    }

    const { user } = await res.json()

    if (!user) {
      return redirect('/')
    }

    return json({ user, cookie, API_URL })
  }
  catch {
    return redirect('/')
  }
}

export default function Index() {
  const { user } = useLoaderData< { user: UserDetails, cookie: string }>()
  return <ProfilePage user={user} />
}
