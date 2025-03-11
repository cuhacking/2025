/* eslint-disable node/prefer-global/process */
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
// Import session utilities

export const loader: LoaderFunction = async () => {
  const baseUrl
    = process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000'
      : 'https://axiom.cuhacking.ca'

  try {
    return redirect(`${baseUrl}/api/users/oauth/linkedin`)
    // WIP SHOULD BE DOING THE BELOW
    // cannot make a get request if you are doing a redirect
    /* const response = redirect(`${baseUrl}/api/users/oauth/linkedin`)
* response.headers.set('X-Client-Origin', 'portal')
* return response */

    /* /*
*     if (!authResponse.ok) {
*       console.error('OAuth login failed:', authResponse.status, authResponse.statusText)
*       return redirect('/login')
*     }
*
*     const userResponse = await fetch(`${baseUrl}/api/users/me`, {
*       method: 'GET',
*       headers: {
*         'Content-Type': 'application/json',
*       },
*       credentials: 'include',
*     })
*
*     if (!userResponse.ok) {
*       console.error('Failed to fetch user data:', userResponse.status, userResponse.statusText)
*       return redirect('/login')
*     }
*
*     const userData = await userResponse.json()
*     console.log(userData)
*     const userId = userData?.id
*
*     if (!userId) {
*       console.error('No userId returned from API')
*       return redirect('/login')
*     }
*
*     const session = await getSession(request.headers.get('Cookie'))
*     session.set('userId', userId)
*
*     return redirect('/dashboard', {
*       headers: {
*         'Set-Cookie': await commitSession(session),
*       },
*     }) */
  }
  catch (error) {
    console.error('Error during OAuth login:', error)
    return redirect('/login')
  }
}

export default function AuthRedirect() {
  return null
}
