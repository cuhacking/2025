import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const teamRouter = createTRPCRouter({
  get: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(({ ctx, input }) => {
    return ctx.db.team.findFirst({
      where: {
        ownerId: input.id
      }
    })
  }),

  /**
   * Handles a user joining a team.
   *
   * This mutation performs the following actions:
   * 1. Takes `userId` and `teamId` as input to identify the user and the team to join.
   * 2. Retrieves the user along with their related user information.
   * 3. Checks if the user exists.
   * 4. Retrieves the team the user wants to join.
   * 5. Checks if the team exists and if it is not full (maximum 4 users).
   * 6. Updates the user's `teamId` in their user information.
   * 7. Adds the user ID to the team's `usersIds` array.
   * 8. Performs all database updates within a transaction to ensure data integrity.
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
          userInformation: true
        }
      })

      if (!user) throw new Error(`Could not find user with id ${input.userId}`)

      const teamToJoin = await ctx.db.team.findFirst({
        where: {
          id: input.teamId
        }
      })

      if (!teamToJoin) throw new Error(`Could not find team with id ${input.teamId}`)
      if (teamToJoin.usersIds.length >= 4) throw new Error(`Team is full`)

      // Perform all-or-nothing transaction
      await ctx.db.$transaction(async (prisma) => {

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
   * Handles a user leaving a team.
   *
   * This mutation performs the following actions:
   * 1. Takes `userId` as input to identify the user.
   * 2. Retrieves the user along with their related user information.
   * 3. Checks if the user and their user information, including the team ID, exist.
   * 4. Throws an error if the user is trying to leave the team they are the owner of.
   * 5. Retrieves the team the user is part of.
   * 6. Removes the user ID from the team's `usersIds` array.
   * 7. Updates the user's `teamId` in their user information.
   * 8. Performs all database updates within a transaction to ensure data integrity.
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
