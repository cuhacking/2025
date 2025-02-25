import { userFlowActor } from '@/engine/actors/user'
import { Login as LoginPage } from '@cuhacking/portal/pages/login'
import { redirect } from '@remix-run/node'

export function action() {
  // do LinkedIn auth validation
  // then redirect to dashboard
  // update the user entry with the LinkedIn information

  try {
    /* setIsLoading(true) */
    userFlowActor.send({ type: 'LOGIN_SUCCESS' })

    return redirect('/terms')
  }
  catch (error) {
    console.error('Login failed:', error)
  }
  finally {
    /* setIsLoading(false) */
  }
}

export default function Login() {
  return (
    <LoginPage />
  )
}
