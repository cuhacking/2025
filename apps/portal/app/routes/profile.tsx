import type { User } from '@cuhacking/portal/types/user'
import type { LoaderFunction } from '@remix-run/node'
import { getCurrentUser } from '@cuhacking/portal/features/profile/api/user'
import { ProfilePage } from '@cuhacking/portal/pages/profile'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async () => {
  const data = getCurrentUser ()
  return json(data)
}

export default function Index() {
  const user = useLoaderData<User>()

  return <ProfilePage user={user} />
}
