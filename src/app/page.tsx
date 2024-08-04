import Link from 'next/link'

import { HydrateClient } from '~/trpc/server'
import UserProfile from '~/app/_components/userProfile/UserProfile'
import { getServerAuthSession } from '~/server/auth'

export default async function Home() {
  const session = await getServerAuthSession()

  if (!session) {
    return (
      <div>
        <p>
          <Link href="/api/auth/signin">Sign in</Link>
        </p>
      </div>
    )
  }

  return (
    <HydrateClient>
      <div>
        <p>
          Welcome back,
          {' '}
          <code>{session.user.email}</code>
          !
        </p>
        <UserProfile />
      </div>
    </HydrateClient>
  )
}
