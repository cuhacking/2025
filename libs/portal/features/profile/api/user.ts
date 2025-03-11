import type { UserDetails } from '@cuhacking/portal/types/user'

export async function getCurrentUser({ cookie, API_URL }: { cookie: string | null, API_URL: string }): Promise<UserDetails | null> {
  try {
    const response = await fetch(`${API_URL}/api/users/me`, {
      credentials: 'include',
      headers: { Cookie: cookie || '' },
    })

    if (!response.ok) {
      return null
    }

    const user = await response.json()
    return user.user
  }
  catch (error) {
    console.error('Error fetching user:', error)
    return null
  }
}
export async function postUser(_user: Partial<UserDetails>): Promise<Response> {
  // some API call here
  // check the status
  // throw error if invalid status
  return new Response('Created User', { status: 200 })
}

export async function patchUser(user: Partial<UserDetails>, cookie: string | null, API_URL: string, userId: string): Promise<Record<string, string | number>> {
  try {
    const response = await fetch(`${API_URL}/api/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookie || '',
      },
      credentials: 'include',
      body: JSON.stringify(user),
    })

    if (!response.ok) {
      return {
        error: 'Failed to update user terms',
        status: response.status,
      }
    }
    return {
      message: 'Successfully updated user',
      status: 200,
    }
  }
  catch (error) {
    // Log the error for debugging purposes
    console.error('Error updating user terms:', error)

    // Return a generic error response
    return {
      error: 'An unexpected error occurred',
      status: 500,
    }
  }
}
