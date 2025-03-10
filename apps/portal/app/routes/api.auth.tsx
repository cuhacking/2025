/* eslint-disable node/prefer-global/process */
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = async () => {
  return redirect(`${process.env.NODE_ENV === 'development' ? process.env.CUHACKING_2025_AXIOM_LOCAL_URL : process.env.CUHACKING_2025_AXIOM_PUBLIC_URL}/api/users/oauth/linkedin`)
  // HALP we need to log the user in and then set the session storage to save the userId
  /* return redirect('/login') */
}

export default function AuthRedirect() {
  return null
}
