/* eslint-disable unused-imports/no-unused-vars */
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')

  try {
    const res = await fetch('http://localhost:8000/api/users/me', {
      headers: { Cookie: cookie || '' },
    })

    if (!res.ok) {
      throw new Error('Not Authenticated')
    }

    const user = await res.json()

    if (user) {
      return redirect('/dashboard')
    }
  }
  catch (error) {
    return redirect('/login')
  }

  return null
}

export default function Index() {
  return <p>Redirecting...</p>
}
