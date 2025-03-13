import type { LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { RegistrationPage } from '@cuhacking/portal/pages/registration'
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
    const me = await fetch(`${API_URL}/api/users/me`, {

      credentials: 'include',
      headers: { Cookie: cookie || '' },
    })

    if (!me.ok) {
      throw new Error('Not Authenticated')
    }

    const { user } = await me.json()

    if (!user) {
      return redirect('/')
    }

    if (!user.agreedToTerms) {
      return redirect('/')
    }

    if (!user.emergencyContactFullName) {
      return redirect('/')
    }

    const forms = await fetch(`${API_URL}/api/form-submissions?where[submittedBy][equals]=${user.id}`, {
      method: 'GET',
      headers: { Cookie: cookie || '' },
    })
    const userForms = await forms.json()
    if (userForms.docs.length) {
      return redirect('/')
    }
    return json({ user, cookie, API_URL })
  }
  catch {
    return redirect('/')
  }
}

export default function Registration() {
  const { user } = useLoaderData<LoaderFunction>()

  return <RegistrationPage user={user} />
}
