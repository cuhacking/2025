import process from 'node:process'
import { createCookieSessionStorage } from '@remix-run/node'

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set')
}

interface SessionData {
  userId: string
}

interface SessionFlashData {
  error: string
}

const { getSession, commitSession, destroySession }
  = createCookieSessionStorage<SessionData, SessionFlashData>(
    {
      cookie: {
        name: '__session',
        secure: true,
        secrets: [sessionSecret],
        sameSite: 'none',
        path: '/',
        httpOnly: true,
      },
    },
  )

export { commitSession, destroySession, getSession }
