'use client'

import { signOut } from 'next-auth/react'

export function SignOut() {
  return (
    <button type="button" onClick={() => signOut()}>Sign Out</button>
  )
}
