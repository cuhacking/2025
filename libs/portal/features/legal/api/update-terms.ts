import process from 'node:process'
import { json, redirect } from '@remix-run/node'

const API_URL = `${process.env.NODE_ENV === 'development' ? process.env.CUHACKING_2025_AXIOM_LOCAL_URL : process.env.CUHACKING_2025_AXIOM_PUBLIC_URL}`
export async function updateTerms(userId: string, cookie: string | null) {
  try {
    const response = await fetch(`${API_URL}/api/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookie || '',
      },
      body: JSON.stringify({ agreedToTerms: true }),
    })

    if (!response.ok) {
      return json(
        { error: 'Failed to update user terms' },
        { status: response.status },
      )
    }

    return redirect('/profile')
  }
  catch (error) {
    // Log the error for debugging purposes
    console.error('Error updating user terms:', error)

    // Return a generic error response
    return json(
      { error: 'An unexpected error occurred' },
      { status: 500 },
    )
  }
}
