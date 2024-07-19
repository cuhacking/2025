import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const teamRouter = createTRPCRouter({
  get: protectedProcedure
    .input(z.object({ id: z.string().min(1)}))
    .query(({ ctx, input }) => {
    return ctx.db.team.findFirst({
      where: {
        ownerId: input.id
      }
    })
  }),
});
