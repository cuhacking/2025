import { postRouter } from '~/server/api/routers/post'
import { createCallerFactory, createTRPCRouter } from '~/server/api/trpc'
import { userInformationRouter } from '~/server/api/routers/applicationForm/procedures/setUserInformation'
import { subscribeToNewsletterRouter } from '~/server/api/routers/subscribeToNewsLetter/procedures/subscribeToNewsLetter'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  userInformation: userInformationRouter,
  subscribeToNewsletter: subscribeToNewsletterRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter)
