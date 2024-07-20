'use client';

const JoinButton = ({
  teamId,
  userId,
  joinTeamAction
}: {
  teamId: string,
  userId: string,
  joinTeamAction: (teamId: string, userId: string) => void,
}) => {
  return (
    <button onClick={() => joinTeamAction(teamId, userId)}>
      Join Team
    </button>
  );
};

export default JoinButton;
