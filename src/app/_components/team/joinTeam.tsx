'use client'

import { joinTeamAction } from '~/app/teams/join/[teamId]/actions'

export default function JoinTeam({
  teamId,
  userId,
}: {
  teamId: string
  userId: string
}) {
  return (
    <button type="button" onClick={() => joinTeamAction(teamId, userId)}>
      Join Team
    </button>
  )
};
