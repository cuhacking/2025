import type { User } from '@cuhacking/portal/types/user'
import { RegistrationPage } from '@cuhacking/portal/pages/registration'
import { useLoaderData } from '@remix-run/react'

export default function Registration() {
  const user = useLoaderData<User>()

  return <RegistrationPage user={user} />
}
