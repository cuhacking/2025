import { TRPCError } from '@trpc/server'
import type { Context } from '~/server/api/trpc'
import type { JoinUserTeamInput, LeaveUserTeamInput } from '~/server/api/routers/team/types'

export async function userSwitchTeamTransaction(
  ctx: Context,
  input: JoinUserTeamInput | LeaveUserTeamInput,
) {
  const userInformation = await ctx.db.userInformation.findFirst({
    where: {
      userId: input.userId,
    },
  })

  if (!userInformation) {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: `Could not find user with id ${input.userId}`,
    })
  }

  const currentTeamId = userInformation.teamId

  await ctx.db.$transaction(async (prisma) => {
    // Find the team to leave
    const teamToLeave = await ctx.db.team.findFirst({
      where: {
        id: currentTeamId,
      },
    })

    if (!teamToLeave) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `Could not retrieve team to leave`,
      })
    }

    const teamToJoinId = 'teamId' in input ? input.teamId : userInformation.ownedTeamId

    // Find the team to join
    const teamToJoin = await ctx.db.team.findFirst({
      where: {
        id: teamToJoinId,
      },
    })

    if (!teamToJoin) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `Could not find team`,
      })
    }

    if (teamToJoin.usersIds.length >= 4) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: `Team is full`,
      })
    }

    if (teamToJoin.usersIds.includes(userInformation.userId)) {
      throw new TRPCError({
        code: 'CONFLICT',
        message: `User already in the team`,
      })
    }

    // Remove user from array of new the team's users
    const updatedUsersIds = teamToLeave.usersIds.filter(id => id !== userInformation.userId)

    // Leave current team
    await prisma.team.update({
      where: {
        id: currentTeamId,
      },
      data: {
        usersIds: {
          set: updatedUsersIds,
        },
      },
    })

    // Update user's team to the new team
    await prisma.userInformation.update({
      where: {
        userId: userInformation.userId,
      },
      data: {
        teamId: teamToJoin.id ?? userInformation.ownedTeamId,
      },
    })

    // Add user to the new team
    await prisma.team.update({
      where: {
        id: teamToJoin.id ?? userInformation.ownedTeamId,
      },
      data: {
        usersIds: {
          push: userInformation.userId,
        },
      },
    })
  })
}
