/* eslint-disable unused-imports/no-unused-vars */
import type { LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')
  const baseUrl
  = process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://axiom.cuhacking.ca'

  try {
    const API_URL = baseUrl
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

    const forms = await fetch(`${API_URL}/api/form-submissions?where[submittedBy][equals]=${user.id}`, {
      method: 'GET',
      headers: { Cookie: cookie || '' },
    })

    const userForms = await forms.json()
    if (!userForms.docs.length) {
      return redirect('/registration')
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
