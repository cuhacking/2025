import dashboard_background from '@cuhacking/portal/assets/backgrounds/dashboard-bg-1.webp'
import { Home } from '@cuhacking/portal/pages/index/index'

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
  return (
    <div className="w-full">
      <Home />
      <img
        src={dashboard_background}
        alt="Background"
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
    </div>
  )
}
