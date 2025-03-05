/* eslint-disable node/prefer-global/process */
import type { LoaderFunction } from '@remix-run/node'
import { Login as LoginPage } from '@cuhacking/portal/pages/login'
import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')

  try {
    const res = await fetch(`${process.env.NODE_ENV === 'development' ? process.env.CUHACKING_2025_PORTAL_LOCAL_URL : process.env.CUHACKING_2025_PORTAL_PUBLIC_URL}/api/users/me`, {
      headers: { Cookie: cookie || '' },
    })

    if (!res.ok) {
      return null
    }

    const data = await res.json()

    if (data?.user) {
      return redirect('/dashboard')
    }
  }
  catch (error) {
    console.error('Error fetching user:', error)
  }
  return null
}

export default function Login() {
  return <LoginPage />
}
