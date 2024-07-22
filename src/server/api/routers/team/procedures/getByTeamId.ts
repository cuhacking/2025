import {z} from "zod";
import {protectedProcedure} from "~/server/api/trpc";


export const getByTeamIdProcedure =
  protectedProcedure
    .input(z.object({ teamId: z.string().min(1) }))
    .query(({ ctx, input }) => {
      return ctx.db.team.findFirst({
        where: {
          id: input.teamId
        }
      })
    });