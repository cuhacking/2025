import { userRouter } from './routes/user'
import { createCallerFactory, createRouter } from './trpc'

export * from './lib/api'

export const appRouter = createRouter({
  user: userRouter,
})

export type AppRouter = typeof appRouter

export const createCaller = createCallerFactory(appRouter)

export { createTRPCContext } from './trpc'
