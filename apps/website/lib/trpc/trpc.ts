import type { AppRouter } from '@cuhacking/api'

import { createTRPCReact } from '@trpc/react-query'

export const api = createTRPCReact<AppRouter>()
