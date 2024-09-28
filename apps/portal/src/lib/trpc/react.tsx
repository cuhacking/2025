'use client'

/* eslint-disable unicorn/prefer-node-protocol */
import process from 'process'

import { useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { loggerLink, unstable_httpBatchStreamLink } from '@trpc/client'
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import superjson from 'superjson'

import type { AppRouter } from '@cuhacking/api'
import { getBaseUrl } from '@cuhacking/utils'

import { api } from './trpc'

const createQueryClient = () => new QueryClient()

let clientQueryClientSingleton: QueryClient | undefined
function getQueryClient() {
  if (typeof window === 'undefined') {
    return createQueryClient()
  }
  return (clientQueryClientSingleton ??= createQueryClient())
}

export type RouterInputs = inferRouterInputs<AppRouter>
export type RouterOutputs = inferRouterOutputs<AppRouter>

/**
 * This component is used to initialize the trpc & react-query pairing on the client side.
 * @param props The props to the component.
 * @param props.children The children to render.
 * @returns react-query and trpc providers wrapper around the children.
 */
export function TRPCReactProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: op =>
            process.env.NODE_ENV === 'development'
            || (op.direction === 'down' && op.result instanceof Error),
        }),
        unstable_httpBatchStreamLink({
          transformer: superjson,
          url: `${getBaseUrl()}/api/trpc`,
          headers: () => {
            const headers = new Headers()
            headers.set('x-trpc-source', 'nextjs-react')
            return headers
          },
        }),
      ],
    }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </api.Provider>
    </QueryClientProvider>
  )
}
