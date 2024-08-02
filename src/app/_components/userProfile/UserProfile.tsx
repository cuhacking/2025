'use client'

import type { Session } from 'next-auth'

export function UserProfile(session: Session) {
  return (
    <div>
      <h1>Your application is just your profile.</h1>
      <h2>All you have to do is fill it in.</h2>
      {JSON.stringify(session, null, 2)}
    </div>
  )
}
