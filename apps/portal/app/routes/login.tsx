/* eslint-disable unused-imports/no-unused-vars */
import type { LoaderFunction } from '@remix-run/node'
import { Login as LoginPage } from '@cuhacking/portal/pages/login'
import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')

  try {
    const res = await fetch('http://localhost:8000/api/users/me', {
      headers: { Cookie: cookie || '' },
    })

    if (res.ok) {
      return redirect('/dashboard')
    }
  }
  catch (error) {
    // If error, show login page
  }

  return null
}

export default function Login() {
  return <LoginPage />
}
