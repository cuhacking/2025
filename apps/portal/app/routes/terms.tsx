/* import type { LoaderFunction } from '@remix-run/node' */
import { userFlowActor } from '@/engine/actors/user'
import { Button } from '@cuhacking/shared/ui/button'
import { Typography } from '@cuhacking/shared/ui/typography'
/* import { redirect } from '@remix-run/node' */
import { useNavigate } from '@remix-run/react'

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

export default function Terms() {
  const navigate = useNavigate()

  const handleClick = async () => {
    await new Promise<void>((resolve) => {
      const subscription = userFlowActor.subscribe((state) => {
        if (state.matches('profile_incomplete')) {
          subscription.unsubscribe()
          resolve()
        }
      })
      userFlowActor.send({ type: 'AGREE_TO_TERMS' })
    })
    navigate('/profile')
  }
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Button
        variant="primary"
        className="flex items-center gap-x-3 px-4 md:px-6 lg:px-8 py-4"
        aria-label="Agree to Terms"
        onClick={handleClick}
      >
        <Typography variant="h6">Agree to Terms</Typography>
      </Button>
    </div>
  )
}
