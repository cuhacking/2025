/* eslint-disable unused-imports/no-unused-vars */
import type { LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')

  try {
    const API_URL = `${process.env.NODE_ENV === 'development' ? process.env.CUHACKING_2025_AXIOM_LOCAL_URL : process.env.CUHACKING_2025_AXIOM_PUBLIC_URL}`
    const res = await fetch(`${API_URL}/api/users/me`, {
      headers: { Cookie: cookie || '' },
    })

    if (!res.ok) {
      throw new Error('Not Authenticated')
    }

    const { user } = await res.json()

    if (!user.agreedToTerms) {
      return redirect('/terms')
    }
    if (!user.emergencyContactFullName) {
      return redirect('/profile')
    }

    return redirect('/dashboard')
  }
  catch (error) {
    return redirect('/login')
  }
}

export default function Index() {
  return <p>Redirecting...</p>
}
