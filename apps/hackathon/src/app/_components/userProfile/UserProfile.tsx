'use client'

import type { Session } from 'next-auth'

interface UserProfileProps {
  session: Session
}

export function UserProfile(props: UserProfileProps) {
  return (
    <div>
      <h1>Your application is just your profile.</h1>
      <h2>All you have to do is fill it in.</h2>
      <pre>
        {JSON.stringify(props.session, null, 2)}
      </pre>
    </div>
  )
}
