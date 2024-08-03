'use server'

import { redirect } from 'next/navigation'
import { api } from '~/trpc/server'

export async function joinTeamAction(teamId: string, userId: string): Promise<never> {
  await api.team.joinUserTeam({
    userId,
    teamId,
  })

  redirect('/')
}
