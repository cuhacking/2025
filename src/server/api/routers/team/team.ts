import {
  createTRPCRouter,
} from '~/server/api/trpc'
import {
  getByTeamIdProcedure,
  getByUserIdProcedure,
  joinUserTeamProcedure,
  leaveUserTeamProcedure,
} from '~/server/api/routers/team/procedures'

export const teamRouter = createTRPCRouter({
  /**
   * Retrieves the team with the specified team ID.
   */
  getByTeamId: getByTeamIdProcedure,

  /**
   * Retrieves the team which contains the user by the user ID.
   */
  getByUserId: getByUserIdProcedure,

  /**
   * Handles the process of a user leaving their previous team and joining a new one.
   */
  joinUserTeam: joinUserTeamProcedure,

  /**
   * Handles the process of a user leaving their current team and joining back their default team.
   */
  leaveUserTeam: leaveUserTeamProcedure,
})
