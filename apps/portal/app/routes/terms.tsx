import type { LoaderData } from '@cuhacking/portal/types/legal'
import type { LoaderFunction } from '@remix-run/node'
import { userFlowActor } from '@/engine/actors/user'
import { getLegalData } from '@cuhacking/portal/features/legal/api/data'
import { getCurrentUser } from '@cuhacking/portal/features/profile/api/user'
import { LegalPage } from '@cuhacking/portal/pages/legal'
import { json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

/* export const loader: LoaderFunction = async () => {
*   const currentState = userFlowActor.getSnapshot()?.value
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

export function action() {
  try {
    /* setIsLoading(true) */
    userFlowActor.send({ type: 'TERM_SUCCESS' })

    return redirect('/profile')
  }
  catch (error) {
    console.error('Login failed:', error)
  }
  finally {
    /* setIsLoading(false) */
  }
}

export const loader: LoaderFunction = async () => {
  const { legalData } = getLegalData()
  const user = getCurrentUser()
  return json<LoaderData>({ legalData, user })
}

export default function Index() {
  const { legalData, user } = useLoaderData<LoaderData>()

  return <LegalPage legalData={legalData} user={user} />
}
