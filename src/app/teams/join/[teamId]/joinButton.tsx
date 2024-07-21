'use client';

import {joinTeamAction} from "~/app/teams/join/[teamId]/actions";

const JoinButton = ({
  teamId,
  userId,
}: {
  teamId: string,
  userId: string,
}) => {
  return (
    <button onClick={() => joinTeamAction(teamId, userId)}>
      Join Team
    </button>
  );
};

export default JoinButton;
