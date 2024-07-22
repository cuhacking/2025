import {z} from "zod";
import {protectedProcedure} from "~/server/api/trpc";


export const getByUserIdProcedure =
  protectedProcedure
    .input(z.object({ userId: z.string().min(1) }))
    .query(({ ctx, input }) => {
      return ctx.db.team.findFirst({
        where: {
          usersIds: {
            has: input.userId
          }
        }
      })
    });