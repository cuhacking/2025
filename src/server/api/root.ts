import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { teamRouter } from "~/server/api/routers/team";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  team: teamRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.team.getByUserId(userId);
 *       ^? Team
 */
export const createCaller = createCallerFactory(appRouter);
