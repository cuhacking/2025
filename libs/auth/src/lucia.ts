import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle'
import { Lucia } from 'lucia'

import { db, session, user } from '@cuhacking/db'
import { envWebsiteServer } from '@cuhacking/env'

const adapter = new DrizzlePostgreSQLAdapter(db, session, user)

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: envWebsiteServer.NODE_ENV === 'production',
    },
  },
  getUserAttributes: (attributes: any) => {
    return {
      name: attributes.name,
      email: attributes.email,
      avatarUrl: attributes.avatarUrl,
    }
  },
})

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia
    DatabaseUserAttributes: {
      name?: string
      email: string
      avatarUrl?: string
    }
  }
}
