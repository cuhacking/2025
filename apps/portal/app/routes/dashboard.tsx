/* eslint-disable unused-imports/no-unused-vars */
import type { User } from '@cuhacking/portal/types/user'
import type { LoaderFunction } from '@remix-run/node'
import process from 'node:process'
import { Home } from '@cuhacking/portal/pages/index/index'
import { json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

/* export const loader: LoaderFunction = async () => {
*   const snapshot = userFlowActor.getSnapshot()
*   if (!snapshot) {
*     return redirect('/login')
*   }
*
*   const currentState = snapshot.value
*   const error = snapshot.context.error
*
*   if (error) {
*     return redirect('/error')
*   }
*
*   switch (currentState) {
*     case 'unauthenticated':
*       return redirect('/login')
*     case 'legal':
*       return redirect('/terms')
*     case 'profile_incomplete':
*       return redirect('/profile')
*     case 'dashboard':
*     case 'registered':
*       return null
*     default:
*       return redirect('/login')
*   }
* } */

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

    if (!user) {
      return redirect('/login')
    }

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
    return json(user)
  }
  catch (error) {
    return redirect('/login') // Redirect if the request fails
  }
}

export default function Dashboard() {
  const user = useLoaderData<User>()

  return <Home user={user} />
}
