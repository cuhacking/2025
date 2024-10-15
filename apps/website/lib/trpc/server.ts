// import { headers } from 'next/headers'

import { createCaller, createTRPCContext } from '@cuhacking/api'

async function createContext() {
  // const heads = new Headers(headers())
  // heads.set('x-trpc-source', 'rsc')

  return createTRPCContext({
    // headers: heads,
    headers: new Headers(),
  })
}

export const api = createCaller(createContext)
