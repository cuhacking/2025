import type { NextRequest } from 'next/server'

import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { appRouter, createTRPCContext } from '@cuhacking/api'
import { envWebsiteServer } from '@cuhacking/env'

async function createContext(req: NextRequest) {
  return createTRPCContext({
    headers: req.headers,
  })
}

function handler(req: NextRequest) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createContext(req),
    onError: ({ path, error }) => {
      if (envWebsiteServer.NODE_ENV === 'development') {
        console.error(
          `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
        )
      }
    },
  })
}

export { handler as GET, handler as POST }
