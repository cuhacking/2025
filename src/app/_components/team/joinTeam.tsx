'use client'

import { joinTeamAction } from '~/app/teams/join/[TEAM_ID]/actions'

export default function JoinTeam({
  TEAM_ID,
  USER_ID,
}: {
  TEAM_ID: string
  USER_ID: string
}) {
  return (
    <button type="button" onClick={() => joinTeamAction(TEAM_ID, USER_ID)}>
      Join Team
    </button>
  )
};
