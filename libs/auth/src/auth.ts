// TODO: Implement cache & cookies back, attempt without using next - website should build successfully

// import { cache } from 'react'
// import { cookies } from 'next/headers'

import type { Session, User } from 'lucia'

import { lucia } from './lucia'

export async function uncachedAuth(): Promise<
  { user: User, session: Session } | { user: null, session: null }
> {
  // const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
  const sessionId = null
  if (!sessionId) {
    return { user: null, session: null }
  }
  const result = await lucia.validateSession(sessionId)
  try {
    if (result.session?.fresh) {
      // const sessionCookie = lucia.createSessionCookie(result.session.id)
      // cookies().set(
      //   sessionCookie.name,
      //   sessionCookie.value,
      //   sessionCookie.attributes,
      // )
    }
    if (!result.session) {
      // const sessionCookie = lucia.createBlankSessionCookie()
      // cookies().set(
      //   sessionCookie.name,
      //   sessionCookie.value,
      //   sessionCookie.attributes,
      // )
    }
  }
  catch {
    console.error('Failed to set session cookie')
  }
  return result
}

// export const auth = cache(uncachedAuth)
export const auth = uncachedAuth
