import type { User } from '@cuhacking/portal/types/user'
import { Home } from '@cuhacking/portal/pages/index/index'
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

export default function Dashboard() {
  const user = useLoaderData<User>()
  return (
    <Home user={user} />
  )
}
