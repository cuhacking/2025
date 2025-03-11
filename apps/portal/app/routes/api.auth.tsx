/* eslint-disable node/prefer-global/process */
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = async () => {
  const baseUrl
  = process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'http://axiom.cuhacking.ca'

  return redirect(`${baseUrl}/api/users/oauth/linkedin`)
  // HALP we need to log the user in and then set the session storage to save the userId
  /* return redirect('/login') */
}

export default function AuthRedirect() {
  return null
}
