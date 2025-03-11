/* eslint-disable node/prefer-global/process */
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { commitSession, getSession } from '../sessions' // Import session utilities

export const loader: LoaderFunction = async ({ request }) => {
  const baseUrl
    = process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000'
      : 'https://axiom.cuhacking.ca'

  try {
    const authResponse = await fetch(`${baseUrl}/api/users/oauth/linkedin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    if (!authResponse.ok) {
      console.error('OAuth login failed:', authResponse.status, authResponse.statusText)
      return redirect('/login')
    }

    const userResponse = await fetch(`${baseUrl}/api/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    if (!userResponse.ok) {
      console.error('Failed to fetch user data:', userResponse.status, userResponse.statusText)
      return redirect('/login')
    }

    const userData = await userResponse.json()
    const userId = userData?.id

    if (!userId) {
      console.error('No userId returned from API')
      return redirect('/login')
    }

    const session = await getSession(request.headers.get('Cookie'))
    session.set('userId', userId)

    return redirect('/dashboard', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    })
  }
  catch (error) {
    console.error('Error during OAuth login:', error)
    return redirect('/login')
  }
}

export default function AuthRedirect() {
  return null
}
