/* eslint-disable unused-imports/no-unused-vars */
import type { User } from '@cuhacking/portal/types/user'
import type { LoaderFunction } from '@remix-run/node'
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
    const res = await fetch('http://localhost:8000/api/users/me', {
      headers: { Cookie: cookie || '' },
    })

    if (!res.ok) {
      throw new Error('Not Authenticated')
    }

    const { user } = await res.json()

    if (!user) {
      return redirect('/login') // Redirect to login if user is null
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
