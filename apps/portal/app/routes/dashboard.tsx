import type { UserDetails } from '@cuhacking/portal/types/user'
import type { LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { Home } from '@cuhacking/portal/pages/index/index'
import { json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')

  try {
    const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://axiom.cuhacking.ca'
    const res = await fetch(`${API_URL}/api/users/me`, {
      headers: { Cookie: cookie || '' },
    })

    if (!res.ok) {
      throw new Error('Not Authenticated')
    }

    const { user } = await res.json()

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
    if (!userForms.docs.length) {
      return redirect('/registration')
    }

    return json(user)
  }
  catch {
    return redirect('/')
  }
}

export default function Dashboard() {
  const user = useLoaderData<UserDetails>()

  return <Home user={user} />
}
