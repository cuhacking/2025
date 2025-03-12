/* eslint-disable node/prefer-global/process */
import type { LoaderFunction } from '@remix-run/node'
import { Login as LoginPage } from '@cuhacking/portal/pages/login'
import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')
  const baseUrl
  = process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://axiom.cuhacking.ca'

  try {
    const res = await fetch(`${baseUrl}/api/users/me`, {
      credentials: 'include',
      headers: { Cookie: cookie || '' },
    })

    if (!res.ok) {
      return null
    }

    const data = await res.json()

    if (data.user) {
      return redirect('/')
    }
  }
  catch (error) {
    console.error('Error fetching user:', error)
  }
  return null
}

export const action: LoaderFunction = async () => {
  const baseUrl
    = process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000'
      : 'https://axiom.cuhacking.ca'

  return redirect(`${baseUrl}/api/users/oauth/linkedin`)
}

export default function Login() {
  return <LoginPage />
}
