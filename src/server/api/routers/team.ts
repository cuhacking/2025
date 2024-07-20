import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const teamRouter = createTRPCRouter({


  /**
   * Retrieves the team with the specified team ID.
   */
  getByTeamId: protectedProcedure
  .input(z.object({ teamId: z.string().min(1) }))
  .query(({ ctx, input }) => {
    return ctx.db.team.findFirst({
      where: {
        id: input.teamId
      }
    })
  }),


  /**
   * Retrieves the team which contains the user by the user ID.
   */
  getByUserId: protectedProcedure
    .input(z.object({ userId: z.string().min(1) }))
    .query(({ ctx, input }) => {
    return ctx.db.team.findFirst({
      where: {
        usersIds: {
          has: input.userId
        }
      }
    })
  }),


  /**
   * Handles the process of a user joining a team. This includes:
   * 1. Verifying the existence of the user and their associated information.
   * 2. Checking the existence and availability of the team to join.
   * 3. Ensuring that the user is not already in the team.
   * 4. Updating the user's team association and the team’s user list within a transaction to ensure data integrity.
   */
  joinUserTeam: protectedProcedure
    .input(z.object({
      userId: z.string().min(1),
      teamId: z.string().min(1)
    }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: {
          id: input.userId
        },
        include: {
          userInformation: {
            include: {
              team: {
                select: {
                  usersIds: true
                }
              }
            }
          },
        }
      })

      if (!user) throw new Error(`Could not find user with id ${input.userId}`)
      if (!user.userInformation) throw new Error(`Could not find user's userInformation`)

      const teamToJoin = await ctx.db.team.findFirst({
        where: {
          id: input.teamId
        }
      })

      if (!teamToJoin) throw new Error(`Could not find team with id ${input.teamId}`)
      if (teamToJoin.usersIds.length >= 4) throw new Error(`Team is full`)
      if (teamToJoin.usersIds.includes(user.id)) throw new Error(`User already in the team`)

      // Perform all-or-nothing transaction to leave previous team and join the new team
      await ctx.db.$transaction(async (prisma) => {
        if (
          !user.userInformation ||
          !user.userInformation.team ||
          !user.userInformation.teamId
        ) throw new Error(`Could not find user's userInformation`)

        const updatedTeamUsersIds = user.userInformation.team.usersIds.filter(id => id !== user.id)

        // Leave previous team
        await prisma.team.update({
          where: {
            id: user.userInformation.teamId
          },
          data: {
            usersIds: {
              set: updatedTeamUsersIds
            }
          }
        })

        // Update user's team
        await prisma.user.update({
          where: {
            id: user.id
          },
          data: {
            userInformation: {
              update: {
                teamId: teamToJoin.id
              }
            }
          }
        })

        // Join team
        await prisma.team.update({
          where: {
            id: input.teamId
          },
          data: {
            usersIds: {
              push: user.id
            }
          }
        })
      })

      return { success: true, message: `User ${user.id} joined ${teamToJoin.name} (${teamToJoin.id})` };
    }),


  /**
   * Handles the process of a user leaving their current team and joining back their default team. This includes:
   * 1. Verifying the existence of the user and their associated information.
   * 2. Checking if the user is attempting to leave their own team (default team), which is not allowed.
   * 3. Retrieving the team the user is leaving.
   * 4. Updating the team’s user list and the user's team association within a transaction to ensure data integrity.
   */
  leaveUserTeam: protectedProcedure
    .input(z.object({
      userId: z.string().min(1)
    }))
    .mutation(async ({ ctx, input}) => {
      const user = await ctx.db.user.findFirst({
        where: {
          id: input.userId
        },
        include: {
          userInformation: true
        }
      })

      if (!user) throw new Error(`Could not find user with id ${input.userId}`)
      if (!user.userInformation?.teamId || !user.userInformation?.ownedTeamId) throw new Error(`Could not retrieve user's team`)
      if (user.userInformation.teamId == user.userInformation.ownedTeamId) throw new Error(`Unable to leave own team`)

      const teamToLeave = await ctx.db.team.findFirst({
        where: {
          id: user.userInformation.teamId
        }
      })

      if (!teamToLeave) throw new Error(`Could not retrieve team to leave`)

      await ctx.db.$transaction(async (prisma) => {

        if (!user.userInformation) throw new Error('Could not retrieve user information')

        const updatedUsersIds = teamToLeave.usersIds.filter(id => id !== user.id);

        await prisma.team.update({
          where: {
            id: teamToLeave.id
          },
          data: {
            usersIds: {
              set: updatedUsersIds
            }
          }
        });

        await prisma.user.update({
          where: {
            id: user.id
          },
          data: {
            userInformation: {
              update: {
                teamId: user.userInformation.ownedTeamId
              }
            }
          }
        });
      })

      return { success: true, message: `User ${user.id} left ${teamToLeave.name} (${teamToLeave.id})` };
    })
});
