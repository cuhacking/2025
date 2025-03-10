import type { LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { RegistrationPage } from '@cuhacking/portal/pages/registration'
import { json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')
  const API_URL = `${process.env.NODE_ENV === 'development' ? process.env.CUHACKING_2025_AXIOM_LOCAL_URL : process.env.CUHACKING_2025_AXIOM_PUBLIC_URL}`
  try {
    const me = await fetch(`${API_URL}/api/users/me`, {
      headers: { Cookie: cookie || '' },
    })

    if (!me.ok) {
      throw new Error('Not Authenticated')
    }

    const { user } = await me.json()

    if (!user) {
      return redirect('/login')
    }

    const forms = await fetch(`${API_URL}/api/form-submissions?where[submittedBy][equals]=${user.id}`, {
      method: 'GET',
      headers: { Cookie: cookie || '' },
    })
    const userForms = await forms.json()
    if (userForms.docs.length) {
      return redirect('/dashboard')
    }
    return json({ user, cookie, API_URL })
  }
  catch {
    return redirect('/login')
  }
}

export default function Registration() {
  const { user } = useLoaderData<LoaderFunction>()

  return <RegistrationPage user={user} />
}
