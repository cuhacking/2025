/* eslint-disable node/prefer-global/process */
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')
  const adminURL
    = process.env.NODE_ENV === 'development'
      ? `http://localhost:8000/api/users/logout`
      : `https://axiom.cuhacking.ca/api/users/logout`

  try {
    const res = await fetch(adminURL, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookie || '',
      },
    })

    if (!res.ok) {
      console.error('ERROR - Could not log user out')
      throw new Error('Failed to log out user')
    }
  }
  catch (error) {
    console.error('ERROR - An error occurred during logout', error)
  }

  const domain = process.env.NODE_ENV === 'development' ? 'localhost' : '.cuhacking.ca'
  const response = redirect('/login', {
    headers: {
      'Set-Cookie':
      `payload-token=; path=/; domain=${domain}`,
    },
  })
  return response
}
