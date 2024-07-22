import {protectedProcedure} from "~/server/api/trpc";
import {userSwitchTeamTransaction} from "~/server/api/routers/team/utils";
import {leaveUserTeamSchema} from "~/server/api/routers/team/constants";


export const leaveUserTeamProcedure =
  protectedProcedure
    .input(leaveUserTeamSchema)
    .mutation(async ({ ctx, input}) => {
      await userSwitchTeamTransaction(ctx, input)

      return { success: true };
    })