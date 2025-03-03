import type { User, UserDetails } from '@cuhacking/portal/types/user'
import type { LoaderFunction } from '@remix-run/node'
import type * as z from 'zod'
import { getCurrentUser, patchUser, postUser } from '@cuhacking/portal/features/profile/api/user'
import { ProfilePage } from '@cuhacking/portal/pages/profile'
import { UserProfileStatus } from '@cuhacking/portal/types/user'
import { json, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { toast } from 'sonner'

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie')

  /* const data = getCurrentUser() */

  try {
    const res = await fetch('http://localhost:8000/api/users/me', {
      headers: { Cookie: cookie || '' },
    })

    if (!res.ok) {
      throw new Error('Not Authenticated')
    }

    const { user } = await res.json()

    if (!user) {
      return redirect('/login')
    }

    return json(user)
  }
  catch (error) {
    return redirect('/login')
  }

  /* return json(data) */
}

function handleSubmit(values: z.infer<any>, status: string) {
  const isUpdating = status === UserProfileStatus.complete
  const action = isUpdating ? 'update' : 'create'
  try {
    let response
    if (isUpdating) {
      response = patchUser(values as UserDetails)
    }
    else {
      response = postUser(values as UserDetails)
    }

    toast(`Successfully ${action} account!`)
    return response
  }
  catch (error) {
    console.error(
      'Profile submission error - libs/portal/features/profile/ui/questions.tsx',
      error,
    )
    toast.error(`Failed to ${action} profile. Please try again.`)
    // example until we hook up BE
    return new Response(`Failed to ${action} profile`, { status: 400 })
  }
}
export default function Index() {
  const user = useLoaderData<User>()

  return <ProfilePage onSubmit={handleSubmit} user={user} />
}
