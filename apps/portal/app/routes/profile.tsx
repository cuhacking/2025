import type { UserDetails } from '@cuhacking/portal/types/user'
import type { LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { ProfilePage } from '@cuhacking/portal/pages/profile'
import { json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')
  const API_URL = `${process.env.NODE_ENV === 'development' ? process.env.CUHACKING_2025_AXIOM_LOCAL_URL : process.env.CUHACKING_2025_AXIOM_PUBLIC_URL}`
  try {
    const res = await fetch(`${API_URL}/api/users/me`, {
      headers: { Cookie: cookie || '' },
    })

    if (!res.ok) {
      throw new Error('Not Authenticated')
    }

    const { user } = await res.json()

    if (!user) {
      return redirect('/login')
    }

    return json({ user, cookie, API_URL })
  }
  catch {
    return redirect('/login')
  }
}

export default function Index() {
  const { user } = useLoaderData< { user: UserDetails, cookie: string }>()
  return <ProfilePage user={user} />
}
