import type * as z from 'zod'

export async function postForm(values: z.infer<any>, cookie: string | null, API_URL: string, userId: string): Promise<Record<string, string | number>> {
  try {
    const response = await fetch(`${API_URL}/api/form-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookie || '',
      },
      credentials: 'include',
      body: JSON.stringify({
        form: 1,
        submissionData: values,
        submittedBy: userId,
      }),
    })

    if (!response.ok) {
      return {
        error: 'Failed to regsiter user for hackathon',
        status: response.status,
      }
    }
    return {
      message: 'Successfully registered the user',
      status: 400,
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

export async function getFormSubmission(_userID: string, _formID: string) {
  return new Response('Obtained form data', { status: 200 })
}
