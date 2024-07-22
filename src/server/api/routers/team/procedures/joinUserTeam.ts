import {protectedProcedure} from "~/server/api/trpc";
import {joinUserTeamSchema} from "~/server/api/routers/team/constants";
import {userSwitchTeamTransaction} from "~/server/api/routers/team/utils";


export const joinUserTeamProcedure =
  protectedProcedure
    .input(joinUserTeamSchema)
    .mutation(async ({ ctx, input }) => {
      await userSwitchTeamTransaction(ctx, input)

      return { success: true };
    });




